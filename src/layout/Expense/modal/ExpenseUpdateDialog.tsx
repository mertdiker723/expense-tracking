import { useEffect, useState } from 'react';
// Material UI
import { IconButton, Grid, TextField, InputAdornment, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';

// Icons
import CloseIcon from '@mui/icons-material/Close';
// Folders
import Expense from "../Expense";
import Transition from "../../../components/Modal/Transition";
import { IExpense } from "../../../models/expense.types";

type ExpenseUpdateProps = {
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpenseUpdateDialog = ({ updateModal, setUpdateModal }: ExpenseUpdateProps) => {
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('md'); // eslint-disable-line
  const { textFieldsTop, setCoin, sendItems, editExpenseData } = Expense();

  useEffect(() => {
    setCoin(editExpenseData ? editExpenseData : {} as IExpense);
  }, [editExpenseData, updateModal]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    setUpdateModal(false);
  };
  const updateItem = () => {
    sendItems("Updated!");
    handleClose();
  }

  return (
    <div>
      <Dialog
        open={updateModal}
        TransitionComponent={Transition}
        maxWidth={maxWidth}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Subscribe
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
          <Grid container spacing={3} mt={0}>
            {
              textFieldsTop.map(textField => {
                const { name, label, value, fullWidth, type, variant, icon, onChange, disabled, xsGrid, smGrid, mdGrid, id } = textField;
                return (
                  <Grid item xs={xsGrid} sm={smGrid} md={mdGrid} key={id}>
                    <TextField
                      id={name}
                      name={name}
                      label={label}
                      value={value}
                      fullWidth={fullWidth}
                      type={type}
                      variant={variant}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
                      }}
                      onChange={onChange}
                      disabled={disabled}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateItem} color="success" variant="contained">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ExpenseUpdateDialog