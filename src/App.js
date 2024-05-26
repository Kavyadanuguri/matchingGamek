import { Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";

import Landing2 from "./components/Landing2";
import Landing3 from "./components/Landing3";
import Instruction from "./components/Instruction";
import Activity from "./components/Activity";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" element={<Landing />} />
        <Route path="/next" element={<Landing2 />} />
        <Route path="/yes" element={<Landing3 />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/activity" element={<Activity />} />
      </Switch>
    </div>
  );
}

export default App;
