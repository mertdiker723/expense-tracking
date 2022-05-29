import { TableBody } from '@mui/material';

import { IExpense } from '../../../models/expense.types';
import NestedTableBodyCellRow from './NestedTableBodyCellRow';


type NestedTableBodyProps = {
    exp: IExpense | undefined;
}
const NestedTableBody = ({ exp }: NestedTableBodyProps) => {
    return (
        <TableBody>
            <NestedTableBodyCellRow exp={exp}/>
        </TableBody>
    )
}

export default NestedTableBody