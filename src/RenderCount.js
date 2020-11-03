import React from 'react';


export const getRenderCount = ()=>{
    let render_count = 0;

    return function RenderCount(){
        return (<div>Render count={++render_count}</div>);
    }
}