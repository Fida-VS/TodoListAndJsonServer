import { useEffect, useState } from "react";

export const useRequestGetTodos = (refreshTodosFlag) => {

	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((response) => response.json())
			.then(
				(loadedTodos) => {
					setTodos(loadedTodos);
				},
				[refreshTodosFlag]
			);
	});
return {
	todos
};

};
