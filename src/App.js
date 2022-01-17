import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]); // 기본 값 : 빈 배열

  const onChnage = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return; // toDo가 비어있다면, 이 함수가 작동되지 않게 끊어주기위해 바로 return;을 해줌.
    } else {
      setTodos((currentArray) => [toDo, ...currentArray]);
      setTodo(""); // input의 value를 비워주는 값. input value = toDo = setTodo 이어져있기 떄문에 toDo의 값이 ""이 되면 input의 밸류도 ""이 되는 것
    }
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChnage}
          value={toDo}
          type="Text"
          placeholder="할 일을 적어"
        />
        <button>Add To do</button>
      </form>
    </div>
  );
}

export default App;
