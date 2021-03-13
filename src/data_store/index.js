import { createContext, useState } from "react";

function useStore() {

  const [state, setState] = useState({
    todos: [],
    currentView: "ALL"
  })

  const actions = {
    add(item) {
      if (!item) return;

      setState(
        (oldState) => oldState.todos.push({ title: item, completed: false })
      );
    },
    remove() { },
    toggle() { }
  }

  return {
    state,
    actions
  }
}

export const AppContext = createContext();

export default function ContextManager({ children }) {

  const store = useStore();

  return (
    <AppContext.Provider value={store}>
      { children }
    </AppContext.Provider>
  )
}