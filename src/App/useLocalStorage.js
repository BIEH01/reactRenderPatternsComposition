import React from "react";

function useLocalStorage(itemName, initialValue) {
	const [synchronized, setSynchronized] = React.useState(true);
	const [item, setItem] = React.useState(initialValue);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);

				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
					setItem(parsedItem);
				}

				setLoading(false);
				setSynchronized(true);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		}, 2000);
	}, [synchronized]);

	const saveItem = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	};

	const synchronize = () => {
		setLoading(true);
		setSynchronized(false);
	};

	return {
		item,
		saveItem,
		loading,
		error,
		synchronize,
	};
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
