// Material UI
import { Grid, TextField, InputAdornment, Button } from "@mui/material"

// Folders
import Expense from "./Expense";

const ExpenseForm = () => {
    const { textFieldsTop, sendItems } = Expense();

    return (
        <Grid container >
            <Grid container spacing={3}>
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
            <Grid container spacing={3} mt={0}>
                <Grid item xs={12} sm={6} md={2}>
                    <Button
                        fullWidth
                        onClick={() => sendItems("Added!")}
                        color={"primary"}
                        variant="contained">
                        {"Send"}
                    </Button>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default ExpenseForm