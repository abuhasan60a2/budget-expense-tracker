import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
function moneyformatter(num){
    let p = num.toFixed(2).split('.');
    return(
        '$ '+ (p[0].split('')[0]==='-'?'-':'')+p[0].split('').reverse().reduce(function(acc,num,i,orig){
            return num === '-'?acc: num+(i && !(i%3)?',': '')+acc;
        }, '')+'.'+p[1]
    );
}
export default function IncomeExpense() {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item=>item>0).reduce((acc, item)=>(acc+=item),0);
    const expense = (amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1);
    return (
        <div className="container flex flex-row   mx-auto bg-white mt-5 mb-6">
            <div className = "flex-1 border-r border-gray-400 pl-3">
                <h4>Income</h4>
                <p>{moneyformatter(income)}</p>
            </div >
            <div className = "flex-1 border-r border-gray-400 pl-3">
                <h4>Expense</h4>
                <p>{moneyformatter(expense)}</p>
            </div>

        </div>
    )
}