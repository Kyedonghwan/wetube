import axios from "axios";
import { deleteComment } from "./deleteComment";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
let deleteBtn = document.querySelectorAll(".deleteBtn");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = async (comment, loggedUser, newCommentId) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  li.id = newCommentId;
  li.appendChild(span);
  li.appendChild(delBtn);
  span.innerHTML = comment;
  delBtn.innerHTML = "❌";
  commentList.prepend(li);
  delBtn.className = "deleteBtn";
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios
    .post(`/api/${videoId}/comment`, {
      comment,
    })
    .then((response) => {
      const newCommentId = response.data.newCommentId;
      const loggedUser = response.data.loggedUser;
      if (response.status === 200) {
        addComment(comment, loggedUser, newCommentId);
        deleteBtn = document.querySelectorAll(".deleteBtn");
        deleteComment(deleteBtn);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  deleteComment(deleteBtn);
}

if (addCommentForm) {
  init();
}
