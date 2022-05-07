import { TableCell, TableHead, TableRow } from '@mui/material';

const TableHeader = () => {
    const tableCell: string[] = ["Coin Name", "Piece Of Coin", "Buy Price", "Sell Price", "Profit / Loss"];

    return (
        <TableHead>
            <TableRow>
                <TableCell />
                {
                    tableCell.map((name, index) => {
                        return (
                            <TableCell key={index} align="center">{name}</TableCell>
                        )
                    })
                }
                <TableCell />
            </TableRow>
        </TableHead>
    );
}

export default TableHeader