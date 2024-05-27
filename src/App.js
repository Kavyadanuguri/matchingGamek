import { Route, BrowserRouter, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Landing2 from "./components/Landing2";
import Landing3 from "./components/Landing3";
import Instruction from "./components/Instruction";
import Activity from "./components/Activity";

const App = () => {
  console.log("k");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/next" component={Landing2} />
        <Route path="/yes" component={Landing3} />
        <Route path="/instruction" component={Instruction} />
        <Route path="/activity" component={Activity} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
