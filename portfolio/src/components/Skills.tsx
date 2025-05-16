// src/components/Skills.tsx
import React from 'react';

type SkillGroup = { title: string; skills: string[] };

const skillGroups: SkillGroup[] = [
  { title: 'Sécurité & Cryptographie', skills: ['WEP, WPS, WPA', 'Chiffrement & hachage (MD5, SHA)'] },
  { title: 'Virtualisation et Conteneurs', skills: ['GNS3', 'Eve-NG', 'pfSense', 'Docker', 'VirtualBox', 'VMWare Workstation', 'KVM', 'Proxmox', 'LXC', 'Kubernetes'] },
  { title: 'Sécurité et Vulnérabilité', skills: ['Metasploit', 'Metasploitable', 'PowerShell (intermédiaire)', 'Wireshark'] },
  { title: 'Gestion de Réseau', skills: ['Adressage IP', 'DHCP', 'Serveur', 'Routage IP', 'VLAN', 'Cisco', 'PUTTY', 'DNS', 'Active Directory', 'GPO', 'OpenVPN', 'IPDS/NIDS'] },
  { title: "Systèmes d'exploitation", skills: ['Linux (Debian, Ubuntu, Kali)', 'Windows/Windows Server', 'Mac OS'] },
  { title: 'Autres Compétences', skills: ['GLPI', 'Langage C', 'C++', 'C#', 'Script Python', 'Développement Web', 'Rust', 'Assembleur'] },
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Compétences</h2>
      {skillGroups.map((group, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-lg font-semibold">{group.title}</h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-x-4 mt-2">
            {group.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
