import { useState } from 'react';
import { nanoid } from 'nanoid'

import { IExpense } from './../../models/expense.types';

const Expense = () => {
    const [expense, setExpense] = useState<IExpense[]>([]);
    const [editExpenseData, setEditExpenseData] = useState<IExpense>();

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

    const updateExpense = (data: IExpense) => {
        const updatedExpense = expense.map(exp => exp.id === data?.id ? data : exp);
        setExpense(updatedExpense);
    }

    return { expense, createExpense, deleteExpense, editExpense, updateExpense, editExpenseData };
}

export default Expense