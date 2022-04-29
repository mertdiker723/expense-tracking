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
import { IExpense } from "../../models/expense.types";

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

    return (
        <Grid container >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        id="coinName"
                        name="coinName"
                        label="Coin Name"
                        value={coin.coinName ?? ""}
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><CurrencyBitcoinIcon /></InputAdornment>,
                        }}
                        onChange={coinHandleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}  md={3}>
                    <TextField
                        id="coinCount"
                        name="coinCount"
                        fullWidth
                        label="Piece Of Coin"
                        value={coin.coinCount ?? ""}
                        type={"number"}
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><ProductionQuantityLimitsIcon /></InputAdornment>,
                        }}
                        onChange={coinHandleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}  md={3}>
                    <TextField
                        id="buyCoinValue"
                        name="buyCoinValue"
                        fullWidth
                        label="Buy Coin Value"
                        value={coin.buyCoinValue ?? ""}
                        type={"number"}
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">$</InputAdornment>,
                        }}
                        onChange={coinHandleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}  md={3}>
                    <TextField
                        id="totalCoin"
                        fullWidth
                        label="Total Cost"
                        value={totalCoinCalculation()}
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><MonetizationOnOutlinedIcon /></InputAdornment>,
                        }}
                        disabled
                    />
                </Grid>
            </Grid>
            <Grid container mt={1} spacing={3}>
                <Grid item xs={12} sm={6}  md={4}>
                    <TextField
                        id="sellCoinValue"
                        name="sellCoinValue"
                        fullWidth
                        type="number"
                        label="Sell Coin Value"
                        value={coin.sellCoinValue ?? ""}
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">$</InputAdornment>,
                        }}
                        onChange={coinHandleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}  md={4}>
                    <TextField
                        id="profitLoss"
                        fullWidth
                        label="Profit / Loss"
                        value={profitLossCalculation()}
                        error={profitLossCalculation() < 0}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">$</InputAdornment>,
                        }}
                        disabled
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}  md={4}>
                    <TextField
                        id="availableBalance"
                        fullWidth
                        label="Total Balance"
                        value={totalBalance()}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><MonetizationOnOutlinedIcon /></InputAdornment>,
                        }}
                        disabled
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={sendItems} variant="contained">Send</Button>
                </Grid>
            </Grid>


        </Grid>
    )
}

export default ExpenseForm