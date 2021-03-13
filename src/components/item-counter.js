import { useContext } from "react";
import { AppContext } from "data_store";

export default function ItemCounter(props) {

  const { state } = useContext(AppContext);

  const getActive = () => {
    return state.filter(tasks => !tasks.completed).length;
  }

  return (
    <>
      <p className="items-count">
        { getActive() } {" "}
        item{getActive() !== 1 ? "s" : ""} left
      </p>
    </>
  )
}