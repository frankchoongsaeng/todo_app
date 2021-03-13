import { useContext, useRef, useState } from "react";
import { AppContext } from "data_store";

export default function ListItem({ title, completed, index }) {

  const [isEditing, setIsEditing] = useState(false);
  const [_title, setTitle] = useState(title);
  const context = useContext(AppContext);

  const inputRef = useRef(null);

  const enterEditState = (e) => {
    e.preventDefault();
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 500)
  }

  const changeItemTitle = (e) => {
    e.preventDefault();
    context.actions.update(index, _title);
    setIsEditing(false);
  }

  const toggle = () => {
    context.actions.toggle(index);
  }

  const remove = () => {
    context.actions.remove(index);
  }

  return (
    <>
      <div className={`list-item ${completed ? "completed" : ""}`} >
        <span style={{
          visibility: isEditing ? "hidden" : "visible"
        }} className="toggle-list-item" onClick={toggle}>
          {completed && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>

        <form style={{
          flexGrow: "1",
          display: isEditing ? "inline-block" : "none"
        }}
          onSubmit={changeItemTitle}>
          <input ref={inputRef} value={_title} onChange={(e) => setTitle(e.target.value)} onBlur={changeItemTitle} type="text" className="edit-box" />
        </form>

        {!isEditing && (
          <>
            <span className="task-title" onDoubleClick={enterEditState}>{title}</span>
            <span className="remove-item" onClick={remove}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </>
        )}
      </div>
    </>
  )
}