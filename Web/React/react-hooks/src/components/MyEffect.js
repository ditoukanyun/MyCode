import React, { useState, useEffect } from "react";

const MyEffect = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("1", loading);
        return <p>showLoading...</p>;
    });
    return (
        <div>
            <button>按钮</button>
        </div>
    );
};

export default MyEffect;
