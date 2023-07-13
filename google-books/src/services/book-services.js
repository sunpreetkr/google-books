
export const getBooksBySearch = async (query) => {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`,
		{
			headers: { Accept: "application/json" },
		}
	);
	if (!response.ok) {
		throw new Error(`No books found for ${query}`);
	}
	const data = await response.json();
	if (data.totalItems === 0) {
		throw new Error(`No books found for ${query}`);
  }

	return data.items;
};