import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="bg-gray-700 h-screen w-full p-8">
      <h1 className="text-2xl font-bold mb-4">Manage Your Todos</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
