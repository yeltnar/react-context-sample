import React, {useState} from 'react';

export const default_context = {
    value:0,
};

export const SharedContext = React.createContext(default_context)

export function getContext(){
    return default_context;
}

export function ContextWrapper(props){

    console.log('context wrapper');

    const [content, setContent] = useState(0);

    return (<SharedContext.Provider value={{
        value: content,
        increment,
        decrement
    }}>
        {props.children}
    </SharedContext.Provider>);

    function increment(){
        console.log('increment')
        setContent(content+1);
    }
    function decrement(){
        console.log('decrement')
        setContent(content-1);
    }
}