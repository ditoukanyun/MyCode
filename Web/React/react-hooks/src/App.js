import React from "react";
import Class from "./components/CLass";
import Hooks from "./components/Hooks";
import Context from "./components/Context";
import MyReducer from "./components/MyReducer";
import MyEffect from "./components/MyEffect";

function App() {
    return (
        <div className="App">
            {/* class 写法 */}
            <Class />
            <p>------------------------------</p>
            {/* hooks写法 */}
            <Hooks />
            <p>----------------------</p>
            {/* context 共享组件状态 */}
            <Context></Context>
            <p>------------------------------</p>
            <MyReducer></MyReducer>
            <p>------------------------------</p>
            <MyEffect></MyEffect>
        </div>
    );
}

export default App;
