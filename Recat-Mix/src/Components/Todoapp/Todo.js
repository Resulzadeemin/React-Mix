import style from "./Todo.module.css"
import { useState } from "react";
function App() {


  const [text, setText] = useState([
    {
      name: "",
      id: "",   
    }
  ])

  const [todo, settodo] = useState({
    name: "",
    id: "",
  })

  function take(e) {
    const a = e.target.value
    settodo({
      name: a,
      id: Date.now()
    })
  }

  function add() {
    setText([
      ...text, todo
    ])
    settodo({
      name: "",
      id: "",
    })
  }


  return (
    <div className={style.todo}>
      <input value={todo.name} onChange={take} placeholder="todoapp..." type="text" />
      <button onClick={add} >Add</button>
      {
        text.map(
          (e) => { return <h1 key={e.id}>{e.name}</h1> }
        )
      }
    </div>
  );
}

export default App;
