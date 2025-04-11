import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Today from './components/Today';
import Main from './components/Main';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Week from './components/Week';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/header' element={<Header />}>
            <Route path='/header/today' element={<Today />} />
            <Route path='/header/week' element={<Week />} />
          </Route>
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
