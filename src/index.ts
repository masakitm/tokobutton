// import * as playlist from './playlist.json' 
import { styles, addStyle } from './style'
import { playlist } from './playlist'

type PlayListItem = { src: string | typeof import("*.wav"), text: string }
type PlayList = PlayListItem[]

function createAudio (src: string) {
  const audio = document.createElement('audio')
  audio.src = <string>src
  return audio
}

function createAudioButton ({ src, text }: PlayListItem) {
  const audio = createAudio(<string>src)
  const button = document.createElement('button')

  button.textContent = text
  button.appendChild(audio)
  button.addEventListener('click', () => {
    audio.onplaying
      ? audio.pause()
      : audio.play()
  })

  return button
}

function renderAudioButtons (arr: PlayList) {
  arr.forEach(elem => {
    document.querySelector('#app')?.appendChild(createAudioButton({ ...elem }))
  })
}

addStyle(styles)
renderAudioButtons(Array.from(playlist))