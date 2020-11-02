import React, {useState} from 'react';

export const default_context = {
    value:0,
};

export const SharedContext = React.createContext(default_context)

export function getContext(){
    return default_context;
}

export function ContextWrapper(props){

    const [content, setContent] = useState(0);

    return (<SharedContext.Provider value={{
        value: content,
        increment,
        decrement
    }}>
        {props.children}
    </SharedContext.Provider>);

    function increment(){
        setContent(content+1);
    }
    function decrement(){
        setContent(content-1);
    }
}