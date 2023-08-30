import * as React from 'react';
import { Link } from 'react-router-dom';


export default function Sub01() {
  return(
    <>
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/sub01'}>Sub01</Link>
    </div>   

    <div>sub01 페이지 입니다.</div>
    </>    
  );
}