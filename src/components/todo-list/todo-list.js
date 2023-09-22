import { useState, useEffect } from 'react';
import { TodoListLayout } from './todo-list-layout';
import { useRequestAddNewTodo } from '../../hooks/use-request-add-new-todo';
import { useRequestUpdateTodo } from '../../hooks/use-request-update-todo';
import { useRequestDeleteTodo } from '../../hooks/use-request-delete-todo';

export const TodoList = () => {

	const [value, setValue] = useState('');
	const [updateInputValue, setUpdateInputValue] = useState('');
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [isSorted, setIsSorted] = useState(false);
	const [todos, setTodos] = useState([]);

	const [edit, setEdit] = useState(null);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

			useEffect(() => {
				fetch('http://localhost:3005/todos')
					.then((response) => response.json())
					.then(
						(loadedTodos) => {
							console.log('loadedTodos', loadedTodos)
							setTodos(loadedTodos);
						},
						[refreshTodosFlag]
					);
			}, [refreshTodosFlag]);


	//для поиска по тудушкам
	const filteredTodos = todos.filter((todo) => {
		return todo.text.toLowerCase().includes(value.toLowerCase());
	});


	//sortedTodos вывожу в todo-list-layout через map

	const {requestAddNewTodo} = useRequestAddNewTodo(refreshTodos, value);
	const {requestUpdateTodo} = useRequestUpdateTodo(refreshTodos, updateInputValue, setEdit, setUpdateInputValue);
	const {requestDeleteTodo} = useRequestDeleteTodo(refreshTodos);

    const sortedTodos = [...todos].sort((a, b) => {
				if (b.text.toLowerCase() > a.text.toLowerCase()) {
				  return -1;
				}
				if (b.text.toLowerCase() < a.text.toLowerCase()) {
				  return 1;
				}
				return 0;
			  });


	// function getSortedTodos(isSorted, refreshTodos){
	// 	setIsSorted(!isSorted);
	// 	if(isSorted === false){
	// 		setSortedTodos(filteredTodos);
	// 	} else if(isSorted === true){
	// 		let newTodos = sort([...filteredTodos]);

	// 		setSortedTodos(newTodos);
	// 	}

	// 	refreshTodos();
	// }


	//console.log(sortedTodos);


// function sort(array){
// 	array.sort((a, b) => {
// 		if (b.text.toLowerCase() > a.text.toLowerCase()) {
// 		  return -1;
// 		}
// 		if (b.text.toLowerCase() < a.text.toLowerCase()) {
// 		  return 1;
// 		}
// 		return 0;
// 	  });
// 	  return array;
// }


	return (
		<TodoListLayout
			value={value}
			setValue={setValue}
			//getSortedTodos={getSortedTodos}
			requestAddNewTodo={requestAddNewTodo}
			requestUpdateTodo={requestUpdateTodo}
			requestDeleteTodo={requestDeleteTodo}
			isSorted={isSorted}
			setIsSorted={setIsSorted}
			sortedTodos={sortedTodos}
			filteredTodos={filteredTodos}
			edit={edit}
			setEdit={setEdit}
			updateInputValue={updateInputValue}
			setUpdateInputValue={setUpdateInputValue}
		/>
	);
};
