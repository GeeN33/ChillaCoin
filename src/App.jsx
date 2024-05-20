import './App.css'
import Portfolio from "./pages/portfolio/Portfolio.jsx";

function App() {

  return (

      <div className="wrapper">

          <div className="main-grid">

              <div className="box-item header-grid">header-grid</div>
              <div className="box-item sidebar-grid">sidebar-grid</div>
              <div className="box-item pages-grid">
                  <Portfolio />
              </div>
              <div className="box-item footer-grid">footer-grid</div>

          </div>
      </div>
  )
}

export default App
