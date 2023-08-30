import React from 'react';
import {Button, Container } from '@mui/material';


export const Buttons = () => {
  return (
    <Container>
      <Button variant="contained">Button</Button>
      <Button color='secondary' variant="outlined">Button</Button>
      <Button variant="contained" disabled>Disabled</Button>
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
