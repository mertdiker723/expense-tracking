import { useState, useContext } from 'react';

// Material UI
import { TableBody, IconButton, Typography, Collapse, Box, Table, Stack } from '@mui/material';
// Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { StyledTableCell, StyledTableRow } from "../../../styledComponents/Expense/ExpenseStyled";

import NestedTableHeader from './NestedTableHeader';
import NestedTableBody from './NestedTableBody';

import { IExpense } from '../../../models/expense.types';
import { ProvideContext } from "../../../store/Store";

type TableBodyProps = {
    setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedExpense: React.Dispatch<React.SetStateAction<IExpense | undefined>>;
    setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableBodyContainer = ({ setDeleteModal, setSelectedExpense, setUpdateModal }: TableBodyProps) => {
    const { expense, editExpense } = useContext(ProvideContext);
    return (
        <TableBody>

            {expense.length > 0 ? expense.map((exp) => (
                <TableCells
                    key={exp.id}
                    exp={exp}
                    setDeleteModal={setDeleteModal}
                    setSelectedExpense={setSelectedExpense}
                    editExpense={editExpense}
                    setUpdateModal={setUpdateModal}
                />
            )) : <TableCells noData={"No data Provided"} />
            }
        </TableBody >
    )
}

type TableCellRow = {
    exp?: IExpense;
    noData?: string;
    setDeleteModal?: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedExpense?: React.Dispatch<React.SetStateAction<IExpense | undefined>>;
    editExpense?: (data?: IExpense | undefined) => void;
    setUpdateModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableCells = (props: TableCellRow) => {
    const [open, setOpen] = useState<boolean>(false);

    const deleteInfo = (data: IExpense | undefined) => {
        props.setDeleteModal?.(true);
        props.setSelectedExpense?.(data);
    }

    const editInfo = (data: IExpense | undefined) => {
        props.setUpdateModal?.(true);
        props.editExpense?.(data)
    }
    return (
        <>
            <StyledTableRow>
                <StyledTableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">{props.exp ? props.exp?.coinName : props.noData}</StyledTableCell>
                <StyledTableCell align="center">{props.exp ? props.exp?.coinCount : props.noData}</StyledTableCell>
                <StyledTableCell align="center">{props.exp ? props.exp?.buyCoinValue : props.noData}</StyledTableCell>
                <StyledTableCell align="center">{props.exp ? props.exp?.sellCoinValue : props.noData}</StyledTableCell>
                {props.exp ? <StyledTableCell sx={{ bgcolor: props.exp.profitLoss > 0 ? "green" : "red", color: "white" }} align="center">{props.exp.profitLoss}</StyledTableCell> : <StyledTableCell />}
                <StyledTableCell align="center">
                    {
                        !props.noData && (
                            <Stack direction="row" alignItems="center" justifyContent={"center"}>
                                <IconButton aria-label="delete" size="large" onClick={() => deleteInfo(props?.exp)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="edit" size="large" onClick={() => editInfo(props?.exp)}>
                                    <EditIcon />
                                </IconButton>
                            </Stack>
                        )
                    }
                </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
                </StyledTableCell>
            </StyledTableRow>
        </>
    )
}

export default TableBodyContainer