/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../features/todo/todoSlie';
import styles from './TodoItem.module.css';

const TodoItem = ({ todoItem }: any) => {
    console.log(todoItem);

    const dispatch = useDispatch()
    return (
        <div className={styles.todoItem}>
            <input
                type="checkbox"
                checked={todoItem.completed}
                className={styles.checkbox}
                onClick={() => dispatch(toggleTodo(todoItem.id))}
            />
            <span className={`${styles.text} ${todoItem.completed ? styles.completed : ''}`}>
                {todoItem.title}
            </span>
            <button
                className={styles.deleteButton}
                onClick={() => dispatch(removeTodo(todoItem.id))}
            >
                Xóa
            </button>
        </div>
    );
};

export default TodoItem;