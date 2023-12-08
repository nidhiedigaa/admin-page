import React,{useState,createContext} from "react"




const data=createContext()

function Global ({children})
{
    let[visibility,setVisibility]=useState(true)
    function changeVisibility()
    {
        setVisibility((pv)=>!pv)
    }
    return(<>
    <data.Provider value={{visibility:visibility,changevisibility:changeVisibility}}>
        {children}
    </data.Provider>
    </>)
}

export {data} 
export default Global


