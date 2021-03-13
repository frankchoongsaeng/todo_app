import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContextManager from "data_store";

// import pages
import Home from "pages";
import Completed from "pages/completed";
import Active from "pages/active";

function App() {
  return (
    <BrowserRouter>
      <ContextManager>
          <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route path="/completed">
               <Completed />
            </Route>
            <Route path="/active">
               <Active />
            </Route>
          </Switch>
      </ContextManager>
    </BrowserRouter>
  );
}

export default App;
