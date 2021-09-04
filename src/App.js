import React from "react";
import { Route, Switch } from "react-router";
import TodoList from "./modules/TodoList";

function App() {
  return (
    <div className="bg-gray-200 h-screen w-screen flex justify-center">
      <Switch>
        <Route path="/" render={() => <TodoList />} />
      </Switch>
    </div>
  );
}

export default App;
