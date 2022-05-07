import { createContext } from "react";
import Expense from "./Expense/Expense";
import { IExpense } from './../models/expense.types';

type InitialContext = {
    expense: IExpense[];
    createExpense: (data: IExpense) => void;
    deleteExpense: (data?: IExpense) => void;
    editExpense: (data?: IExpense) => void;
    editExpenseData: IExpense | undefined;
    updateExpense: (data: IExpense) => void;
}

export const ProvideContext = createContext<InitialContext>({} as InitialContext);

type ProvideProps = {
    children: React.ReactNode;
}
export const StoreProvider = ({ children }: ProvideProps) => {
    const { expense, createExpense, deleteExpense, editExpense, updateExpense, editExpenseData } = Expense();

    return (
        <ProvideContext.Provider value={{
            expense,
            createExpense,
            deleteExpense,
            editExpense,
            editExpenseData,
            updateExpense
        }}>
            {children}
        </ProvideContext.Provider>
    )
}