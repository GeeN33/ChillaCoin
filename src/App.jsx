import './App.css'
import { Layout } from 'antd';
import AppHeader from "./components/Layout/AppHeader.jsx";
import AppSider from "./components/Layout/AppSider.jsx";
import AppContent from "./components/Layout/AppContent.jsx";

function App() {

  return (
      <Layout>
          <AppHeader />
          <Layout>
               <AppSider />
               <AppContent />
          </Layout>
      </Layout>
  )
}

export default App
