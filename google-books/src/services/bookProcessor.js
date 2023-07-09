export const bookProcessor = (book) => {
	const title = book.volumeInfo.title ? book.volumeInfo.title : "No Title";
	const authors = book.volumeInfo.authors
		? book.volumeInfo.authors.join(", ")
		: "Unknown Author";
		const thumbnail =
		book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
			? book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
			: "https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png";
	const desc = book.volumeInfo.description
		? book.volumeInfo.description
		: "No description";
	const pages = book.volumeInfo.pageCount ? book.volumeInfo.pageCount : 0;
	const date = book.volumeInfo.publishedDate
		? book.volumeInfo.publishedDate
		: "Unknown";
	const isbn = book.volumeInfo.industryIdentifiers
		? book.volumeInfo.industryIdentifiers[
				book.volumeInfo.industryIdentifiers.length - 1
		  ].identifier
		: "Unknown";
	const lang = book.volumeInfo.language
		? book.volumeInfo.language
		: "Unknown";
	const cats = book.volumeInfo.categories
		? book.volumeInfo.categories.join(", ")
		: "None";
	const publisher = book.volumeInfo.publisher
		? book.volumeInfo.publisher
		: "Unknown Publisher";

		const pre = book.volumeInfo.previewLink;

	return {
		Title: title,
		Authors: authors,
		Thumbnail: thumbnail,
		Pages: pages,
		"Published Date": date,
		ISBN: isbn,
		Publisher: publisher,
		Language: lang,
		Genres: cats,
		Description: desc,
		Preview: pre,
	};
};



