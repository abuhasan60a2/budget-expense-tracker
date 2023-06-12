import Transaction from "./Transaction"
import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"
export default function TransactionList(){
    const {transactions} = useContext(GlobalContext)
    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>(<Transaction key = {transaction.id} transaction = {transaction} />))}
            </ul>
        </div>
    )
}