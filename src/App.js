import logo from './logo.svg';
import './App.css';

import {TestChildElement} from "./modules/TestChildElement/TestChildElement"
import { ContextWrapper, SharedContext, getContext, default_context } from './SharedContext/SharedContext';
import LoopForNoReason from "./loopForNoReason";

function App() {
  return (
    <>
      <ContextWrapper>
        <TestChildElement></TestChildElement>
        <TestChildElement></TestChildElement>
        <LoopForNoReason></LoopForNoReason>
      </ContextWrapper>
    </>
  );
}

export default App;
