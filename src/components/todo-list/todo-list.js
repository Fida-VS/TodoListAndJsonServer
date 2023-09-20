import { useState } from 'react';
import { TodoListLayout } from './todo-list-layout';
import { useRequestGetTodos } from '../../hooks/use-request-get-todos';
import { useRequestAddNewTodo } from '../../hooks/use-request-add-new-todo';
import { useRequestUpdateTodo } from '../../hooks/use-request-update-todo';
import { useRequestDeleteTodo } from '../../hooks/use-request-delete-todo';

export const TodoList = () => {

	const [value, setValue] = useState('');
	const [updateInputValue, setUpdateInputValue] = useState('');
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [isSorted, setIsSorted] = useState(false);

	const [edit, setEdit] = useState(null);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const {todos} = useRequestGetTodos(refreshTodosFlag);

	const filteredTodos = todos.filter((todo) => {
		return todo.text.toLowerCase().includes(value.toLowerCase());
	});

	const [sortedTodos, setSortedTodos] = useState(filteredTodos);

	const {requestAddNewTodo} = useRequestAddNewTodo(refreshTodos, value);
	const {requestUpdateTodo} = useRequestUpdateTodo(refreshTodos, updateInputValue, setEdit, setUpdateInputValue);
	const {requestDeleteTodo} = useRequestDeleteTodo(refreshTodos);


	function getSortedTodos(isSorted){
		setIsSorted(!isSorted);
		if(isSorted === false){
			setSortedTodos(filteredTodos);
		} else if(isSorted === true){
			let newTodos = [...filteredTodos].sort((a, b) => {
						if (b.text.toLowerCase() > a.text.toLowerCase()) {
						  return -1;
						}
						if (b.text.toLowerCase() < a.text.toLowerCase()) {
						  return 1;
						}
						return 0;
					  });

			setSortedTodos(newTodos);
		}
	}


	//console.log(sortedTodos);



	return (
		<TodoListLayout
			value={value}
			setValue={setValue}
			getSortedTodos={getSortedTodos}
			requestAddNewTodo={requestAddNewTodo}
			requestUpdateTodo={requestUpdateTodo}
			requestDeleteTodo={requestDeleteTodo}
			isSorted={isSorted}
			sortedTodos={sortedTodos}
			edit={edit}
			setEdit={setEdit}
			updateInputValue={updateInputValue}
			setUpdateInputValue={setUpdateInputValue}
		/>
	);
};
