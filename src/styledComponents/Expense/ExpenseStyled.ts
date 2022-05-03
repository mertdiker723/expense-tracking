import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { TableRow, TableCell } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }
}));
