import { createContext } from "react";
import Expense from "./Expense/Expense";


export const ProvideContext = createContext({} as any);

type ProvideProps = {
    children: React.ReactNode;
}
export const StoreProvider = ({ children }: ProvideProps) => {
    const { expense, createExpense } = Expense();

    return (
        <ProvideContext.Provider value={{
            expense,
            createExpense
        }}>
            {children}
        </ProvideContext.Provider>
    )
}