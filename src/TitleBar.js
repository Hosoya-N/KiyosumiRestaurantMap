
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TitleBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='warning'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            清澄周辺のごはんやさんマップ
          </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
}


