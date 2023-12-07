const intitialValue={
    dashboard:false,
    app:false,
    employees:false,
    clients:false,
    sales:false,
    accounts:false,
    performance:false
}


const reducer=(state,action)=>
{
    switch(action)
    {
        case 'dashboard':return {...state,dashboard:!state.dashboard}
        case 'app':return {...state,app:!state.app}
        case 'employees':return {...state,employees:!state.employees}
        case 'clients':return {...state,clients:!state.clients}
        case 'sales':return {...state,sales:!state.sales}
        case 'accounts':return {...state,accounts:!state.accounts}
        case 'performance':return {...state,performance:!state.performance}
        default : return state
    }
}


export {intitialValue,reducer}


