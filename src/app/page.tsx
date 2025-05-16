// src/app/page.tsx
import React from 'react'
import Header from '../components/Header'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Languages from '../components/Languages'
import Interests from '../components/Interests'

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-16">
      {/* En-tête avec photo, nom, réseaux et bouton de téléchargement du CV */}
      <Header />

      {/* Sections principales du portfolio */}
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Languages />
      <Interests />
    </main>
  )
}
