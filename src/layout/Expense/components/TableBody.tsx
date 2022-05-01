import { TableBody, IconButton, TableCell, Typography, Collapse, Box, Table, TableRow } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import NestedTableHeader from './NestedTableHeader';
import NestedTableBody from './NestedTableBody';
import { StyledTableCell, StyledTableRow } from "../../../styledComponents/Expense/ExpenseStyled";
import { IExpense } from '../../../models/expense.types';
import { useState } from 'react';

type TableBodyProps = {
    data: IExpense[]
}

const TableBodyContainer = ({ data }: TableBodyProps) => {
    return (
        <TableBody>

            {data.length > 0 ? data.map((exp) => (
                <TableCells key={exp.id} exp={exp} />
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
    const [open, setOpen] = useState<boolean>(false);
    const profitLossCalculation = (data: IExpense): number | "" => {
        return (data.coinCount && data.sellCoinValue && data.buyCoinValue) ? (data.coinCount * data.sellCoinValue) - (data.buyCoinValue * data.coinCount) : "";
    }
    const noData = "No Data Provided";
    return (
        <>
            <StyledTableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <StyledTableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">{props.exp ? props.exp?.coinName : noData}</StyledTableCell>
                <StyledTableCell align="center">{props.exp ? props.exp?.coinCount : noData}</StyledTableCell>
                <StyledTableCell align="center">{props.exp ? props.exp?.buyCoinValue : noData}</StyledTableCell>
                <StyledTableCell align="center">{props.exp ? props.exp?.sellCoinValue : noData}</StyledTableCell>
                {props.exp && <StyledTableCell sx={{ bgcolor: profitLossCalculation(props.exp) > 0 ? "green" : "red", color: "white" }} align="center">{profitLossCalculation(props.exp)}</StyledTableCell>}
            </StyledTableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                {props.exp?.coinName ? props.exp?.coinName : "No Coin"} Detail
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <NestedTableHeader />
                                <NestedTableBody exp={props.exp} />
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>

            </TableRow>
        </>
    )
}

export default TableBodyContainer