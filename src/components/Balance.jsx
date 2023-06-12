import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function moneyformatter(num){
    let p = num.toFixed(2).split('.');
    return(
        '$ '+ (p[0].split('')[0]==='-'?'-':'')+p[0].split('').reverse().reduce(function(acc,num,i,orig){
            return num === '-'?acc: num+(i && !(i%3)?',': '')+acc;
        }, '')+'.'+p[1]
    );
}
export default function Balance(){
    const {transactions} = useContext(GlobalContext);
    let amounts = transactions.map(transaction =>transaction.amount);
    const total = amounts.reduce((acc,item)=>(acc+=item),0);
    return(
        <div className="container mt-8">
            <h3 className="font-bold text-xl">Your Balance</h3>
            <h2 className = "font-bold text-2xl">{moneyformatter(total)}</h2>
        </div>
    )
}