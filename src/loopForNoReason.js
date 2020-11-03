import React, { useContext, useEffect } from "react";
import {SharedContext} from "./SharedContext/SharedContext"

const loop_funct_arr = [];

(()=>{
    setInterval(()=>{
        console.log("looping");
        console.log(loop_funct_arr.length);
        loop_funct_arr.forEach((cur)=>{
            cur();
            console.log(cur)
        });
    },1000);
})();

export default function(){

    const context = useContext(SharedContext);

    const loop_funct = ()=>{
        console.log(context.value)
        context.increment();
    };

    useEffect(()=>{
        fileLog("findthisdrew useEffect");
        loop_funct_arr.push(loop_funct);
        return ()=>{
            fileLog("findthisdrew removing loop");
            const i = loop_funct_arr.indexOf(loop_funct);
            loop_funct_arr.splice( i, 1 );
            // debugger
        }
    });

    return (<></>);
}

function fileLog(...p){
    console.log(["loop for no reason ",...p]);
}