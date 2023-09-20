

export const useRequestDeleteTodo = (refreshTodos) => {
	const requestDeleteTodo = (id) => {
		fetch('http://localhost:3005/todos/' + id, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Todo deleted, answer of server:', response);
				refreshTodos();
			});
	};

	return {
		requestDeleteTodo
	}
}
