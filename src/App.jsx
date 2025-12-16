import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route index element = {<Home />}>
            </Route>
            <Route path = "*" element = {<NotFound />}>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
