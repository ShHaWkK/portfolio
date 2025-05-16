// src/components/Experience.tsx
import React from 'react';

type ExperienceItem = {
  poste: string;
  entreprise: string;
  periode: string;
  details: string[];
};

const experiences: ExperienceItem[] = [
  {
    poste: 'Administrateur Systèmes et Réseaux (Alternance)',
    entreprise: 'BSRQ.MEDIA',
    periode: '09/2024 – Aujourd’hui',
    details: [
      'Gestion d’infrastructures (Proxmox, Netgear, Aruba), sécurisation WiFi et support client',
      'Projet Ariane 6, Projet Chanel (Sécurisation d’intrusion)',
      'Installation/Configuration: Datacenter',
    ],
  },
  {
    poste: 'Développeur Web & Maintenance (Stage)',
    entreprise: 'First Conseil',
    periode: '06/2024 – 08/2024',
    details: [
      'Développement web (ReactJS), gestion de projets (Jira, Salesforce, HubSpot)',
      'Supervision avec Grafana, Prometheus',
    ],
  },
  {
    poste: 'Développeur Web (Stage)',
    entreprise: 'First Conseil',
    periode: '06/2023 – 07/2023',
    details: [
      'Mise à jour de sites web, développement (PHP, Python), bases SQL, prototypage Figma',
      'Applicatif Web (Nginx, Apache, Tomcat)',
    ],
  },
  {
    poste: 'Assistant Gestion & Support (Stage)',
    entreprise: 'HB MED DIFFUSION',
    periode: '07/2020 – 08/2020',
    details: ['Gestion des clients et stocks (EBP), analyse avec Excel'],
  },
];

export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Expériences Professionnelles</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.poste} – {exp.entreprise}</h3>
          <p className="text-gray-500 mb-2">{exp.periode}</p>
          <ul className="list-disc list-inside space-y-1">
            {exp.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}