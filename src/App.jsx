import './App.css';
import { useState } from 'react';
const App = () => {

  let totalStrength = 0;
  let totalAgility = 0;
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
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
    ]    
  )

  const handleAddFighter = (fighter) => {
    if(money < fighter.price){
      console.log('Not enough money');
    }else{
      totalStrength += fighter.strength;
      totalAgility += fighter.agility;
      setMoney(money - fighter.price);
      setTeam([...team, fighter]);
    const newFighters = [];
    zombieFighters.map((fighters) => {
      if(fighter.id !== fighters.id){
        newFighters.push(fighters);
      }
    });
        console.log(newFighters)
    
    setZombieFighters(newFighters);
    }
  }

  const handleRemoveFighter = (member) => {
    const removeMember = team[team.findIndex(fighter => fighter.id === member.id)];
    setTeam(team.filter(fighter => fighter !== member));
    setZombieFighters([...zombieFighters, removeMember]);
    setMoney(money + member.price);
  }

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      {team.length === 0 ? <h2>Team Strength: 0</h2> : <h2>Team Strength: {team.map((member) => {
        totalStrength += member.strength;
      })}{totalStrength}</h2>}
      {team.length === 0 ? <h2>Team Agility: 0</h2> : <h2>Team Agility: {team.map((member) => {
        totalAgility += member.agility;
      })}{totalAgility}</h2>}
    
      {team.length === 0 ? <p>Pick some team members!</p> : <ul> {team.map((member) => 
        <li key={member.id}>
        Name: {member.name}<br/>
        <img src={member.img}/><br/>
        Price: {member.price}<br/>
        Strength: {member.strength}<br/>
        Agility: {member.agility}<br/>
        <button onClick={() => handleRemoveFighter(member)}>Remove</button>
        </li>
      )}
      </ul>}

      <ul>Fighters {zombieFighters.map((fighter) => 
        <li key={fighter.id}><img src={fighter.img}/><br/>
        Name: {fighter.name} <br/>
        Price: {fighter.price} <br/>
        Strength: {fighter.strength} <br/>
        Agility: {fighter.agility}<br/>
        <button onClick={() => handleAddFighter(fighter)}>Add</button></li>
        )}
      </ul>
     
    </div>
  );
}

export default App;