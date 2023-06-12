export default function AppReducer(state, action){
    switch(action.type){
        case 'DELETE TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transactions => (transactions.id!==action.payload))
            }
        case 'ADD TRANSACTION':
            return{
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}