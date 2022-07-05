import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ClipboardImage from '../assets/Clipboard.svg';
import Counter from './Counter';
import TaskItem, { ITodoItem } from './TaskItem';
import styles from './Tasks.module.css';

export default function Tasks() {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [completedTasks, setCompletedTasks] = useState<ITodoItem[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    setTotalTasks(todoList.length + completedTasks.length);
  }, [todoList, completedTasks]);

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    setTodoList(state => [
      ...state,
      {
        id: uuidv4(),
        task: newTask
      }
    ]);

    // Clear input
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Por favor, preencha este campo');
  }

  function deleteTask(id: string, ref: 'complete' | 'notComplete') {
    if (ref === 'notComplete') {
      setTodoList(todoList.filter(task => task.id !== id));
    } else {
      setCompletedTasks(completedTasks.filter(task => task.id !== id))
    }
  }

  function markTaskCompleteTrue(id: string) {
    const completedTask = todoList.find(task => task.id === id);
    deleteTask(id, 'notComplete');

    if (completedTask) {
      setCompletedTasks(state => [completedTask, ...state]);
    }
  }

  function markTaskCompleteFalse(id: string) {
    const notCompletedTask = completedTasks.find(task => task.id === id);
    deleteTask(id, 'complete');

    if (notCompletedTask) {
      setTodoList(state => [...state, notCompletedTask]);
    }
  }

  function toggleTaskComplete(id: string, isComplete: boolean) {
    if (isComplete) {
      markTaskCompleteTrue(id);
    } else {
      markTaskCompleteFalse(id);
    }
  }

  return (
    <>
      <form className={styles.addTask} onSubmit={handleAddNewTask}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          value={newTask}
          required
        />
        <button type="submit">
          <strong>Criar</strong>
          <PlusCircle size={16} />
        </button>
      </form>

      <div className={styles.tasks}>
        <div className={styles.tasksInfo}>
          <div>
            <strong>Tarefas criadas</strong>
            <Counter totalTasks={totalTasks} />
          </div>

          <div>
            <strong>Concluidas</strong>
            <Counter totalTasks={totalTasks} completedTasks={completedTasks.length} />
          </div>
        </div>

        <div className={styles.taskList}>
          {
            (todoList.length + completedTasks.length) > 0 ?
              todoList.map(
                (item) =>
                  <TaskItem
                    key={item.id}
                    taskItem={item}
                    onDelete={(id) => deleteTask(id, 'notComplete')}
                    toggleComplete={toggleTaskComplete}
                  />
              ).concat(
                completedTasks.map(
                  item =>
                    <TaskItem
                      key={item.id}
                      taskItem={item}
                      onDelete={(id) => deleteTask(id, 'complete')}
                      toggleComplete={toggleTaskComplete}
                      isComplete
                    />
                )
              ) :
              (
                <div className={styles.emptyList}>
                  <img src={ClipboardImage} alt="Imagem de uma prancheta" />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              )}
        </div>
      </div>
    </>
  );
}