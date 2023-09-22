import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { LuTrash } from "react-icons/lu";

const Dropzone = ({ className }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      console.log(acceptedFiles);
    },
  });

  const images = files.map((file) => <img key={file.name} src={file.preview} alt="image" style={{ width: "100%" }} />);


  const removeFile = file => () => {
    const newFiles = [...images]
    newFiles.splice(newFiles.indexOf(file), 1)
    setFiles(newFiles)
  }

  return (
    <>
      <div className="dropArea" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="text">
          <p>Drag and Drop a file here or click</p>
          <BsFillCloudArrowUpFill />
        </div>
        <div className="dropImage">
          {images}
          <button className="btnDelete" onClick={removeFile(images)}>
            <LuTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default Dropzone;
