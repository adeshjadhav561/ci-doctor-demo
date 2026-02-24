# CI Doctor 🩺 (Demo)

CI Doctor is a **paid CI/CD diagnosis agent**.

It analyzes failed CI pipelines and explains:
- **what failed**
- **why it failed**
- **how to fix it** (actionable steps)

This repository is a **demo playground** to show CI Doctor in action.
⚠️ No core engine or proprietary logic is included here.

## What problem does it solve?

CI failures often show:
- long logs
- unclear errors
- no clear fix

CI Doctor reads CI logs and produces a **human-readable diagnosis**
directly inside GitHub Actions logs or PR comments.

## Demo Flow

1. CI pipeline fails ❌
2. CI Doctor runs automatically
3. Diagnosis appears in CI logs / PR comment

### Example Output
🚑 CI Doctor
• Category: Dependency Issue
• Cause: node-sass incompatible with Node 18
• Fix:

1.npm rebuild node-sass

2.OR downgrade Node to 16
• Confidence: 90%
🧠 Seen Before: Yes (3 times)

## Feedback

This is an early demo.
If you work in DevOps / CI/CD and have feedback,
please open an issue or discussion.