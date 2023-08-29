import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import CircleIcon from '@mui/icons-material/Circle';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href=""
      onClick={handleClick}
    >
      조직관리
    </Link>,
    <Typography key="3" color="primary">
      프로젝트관리
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs 
       separator={<CircleIcon sx={{
        width: '3px',
        height: '3px',
        color: '#666666'
      }}/>}

       aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
