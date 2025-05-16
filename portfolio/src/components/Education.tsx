// src/components/Education.tsx
import React from 'react';

type EduItem = { titre: string; details: string[] };

const education: EduItem[] = [
  {
    titre: 'Bachelor en Informatique (ESGI)',
    details: [
      'Langage C, Go, Algorithme Avancé, Assembleur',
      'Virtualisation réseau, Sécurité & Vulnérabilité (WEP, WPA, WPS)',
      'Cryptographie & Chiffrement, Scripting Python',
      'Linux administration avancée (regex, vim, bash)',
      'Cloud (Heroku, Render...) & Application Web (React, JS, PHP, Angular, Kotlin, API REST)',
      'Depuis octobre 2022 – 242 Rue du Faubourg Saint-Antoine, 75012 Paris',
    ],
  },
  {
    titre: 'Licence de Droit (Sorbonne Paris Nord)',
    details: ['De sept. 2021 à nov. 2022 – Préparation aux études de médecine APESO'],
  },
  {
    titre: 'Diplôme Santé (Diploma Santé)',
    details: ['De sept. 2019 à juin 2020 – 100 Quai de la Rapée'],
  },
  {
    titre: "Baccalauréat Science de l'Ingénieur (Saint Benoît de l’Europe)",
    details: ['De sept. 2018 à juin 2019 – Bagnolet'],
  },
];

export default function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Diplômes et Formations</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-xl font-semibold">{edu.titre}</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {edu.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
