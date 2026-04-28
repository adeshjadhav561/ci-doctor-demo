# CI Doctor Public Demo

CI Doctor is an AI-style CI failure diagnosis agent for GitHub Actions.

This repository is a sanitized demo for research papers, live walkthroughs, and public sharing. It intentionally excludes the private diagnosis engine while still showing the product experience:

- broken CI workflows
- realistic failure logs
- polished diagnosis output
- PR comment preview
- GitHub Pages demo UI

## Why this repo exists

The production CI Doctor repository is private.
This demo repository is safe to publish because it contains only:

- mock inputs
- mock outputs
- a static showcase site
- intentionally broken CI examples

It does not contain proprietary rules, ranking logic, memory logic, or internal source code.

## Demo assets

- `index.html`: interactive static demo page for GitHub Pages
- `.github/workflows/ci.yml`: intentionally failing workflow
- `samples/logs/`: example CI failure logs
- `samples/reports/`: example CI Doctor reports
- `samples/comments/`: example PR comment output

## What the demo shows

CI Doctor can present:

- detected stack or language
- issue category
- likely root cause
- ordered fix suggestions
- confidence score
- repeated-failure memory signal
- PR comment formatting

## Demo scenarios

1. Node peer dependency conflict
2. Python module missing
3. Docker permission issue

## GitHub Pages

🚀 Live Demo

Access the public demo here:
https://adeshjadhav561.github.io/ci-doctor-demo/

## Important note

Everything in this repo is for demonstration only.
It is designed to show the CI Doctor experience without exposing the real implementation.
