import { TableCell, TableHead, TableRow } from '@mui/material';

const NestedTableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="left">Total Cost</TableCell>
                <TableCell align="left">Profit / Loss</TableCell>
                <TableCell align="left">Total Balance</TableCell>
                <TableCell />
            </TableRow>
        </TableHead>
    )
}

export default NestedTableHeader