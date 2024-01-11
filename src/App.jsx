import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route exact path="/page1" element={<Page1 setProgress={setProgress} />} />
          <Route exact path="/page2" element={<Page2 setProgress={setProgress} />} />
          <Route exact path="/page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App