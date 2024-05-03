import Button from './Button';
import styles from './Button.module.css';

function App() {
  return (
    <div>
      <hi className={styles.title}>Welcome Back</hi>
      <Button text={"hi"} />
    </div>
  );
}

export default App;
