import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SearchInput(props) {

    const minStarInput = document.getElementById("minStars");
  return (
    <Stack spacing={2} direction={"row"} mt={2} ml={10} alignItems="center">
        <label for="minStars" >評価：</label>
        <input type="number" id="minStars" min="0" max="5" step="0.1" />
        <label for="minStars">以上</label>
        <Button variant="contained"onClick ={() => {
            props.setMinStar(minStarInput.value)}}>絞り込み
        </Button>
    </Stack>
  );
}


