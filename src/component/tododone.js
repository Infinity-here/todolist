import React from "react";
import { useSharedArray } from "../context/context";
function Tododone() {
  const { sharedArray, setSharedArray } = useSharedArray();

  const clearAll = () => {
    setSharedArray([]);
  };

  return (
    <div className="done-wrapper">
      <div className="heading">
        <h1 className="h1-done">Task Done</h1>
        <ul>
          {sharedArray
            ?.filter((ele) => ele.status)
            ?.map((e) => (
              <li className="task-done-list" key={e.id}>
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

export default Tododone;
