// src/components/Certifications.tsx
import React from 'react';

const certifications = [
  'QRadar Log Insights Sales Foundation de IBM',
  'QRadar Security Information and Event Management (SIEM) Technical Sales Intermediate',
  'CCNA',
  'Certification Cisco : Endpoint Security, Network Defense',
];

export default function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul className="list-disc list-inside space-y-1">
        {certifications.map((cert, idx) => <li key={idx}>{cert}</li>)}
      </ul>
    </section>
  );
}
