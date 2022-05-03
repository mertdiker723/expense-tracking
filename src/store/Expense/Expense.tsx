import { useState } from 'react';
import { nanoid } from 'nanoid'

import { IExpense } from './../../models/expense.types';

const Expense = () => {
    const [expense, setExpense] = useState<IExpense[]>([]);

    const createExpense = (data: IExpense) => {
        setExpense([...expense, {
            ...data,
            id: nanoid(),
        }]);
    }

    const deleteExpense = (data?: IExpense) => {
        setExpense(expense.filter(exp => exp.id !== data?.id));
    }

    return { expense, createExpense, deleteExpense };
}

export default Expense