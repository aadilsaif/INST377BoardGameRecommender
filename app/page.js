import styles from '../styles/Home.module.css'
import { Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

async function getTopGames() {
  var xml2js = require('xml2js');
  var parser = new xml2js.Parser();
  const response = await fetch('https://boardgamegeek.com/xmlapi2/hot?type=boardgame');
  const xmldata = await response.text();
  const data = await parser.parseStringPromise(xmldata);
  return data.items.item.slice(0, 20);
}


export default async function Home() {
  const games = await getTopGames();

  return (
    <  div className={styles.page}>
      <h1>Welcome to the Board Game Recommendation Engine</h1>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'cyan', deg: 265 }} size="xl" radius="md" fullWidth>Click Here to Take Our Quiz</Button>
      <h2>Here are the top 20 hottest board games right now!</h2>
      <div className={styles.grid} hidden>
        {games?.map((game) => {
            return <GameCard key={game.$.id} game={game} />;
          })}
      </div>
    </div>
  )
}

function GameCard(game) {
  return (
    <Link href={`https://boardgamegeek.com/boardgame/${game.game.$.id}`}>
      <div className={styles.card}>
        <Image src={game.game.thumbnail[0].$.value} alt={game.game.name[0].$.value} width={200} height={300}/>
        <h3>{game.game.name[0].$.value}</h3>
      </div>
    </Link>
    
  )
}
