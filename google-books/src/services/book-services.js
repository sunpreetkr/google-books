
export const getBooksBySearch = async (query) => {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`
	);
	// if (!response.ok) {
	// 	throw new Error("Failed to find books");
	// }
	const data = await response.json();
	// if (!data.items || data.items.length === 0) {
  //   throw new Error(`No books found for ${query}`);
  // }
	return data.items;
};