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
        className="block-search"
        label="Search"
        variant="outlined"
        placeholder="university search"
        onChange={(e) => setSearchI(e.target.value)}
      />
    </div>
  );
}
