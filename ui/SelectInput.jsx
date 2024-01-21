"use client"

import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectInput({ item = [], title,labelId, id }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={labelId} className='bg-white'>{title}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={value}
          label={title}
          onChange={handleChange}
          
          
        >
          {item.map((tourItem, index) => (
            <MenuItem key={index} value={tourItem}>{tourItem}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
