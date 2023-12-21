import React, {useState} from "react";

export default function ({onSearch}) {
    const[searchValue, setSearchValue]=useState("");

    return(
        <div className="input-text">
            <input 
            type="text"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />
             <button className="btn" onClick={()=>onSearch(searchValue)}>Cerca</button>
        </div>
    )
}