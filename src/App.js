import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/landingPage';
import  {LanguageProvider}  from './components/LanguageProvider';
function App() {
  return (
    <>
      <LanguageProvider>
        <LandingPage />
      </LanguageProvider>
    </>
  );
}

export default App;
