import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";


export default function Home() {
  return(
    <>
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/sub01'}>Sub01</Link>
    </div>   

    <div>Home 페이지 입니다.</div>
    <ul class="list">
      <li class="c01" ><a href="#">테스트링크</a></li>
      <li class="c02"><a href="#">테스트링크1</a></li>
    </ul>

    </>
  );
}