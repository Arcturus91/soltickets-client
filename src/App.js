import { useState } from "react";
import './App.css';
import routes from "./config/routes";
import { Routes, Route } from "react-router-dom";



function App() {

  const [user, setUser] = useState(null);
 
  function authentication(user) {
    setUser(user);
  }

  return (
    <div className="App">
      

      <Routes>
        {routes({ user, authentication }).map(
          ({ path, element }, index_route) => (
            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>


    </div>
  );
}

export default App;
