import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Table from '../Table/Table';
import s from './App.module.css';

function App() {
	return (
		<>
			<Header />
			<main className={s.main}>
				<Table />
			</main>
			<Footer />
		</>
	);
}

export default App;
