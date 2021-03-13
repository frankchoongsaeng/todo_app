import { useContext } from "react";
import { AppContext } from "data_store";
import DefaultLayout from "layouts";
import ListItem from "components/list-item";

export default function Completed() {

  const context = useContext(AppContext);

  return (
    <DefaultLayout>

      {
        context.state.map((todo, index) => {
          return todo.completed
            ? (
              <ListItem
                key={todo.title + index}
                index={index}
                title={todo.title}
                completed={todo.completed}
              />
            )
            : null
        })
      }

    </DefaultLayout>
  )
}