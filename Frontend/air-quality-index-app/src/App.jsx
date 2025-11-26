import { BrowserRouter } from "react-router-dom"
import CustomRoutes from "./routes/CustomRoutes"
import { Provider } from "react-redux"
import store from "./redux/store"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <CustomRoutes/>
          <Toaster/>
        </BrowserRouter>
      </Provider>
        
    </>
  )
}

export default App
