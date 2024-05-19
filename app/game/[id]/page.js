//import { useRouter } from 'next/navigation';

import { createClient } from "@/sb_database/client";

export default async function GamePage(context) {
    const { params } = context;
    const game = await getGame(params.id);
    //const router = useRouter();
    //const { id } = router.query;
    
    return (
        <div>
            <h1>Game {params.id}</h1>
        </div>
    );
}

async function getGame(gameID){
    const db = new createClient();
    const game = await db.from('games').select('*').eq('BGGId', gameID).single();
    console.log(game.name);
    return game;
}
