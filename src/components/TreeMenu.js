import React from "react";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList } from "react-icons/fa";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";

import { BsPlusLg } from "react-icons/bs";

import TreeView, { flattenTree } from "react-accessible-treeview";

import tempThumb from "../assets/images/tempThumb.png";

const folder = {
  name: "",
  children: [
    {
      name: "GEN",
      children: [
        { name: "HOME" },
        { name: "대시보드" },
        { name: "아이디어관리" },
        { name: "업무그룹관리" },
        { name: "RPA업무관리", children: [{ name: "Sub1" }, { name: "Sub2" }] },
        { name: "RPA변경관리" },
        { name: "실행관리" },
        { name: "모니터링&현황" },
        { name: "커뮤니티", children: [{ name: "공지사항" }, { name: "FAQ" }] },
        { name: "봇스토어" },
        { name: "시스템관리" },
      ],
    },
  ],
};

const data = flattenTree(folder);

function TreeMenu() {
  return (
    <>
      <div className="directory">
        <TreeView
          data={data}
          aria-label="directory tree"
          nodeRenderer={({ element, isBranch, isExpanded, getNodeProps, level }) => (
            <div {...getNodeProps()} style={{ paddingLeft: 16 * (level - 1) }}>
              {isBranch ? <FolderIcon isOpen={isExpanded} /> : <FileIcon filename={element.name} />}

              {element.name}
            </div>
          )}
        />
      </div>
    </>
  );
}

const FolderIcon = ({ isOpen }) => (isOpen ? <AiOutlineMinus color="text.secondary" className="icon" /> : <BsPlusLg color="text.secondary" className="icon" />);

const FileIcon = ({ filename }) => {
  const extension = filename.slice(filename.lastIndexOf(".") + 1);
  switch (extension) {
    case "js":
      return <DiJavascript color="yellow" className="icon" />;
    case "css":
      return <DiCss3 color="turquoise" className="icon" />;
    case "json":
      return <FaList color="yellow" className="icon" />;
    case "npmignore":
      return <DiNpm color="red" className="icon" />;
    default:
      return null;
  }
};

export default TreeMenu;
