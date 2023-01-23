import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const ColorButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#b33939',
  width: "200px",
  '&:hover': {
    backgroundColor:'#b33939',
  },
}))


const MyButton = ({type, children}) => {
  return (
    <ColorButton type={type} variant="contained">{children}</ColorButton>
  );
}

export default MyButton;