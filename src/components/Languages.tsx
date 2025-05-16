// src/components/Languages.tsx
import React from 'react';

const languages = [{ langue: 'Anglais', niveau: 'B2' }];

export default function Languages() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Langues</h2>
      <ul className="list-disc list-inside">
        {languages.map((l, idx) => <li key={idx}>{l.langue} : {l.niveau}</li>)}
      </ul>
    </section>
  );
}
