import { useState, useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);
    const formRef = useRef(null);
    const handleTextInput = (e) => {
        setText(e.target.value);
    }
    const handleAmountInput = (e) => {
        setAmount(e.target.value);
    }
    const resetForm = () => {
        setText("");
        setAmount("");
    };
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        resetForm()
        
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" value= {text} onChange={handleTextInput} placeholder="Enter text"></input>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value = {amount} onChange={handleAmountInput} placeholder="Enter amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}