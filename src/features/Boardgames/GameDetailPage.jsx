import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '..';
import { DestructiveButton } from '@/components/forms/Buttons';

const apiUrl = import.meta.env.VITE_API_URL;

function GameDetailPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();
  const {user}=useAuthContext();

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`${apiUrl}/boardgames`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
       // console.log('Fetched game data:', data); // Debugging log

        const gameData = data.find((game) => game.id === parseInt(id));
        //console.log('Selected game data:', gameData); // Debugging log
        setGame(gameData);
      } catch (error) {
        console.error('Failed to fetch game:', error);
      }
    }

    fetchGame();
  }, [id]);

  if (!game) {
    return <strong>Loading ...</strong>;
  }

  return (<div className="top-[117px] p-4">
  <article className="grid grid-cols-1 md:grid-cols-3 gap-10 rounded-2xl shadow-md p-4 bg-stone-300">
    <div className="md:col-span-2">
      <h1 className="text-2xl font-bold">{game.name}</h1>
      {game.image ? (
        <img src={game.image} alt={`Poster of "${game.name}"`} className="w-full max-w-md mx-auto my-14 rounded-s" />
      ) : (
        <p>Image not available</p>
      )}
      <p classname="p-4">{game.description}</p>
    </div>
    <div className="flex flex-col space-y-16 p-4 ">
      <div className="mt-20">
        <h2 className="text-xl font-semibold">Number of Players</h2>
        <p>Min: {game.numberOfPlayers.min}</p>
        <p>Max: {game.numberOfPlayers.max}</p>
        <p>Recommended: {game.numberOfPlayers.recommended}</p>
        <p>Best: {game.numberOfPlayers.best}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Playtime</h2>
        <p>Average: {game.playtime.avg} minutes</p>
        <p>Min: {game.playtime.min} minutes</p>
        <p>Max: {game.playtime.max} minutes</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Details</h2>
        <p>Year Published: {game.yearpublished}</p>
        <p>Minimum Age: {game.minAge}</p>
        <p>Rank: {game.rank}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Reviews</h2>
        <p>Baye Average: {game.bayesaverage}</p>
        <p>Average: {game.average}</p>
        <p>Rating: {game.usersrated}</p>
        <p>Strategy Games Rank: {game.otherRanks.strategygames}</p>
      </div>
    </div>
  </article>
  
  <button 
    onClick={() => navigate(-1)} 
    className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-900"
  >
    Înapoi
  </button>
</div>
  );
}

export default GameDetailPage;


/*
/*
  {user && (
    <>
    <Link to="">Edit</Link>
    <DestructiveButton  type="button" className="">KMSkma</DestructiveButton>
    </> )}
    "id": 1,
    "bggId": 224517,
    "name": "Brass: Birmingham",
    "thumbnail": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__thumb/img/o18rjEemoWaVru9Y2TyPwuIaRfE=/fit-in/200x150/filters:strip_icc()/pic3490053.jpg",
    "image": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg",
    "alternateNames": [
      "Brass. Бирмингем",
      "Brass. Бірмінгем",
      "ブラス：バーミンガム",
      "工业革命：伯明翰(Chinese edition) (2018)",
      "工業革命：伯明翰",
      "브라스: 버밍엄"
    ],
    "description": "Brass: Birmingham is an economic strategy game sequel to Martin Wallace' 2007 masterpiece, Brass. Brass: Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870.&#10;&#10;It offers a very different story arc and experience from its predecessor. As in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands. The game is played over two halves: the canal era (years 1770-1830) and the rail era (years 1830-1870). To win the game, score the most VPs. VPs are counted at the end of each half for the canals, rails and established (flipped) industry tiles.&#10;&#10;Each round, players take turns according to the turn order track, receiving two actions to perform any of the following actions (found in the original game):&#10;&#10;1) Build - Pay required resources and place an industry tile.&#10;2) Network - Add a rail / canal link, expanding your network.&#10;3) Develop - Increase the VP value of an industry.&#10;4) Sell - Sell your cotton, manufactured goods and pottery.&#10;5) Loan - Take a &pound;30 loan and reduce your income.&#10;&#10;Brass: Birmingham also features a new sixth action:&#10;&#10;6) Scout - Discard three cards and take a wild location and wild industry card. (This action replaces Double Action Build in original Brass.)&#10;&#10;",
    "numberOfPlayers": {
      "min": 2,
      "max": 4,
      "recommended": 2,
      "best": 3
    },
    "playtime": {
      "avg": 120,
      "min": 60,
      "max": 120
    },
    "minAge": 14,
    "yearpublished": 2018,
    "rank": 1,
    "bayesaverage": 8.4168,
    "average": 8.59915,
    "usersrated": 44416,
    "otherRanks": {
      "strategygames": 1
    }
  },
*/