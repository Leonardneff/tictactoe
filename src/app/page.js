import styles from './css/styling.css'
import App from './app.js'

 
export default function Home() {
  return (
    <main className={styles.main}>
      <div className="game">
        <h1>Let's play TicTacToe!</h1>
        <App />
      </div>
    </main>
  )
}
