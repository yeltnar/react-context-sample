import React, { useContext, useEffect } from "react";
import {SharedContext} from "./SharedContext/SharedContext"

export default function(){

    const context = useContext(SharedContext);

    let interval_id;

    useEffect(()=>{
        console.log("setting up interval")
        console.log({context});
    },[]);

    return (<></>);
}