import styles from '../../styles/Quiz.module.css'
import { Button, ScrollArea } from '@mantine/core';


export default function Quiz() {
  return (
    <div className={styles.page}>
        <div className={styles.quiz}>
            <h2>Answer the Following Questions About Your Board Game Preferences</h2>
            

        </div>
        
        <div className={styles.results} hidden>


        </div>
    </div>
  )
}
