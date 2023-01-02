# Partall adblock list generator

[![CodeQL](https://github.com/Johannes-Andersen/partall-list/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/Johannes-Andersen/partall-list/actions/workflows/codeql-analysis.yml)
[![Lint](https://github.com/Johannes-Andersen/partall-list/actions/workflows/lint.yml/badge.svg?branch=main)](https://github.com/Johannes-Andersen/partall-list/actions/workflows/lint.yml)
[![Test](https://github.com/Johannes-Andersen/partall-list/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/Johannes-Andersen/partall-list/actions/workflows/test.yml)

## What is this?

After managing a few personal adblock lists for a while, I got tired of the manual work involved in generating them by hand.

This repo is here for me to consolidate the different filters I use into a TypeScript project that can be compiled into a single or multiple specific adblock list.

Long term I also want to generate a lot of helpers for the different ad blockers, so that I can easily build lists for them using a common syntax.

## How to use

The project is still work in progress, so the filters are not currently being hosted anywhere.

When they are ready they will be available under the https://partall.no domain.

## Running the project locally

### Prerequisites

- Node.js 19 or later
- npm 8 or later

### Install dependencies

```bash
npm install
```

### Build the adblock lists

```bash
npm run build
```

### Run the tests

```bash
npm run test
```

### Run the linter

```bash
npm run lint && npm run format
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.
