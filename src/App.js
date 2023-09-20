
import styles from './App.module.css';
import { Title } from './components/Title';
import { TodoList } from './components/todo-list/todo-list';



export const App = () => {


	return (
		<div className={styles.app}>

		<Title />
		<TodoList />

		</div>
	);
};











