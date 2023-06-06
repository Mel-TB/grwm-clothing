import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const ProductContext = createContext({
	products: [],
});

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getCategoryMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
		};

		getCategoryMap();
	}, []);

	const value = { products };
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
