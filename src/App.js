import './App.css';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <div className=" container flex flex-col w-96  mx-auto justify-center">
      <h1 className='font-bold text-3xl self-center'>Expense Tracker App</h1>
      <GlobalProvider>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
