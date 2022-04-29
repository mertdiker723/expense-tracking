import { useContext } from 'react';
import { ProvideContext } from "../../store/Store";

import { Paper, Table, TableContainer } from '@mui/material';
import TableHeader from "./components/TableHeader";
import TableBodyContainer from "./components/TableBody";
const ExpenseList = () => {
  const { expense } = useContext(ProvideContext);

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader />
        <TableBodyContainer data={expense} />
      </Table>
    </TableContainer>
  );
}
export default ExpenseList;