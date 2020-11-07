import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import React from 'react'
import { NOTES } from '../consts/notes'

type NotesControlProps = {
  onChange: (
    e: React.ChangeEvent<{
      name?: string | undefined
      value: Note
    }>
  ) => void
  value?: Note
}

export const NotesControl: React.FC<NotesControlProps> = ({
  onChange,
  value,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>Note</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        onChange={onChange}
      >
        {NOTES.map((note) => (
          <MenuItem value={note} key={note}>
            {note}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
