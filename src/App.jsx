import { useState } from "react";
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  function handleAddFighter(fighter) {
    if(money < fighter.price){
      console.log("not enough");
      return;
    }

    setTeam((prev) => [...prev, fighter]);
    setMoney((prev) => prev - fighter.price);
    setZombieFighters((prev) => prev.filter((f) => f.id !== fighter.id));
  }

    const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(f => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  const totalStrength = team.reduce((sum, f) => sum + f.strength, 0);
  const totalAgility = team.reduce((sum, f) => sum + f.agility, 0);

  return (
    <div>
       <h1>zombie team builder</h1>
       <div>
      <strong>Money:</strong>${money}
      </div>

      <div>
        <section>
          <h2>Available Fighters</h2>
          <ul>
            {zombieFighters.length > 0  && zombieFighters.map((fighter) => (
              <li key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} width={64} height={64} />
                <div>{fighter.name}</div>
                <div>price: ${fighter.price}</div>
               

                <div>
                  <button
                    onClick={() => handleAddFighter(fighter)}
                    disabled={money < fighter.price}
                  >
                    add
                  </button>
                </div>
              </li>
            ))}
            {zombieFighters.length === 0 && <li>No fighters available</li>}
          </ul>
        </section>

        <section>
          <h2>Your Team</h2>

          {team.length === 0 ? (
            <p>pick some members!</p>
          ) : (
            <ul>
              {team.map((fighter) =><li key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} width={64} height={64}/>
              <div>
                <div>{fighter.name}</div>
                <div>Price: ${fighter.price}</div>
                <div>Streangth: {fighter.strength} - Agility: {fighter.agility}</div>
              </div>
              <div>
                <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
              </div>
             </li>
              )}
            </ul>
          )}

          <div>
            <strong>Total Strength:</strong> {totalStrength}
            <br />
            <strong>Total Agility:</strong> {totalAgility}
          </div>
        </section>
      </div>
    </div>
   
  );
}

export default App
