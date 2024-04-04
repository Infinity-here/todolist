import React, { useEffect, useState } from "react";
import { useSharedArray } from "../context/context";

function Todonotdone() {
  const { sharedArray, setSharedArray } = useSharedArray();
  console.log(sharedArray, "sharedarray");
  useEffect(()=>{
    
  })

  const clearAll = () => {
    setSharedArray([]);
  };

  console.log("is rendering");
  return (
    <div className="notdone-wrapper">
      <div className="heading">
        <h1 className="h1-not-done">Task Not Done</h1>
        <ul>
          {sharedArray
            ?.filter((ele) => !ele.status)
            ?.map((e) => (
              <li className="task-notdone-list" key={e.id}>
                {e.value}
              </li>
            ))}
        </ul>
        <button className="btn-clear" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Todonotdone;
