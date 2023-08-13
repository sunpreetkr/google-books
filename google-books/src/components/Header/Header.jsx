import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.Header}>
				<h1>
					BookQuest
				</h1>
				<p>
					{/* A simple Google Books Search Engine. */}
					Explore books available at Google Books
				</p>
				
			</header>
	);
};

export default Header;