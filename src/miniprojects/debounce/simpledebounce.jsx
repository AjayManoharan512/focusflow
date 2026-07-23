import React, { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

function Simpledebounce() {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 500);

    useEffect(() => {
        if (!debouncedValue) return;
        console.log("api fetch", debouncedValue);
    }, [debouncedValue]);

    return (
        <input
            type="text"
            placeholder="Enter here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}

export default Simpledebounce;
