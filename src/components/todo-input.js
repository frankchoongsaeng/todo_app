import { AppContext } from "data_store";
import { useContext, useState } from "react";


export default function TodoInput(props) {

  const [text, setText] = useState("");
  const [isMarked, setIsMarked] = useState(false);
  const context = useContext(AppContext);


  const addTodo = (e) => {
    e.preventDefault();
    context.actions.add(text);
    setText("");
  }

  const toggleMarkAll = () => {
    context.actions.toggleAll(!isMarked);
    setIsMarked(ismarked => !ismarked);
  }

  return (
    <>
      <div className="input-section">
        <label style={{
          visibility: context.state.length ? "visible" : "hidden",
          opacity: context.state.filter(todo => !todo.completed).length  ? "0.3" : "0.7"
        }} onClick={toggleMarkAll} htmlFor="add">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </label>
        <form onSubmit={addTodo}>
          <input value={text} onChange={(e) => setText(e.target.value)} className="add-input" type="text" placeholder="What needs to be done?" />
        </form>
      </div>
    </>
  )
}