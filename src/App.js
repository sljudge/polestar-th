import Header from './components/utilities/header';
import './App.css';
import logo from './assets/images/polestar_logo.png'
import SearchContainer from './components/features/searchContainer';
import ResultsContainer from './components/features/resultsContainer';

function App() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Header logo={logo} alt="Polestar" />
        <SearchContainer />
        <ResultsContainer />
      </div>
    </>
  );
}

export default App;
