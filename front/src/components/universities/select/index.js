import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MySelect({ options, value, onChange }) {
  return (
    // <select value={value} onChange={(e) => onChange(e.target.value)}>
    //   <option disabled value="">
    //     {defaultValue}
    //   </option>
    //   {options.map((option) => (
    //     <option key={option.value} value={option.value}>
    //       {option.name}
    //     </option>
    //   ))}
    // </select>
    <Box sx={{ width: "29%", marginTop: "7px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
        <Select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
