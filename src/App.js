import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Answers from './Answers';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Main />} />
      <Route path='/answers' element={<Answers />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
