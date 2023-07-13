import styles from "./BookModal.module.scss";
import { bookProcessor } from "../../services/bookProcessor";

const BookModal = ({ show, book, onClose }) => {
	const item = bookProcessor(book);


	const handleClose = (e) => {
		const modalBg = document.getElementsByClassName(styles.Modal)[0];
		const closeBtn = document.getElementsByClassName(styles.close)[0];

		if (e.target === modalBg || e.target === closeBtn) {
			onClose();
		}
	};

	if (!show) {
		return null;
	}

	return (
		<section className={styles.Modal} onClick={handleClose}>
		<div className={styles.Modal__Content}>
			
		<span className={styles.close} onClick={handleClose}>
              &times;
            </span>
				<div>
					<img
						className={styles.Modal__Content__Img}
						src={item["Thumbnail"]}
						alt="cover"
					/>
					<p className={styles.Modal__Content__Info}>Title: {item["Title"]}</p>
					<p className={styles.Modal__Content__Info}>Author(s): {item["Authors"]}</p>
					<p className={styles.Modal__Content__Info}>ISBN: {item["ISBN"]}</p>
					<p className={styles.Modal__Content__Info}>Language: {item["Language"]}</p>
					<p className={styles.Modal__Content__Info}>Genres: {item["Genres"]}</p>
					<p className={styles.Modal__Content__Info}>Published Date: {item["Published Date"]}</p>
					<p className={styles.Modal__Content__Info}>Publisher: {item["Publisher"]}</p>		
					<a href={item["Preview"]} target="_blank">
						<button className={styles.Modal__Content__Btn}>Preview Book</button>
					</a>
				</div><p className={styles.Modal__Content__Info}>Description:</p>
					<p>{item["Description"]}</p>
			</div>
		</section>
	);
};

export default BookModal;