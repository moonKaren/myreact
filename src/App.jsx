import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Routing } from "./rouring/Routing"


export function App() {

  return (
    <div className="layout">
      <Header />

      <Routing />

      <Footer />
    </div>
  )
}