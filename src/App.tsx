import { Switch, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Main from "./pages/Main";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
