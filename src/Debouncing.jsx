import React, { useRef, useState } from 'react'

const Debouncing = () => {
    const [count,SetCount] = useState(0)
    const timerId = useRef(null);

    const handleDebouncing = (delay)=>{
        if(timerId.current){
            clearTimeout(timerId.current)
        }
        timerId.current = setTimeout(()=>{
        SetCount(count+1)
        },delay)
    }
  return (
    <div>
    <button onClick={()=>handleDebouncing(1000)}>Debouncing</button>
        <p>
        {count}
        </p>
    </div>
  )
}

export default Debouncing