import { useContext, useState } from 'react';
import { ProvideContext } from "../../store/Store";

import { Paper, Table, TableContainer } from '@mui/material';
import TableHeader from "./components/TableHeader";
import TableBodyContainer from "./components/TableBody";
import DeleteDialog from "./components/DeleteDialog";
import { IExpense } from './../../models/expense.types';

const ExpenseList = () => {
  const { expense, deleteExpense } = useContext(ProvideContext);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedExpense, setSelectedExpense] = useState<IExpense | undefined>({} as IExpense);

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader />
          <TableBodyContainer
            data={expense}
    
            setDeleteModal={setDeleteModal}
            setSelectedExpense={setSelectedExpense}
          />
        </Table>
      </TableContainer>
      <DeleteDialog
        open={deleteModal}
        selectedExpense={selectedExpense}
        deleteExpense={deleteExpense}
        setDeleteModal={setDeleteModal}
        setSelectedExpense={setSelectedExpense}
      />
    </>
  );
}
export default ExpenseList;