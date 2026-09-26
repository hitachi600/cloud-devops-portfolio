/**
 * Interactive Cloud DevOps Terminal Simulator
 * Author: Gautham
 */

const terminalBody = document.getElementById('terminal-body');
const terminalInput = document.getElementById('terminal-input');

const COMMANDS = {
  help: () => `
<span class="text-cyan-400 font-bold">AVAILABLE COMMANDS:</span>
  <span class="text-amber-300">skills</span>         - View 5 Core Pillars: AWS, Linux, DevOps, CCNA & Python
  <span class="text-amber-300">aws s3 ls</span>      - List AWS S3 bucket resources and cloud status
  <span class="text-amber-300">linux</span>          - Inspect Linux kernel, bash environment & system status
  <span class="text-amber-300">ccna</span>           - Inspect CCNA network routing, VLANs & subnet topology
  <span class="text-amber-300">projects</span>       - View featured architecture projects & repos
  <span class="text-amber-300">hire</span>           - Display hireability, status, and contact details
  <span class="text-amber-300">cat resume</span>     - View executive engineering summary
  <span class="text-amber-300">whoami</span>         - Display visitor session role
  <span class="text-amber-300">clear</span>          - Clear the terminal screen
`,

  skills: () => `
<span class="text-cyan-400 font-bold">5 CORE ENGINEERING PILLARS (2026):</span>
  1. [AWS Cloud]        Amazon S3, IAM Least-Privilege, EC2, VPC, Boto3 SDK, SSE-S3
  2. [Linux & SysAdmin] Ubuntu/RHEL, Bash Scripting, Systemd, Cron, SSH, Permissions
  3. [DevOps & CI/CD]   Docker, Docker Compose, Git, GitHub Actions, Pytest Automation
  4. [CCNA Networking]  TCP/IP, IPv4/IPv6 VLSM Subnetting, Routing (OSPF), VLANs, NAT, DNS
  5. [Python Backend]   Python 3.10+, Flask 3.0, FastAPI, RESTful APIs, SQLAlchemy ORM
`,

  linux: () => `
<span class="text-yellow-400 font-bold">LINUX SYSTEM STATUS:</span>
  Linux gautham-cloud-node 6.8.0-cloud #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
  • OS Distro    : Ubuntu 24.04 LTS (Noble Numbat) / RHEL Compatible
  • Shell        : /bin/bash (v5.2.21)
  • Active Daemons: systemd, sshd, docker.service, nginx.service
  • Security     : SSH Ed25519 Keys, UFW Firewall (ACTIVE), Sudo RBAC
`,

  ccna: () => `
<span class="text-emerald-400 font-bold">CCNA NETWORK TOPOLOGY & ROUTING TABLE:</span>
  Gateway of last resort is 10.0.0.1 to network 0.0.0.0
  C    10.0.1.0/24 is directly connected, GigabitEthernet0/0/0 (VLAN 10 - Web Tier)
  C    10.0.2.0/24 is directly connected, GigabitEthernet0/0/1 (VLAN 20 - App Tier)
  O    172.16.0.0/16 [110/2] via 10.0.0.2, 00:14:22 (OSPF Cloud Interconnect)
  • Protocols    : TCP/IP, UDP, OSPF, BGP, ICMP, ARP, DHCP, DNS
  • Security     : Stateful Inspection ACLs, NAT/PAT Translation, TLS 1.3
`,

  'aws s3 ls': () => `
<span class="text-amber-400 font-bold">2026-09-26 11:50:33 ap-south-1</span>  <span class="text-cyan-300">s3://cloud-storage-vault-548850331831/</span>
  ├── users/
  │   └── user_1/
  │       ├── documents/
  │       └── system_reports/
  └── [Config] SSE-S3 AES-256 Enabled | PublicAccess: BLOCKED | PresignedURL: Active
`,

  'aws status': () => `
<span class="text-emerald-400 font-bold">AWS CLOUD INFRASTRUCTURE HEALTH:</span>
  • Primary Region : ap-south-1 (Mumbai)
  • IAM Security   : Active (Least-Privilege Role: test_user_31)
  • S3 Bucket      : cloud-storage-vault-548850331831 (HEALTHY)
  • Storage Latency: &lt; 45ms
`,

  projects: () => `
<span class="text-cyan-400 font-bold">FEATURED GITHUB REPOSITORIES (hitachi600):</span>
  1. <span class="text-white font-bold">AWS Cloud Storage Management System</span> [AWS S3 + Boto3 + Flask + Docker]
     Repo: <a href="https://github.com/hitachi600/cloud-storage-management-system" target="_blank" class="text-cyan-400 underline">github.com/hitachi600/cloud-storage-management-system</a>
  2. <span class="text-white font-bold">Smart Expense Tracker</span> [Python + Full-Stack Financial Analytics]
     Repo: <a href="https://github.com/hitachi600/smart-expense-tracker" target="_blank" class="text-cyan-400 underline">github.com/hitachi600/smart-expense-tracker</a>
  3. <span class="text-white font-bold">Rapid Rescue Emergency System</span> [Next.js + Live GPS Dispatch]
     Live App: <a href="https://rapid-rescue-beta.vercel.app/" target="_blank" class="text-emerald-400 underline">rapid-rescue-beta.vercel.app</a>
     Repo: <a href="https://github.com/hitachi600/Rapid-rescue_Ambulance" target="_blank" class="text-cyan-400 underline">github.com/hitachi600/Rapid-rescue_Ambulance</a>
  4. <span class="text-white font-bold">Doctor Appointment System</span> [Healthcare Scheduling Platform]
     Live App: <a href="https://doctors-appointment-beta.vercel.app/" target="_blank" class="text-emerald-400 underline">doctors-appointment-beta.vercel.app</a>
     Repo: <a href="https://github.com/hitachi600/doctors-appointment" target="_blank" class="text-cyan-400 underline">github.com/hitachi600/doctors-appointment</a>
`,

  hire: () => `
<span class="text-emerald-400 font-bold">HIREABILITY STATUS:</span>
  • Status       : <span class="text-emerald-300 font-bold">AVAILABLE FOR FULL-TIME / CONTRACT</span>
  • Target Roles : Cloud Engineer | DevOps Engineer | Backend Python Engineer
  • Location     : India / Remote (Global)
  • Email        : <span class="text-cyan-300">gauthams.cloud@gmail.com</span>
  • GitHub       : <a href="https://github.com/hitachi600" target="_blank" class="text-cyan-400 underline">https://github.com/hitachi600</a>
`,

  whoami: () => `
<span class="text-slate-300">visitor@gautham-cloud-guest [Permission: READ-ONLY]</span>
`,

  'cat resume': () => `
<span class="text-cyan-400 font-bold">GAUTHAM — CLOUD & DEVOPS ENGINEER</span>
Passionate engineer with hands-on expertise in AWS Cloud architecture, Amazon S3 object storage pipelines, Boto3 automation, Docker container orchestration, and modular Python backend development.
`
};

function printOutput(htmlContent) {
  if (!terminalBody) return;
  const div = document.createElement('div');
  div.innerHTML = htmlContent;
  terminalBody.appendChild(div);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

window.runTerminalCmd = function(cmd) {
  if (!terminalBody) return;
  
  // Print user prompt
  printOutput(`<span class="text-cyan-400 font-bold">visitor@gautham-cloud:~$</span> <span class="text-white">${cmd}</span>`);

  const trimmed = cmd.trim().toLowerCase();

  if (trimmed === 'clear') {
    terminalBody.innerHTML = `
      <div class="text-slate-400">Terminal cleared. Ready for input. Type <span class="text-amber-400">'help'</span> for options.</div>
    `;
    return;
  }

  if (COMMANDS[trimmed]) {
    printOutput(COMMANDS[trimmed]());
  } else {
    printOutput(`<span class="text-red-400">command not found: "${cmd}". Type <span class="text-amber-300 font-bold">'help'</span> for list of valid commands.</span>`);
  }
};

if (terminalInput) {
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      if (val.trim() !== '') {
        runTerminalCmd(val);
        terminalInput.value = '';
      }
    }
  });
}
