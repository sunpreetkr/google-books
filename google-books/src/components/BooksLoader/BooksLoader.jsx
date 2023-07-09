import React, { useEffect, useState } from "react";
import { getBooksBySearch } from "../../services/book-services";
import BookList from "../BookList/BookList";
import styles from "./BooksLoader.module.scss";
import { ColorRing } from "react-loader-spinner";
import Error from "../Error/Error";



const BooksLoader = ({ searchTerm }) => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);


	useEffect(() => {
		setError(null);
		setBooks([]);
		setLoading(true);
		getBooksBySearch(searchTerm)
			.then((bookArr) => {
				setLoading(false);
				setBooks(bookArr);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => setLoading(false));
	}, [searchTerm]);



	return (
		<>
			{loading && (
				<div className={styles.spinner}>
					<ColorRing
						visible={true}
						height="100"
						width="100"
						colors={["#051326"]}
					
					/>
				</div>
			)}
			{!loading && error && <Error error={error.message} />}
			{!loading && books && (
				<BookList
					books={books}
				/>
			)}
		</>
	);
};

export default BooksLoader;