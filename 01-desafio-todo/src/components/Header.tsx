import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocketLogo} alt="Foguete levantando voo" />
        <div>
          <span>to</span>
          <span>do</span>
        </div>
      </div>
    </header>
  );
}