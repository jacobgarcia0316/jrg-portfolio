import './scss/css/app.css';

import { Certs } from "./components/Certs";
import { Contact } from "./components/Contact";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { ToTop } from "./components/ToTop";

function App() {
  return (
    <>
      <ToTop />
      <Navbar />
    <div className="App">
      <Main className='app-item'/>
      <Projects className='app-item' />
      <Certs className='app-item' />
      <Contact className='app-item' />
    </div>
    </>
  );
}

export default App;
