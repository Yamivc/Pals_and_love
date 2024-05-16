//no fui capaz de implementarlo

import { db } from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/comments");

const getAllComments = () => {
  return get(dbRef);
};

const addComment = (name, comment) => {
  return push(dbRef, {
    name: name,
    comment: comment
  });
};

const removeComment = (key) => {
  const dbRefComment = ref(db, `/comments/${key}`);
  return remove(dbRefComment);
};

export default {
  getAllComments,
  addComment,
  removeComment,
};
