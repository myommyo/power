import * as React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

function layoutGrid() {
  //ReactGridLayout = require('react-grid-layout');`
  const layout = [
    { i: "a", x: 0, y: 0, w: 3, h: 2 },
    { i: "b", x: 3, y: 0, w: 3, h: 2 },
    { i: "c", x: 6, y: 0, w: 3, h: 2 },
    { i: "d", x: 0, y: 0, w: 3, h: 2 },
  ];
  return (
    <div id="container">
      <ResponsiveGridLayout className="layout" layouts={{ lg: layout }} breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} cols={{ lg: 9, md: 6, sm: 4, xs: 2, xxs: 1 }}>
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
        <div key="d">d</div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default layoutGrid;
