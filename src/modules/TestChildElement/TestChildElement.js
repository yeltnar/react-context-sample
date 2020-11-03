import React, {useContext} from "react";
import {SharedContext} from "../../SharedContext/SharedContext"

export function TestChildElement(props){

    const context = useContext(SharedContext);

    return (
        <div>
            <props.RenderCount></props.RenderCount>
            <div>{context.value}</div>
            <button onClick={clicked}>Click me</button>
        </div>
    );

    function clicked(){
        console.log(`clicked ${new Date().toLocaleString()}`);
        console.log(context)
        context.increment()
    }
}