import { createContext, useState } from "react";

function useStore() {

  const [state, setState] = useState([])

  const actions = {
    add(title) {
      setState(
        (oldState) => [...oldState, { title, completed: false }]
      );
    },
    remove(index) {
      let stateCopy = [...state];
      stateCopy.splice(index, 1);
      setState(stateCopy);
    },
    removeCompleted() {
      let filtered = state.filter(task => !task.completed);
      setState(filtered)
    },
    toggle(index) {
      let stateCopy = [...state];
      stateCopy[index].completed = !stateCopy[index].completed;
      setState(stateCopy)
    },
    toggleAll(tocompleted) {
      setState(oldState => oldState.map(tasks => ({ ...tasks, completed: tocompleted })))
    },
    update(index, newtitle) {
      let stateCopy = [...state];
      stateCopy[index].title = newtitle;
      setState(stateCopy);
    },
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
      { children}
    </AppContext.Provider>
  )
}