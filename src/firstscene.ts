import * as BABYLON from 'babylonjs'

const createScene = (canvas: HTMLCanvasElement, engine: BABYLON.Engine) => {
  const scene = new BABYLON.Scene(engine)

  BABYLON.SceneLoader.ImportMeshAsync('', 'https://assets.babylonjs.com/meshes/', 'box.babylon')

  const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0))
  camera.attachControl(canvas, true)
  new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene)
  return scene
}

const loadscene = () => {
  const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
  
  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const engine = new BABYLON.Engine(canvas, true)
  const scene = createScene(canvas, engine)

  engine.runRenderLoop(function () {
    scene.render()
  })

  window.addEventListener('resize', function () {
    engine.resize()
  })
}

export default loadscene