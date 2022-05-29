import { useContext } from 'react';

// Material UI
import { TableBody } from '@mui/material';

import TableBodyCellRow from "./TableBodyCellRow";
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
                <TableBodyCellRow
                    key={exp.id}
                    exp={exp}
                    setDeleteModal={setDeleteModal}
                    setSelectedExpense={setSelectedExpense}
                    editExpense={editExpense}
                    setUpdateModal={setUpdateModal}
                />
            )) : <TableBodyCellRow noData={"No data Provided"} />
            }
        </TableBody >
    )
}


export default TableBodyContainer