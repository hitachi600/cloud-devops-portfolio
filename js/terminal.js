/**
 * Interactive Cloud DevOps Terminal Simulator
 * Author: Gautham
 */

const terminalBody = document.getElementById('terminal-body');
const terminalInput = document.getElementById('terminal-input');

const COMMANDS = {
  help: () => `
<span class="text-cyan-400 font-bold">AVAILABLE COMMANDS:</span>
  <span class="text-amber-300">skills</span>         - View Cloud, DevOps & Backend technical stack
  <span class="text-amber-300">aws s3 ls</span>      - List AWS S3 bucket resources and cloud status
  <span class="text-amber-300">projects</span>       - View featured architecture projects & repos
  <span class="text-amber-300">hire</span>           - Display hireability, status, and contact details
  <span class="text-amber-300">cat resume</span>     - View executive engineering summary
  <span class="text-amber-300">whoami</span>         - Display visitor session role
  <span class="text-amber-300">clear</span>          - Clear the terminal screen
`,

  skills: () => `
<span class="text-cyan-400 font-bold">TECHNICAL SKILLS MATRIX (2026):</span>
  [Cloud & AWS]       Amazon S3, AWS IAM, Boto3 SDK, SSE-S3, Presigned URLs, EC2
  [DevOps & CI/CD]    Docker, Docker Compose, Git, GitHub Actions, Linux/Bash, Pytest
  [Backend & APIs]    Python 3.10+, Flask 3.0, FastAPI, RESTful APIs, SQLAlchemy ORM
  [Database]          SQLite, PostgreSQL, AWS RDS, Schema Isolation
  [Security]          PBKDF2 Password Hashing, Least-Privilege IAM, MIME Validation
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
