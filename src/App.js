import Header from './components/utilities/header';
import './App.css';
import logo from './assets/images/polestar_logo.png'
import SearchContainer from './components/features/searchContainer';
import ResultsContainer from './components/features/resultsContainer';
import Page from './components/utilities/page';

function App() {

  return (
    <>
      <Page>
        <Header logo={logo} alt="Polestar" />
        <SearchContainer />
        <ResultsContainer className="flex-grow" />
      </Page>
    </>
  );
}

export default App;
