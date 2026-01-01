
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./component/TodoList";
import TodoDetails from "./component/TodoDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
