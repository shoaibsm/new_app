import './App.css';
import Navbar from './components/nav/Navbar';
import TopSearch from './components/topsearches/TopSearch';
import NewsApp from './pages/newsapp/NewsApp';

function App() {
	return (
		<div className="App">
			<Navbar />
			<TopSearch />
			<NewsApp />
		</div>
	);
}

export default App;
