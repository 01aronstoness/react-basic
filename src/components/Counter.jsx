import React, {useState, useEffect} from "react";
import PrintName from "./PrintName";


function Counter(){
    // let count =0;
    const [count, updateCount] = useState(10);
    const [inputValue, setInputValue]= useState('');
    const [showValues, setShowValue] = useState(false);
    const cliced =()=>{
       //  count =count+1;
         // console.log(count)
         updateCount(count+1)
    }

    const handleInput=(event)=>{
setInputValue(event.target.value)
    }

    const showValuesinComponent =()=>{
        setShowValue(!showValues)
    }

//     useEffect(()=>{
//         // mount
//         alert("Component Load")
//        updateCount(1000+1)
//         // umnount
//         return ()=>{
//            alert("Componet Leave")
//         }
//    })

    return (
        <>
        {/* <Counter /> */}
        <input type="text" value={inputValue} onChange={handleInput} />
        <button onClick={cliced}>click me {count}</button>
        <button onClick={showValuesinComponent}>{showValues ? 'Hide Values': 'Show Values'}</button>
        {showValues ?  <PrintName name={count} /> : null }
       
        </>
    )
}


export default Counter;