import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/landingPage';
import  {LanguageProvider}  from './components/LanguageProvider';
import SignInPage from './components/SignInPage';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LanguageProvider>
          <LandingPage/>
        </LanguageProvider>}/>
        <Route path='/SignInPage' element={<SignInPage/>}/>
      </Routes>
    </>
  );
}

export default App;
