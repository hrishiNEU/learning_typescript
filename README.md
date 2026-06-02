# LearnTS — TypeScript Learning Project

A progressive TypeScript learning project built branch-by-branch. The application is a **Finance Logger** — a browser-based tool for logging invoices and payments — used as the vehicle to explore core TypeScript concepts.

## What's Covered

Each `learning[N]` branch captures a new milestone:

| Branch | Topic |
|---|---|
| learning1–7 | TypeScript basics, types, functions, modules |
| learning8 | Interfaces, classes, and rendering an HTML template |
| learning9 | More on `ListTemplate` rendering |
| learning10 | Generics, enums, and tuples |

### Key TypeScript concepts demonstrated

- Interfaces (`HasFormatter`) and interface-based polymorphism
- Classes with access modifiers (`readonly`, `private`, `public`)
- Generics (generic `ListTemplate` class)
- Enums and tuples
- Type assertions for DOM elements (`as HTMLFormElement`, `as HTMLInputElement`)
- ES2015 modules

## Project Structure

```
learnts/
├── src/
│   ├── sandbox.ts              # App entry point — form handling and wiring
│   ├── classes/
│   │   ├── Invoice.ts          # Invoice class (implements HasFormatter)
│   │   ├── Payment.ts          # Payment class (implements HasFormatter)
│   │   └── ListTemplate.ts     # Generic template for rendering items to a list
│   └── interfaces/
│       └── HasFormatter.ts     # Interface contract: format(): string
├── public/                     # Compiled JS output + HTML/CSS
│   ├── index.html
│   └── style.css
└── tsconfig.json
```

## Getting Started

**Prerequisites:** [TypeScript](https://www.typescriptlang.org/) installed globally.

```bash
# Install TypeScript if you haven't already
npm install -g typescript

# Compile TypeScript in watch mode
tsc -w
```

Then open `public/index.html` in a browser. The app lets you fill out a form to add invoices or payments, which are rendered into a list on the page.

## TypeScript Config

Compiled with strict mode enabled, targeting ES6 modules:

```json
{
  "target": "ES6",
  "module": "es2015",
  "outDir": "./public",
  "rootDir": "./src",
  "strict": true
}
```

## How the App Works

1. A form collects: recipient/client name, details, and amount, plus a type toggle (invoice vs. payment).
2. On submit, `sandbox.ts` reads the form values as a **tuple** `[string, string, number]`.
3. An `Invoice` or `Payment` object is created — both implement `HasFormatter`.
4. A `ListTemplate` renders the item into a `<ul>` on the page using the `HasFormatter.format()` method.
