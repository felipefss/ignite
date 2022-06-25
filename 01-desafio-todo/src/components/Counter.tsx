import styles from './Counter.module.css';

interface CounterProps {
  totalTasks: number;
  completedTasks?: number;
}

export default function Counter({ totalTasks, completedTasks = 0 }: CounterProps) {
  return (
    <strong className={styles.counter}>
      {completedTasks > 0 && (<span>{completedTasks} de </span>)}
      {totalTasks}
    </strong>
  );
}