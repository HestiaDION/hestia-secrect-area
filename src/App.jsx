import './styles/App.css'

import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Statistics/>
      <Dashboard/>
      <Footer/>
    </>
  )
}

export default App
