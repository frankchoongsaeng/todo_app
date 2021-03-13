import { useContext } from "react";
import { AppContext } from "data_store";

import ItemCounter from "components/item-counter";
import TodoInput from "components/todo-input";
import Controls from "components/controls";


export default function DefaultLayout({ children }) {

  const { state } = useContext(AppContext);

  return (
    <>
      <div className="main">
        {/* title */}
        <h1 className="app-title">todos</h1>

        {/* app area */}
        <div className={`app-area ${state.length > 0 ? "has-content" : ""}`}>
          <TodoInput />

          <div className="list-section">
            {children}
          </div>

          {state.length > 0 && (
            <div className="controls">
              <ItemCounter />
              <Controls />
            </div>
          )}
        </div>

        {/* footer */}
        <p className="footer-text">
          Double-click to edit a todo <br />
          Created by <a href="https://twitter.com/choongsaengF" rel="noreferrer" target="_blank">Frank Choongsaeng;</a> <a href="https://github.com/frankchoongsaeng/todo_app" rel="noreferrer" target="_blank">Check the sources for this project on GitHub</a>
          <br />

          <i>
            Inital design by <a href="http://twitter.com/tarmil_" rel="noreferrer" target="_blank">Loïc Denuzière</a> - <a href="http://twitter.com/tarmil_" rel="noreferrer" target="_blank">GitHub source</a><br />
          </i>

          Part of TodoMVC
        </p>
      </div>
    </>
  )
}