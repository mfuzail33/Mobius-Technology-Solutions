import React from 'react';
import './Teams.css';

const teamMembers = [
  { id: 1, name: 'John Doe', quote: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', quote: 'Consectetur adipiscing elit', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Alice Johnson', quote: 'Sed do eiusmod tempor incididunt', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Bob Williams', quote: 'Ut labore et dolore magna aliqua', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Emily Brown', quote: 'Ut enim ad minim veniam', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Michael Davis', quote: 'Quis nostrud exercitation ullamco', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Olivia Wilson', quote: 'Duis aute irure dolor in reprehenderit', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'William Martinez', quote: 'Excepteur sint occaecat cupidatat', image: 'https://via.placeholder.com/150' },
];

const Card = ({ member }) => {
  return (
    <div className="cardTeam ">
      <img src={member.image} alt={member.name} className="imgTeam" />
      <div className="infoTeam">
        <h3 className="nameTeam">{member.name}</h3>
        <p className="quoteTeam">{member.quote}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="containerTeam">
      {teamMembers.map(member => (
        <Card key={member.id} member={member} />
      ))}
    </div>
  );
};

export default Team;
