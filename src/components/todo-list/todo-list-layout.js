import styles from './todo-list.module.css';
import { AddNewTodoForm } from '../addNewTodoForm/addNewTodoForm';
import { Todo } from '../todo/todo';

export const TodoListLayout = ({
	value,
	setValue,
	requestAddNewTodo,
	getSortedTodos,
	sortedTodos,
	isSorted,
	requestUpdateTodo,
	requestDeleteTodo,
	edit,
	setEdit,
	updateInputValue,
	setUpdateInputValue,
}) => {
	return (
		<>
			<AddNewTodoForm
				value={value}
				setValue={setValue}
				requestAddNewTodo={requestAddNewTodo}
				isSorted={isSorted}
			    getSortedTodos={getSortedTodos}
			/>
			<ul className={styles.todoList}>
				{sortedTodos.map(({ id, text }) => (
					<Todo
						key={id}
						text={text}
						id={id}
						edit={edit}
						requestUpdateTodo={requestUpdateTodo}
						requestDeleteTodo={requestDeleteTodo}
						updateInputValue={updateInputValue}
						setUpdateInputValue={setUpdateInputValue}
						setEdit={setEdit}
					/>
				))}
			</ul>
		</>
	);
};
