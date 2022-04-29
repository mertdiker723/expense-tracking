import { TableBody } from '@mui/material';
import { StyledTableCell, StyledTableRow } from "../../../styledComponents/Expense/ExpenseStyled";
import { IExpense } from '../../../models/expense.types';

type TableBodyProps = {
    data: IExpense[]
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

const TableBodyContainer = ({ data }: TableBodyProps) => {


    return (
        <TableBody>

            {data.length > 0 ? data.map((exp) => (
                <TableCells exp={exp} />
            )) : <TableCells noData={"No data Provided"} />
            }
        </TableBody >
    )
}

type TableCellRow = {
    exp?: IExpense;
    noData?: string;
}

const TableCells = (props: TableCellRow) => {
    const profitLossCalculation = (data: IExpense): number | "" => {
        return (data.coinCount && data.sellCoinValue && data.buyCoinValue) ? (data.coinCount * data.sellCoinValue) - (data.buyCoinValue * data.coinCount) : "";
    }

    const noData = "No Data Provided";
    return (
        <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <StyledTableCell align="center">{props.exp ? props.exp?.coinName : noData}</StyledTableCell>
            <StyledTableCell align="center">{props.exp ? props.exp?.coinCount : noData}</StyledTableCell>
            <StyledTableCell align="center">{props.exp ? props.exp?.buyCoinValue : noData}</StyledTableCell>
            <StyledTableCell align="center">{props.exp ? props.exp?.sellCoinValue : noData}</StyledTableCell>
            {props.exp && <StyledTableCell sx={{ bgcolor: profitLossCalculation(props.exp) > 0 ? "green" : "red", color: "white" }} align="center">{profitLossCalculation(props.exp)}</StyledTableCell>} 
        </StyledTableRow>
    )
}

export default TableBodyContainer