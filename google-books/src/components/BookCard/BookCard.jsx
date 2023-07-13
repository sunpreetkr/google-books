import BookModal from "../BookModal/BookModal";
import styles from "./BookCard.module.scss";
import { useState } from "react";
import { bookProcessor} from "../../services/bookProcessor";


const BookCard = ({ book }) => {
	//processing the book array
	const item = bookProcessor(book);



	//set state variable for modal box
	const [show, setShow] = useState(false);

	//creating function to change the state

	const showModal = () => {
		setShow(true);
	};

	const closeModal = () => {
		setShow(false);
	};

	return (
		<>
			<div className={styles.Book} onClick={showModal}>
			<img className={styles.Book__Thumb} src={item["Thumbnail"]} alt="Book" />
				<div className={styles.Book__Info}>
					<h4>{item["Title"]}</h4>
					<p>By {item["Authors"]}</p>
					<div className={styles.Book__Info_Desc}>
						<p>
							<i>{item["Description"]}</i>
						</p>
					</div>
				</div>
			</div>
			{show ? (
				<BookModal show={show} book={book} onClose={closeModal} />
			) : (
				<></>
			)}
		</>
		
	);
};

export default BookCard;