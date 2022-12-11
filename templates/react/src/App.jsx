import { useState } from 'react'
import styles from './App.module.scss'

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.container}>
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <img className={styles.logo} src="/react.svg" alt="Logo" />
      </a>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>React Application with Webpack 5</h1>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => setCounter(counter + 1)}>
            Count: {counter}
          </button>
          <button className={styles.button} onClick={() => setCounter(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
