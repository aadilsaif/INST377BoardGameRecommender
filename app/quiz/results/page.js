import { createClient } from '@/sb_database/server';
import styles from '../../../styles/Quiz.module.css';
import Link from 'next/link';
import Image from 'next/image';


function GameCard(game) {
    return (
    <Link href={`https://boardgamegeek.com/boardgame/${game.game.BGGId}`}>
      <div className={styles.card}>
        <Image src={game.game.ImagePath} alt={game.game.Name} width={200} height={300}/>
        <h3>{game.game.Name}</h3>
      </div>
    </Link>
  )
}

async function loadGames(){
  const db = new createClient();
  const x = Math.floor(Math.random() * 30000);
  const { data: games, error } = await db.from('games').select(`BGGId, Name, ImagePath`).order('AvgRating', {ascending: false}).range(x, x+25).limit(20);
  return games;
}

export default async function Quiz() {
  const games = await loadGames();
  return (
    <div className={styles.page}>
        <div id="results" className={styles.results}>
            <h2>Here are the top 20 results based on your quiz</h2>
            <div className={styles.grid} >
                {games?.map((game) => {
                    return <GameCard key={game.BGGId} game={game} />;
                })}
            </div>
        </div>
    </div>
    
  )
}


