import React, { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";


function Simpledebounce({ onSearch }: { onSearch: (value: string) => void }) {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 500);
useEffect(() => {
    if (debouncedValue === undefined || debouncedValue === null) return;
    onSearch(debouncedValue);
}, [debouncedValue, onSearch]);


    return (
        <input
        style={{border:"1px solid #d2d3d4", padding:"8px 12px", borderRadius:"6px", maxHeight:"30px"}}
            type="text"
            placeholder="Search notes..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}

export default Simpledebounce;;
