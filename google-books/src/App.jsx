import { useState} from "react";
import BooksLoader from "././components/BooksLoader/BooksLoader";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";

const App = () => {
	const [search, setSearch] = useState("");

	const handleSubmit = (newSearch) => {
		setSearch(newSearch);
	};


	return (
		<>
			<div className={styles.App}>
			<Header/>
			<SearchBar onSubmit={handleSubmit} />
		   <BooksLoader searchTerm={search} />
		</div>
		<Footer/>
		</>
	
		
	);
};

export default App;
