import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function TextArea(props) {
  return (
    <TextareaAutosize
      rows={props.rows}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      cols={props.cols}
      className={props.className}
      style={props.style}
      error={props.error}
    />
  );
}
