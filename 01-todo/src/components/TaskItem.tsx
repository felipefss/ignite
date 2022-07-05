import { Trash } from 'phosphor-react';
import { ChangeEvent } from 'react';
import styles from './TaskItem.module.css';

export interface ITodoItem {
  id: string;
  task: string;
}

interface TaskProps {
  taskItem: ITodoItem;
  onDelete: (id: string) => void;
  toggleComplete: (id: string, isComplete: boolean) => void;
  isComplete?: boolean;
}

export default function TaskItem({ taskItem, onDelete, toggleComplete, isComplete = false }: TaskProps) {

  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    toggleComplete(taskItem.id, event.target.checked);
  }

  return (
    <div className={styles.taskItem}>
      <label className={styles.checkmarkContainer}>
        <input type="checkbox" onChange={handleChangeCheckbox} checked={isComplete} />
        <span className={styles.taskText}>
          {taskItem.task}
        </span>
        <span className={styles.checkmark}></span>
      </label>
      <Trash className={styles.trashIcon} size={24} onClick={() => onDelete(taskItem.id)} />
    </div>
  );
}