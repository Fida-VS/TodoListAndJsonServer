

export const useRequestAddNewTodo = (refreshTodos, value) => {

	const requestAddNewTodo = () => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				text: value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Todo added, answer of server:', response);
				refreshTodos();
			});
	};

			return {
				requestAddNewTodo
			};
};

