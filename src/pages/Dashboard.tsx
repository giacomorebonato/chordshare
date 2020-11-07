import { Box, Typography } from '@material-ui/core'
import React from 'react'
import Chord from '@tombatossals/react-chords/lib/Chord'
import { NotesControl } from '../components/NotesControl'

export const Dashboard: React.FC = () => {
  const [note, setNote] = React.useState<Note>('A')
  const chord = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false,
  }
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [] as Note[],
    tunings: {
      standard: ['E', 'A', 'D', 'G', 'B', 'E'] as Note[],
    },
  }
  const lite = false

  return (
    <Box>
      <Typography variant='h2'>Dashboard</Typography>
      <NotesControl
        value={note}
        onChange={(event) => {
          setNote(event.target.value)
        }}
      />
      <Chord chord={chord} instrument={instrument} lite={lite} />
    </Box>
  )
}
