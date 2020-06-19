import React, { useState } from "react";
// useState(): 状态钩子

export default function Hooks() {
    // 为函数组件引入状态(state)
    //  const [stateVal , setStateVal] =useState("默认值")
    const [buttonText, setButtonText] = useState("hooks Click!");

    let onHooksClick = () => {
        setButtonText("thanks");
    };

    return (
        <div>
            <button onClick={onHooksClick}>{buttonText}</button>
        </div>
    );
}
