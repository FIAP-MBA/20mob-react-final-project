

import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Home";
import { ApplictionState } from "../context/ApplicationContext";

function App() {
  return (
    <BrowserRouter>
      <ApplictionState>
        <Route path="/" component={Home} />
      </ApplictionState>
    </BrowserRouter>
  );
}

export default App;
