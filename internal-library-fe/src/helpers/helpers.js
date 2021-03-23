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

export const colorType = (res) => {
    let type;
    if (res.type === "Book") {
      type = { icon: faBook, color: "#b71c1c" };
    }
    if (res.type === "CD") {
      type = { icon: faCompactDisc, color: "#01579b" };
    }
    if (res.type === "Magazine") {
      type = { icon: faNewspaper, color: "#1b5e20" };
    }
    if (res.type === "Video Tape") {
      type = { icon: faTape, color: "#b9770e" };
    }

    return type;
  };