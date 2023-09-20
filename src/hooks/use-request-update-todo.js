

export const useRequestUpdateTodo = (refreshTodos, updateInputValue, setEdit) => {

	const requestUpdateTodo = (id) => {

		fetch('http://localhost:3005/todos/' + id, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				text: updateInputValue,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Todo updated, answer of server:', response);
				refreshTodos();
				setEdit(null);
			});
	};

	return {
		requestUpdateTodo
	}

}
