import { useState } from 'react'
import './App.css'
import configService from './appwrite/config.post'
import authService from './appwrite/auth'

function App() {
  const [count, setCount] = useState(0)

  const handelFetchTodos = async () => {
    const todos = await configService.getRows();
    console.log(todos);
  }

  const createaccount = async () => {
    const res = await authService.createAccount('test@example.com', 'password', 'Test User');
    // console.log(res);
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handelFetchTodos}>Fetch Todos</button>
      <button onClick={createaccount}>Create Account</button>
      
    </>
  )
}

export default App
