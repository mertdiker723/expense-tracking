import { TableCell, TableRow } from '@mui/material';
import { IExpense } from '../../../models/expense.types';

type NestedTableBodyProps = {
  exp: IExpense | undefined;
}

const NestedTableBodyCellRow = ({ exp }: NestedTableBodyProps) => {
  return (
    <TableRow>
      <TableCell align="left" >{exp ? exp.totalCost : "---"}</TableCell>
      <TableCell align="left">{exp ? exp.profitLoss : "---"}</TableCell>
      <TableCell align="left">{exp ? exp.totalBalance : "---"}</TableCell>
      <TableCell />
    </TableRow>
  )
}

export default NestedTableBodyCellRow