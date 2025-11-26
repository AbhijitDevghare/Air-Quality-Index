import { BrowserRouter } from "react-router-dom"
import CustomRoutes from "./routes/CustomRoutes"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <CustomRoutes/>
        </BrowserRouter>
      </Provider>
        
    </>
  )
}

export default App
