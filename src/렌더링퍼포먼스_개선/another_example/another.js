import React, { useState } from "react";
import { withRouter } from "react-router-dom";

export default withRouter(function Another() {
    console.log("re render");

    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input
                onChange={onChange}
                value={value}
                style={{
                    display: "block",
                    textAlign: "center",
                    margin: "0 auto",
                    width: 300,
                    height: 40,
                }}
            />
            <hr />
            <hr />
            {[...new Array(10000)].map((item, idx) => {
                return (
                    <div
                        key={idx}
                        style={{
                            background: "red",
                            height: 50,
                            width: 50,
                            marginRight: 10,
                            marginBottom: 10,
                            display: "inline-block",
                        }}
                    >
                        box
                    </div>
                );
            })}
        </div>
    );
});
