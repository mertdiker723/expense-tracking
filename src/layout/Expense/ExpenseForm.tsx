import { useState, useContext } from "react";
import { ProvideContext } from "../../store/Store";

// Material UI
import { Grid, TextField, InputAdornment, Button } from "@mui/material"

// Icons
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import { toast } from 'react-toastify';
// Folders
import { IExpense, ITextField } from "../../models/expense.types";

const ExpenseForm = () => {
    const [coin, setCoin] = useState<IExpense>({} as IExpense);

    const { createExpense } = useContext(ProvideContext);

    const coinHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCoin({
            ...coin,
            [name]: value
        })
    }

    const sendItems = () => {
        createExpense(coin);
        toast("Wow so easy!");
    }

    const totalCoinCalculation = (): number | "" => {
        return (coin.buyCoinValue && coin.coinCount) ? coin.buyCoinValue * coin.coinCount : ""
    }

    const profitLossCalculation = (): number | "" => {
        return (coin.coinCount && coin.sellCoinValue && coin.buyCoinValue) ? (coin.coinCount * coin.sellCoinValue) - (coin.buyCoinValue * coin.coinCount) : "";
    }

    const totalBalance = (): number | "" => {
        return (coin.sellCoinValue && coin.coinCount) ? coin.sellCoinValue * coin.coinCount : ""
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
        },
        {
            id: 3,
            name: "totalCoin",
            label: "Total Cost",
            value: totalCoinCalculation(),
            fullWidth: true,
            type: "text",
            variant: "outlined",
            icon: <MonetizationOnOutlinedIcon />,
            disabled: true,
        }
    ];

    const textFieldsBottom: ITextField[] = [
        {
            id: 0,
            name: "sellCoinValue",
            label: "Sell Coin Value",
            value: coin.sellCoinValue ?? "",
            fullWidth: true,
            type: "number",
            variant: "outlined",
            icon: "$",
            onChange: coinHandleChange,
            disabled: false
        },
        {
            id: 1,
            name: "profitLoss",
            label: "Profit / Loss",
            value: profitLossCalculation(),
            fullWidth: true,
            type: "number",
            variant: "outlined",
            icon: "$",
            disabled: true
        },
        {
            id: 2,
            name: "availableBalance",
            label: "Total Balance",
            value: totalBalance(),
            fullWidth: true,
            type: "text",
            variant: "outlined",
            icon: <MonetizationOnOutlinedIcon />,
            disabled: true
        },
    ];

    return (
        <Grid container >
            <Grid container spacing={3}>
                {
                    textFieldsTop.map(textField => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={textField.id}>
                                <TextField
                                    id={textField.name}
                                    name={textField.name}
                                    label={textField.label}
                                    value={textField.value}
                                    fullWidth={textField.fullWidth}
                                    type={textField.type}
                                    variant={textField.variant}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">{textField.icon}</InputAdornment>,
                                    }}
                                    onChange={textField.onChange}
                                    disabled={textField.disabled}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid container mt={1} spacing={3}>
                {
                    textFieldsBottom.map(textField => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={textField.id}>
                                <TextField
                                    id={textField.name}
                                    name={textField.name}
                                    label={textField.label}
                                    fullWidth={textField.fullWidth}
                                    type={textField.type}
                                    value={textField.value}
                                    variant={textField.variant}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">{textField.icon}</InputAdornment>,
                                    }}
                                    onChange={textField.onChange}
                                    disabled={textField.disabled}
                                />
                            </Grid>
                        )
                    })
                }
                <Grid item xs={12}>
                    <Button onClick={sendItems} variant="contained">Send</Button>
                </Grid>
            </Grid>


        </Grid>
    )
}

export default ExpenseForm