"use client";
import { createClient } from '@/sb_database/client';
import styles from '../../styles/Quiz.module.css';
import { Chip } from '@mantine/core';
import { Group } from '@mantine/core';
import { ChipGroup } from '@mantine/core';
import { useRouter } from 'next/navigation';



export default function Quiz() {
  const router = useRouter();
  function handleSubmit(formData) {
    const db = new createClient();
    const { data: games, error } = db.from('games').select(`BGGId, Name, AvgRating, ImagePath, mechanics(*)`);
    //console.log(games);
    router.push('/quiz/results'); // replace '/results' with the path you want to navigate to
  }
  return (
    <div className={styles.page}>
        <div className={styles.quiz}>
            <h2>Answer the Following Questions About Your Board Game Preferences</h2>
            <form action={handleSubmit}>
              <label htmlFor="players">1. How many players do you usually play with?</label>
              <select id="players" name="players">
                <option value="2">2</option>
                <option value="6">3-6</option>
                <option value="99">6+</option>
              </select>
              <label htmlFor="difficulty">2. How Complicated Do You Want the Game to Be?</label>
              <select id="difficulty" name="difficulty">
                <option value="1.5">Very Simple</option>
                <option value="3.0">Can be a little complicated</option>
                <option value="5.0">I can handle anything</option>
              </select>
              <label htmlFor="score">3. How Well Reviewed of a Game Do you Want?</label>
              <select id="score" name="score">
                <option value="8.0">Needs to the best</option>
                <option value="6.0">Needs to be pretty good</option>
                <option value="0.0">No Limit</option>
              </select>
              <h3>For the following features, state your preference (or if you have none)</h3>
              <p>(Note that adding or removing too many features can limit the number of recomended games. Some features may counteract each other.)</p>
              <label htmlFor="bluff">Betting and Bluffing</label>
              <select id="bluff" name="bluff">
                <option value="0">Do Not Want to Have</option>
                <option value="1">Want to Have</option>
                <option value="">No Preference</option>
              </select>
              <label htmlFor="teams">How Cooperative Do You Want this Game to Be?</label>
              <select id="teams" name="teams">
                <option value="0">Free for All</option>
                <option value="1">Teams vs Teams</option>
                <option value="">No Preference</option>
              </select>
              <label htmlFor="dice">Inclusion of a Dice Component?</label>
              <select id="dice" name="dice">
                <option value="1">Do Not Want to Have</option>
                <option value="2">Want to Have</option>
                <option value="3">No Preference</option>
              </select>
              <label htmlFor="eliminate">Inclusion of a Player Elimination Component?</label>
              <select id="eliminate" name="eliminate">
                <option value="1">Do Not Want to Have</option>
                <option value="2">Want to Have</option>
                <option value="3">No Preference</option>
              </select>
              <label htmlFor="memory">Inclusion of a Memory-Based Component?</label>
              <select id="memory" name="memory">
                <option value="1">Do Not Want to Have</option>
                <option value="2">Want to Have</option>
                <option value="3">No Preference</option>
              </select>
              <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    
  )
}


