import React from "react";
import { TextField } from "@mui/material";
import "../style.css";

export default function SearchItem(props) {
  const { setSearchI } = props;
  return (
    <div className="block-search">
      <TextField
        fullWidth={true}
        margin="normal"
        label="Поиск"
        variant="outlined"
        placeholder="Поиск университета"
        onChange={(e) => setSearchI(e.target.value)}
      />
    </div>
  );
}
