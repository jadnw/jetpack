import styles from './App.module.scss'

let counter = 0
function setCounter(value) {
  counter = value
  document.getElementById('count').textContent = `Count: ${counter}`
}

function init() {
  const container = document.createElement('div')
  container.className = styles.container
  const anchor = document.createElement('a')
  const logo = document.createElement('img')
  logo.className = styles.logo
  logo.src = '/javascript.svg'
  logo.alt = 'Logo'
  anchor.appendChild(logo)
  container.appendChild(anchor)
  const wrapper = document.createElement('div')
  wrapper.className = styles.wrapper
  const heading = document.createElement('h1')
  heading.className = styles.title
  heading.textContent = 'Vanilla JavaScript Application with Webpack 5'
  wrapper.appendChild(heading)
  const buttonsContainer = document.createElement('div')
  buttonsContainer.className = styles.buttons
  const countButton = document.createElement('button')
  countButton.className = styles.button
  countButton.id = 'count'
  countButton.textContent = `Count: ${counter}`
  const resetButton = document.createElement('button')
  resetButton.className = styles.button
  resetButton.id = 'reset'
  resetButton.textContent = 'Reset'
  buttonsContainer.appendChild(countButton)
  buttonsContainer.appendChild(resetButton)
  wrapper.appendChild(buttonsContainer)
  container.appendChild(wrapper)
  return container
}

function bindEvents() {
  document.getElementById('count').addEventListener('click', () => {
    setCounter(counter + 1)
  })
  document.getElementById('reset').addEventListener('click', () => {
    setCounter(0)
  })
}

export default function App() {
  const root = document.getElementById('root')
  const elem = init()
  root.appendChild(elem)
  bindEvents()
}
