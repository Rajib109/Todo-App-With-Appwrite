import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="bg-gray-700 h-screen">
      <h1>Manage Your Todos</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
