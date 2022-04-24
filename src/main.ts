import loadscene from './firstscene'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <canvas id="renderCanvas" touch-action="none"></canvas>
  `
  loadscene()
}