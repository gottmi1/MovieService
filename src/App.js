import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Wellcome to React!</h1>
      <Button text={"오태식이 돌아왔구나"} />
    </div>
  );
}

export default App;
