import BookCard from "../../components/BookCard/BookCard";
import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
	return (
		<>
			<section className={styles.BookList__Grid}>
				{books.map((book) => {
					return <BookCard key={book?.id} book={book} />;
				})}
				
			</section>
			
		
		</>
	);
};

export default BookList;