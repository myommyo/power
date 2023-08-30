import React from 'react';
import {Button, Container, Grid, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export const Buttons = () => {
  return (
    <Container>
        <Grid container >
        <Button color="primary" variant="contained" size='icon' startIcon={<DeleteIcon />}>
          Primary contained with icon
        </Button>
        <Button color="primary" variant="outlined" size='icon'>
          Primary outlined
        </Button>
        <Button color="info" variant="outlined" size='icon'>
          Outlined
        </Button>
        <Button color="primary" variant="contained" size='icon' disabled>
          disabled contained
        </Button>
        <Button color="primary" variant="outlined" size='icon' disabled>
          disabled outlined
        </Button>
        </Grid>

        <Stack direction="row" spacing={2} sx={{ m : 4}}>
            <Button color="primary" variant="contained" size='small'>
              Primary contained
            </Button>
        
            <Button color="primary" variant="outlined" size='small'>
              Primary contained
            </Button>
         
        </Stack>
    </Container>
  )
}

// const StyledButton = styled.button`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 1rem;
//   line-height: 1.5;
//   border: 1px solid lightgray;

//   color: ${(props) => props.color || 'gray'};
//   background: ${(props) => props.background || 'white'};

//   ${(props) =>
//     props.primary &&
//     css`
//     color: white;
//     background: navy;
//     border-color: navy;
//   `}
// `;

// function Button({ children, ...props }) {
//   return <StyledButton {...props}>{children}</StyledButton>;
// }

export default Buttons;
