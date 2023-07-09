import React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



const SearchBar = ({ onSubmit }) => {
	//setting input value for the submit button
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		const form = document.getElementById("searchForm");
		event.preventDefault();
		// const formData = new FormData(event.target);
		// const searchTerm = formData.get("search");
		onSubmit(inputValue);
		form.reset();
		setInputValue("");
	};


	return (
		<>			
			<form className={styles.SearchBar} id="searchForm" onSubmit={handleSubmit}>	
			<input
				type="text"
				name="search"
				placeholder=" Search a book"
				className={styles.SearchBar__Input}
				onChange={handleChange}
				value={inputValue}
			/>
			
			<button type="submit"className={styles.SearchBar__Button}>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</form>
	
		
		</>
		
	);
};

export default SearchBar;