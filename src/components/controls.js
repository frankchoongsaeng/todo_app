import { useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "data_store";

export default function Controls() {

  const { actions: { removeCompleted } } = useContext(AppContext);
  return (
    <>
      <div className="toggle-display">
        <NavLink activeClassName="navlink-active" className="btn" to="/" exact >All</NavLink>
        <NavLink activeClassName="navlink-active" className="btn" to="/active" role="button">Active</NavLink>
        <NavLink activeClassName="navlink-active" className="btn" to="/completed">Completed</NavLink>
      </div>
      <button className="btn btn-link" onClick={removeCompleted}>Clear completed</button>
    </>
  )
}