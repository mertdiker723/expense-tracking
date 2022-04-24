import { useContext } from 'react';
import { ProvideContext } from "../../store/Store";

const ExpenseList = () => {
  const { expense } = useContext(ProvideContext);

  console.log(expense)

  return (
    <></>
  )
}

export default ExpenseList