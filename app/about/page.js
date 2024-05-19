import styles from '../../styles/Home.module.css'


export default function About() {
  return (
    <div className={styles.page}>
      <h3>Instructions:</h3>
      <p>Click on the Quiz tab to take a quiz to get a board game recommendation.</p>
      <p>Once you answer all the questions you will be given a list of board games that fit your needs</p>
      <p>Click on each game to see a more in depth overview</p>
    </div>
  )
}
