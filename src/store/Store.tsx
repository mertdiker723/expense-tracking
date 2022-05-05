import { createContext } from "react";
import Expense from "./Expense/Expense";
import { IExpense } from './../models/expense.types';

type InitialContext = {
    expense: IExpense[];
    createExpense: (data: IExpense) => void;
    deleteExpense: (data?: IExpense) => void;
    editExpense: (data?: IExpense) => void;
    editExpenseData: IExpense | undefined;
}

export const ProvideContext = createContext<InitialContext>({} as InitialContext);

type ProvideProps = {
    children: React.ReactNode;
}
export const StoreProvider = ({ children }: ProvideProps) => {
    const { expense, createExpense, deleteExpense, editExpense, editExpenseData } = Expense();

    return (
        <ProvideContext.Provider value={{
            expense,
            createExpense,
            deleteExpense,
            editExpense,
            editExpenseData
        }}>
            {children}
        </ProvideContext.Provider>
    )
}