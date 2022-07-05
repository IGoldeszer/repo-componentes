import React from 'react';
import { useState } from "react";

function ItemCount(){
    const [num, setNum] = useState(0);

    const sumar = () => {
        setNum(num + 1)
}

const resta = () => {
    if(num>0){
        setNum(num - 1)
    }
}

const reiniciar = () => {
    setNum(0)
}

return(
    <>
        <p>{num}</p>
        <button onClick={sumar}>+</button>
        <button onClick={resta}>-</button>
        <br></br>
        <button onClick={reiniciar}>Reiniciar</button>
    </>
)
}

export default ItemCount;