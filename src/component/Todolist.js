import React, { useEffect, useState } from "react";
import { useSharedArray } from "../context/context";
const getlocalitem = () => {
  let list = localStorage.getItem("todo");
  if (list) {
    return JSON.parse(localStorage.getItem("todo"));
  } else {
    return [];
  }
};
function Todolist() {
  const { sharedArray, setSharedArray } = useSharedArray();

  const [data, setdata] = useState("");
  const [todos, setTodo] = useState([]);
  const [togglebtn, settogglebtn] = useState(true);
  const [edititem, setedititem] = useState(null);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
  }, [todos]);
  useEffect(() => {
    const localdata = getlocalitem();
    setTodo(localdata);
  }, []);

  const additems = () => {
    settogglebtn(true);
    const putdata = {
      id: new Date().getTime().toString(),
      value: data,
      status: false,
    };
    if (!data) {
    } else if (data && !togglebtn) {
      setTodo(
        todos.map((e, ind) => {
          console.log(e);
          if (ind === edititem) {
            console.log(ind, edititem);
            e = { ...e, value: data };
          }
          return e;
        })
      );
      setdata("");
      console.log(todos);
    } else {
      setTodo([...todos, putdata]);
      setdata("");
    }
    settogglebtn(true);
    setSharedArray((prev) => {
      console.log(prev, "asdfg", putdata);
      return [...prev, putdata];
    });
  };

  const donetask = (ind) => {
    const news = [...sharedArray];
    news.find((ele) => ele.id === ind).status = true;
    setSharedArray(news);
  };

  const deleteitem = (ind) => {
    const updatedtodo = todos.filter((e) => {
      return ind !== e.id;
    });
    setTodo(updatedtodo);
  };
  const Removeall = () => {
    setTodo([]);
  };
  const edittask = (ind) => {
    console.log(todos[ind]);
    setdata(todos[ind].value);
    settogglebtn(false);
    setedititem(ind);
  };
  return (
    <div className="todo">
      <h1 className="h1-task">TODO LIST </h1>
      <div className="input-btn">
        <input
          className="text-box"
          type="text"
          placeholder="Please Enter your task here"
          value={data}
          onChange={(e) => {
            setdata(e.target.value);
          }}
        />
        {togglebtn ? (
          <button onClick={additems}>Add task</button>
        ) : (
          <button onClick={additems}>Update task</button>
        )}
      </div>
      <div>
        <ul id="todo-task-list">
          {todos.map((e, ind) => {
            return (
              <div key={e.id}>
                <li className="task-list">
                  {e.value}
                  <div style={{ paddingLeft: "4px" }}>
                    <button onClick={() => edittask(ind)}>Edit</button>
                    <button onClick={() => deleteitem(e.id)}>Delete</button>
                    <button onClick={() => donetask(e.id)}>done</button>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <button className="btn" onClick={Removeall}>
        Remove All
      </button>
    </div>
  );
}
export default Todolist;
