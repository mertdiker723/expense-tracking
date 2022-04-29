import { TableCell, TableHead, TableRow } from '@mui/material';

const TableHeader = () => {

    return (
        <TableHead>
            <TableRow>
                <TableCell align="center">Coin Name</TableCell>
                <TableCell align="center">Piece Of Coin</TableCell>
                <TableCell align="center">Buy Price</TableCell>
                <TableCell align="center">Sell Price</TableCell>
                <TableCell align="center">Profit / Loss</TableCell>
            </TableRow>
        </TableHead>
    );
}

export default TableHeader