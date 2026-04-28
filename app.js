const scenarios = [
  {
    id: "node-peer-dependency",
    title: "Node dependency conflict",
    summary: "Peer dependency mismatch detected during npm install.",
    language: "Node",
    confidence: "92%",
    memory: "Yes, 4 times",
    log: `npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! Found: react@18.0.0
npm ERR! Could not resolve dependency:
npm ERR! peer react@^17.0.0 from legacy-widget@2.4.1
npm ERR! Fix the upstream dependency conflict, or retry this command with --legacy-peer-deps`,
    report: `CI Doctor Report
------------------------------
Language: Node
Category: Dependency Issue
Cause: Peer dependency mismatch between installed React version and a legacy package.
Fix:
1. Retry install with npm install --legacy-peer-deps
2. Align package versions so peer requirements match
Confidence: 92%
Seen Before: Yes (4 times)`,
    comment: {
      category: "Dependency Issue",
      cause: "Peer dependency mismatch between installed React version and a legacy package.",
      fixes: [
        "Retry install with npm install --legacy-peer-deps",
        "Align package versions so peer requirements match"
      ],
      confidence: "92%",
      memory: "Yes (4 times)"
    }
  },
  {
    id: "python-missing-module",
    title: "Python module missing",
    summary: "Import failure surfaced in pytest setup.",
    language: "Python",
    confidence: "88%",
    memory: "Yes, 2 times",
    log: `Traceback (most recent call last):
  File "tests/test_app.py", line 3, in <module>
    from dotenv import load_dotenv
ModuleNotFoundError: No module named 'dotenv'
Error: Process completed with exit code 1.`,
    report: `CI Doctor Report
------------------------------
Language: Python
Category: Dependency Issue
Cause: The workflow uses python-dotenv but the dependency is missing from the environment.
Fix:
1. Add python-dotenv to requirements.txt or pyproject dependencies
2. Rebuild the CI environment after dependency update
Confidence: 88%
Seen Before: Yes (2 times)`,
    comment: {
      category: "Dependency Issue",
      cause: "The workflow uses python-dotenv but the dependency is missing from the environment.",
      fixes: [
        "Add python-dotenv to requirements.txt or pyproject dependencies",
        "Rebuild the CI environment after dependency update"
      ],
      confidence: "88%",
      memory: "Yes (2 times)"
    }
  },
  {
    id: "docker-permission",
    title: "Docker permission failure",
    summary: "Container build blocked by daemon socket permissions.",
    language: "Shell / Docker",
    confidence: "84%",
    memory: "No",
    log: `Step 5/8 : docker build -t ci-doctor-demo .
Got permission denied while trying to connect to the Docker daemon socket
at unix:///var/run/docker.sock: connect: permission denied
The command '/bin/sh -c docker build -t ci-doctor-demo .' returned a non-zero code`,
    report: `CI Doctor Report
------------------------------
Language: Shell / Docker
Category: Infrastructure Issue
Cause: The runner does not have permission to access the Docker daemon.
Fix:
1. Use a runner with Docker access or enable the required service permissions
2. Verify the docker.sock group membership or runner container privileges
Confidence: 84%
Seen Before: No`,
    comment: {
      category: "Infrastructure Issue",
      cause: "The runner does not have permission to access the Docker daemon.",
      fixes: [
        "Use a runner with Docker access or enable the required service permissions",
        "Verify the docker.sock group membership or runner container privileges"
      ],
      confidence: "84%",
      memory: "No"
    }
  }
];

const scenarioList = document.getElementById("scenario-list");
const logOutput = document.getElementById("log-output");
const reportOutput = document.getElementById("report-output");
const commentOutput = document.getElementById("comment-output");

function renderComment(comment) {
  const fixes = comment.fixes.map((fix) => `<li>${fix}</li>`).join("");
  return `
    <h3>CI Doctor Report</h3>
    <p><strong>Build Failed</strong></p>
    <p><strong>Category:</strong> ${comment.category}</p>
    <p><strong>Root Cause:</strong> ${comment.cause}</p>
    <p><strong>Recommended Fix:</strong></p>
    <ul>${fixes}</ul>
    <p><strong>Confidence:</strong> ${comment.confidence}</p>
    <p><strong>Seen Before:</strong> ${comment.memory}</p>
  `;
}

function setScenario(index) {
  const scenario = scenarios[index];
  document.getElementById("hero-title").textContent = scenario.title;
  document.getElementById("hero-summary").textContent = scenario.summary;
  document.getElementById("hero-confidence").textContent = scenario.confidence;
  document.getElementById("hero-language").textContent = scenario.language;
  document.getElementById("hero-memory").textContent = scenario.memory;
  document.getElementById("scenario-id").textContent = scenario.id;
  logOutput.textContent = scenario.log;
  reportOutput.textContent = scenario.report;
  commentOutput.innerHTML = renderComment(scenario.comment);

  document.querySelectorAll(".scenario-button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });
}

scenarios.forEach((scenario, index) => {
  const button = document.createElement("button");
  button.className = "scenario-button";
  button.type = "button";
  button.innerHTML = `<strong>${scenario.title}</strong><span>${scenario.summary}</span>`;
  button.addEventListener("click", () => setScenario(index));
  scenarioList.appendChild(button);
});

setScenario(0);
