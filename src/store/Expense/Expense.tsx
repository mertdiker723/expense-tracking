import { useState } from 'react';

import { IExpense } from './../../models/expense.types';

const Expense = () => {
    const [expense, setExpense] = useState<IExpense[]>([]);

    const createExpense = (data: IExpense) => {
        setExpense([...expense, data]);
    }

    return { expense, createExpense };
}

export default Expense