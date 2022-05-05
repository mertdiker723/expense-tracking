import { useState } from 'react';
import { nanoid } from 'nanoid'

import { IExpense } from './../../models/expense.types';

const Expense = () => {
    const [expense, setExpense] = useState<IExpense[]>([]);
    const [editExpenseData, setEditExpenseData] = useState<IExpense | undefined>();

    const createExpense = (data: IExpense) => {
        setExpense([...expense, {
            ...data,
            id: nanoid(),
        }]);
    }

    const deleteExpense = (data?: IExpense) => {
        setExpense(expense.filter(exp => exp.id !== data?.id));
    }

    const editExpense = (data?: IExpense) => {
        const findedExpense = expense.find(exp => exp?.id === data?.id);
        setEditExpenseData(findedExpense);
    }


    return { expense, createExpense, deleteExpense, editExpense, editExpenseData };
}

export default Expense