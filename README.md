## Babylon Template

Project template to create simple babylon.js application using vite build tool in typescript

### Project Setup

Create vite vanilla-ts project

```
npm create vite@latest
```

### Babylon Setup

Installation

```
npm install --save babylonjs
```

Import

```ts
import * as BABYLON from 'babylonjs'
```

### Optional

Setup ESLint and tailwind as per instruction given [here](https://makeall.dev/notepad/vite-react-tailwind-template/).

### Scaffold cleanup

Cleanup default vite project code

Remove all existing style and make page ready for fullscreen canvas
- style.css

```css
html, body {
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
}
```

Remove existing HTML and add canvas element.
- main.ts

```ts
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <canvas id="renderCanvas" touch-action="none"></canvas>
  `
}
```

create a new file for scene and make sure the canvas is fullscreen
- firstscene.ts
```ts
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
```

### Scene

Use one of the sample app or create your own in the `firstscene.ts` file

[https://doc.babylonjs.com/start/chap1/first_app](https://doc.babylonjs.com/start/chap1/first_app)

load the scene in root application
- main.ts

```ts
import loadscene from './firstscene'
loadscene()
```

### run

```
npm install
npm run dev
```
