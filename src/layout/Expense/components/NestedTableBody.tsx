import { TableBody, TableCell, TableRow } from '@mui/material';
import { IExpense } from '../../../models/expense.types';


type NestedTableBodyProps = {
    exp: IExpense | undefined;
}
const NestedTableBody = ({ exp }: NestedTableBodyProps) => {
    const profitLossCalculation = (data: IExpense): number | "" => {
        return (data.coinCount && data.sellCoinValue && data.buyCoinValue) ? (data.coinCount * data.sellCoinValue) - (data.buyCoinValue * data.coinCount) : "";
    }
    const totalBalance = (data: IExpense): number | "" => {
        return (data.sellCoinValue && data.coinCount) ? data.sellCoinValue * data.coinCount : ""
    }
    const totalCoinCalculation = (data: IExpense): number | "" => {
        return (data.buyCoinValue && data.coinCount) ? data.buyCoinValue * data.coinCount : ""
    }
    return (
        <TableBody>
            <TableRow>
                <TableCell align="left" >{exp ? totalCoinCalculation(exp) : "---"}</TableCell>
                <TableCell align="left">{exp ? profitLossCalculation(exp) : "---"}</TableCell>
                <TableCell align="left">{exp ? totalBalance(exp) : "---"}</TableCell>
            </TableRow>
        </TableBody>
    )
}

export default NestedTableBody