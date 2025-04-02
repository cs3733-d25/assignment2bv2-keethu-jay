import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import Intro from './routes/intro.tsx'
import Hobby1 from './routes/hobby1.tsx'
import Hobby2 from './routes/hobby2.tsx'
import Title from './routes/title.tsx'

function Navbar() {
    const location = useLocation();

    if (location.pathname === '/') return null;

    return (
        <nav style={{ padding: '10px', background: '#b3c7f7', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
            <Link to="/" style={{ marginRight: '10px' }}>Title</Link>
            <Link to="/keethu" style={{ marginRight: '10px' }}>Keethu Hobbies</Link>
            <Link to="/nate" style={{ marginRight: '10px' }}>Nate Hobbies</Link>
            <Link to="/intro">Intro</Link>
        </nav>
    );
}
function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Title />} />
              <Route path="/keethu" element={<Hobby1 />} />
              <Route path="/nate" element={<Hobby2 />} />
              <Route path="/intro" element={<Intro name1="Keethu" name2="Nate" />} />
          </Routes>
      </Router>
  );
}

export default App;
