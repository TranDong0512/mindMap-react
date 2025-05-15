import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.css'
import { useState } from "react";
import type { RootState } from '../../store/store';
import { addTodo } from '../../features/todo/todoSlie';
const TodoList = () => {
    const dispatch = useDispatch()
    const { todos } = useSelector((state: RootState) => state.todos || [])
    console.log(todos);

    const [inputValue, setInputValue] = useState('');
    const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (inputValue) {
            dispatch(addTodo(inputValue))
            setInputValue('')
        }
    }
    if (!Array.isArray(todos)) {
        return (
            <p className={styles.emptyMessage}>Chưa có công việc nào!</p>
        )
    }
    return (
        <div className={styles.todoList}>
            <h1 className={styles.title}>Danh sách công việc</h1>
            <form className={styles.form} onSubmit={(event) => handleAddTodo(event)}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nhập công việc mới..."
                    className={styles.input}
                />
                <button type="submit" className={styles.addButton} >
                    Thêm
                </button>
            </form>
            <div className={styles.list}>
                {todos.map((item) => (
                    <TodoItem key={item.id} todoItem={item} />
                ))}
            </div>
        </div>
    );

}
export default TodoList;