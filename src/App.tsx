import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'

function Form() {
  const [itemData, setItemData] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [editData, setEditData] = useState({
    idx: 0,
    msg: "",
    active: false,
  });

  return (
    <>
      <h1> TODO List </h1>
      <p> {itemData} </p>
      <ul>
        {todoList.map((todoItem, todoIdx) => (
          <li key={todoIdx}>
            {todoItem}
            <button
              onClick={() => {
                setTodoList(
                  todoList.filter((_, idx) => {
                    return idx !== todoIdx;
                  })
                );
              }}
            >
              Delete
            </button>
            <button
              onClick={() =>
                setEditData({ idx: todoIdx, msg: todoItem, active: true })
              }
            >
              {" "}
              Edit{" "}
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={(e) => setItemData(e.target.value)} />
        <input
          type="submit"
          onClick={() => {
            setTodoList([...todoList, itemData]);
            // setItemData('')
          }}
        />
      </form>

      {editData.active ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            onChange={(e) =>
              setEditData({
                msg: e.target.value,
                idx: editData.idx,
                active: true,
              })
            }
          />
          <input
            type="submit"
            onClick={() => {
              setTodoList(
                todoList.map((elem, idx) => {
                  return idx === editData.idx ? editData.msg : elem;
                })
              );
              // setItemData('')
              setEditData({
                msg: editData.msg,
                idx: editData.idx,
                active: false,
              });
            }}
          />
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
