import { TableCell, TableHead, TableRow } from '@mui/material';

const NestedTableHeader = () => {
    const nestedTableHead: string[] = ["Total Cost", "Profit / Loss", "Total Balance"];
    return (
        <TableHead>
            <TableRow>
                {
                    nestedTableHead.map(head => {
                        return (
                            <TableCell align="left">{head}</TableCell>
                        )
                    })
                }
                <TableCell />
            </TableRow>
        </TableHead>
    )
}

export default NestedTableHeader