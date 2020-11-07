declare module '@tombatossals/react-chords' {}

type Note =
  | 'A'
  | 'Ab'
  | 'A#'
  | 'B'
  | 'Bb'
  | 'C'
  | 'C#'
  | 'D'
  | 'Db'
  | 'D#'
  | 'E'
  | 'Eb'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'Gb'

interface instrument {
  strings: number
  fretsOnChord: number
  name: string
  keys: note[]
  tunings: {
    [key: string]: note[]
  }
}

interface ChordProps {
  chord: {}
  instrument: instrument
  lite: boolean
}

declare module '@tombatossals/react-chords/lib/Chord' {
  declare const myComponent: React.FC<ChordProps>

  export default myComponent
}
