import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContextManager from "data_store";

// import pages
import Home from "pages";

function App() {
  return (
    <BrowserRouter>
      <ContextManager>
          <Switch>
            <Route path="/">
               <Home />
            </Route>
          </Switch>
      </ContextManager>
    </BrowserRouter>
  );
}

export default App;
