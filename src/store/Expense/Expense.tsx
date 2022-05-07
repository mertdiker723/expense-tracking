import { useState } from 'react';
import { nanoid } from 'nanoid'

import { IExpense } from './../../models/expense.types';

const Expense = () => {
    const [expense, setExpense] = useState<IExpense[]>([]);
    const [editExpenseData, setEditExpenseData] = useState<IExpense>();

    const sendExpense = (data: IExpense) => {
        if (data.id) {
            const updatedExpense = expense.map(exp => exp.id === data?.id ? data : exp);
            setExpense(updatedExpense);
        }
        else {
            setExpense([...expense, {
                ...data,
                id: nanoid(),
            }]);
        }
    }

    const deleteExpense = (data?: IExpense) => {
        setExpense(expense.filter(exp => exp.id !== data?.id));
    }

    const editExpense = (data?: IExpense) => {
        const findedExpense = expense.find(exp => exp?.id === data?.id);
        setEditExpenseData(findedExpense);
    }

    return { expense, sendExpense, deleteExpense, editExpense, editExpenseData };
}

export default Expense