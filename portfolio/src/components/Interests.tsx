// src/components/Interests.tsx
import React from 'react';
import { FaChessKnight, FaMusic } from 'react-icons/fa';

const interests = [
  { label: 'Échecs', icon: <FaChessKnight /> },
  { label: 'Musique', icon: <FaMusic /> },
];

export default function Interests() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Centres d’intérêt</h2>
      <ul className="list-none flex space-x-6">
        {interests.map((i, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            {i.icon}
            <span>{i.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
