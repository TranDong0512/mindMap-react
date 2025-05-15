import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { publicRouter } from './router/routers'
import { Counter } from './code/HOC'

function App() {
  const router = createBrowserRouter([...publicRouter])
  return (
    // <RouterProvider router={router} />
    <Counter />
  )
}

export default App
