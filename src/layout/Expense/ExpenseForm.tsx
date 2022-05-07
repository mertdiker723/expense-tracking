import { useState, useContext } from "react";
import { ProvideContext } from "../../store/Store";

// Material UI
import { Grid, TextField, InputAdornment, Button } from "@mui/material"

// Icons
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

// Toastfy
import { toast } from 'react-toastify';
// Folders
import { IExpense, ITextField } from "../../models/expense.types";
import { informationToastify } from "../../components/Toastfy/ToastifyInformations";
const ExpenseForm = () => {
    const [coin, setCoin] = useState<IExpense>({} as IExpense);
    const { sendExpense } = useContext(ProvideContext);

    const coinHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCoin({
            ...coin,
            [name]: value
        })
    }

    const sendItems = () => {
        const { sellCoinValue, coinName, coinCount, buyCoinValue } = coin;
        if (sellCoinValue && coinName && coinCount && buyCoinValue) {
            sendExpense({
                ...coin,
                totalCost: (coin.buyCoinValue && coin.coinCount) ? +(coin.buyCoinValue * coin.coinCount).toFixed(2) : "",
                profitLoss: (coin.coinCount && coin.sellCoinValue && coin.buyCoinValue) ? +((coin.coinCount * coin.sellCoinValue) - (coin.buyCoinValue * coin.coinCount)).toFixed(2) : "",
                totalBalance: (coin.sellCoinValue && coin.coinCount) ? +(coin.sellCoinValue * coin.coinCount).toFixed(2) : ""
            });
            setCoin({} as IExpense);
            toast.success("Added!", informationToastify);
        }
        else {
            toast.warn('Fields cannot be empty!', informationToastify);
        }
    }
    const textFieldsTop: ITextField[] = [
        {
            id: 0,
            name: "coinName",
            label: "Coin Name",
            value: coin.coinName ?? "",
            fullWidth: true,
            type: "text",
            variant: "outlined",
            icon: <CurrencyBitcoinIcon />,
            onChange: coinHandleChange,
            disabled: false,
            xsGrid: 12,
            smGrid: 6,
            mdGrid: 3
        },
        {
            id: 1,
            name: "coinCount",
            label: "Piece Of Coin",
            value: coin.coinCount ?? "",
            fullWidth: true,
            type: "number",
            variant: "outlined",
            icon: <ProductionQuantityLimitsIcon />,
            onChange: coinHandleChange,
            disabled: false,
            xsGrid: 12,
            smGrid: 6,
            mdGrid: 3
        },
        {
            id: 2,
            name: "buyCoinValue",
            label: "Buy Coin Value",
            value: coin.buyCoinValue ?? "",
            fullWidth: true,
            type: "number",
            variant: "outlined",
            icon: "$",
            onChange: coinHandleChange,
            disabled: false,
            xsGrid: 12,
            smGrid: 6,
            mdGrid: 3
        },
        {
            id: 3,
            name: "totalCoin",
            label: "Total Cost",
            value: (coin.buyCoinValue && coin.coinCount) ? +(coin.buyCoinValue * coin.coinCount).toFixed(2) : "",
            fullWidth: true,
            type: "text",
            variant: "outlined",
            icon: <MonetizationOnOutlinedIcon />,
            disabled: true,
            xsGrid: 12,
            smGrid: 6,
            mdGrid: 3
        },
        {
            id: 4,
            name: "sellCoinValue",
            label: "Sell Coin Value",
            value: coin.sellCoinValue ?? "",
            fullWidth: true,
            type: "number",
            variant: "outlined",
            icon: "$",
            onChange: coinHandleChange,
            disabled: false,
            xsGrid: 12,
            smGrid: 6,
            mdGrid: 4
        },
        {
            id: 5,
            name: "profitLoss",
            label: "Profit / Loss",
            value: (coin.coinCount && coin.sellCoinValue && coin.buyCoinValue) ? +((coin.coinCount * coin.sellCoinValue) - (coin.buyCoinValue * coin.coinCount)).toFixed(2) : "",
            fullWidth: true,
            type: "number",
            variant: "outlined",
            icon: "$",
            disabled: true,
            xsGrid: 12,
            smGrid: 6,
            mdGrid: 4
        },
        {
            id: 6,
            name: "availableBalance",
            label: "Total Balance",
            value: (coin.sellCoinValue && coin.coinCount) ? +(coin.sellCoinValue * coin.coinCount).toFixed(2) : "",
            fullWidth: true,
            type: "text",
            variant: "outlined",
            icon: <MonetizationOnOutlinedIcon />,
            disabled: true,
            xsGrid: 12,
            smGrid: 6,
            mdGrid: 4
        },
    ];

    return (
        <Grid container >
            <Grid container spacing={3}>
                {
                    textFieldsTop.map(textField => {
                        const { name, label, value, fullWidth, type, variant, icon, onChange, disabled, xsGrid, smGrid, mdGrid, id } = textField;
                        return (
                            <Grid item xs={xsGrid} sm={smGrid} md={mdGrid} key={id}>
                                <TextField
                                    id={name}
                                    name={name}
                                    label={label}
                                    value={value}
                                    fullWidth={fullWidth}
                                    type={type}
                                    variant={variant}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
                                    }}
                                    onChange={onChange}
                                    disabled={disabled}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid container spacing={3} mt={0}>
                <Grid item xs={12} sm={6} md={2}>
                    <Button
                        fullWidth
                        onClick={sendItems}
                        color={"primary"}
                        variant="contained">
                        {"Send"}
                    </Button>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default ExpenseForm