// src/components/Projects.tsx
import React from 'react';

type ProjectSection = { title: string; items: string[] };

const sections: ProjectSection[] = [
  {
    title: 'Virtualisation des réseaux',
    items: [
      'Être en mesure de mettre en réseau via les fonctionnalités du NFV une infrastructure réseau.',
    ],
  },
  {
    title: 'Architecture Réseau',
    items: [
      'Interconnexion de sous Réseaux (CISCO, VLAN SWITCH)',
      'Infrastructure réseau de VLAN et routage IP.',
      'Configuration des équipements via interface série PUTTY. / Création/configuration de VLAN',
    ],
  },
  {
    title: 'Conception et mise en place d’un réseau sécurisé pour LAB_Security',
    items: [
      'Élaboration d’une topologie réseau IPv4 avec routage OSPF, plan d’adressage optimisé (VLSM) pour 4 agences et un siège central (152 serveurs, 850 hôtes).',
      'Réalisation de la simulation sur Packet Tracer avec configuration des équipements (routeurs, switches, VLANs).',
    ],
  },
  {
    title: 'Audit et exploitation de réseaux WiFi (WEP, WPA2, WPS)',
    items: [
      'Développement d’un script d’automatisation pour le cassage de réseaux et création d’un Rogue Access Point permettant la capture/modification de paquets et la redirection des requêtes.',
      'Réalisation de scénarios d’attaque (Man-in-the-Middle, phishing) avec des outils comme Ettercap et TCPDump.',
    ],
  },
  {
    title: 'Projet C',
    items: [
      'Développement d’un malware basé sur LD_PRELOAD pour intercepter et extraire les clés SSH échangées entre un client et un serveur OpenSSH.',
      'Mise en place de fonctionnalités avancées : furtivité, anti-forensic (suppression de logs), port knocking, et communication avec un serveur C2 pour remonter les données volées.',
    ],
  },
  {
    title: "Développement d’un honeypot de haute interaction",
    items: [
      'Conception et déploiement d’un environnement simulé (SSH, RDP, HTTP) pour attirer et analyser les cyberattaques.',
      "Mise en place d’une infrastructure sécurisée (VMs, Docker, Elasticsearch/Kibana Stack) pour capturer les interactions, détecter les attaques avancées (SQLi, LFI) et générer des rapports exploitables.",
      "Intégration de notifications en temps réel (email/Slack) et isolation réseau stricte pour garantir la sécurité.",
    ],
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projets Informatiques</h2>
      {sections.map((sec, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semibold">{sec.title}</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {sec.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}