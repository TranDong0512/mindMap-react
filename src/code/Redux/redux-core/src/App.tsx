
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Login from './page/Login'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state: { user: { name: string } }) => state.user)
  console.log(user);

  return (
    <>
      {user ? (
        <Header
          user={user}
          onLogout={() => dispatch({ type: 'user/logout' })}
        />
      ) : (
        <Login />
      )}
    </>
  )
}

export default App
