import styles from './addNewTodoForm.module.css';

export const AddNewTodoForm = ({ value, setValue, requestAddNewTodo, getSortedTodos, isSorted }) => {


	return (

			<form className={styles.addNewTodoForm}>
				<input
					type="text"
					name="newTodo"
					value={value}
					onChange={({ target }) => setValue(target.value)}
					className={styles.input}
				/>
				<button onClick={requestAddNewTodo} className={styles.AddNewTodoButton}>Добавить</button>
				<button onClick={() => getSortedTodos(isSorted)} className={styles.buttonAlphabeticalSorting}>По алфавиту</button>
			</form>

	);
};
