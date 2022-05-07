import { useEffect, useState, useContext } from 'react';
// Material UI
import { IconButton, Grid, TextField, InputAdornment, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';

// Icons
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CloseIcon from '@mui/icons-material/Close';

import { toast } from 'react-toastify';

// Folders
import { informationToastify } from "../../../components/Toastfy/ToastifyInformations";
import Transition from "../../../components/Modal/Transition";
import { IExpense, ITextField } from "../../../models/expense.types";
// Context
import { ProvideContext } from "../../../store/Store";

type ExpenseUpdateProps = {
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpenseUpdateDialog = ({ updateModal, setUpdateModal }: ExpenseUpdateProps) => {
  const [coin, setCoin] = useState<IExpense>({} as IExpense);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('md');
  const { editExpenseData, updateExpense } = useContext(ProvideContext);

  useEffect(() => {
    setCoin(editExpenseData ? editExpenseData : {} as IExpense);
  }, [editExpenseData])

  const handleClose = () => {
    setUpdateModal(false);
  };

  const coinHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCoin({
      ...coin,
      [name]: value
    })
  }

  const updateItem = () => {
    const { sellCoinValue, coinName, coinCount, buyCoinValue } = coin;
    if (sellCoinValue && coinName && coinCount && buyCoinValue) {
      updateExpense({
        ...coin,
        totalCost: (coin.buyCoinValue && coin.coinCount) ? +(coin.buyCoinValue * coin.coinCount).toFixed(2) : "",
        profitLoss: (coin.coinCount && coin.sellCoinValue && coin.buyCoinValue) ? +((coin.coinCount * coin.sellCoinValue) - (coin.buyCoinValue * coin.coinCount)).toFixed(2) : "",
        totalBalance: (coin.sellCoinValue && coin.coinCount) ? +(coin.sellCoinValue * coin.coinCount).toFixed(2) : ""
      });
      setCoin({} as IExpense);
      handleClose();
      toast.success("Updated!", informationToastify);
    }
    else {
      toast.warn('Fields cannot be empty!', informationToastify);
    }
  }

  const textFieldsTop: ITextField[] = [
    {
      id: 0,
      name: "coinName",
      label: "Coin Name",
      value: coin.coinName ?? "",
      fullWidth: true,
      type: "text",
      variant: "outlined",
      icon: <CurrencyBitcoinIcon />,
      onChange: coinHandleChange,
      disabled: false,
      xsGrid: 12,
      smGrid: 6,
      mdGrid: 3
    },
    {
      id: 1,
      name: "coinCount",
      label: "Piece Of Coin",
      value: coin.coinCount ?? "",
      fullWidth: true,
      type: "number",
      variant: "outlined",
      icon: <ProductionQuantityLimitsIcon />,
      onChange: coinHandleChange,
      disabled: false,
      xsGrid: 12,
      smGrid: 6,
      mdGrid: 3
    },
    {
      id: 2,
      name: "buyCoinValue",
      label: "Buy Coin Value",
      value: coin.buyCoinValue ?? "",
      fullWidth: true,
      type: "number",
      variant: "outlined",
      icon: "$",
      onChange: coinHandleChange,
      disabled: false,
      xsGrid: 12,
      smGrid: 6,
      mdGrid: 3
    },
    {
      id: 3,
      name: "totalCoin",
      label: "Total Cost",
      value: (coin.buyCoinValue && coin.coinCount) ? +(coin.buyCoinValue * coin.coinCount).toFixed(2) : "",
      fullWidth: true,
      type: "text",
      variant: "outlined",
      icon: <MonetizationOnOutlinedIcon />,
      disabled: true,
      xsGrid: 12,
      smGrid: 6,
      mdGrid: 3
    },
    {
      id: 4,
      name: "sellCoinValue",
      label: "Sell Coin Value",
      value: coin.sellCoinValue ?? "",
      fullWidth: true,
      type: "number",
      variant: "outlined",
      icon: "$",
      onChange: coinHandleChange,
      disabled: false,
      xsGrid: 12,
      smGrid: 6,
      mdGrid: 4
    },
    {
      id: 5,
      name: "profitLoss",
      label: "Profit / Loss",
      value: (coin.coinCount && coin.sellCoinValue && coin.buyCoinValue) ? +((coin.coinCount * coin.sellCoinValue) - (coin.buyCoinValue * coin.coinCount)).toFixed(2) : "",
      fullWidth: true,
      type: "number",
      variant: "outlined",
      icon: "$",
      disabled: true,
      xsGrid: 12,
      smGrid: 6,
      mdGrid: 4
    },
    {
      id: 6,
      name: "availableBalance",
      label: "Total Balance",
      value: (coin.sellCoinValue && coin.coinCount) ? +(coin.sellCoinValue * coin.coinCount).toFixed(2) : "",
      fullWidth: true,
      type: "text",
      variant: "outlined",
      icon: <MonetizationOnOutlinedIcon />,
      disabled: true,
      xsGrid: 12,
      smGrid: 6,
      mdGrid: 4
    },
  ];

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
          <Button onClick={updateItem}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ExpenseUpdateDialog