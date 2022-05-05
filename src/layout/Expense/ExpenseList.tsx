import { useState } from 'react';


import { Paper, Table, TableContainer } from '@mui/material';
import TableHeader from "./components/TableHeader";
import TableBodyContainer from "./components/TableBody";
import DeleteDialog from "./components/DeleteDialog";
import { IExpense } from './../../models/expense.types';

const ExpenseList = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedExpense, setSelectedExpense] = useState<IExpense | undefined>({} as IExpense);

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader />
          <TableBodyContainer
            setDeleteModal={setDeleteModal}
            setSelectedExpense={setSelectedExpense}
          />
        </Table>
      </TableContainer>
      <DeleteDialog
        open={deleteModal}
        selectedExpense={selectedExpense}
        setDeleteModal={setDeleteModal}
        setSelectedExpense={setSelectedExpense}
      />
    </>
  );
}
export default ExpenseList;