import GlobalConext from './context'
import Home from './pages/home'
function App() {
  return (
    <>
      <GlobalConext>
        <Home />
      </GlobalConext>
    </>
  )
}

export default App
