const intitialValue={
    dashboard:false
}


const reducer=(state,action)=>
{
    switch(action)
    {
        case 'dashboard':return {...state,dashboard:!state.dashboard}
    }
}


export {intitialValue,reducer}


