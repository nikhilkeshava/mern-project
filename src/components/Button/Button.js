import React from "react";
import { Button, makeStyles } from "@material-ui/core";
// import addIcon  from '../../Assets/images/add-icon.svg';
// import scanIcon from '../../Assets/images/qrCODE.svg';
//  To get the hover effect do not pass the class name else send default classname as main
const ButtonNew = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: "#04724D !important",
        color: "#fff !important",
        opacity: "0.9",
      },
     
    },



    
    // main: {
    //   "&:hover": {
    //     color: "#ffffff !important",
    //     opacity: "0.9",
    //     backgroundColor: "#00008b",
    //   },
    // },
  }));

  const classes = useStyles();
  let icon = null; 
  if (props.endIcon) {
   icon = <img src={props.endIcon}  
  //  style={{marginLeft:"-5px"}}
   style={{marginLeft:props.iconMarginLeft ? props.iconMarginLeft : "0px" }}
   />;
  }
  
//   if (props.scanIcon) {
//    icon = <img src={scanIcon} height="20px" width="20px"/>;
//   }
  return (
    <Button 
      style={{
        fontFamily:"normal normal 600 13px/14px Muli",
        backgroundColor: props.active
          ? "darkslategrey"
          : props.backgroundColor ? props.backgroundColor : "darkslategrey",
        fontSize: props.fontSize ? props.fontSize : "",
        fontWeight: props.fontWeight ? props.fontWeight : "",
        color: props.active ? "#ffffff" : props.color ? props.color : "#ffffff",
        width: props.width ? props.width : "180px",
        height: props.height ? props.height : "50px",
        borderRadius: props.borderRadius ? props.borderRadius : "10px",
        textAlign: "center",
        textTransform: "capitalize",
        margin: props.margin ? props.margin : "2px",
        padding: props.padding ? props.padding : "",
        borderLeft: props.borderLeft ? props.borderLeft : "none",
        outline: "none",
        minWidth:props.minWidth ? props.minWidth : "30px"
      }}
      onClick={props.onClick}
      className={props.className ? props.className : classes.root}
      disabled={props.disabled ? props.disabled : false}
      endIcon={icon} 
    >
      {props.children}
    </Button>
  );
};

export default ButtonNew;