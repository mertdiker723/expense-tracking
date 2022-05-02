import { TableBody, TableCell, TableRow } from '@mui/material';
import { IExpense } from '../../../models/expense.types';


type NestedTableBodyProps = {
    exp: IExpense | undefined;
}
const NestedTableBody = ({ exp }: NestedTableBodyProps) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell align="left" >{exp ? exp.totalCost : "---"}</TableCell>
                <TableCell align="left">{exp ? exp.profitLoss : "---"}</TableCell>
                <TableCell align="left">{exp ? exp.totalBalance : "---"}</TableCell>
                <TableCell/>
            </TableRow>
        </TableBody>
    )
}

export default NestedTableBody