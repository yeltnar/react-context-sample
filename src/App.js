import logo from './logo.svg';
import './App.css';

import {TestChildElement} from "./modules/TestChildElement/TestChildElement"
import { ContextWrapper, SharedContext, getContext, default_context } from './SharedContext/SharedContext';
import LoopForNoReason from "./loopForNoReason";
import {getRenderCount} from "./RenderCount";

const RenderCount = getRenderCount();
const RenderCount1 = getRenderCount();
const RenderCount2 = getRenderCount();

function App() {
  return (
    <>
      <ContextWrapper>
        <TestChildElement RenderCount={RenderCount1}></TestChildElement>
        <TestChildElement RenderCount={RenderCount2}></TestChildElement>
        <RenderCount></RenderCount>
        <LoopForNoReason></LoopForNoReason>
      </ContextWrapper>
    </>
  );
}

export default App;
