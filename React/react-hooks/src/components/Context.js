import React, { useState, useContext } from "react";
// useContext()  共享状态钩子

const NewsContext = React.createContext({});
/**
 * 1. 创建一个  Context 对象, 组件会从组件树种匹配离自己最近的Provider中读取到当前的context
 * 2. 每一个ConText对象都会返回一个Provider React组件,它允许消费组件订阅context的变化
 * 3. 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。
 * Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate
 * 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。
 * 4.通过新旧值检测来确定变化，使用了与 Object.is 相同的算法。
 */

const Nav = () => {
    // useContext 的参数必须是 context 对象本身
    const { userName, age } = useContext(NewsContext);
    return (
        <div>
            <h1>
                userName: {userName} --- {age}
            </h1>
        </div>
    );
};

const Message = props => {
    const { userName, age } = useContext(NewsContext);

    return (
        <div>
            <p>Message</p>
            <p>userName:{userName}</p>
            <p>age: {age}</p>
            <button onClick={props.changeUserName}>改变名称</button>
            <button onClick={props.changeAge}>改变年龄</button>
        </div>
    );
};

const Context = () => {
    // 初始化一个状态
    const [userName, setUserName] = useState("cww");
    const [age, setAge] = useState("19");
    return (
        <NewsContext.Provider value={{ userName: userName, age: age }}>
            <div>
                <Nav></Nav>
                <Message
                    changeUserName={() => {
                        setUserName("baidu");
                    }}
                    changeAge={() => {
                        setAge("66");
                    }}
                ></Message>
            </div>
        </NewsContext.Provider>
    );
};

export default Context;
