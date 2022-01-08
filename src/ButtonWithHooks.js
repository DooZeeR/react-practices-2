import React,{useState} from 'react'

function ButtonWithHooks() {
    const [greeting, setGreeting] = useState({key1:"Hello2", key2: "HELLOBELLO"});
    const [title, setTitle] = useState("BLABLABLA");

    return (
        <div>
            <h2>{title}</h2>
            <p>{greeting.key1}</p>
            <p>{greeting.key2}</p>
            <button onClick={() => setGreeting({key1: "Bye2", key2: "CSOCSI"})}>Click me!</button>
            <button onClick={() => setTitle("PFFFFFFF")}>Click me!</button>
        </div>
    )
}

export default ButtonWithHooks
