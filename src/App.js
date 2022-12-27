import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Answers from './Answers';
import Questions from './Questions';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Main />} />
      <Route path='/answers' element={<Answers />} />
      <Route path='/yourquestions' element={<Questions />} />
      <Route path='*' element={<h2 className='text-center'>404 page not found</h2>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
