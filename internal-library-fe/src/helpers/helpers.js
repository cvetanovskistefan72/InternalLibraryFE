import {
    faTrash,
    faPencilAlt,
    faPlus,
    faUndoAlt,
    faInfo,
    faCompactDisc,
    faNewspaper,
    faTape,
    faBook,
  } from "@fortawesome/free-solid-svg-icons";

export const colorType = (typeRes) => {
    let type ;
    if (typeRes === "Book") {
      type = { icon: faBook, color: "#b71c1c" };
    }
    if (typeRes === "CD") {
      type = { icon: faCompactDisc, color: "#01579b" };
    }
    if (typeRes === "Magazine") {
      type = { icon: faNewspaper, color: "#1b5e20" };
    }
    if (typeRes === "Video Tape") {
      type = { icon: faTape, color: "#b9770e" };
    }

    return type;
  };


  export const  processUserEmail = (users,id)=>users.find((user)=>user.userId===id).userEmail;