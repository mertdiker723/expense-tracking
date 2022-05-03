import { useState } from "react";
import { DialogTitle, DialogContentText, Button, Dialog, DialogActions, DialogContent, IconButton } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { IExpense, IInformationToastify } from './../../../models/expense.types';
import { toast } from 'react-toastify';

type DeleteDialogProps = {
    open: boolean;
    selectedExpense: IExpense | undefined;
    setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedExpense: React.Dispatch<React.SetStateAction<IExpense | undefined>>;
    deleteExpense: (data: IExpense) => void;
}

const DeleteDialog = ({ open, selectedExpense, setDeleteModal, setSelectedExpense, deleteExpense }: DeleteDialogProps) => {
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');

    const informationToastify: IInformationToastify = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    const deleteExpenseDialog = () => {
        if (selectedExpense) {
            deleteExpense?.(selectedExpense);
            toast.success("Deleted!", informationToastify);
            handleClose();
        };
    }

    const handleClose = () => {
        setSelectedExpense({} as IExpense);
        setDeleteModal(false);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
            maxWidth={maxWidth}

        >
            <DialogTitle id="alert-dialog-title">
                Delete
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are You Sure To Delete!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={deleteExpenseDialog}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteDialog