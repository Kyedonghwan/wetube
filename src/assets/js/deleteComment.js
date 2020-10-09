import axios from "axios";

const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const deleteCommentApi = async (deleteCommentId, li) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios
    .post(`/api/${deleteCommentId}/delete-comment`, {
      videoId,
    })
    .then((response) => {
      if (response.status === 200) {
        commentList.removeChild(li);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

export const handleCommentId = (event) => {
  const li = event.target.parentNode;
  const deleteCommentId = li.id;
  deleteCommentApi(deleteCommentId, li);
  decreaseNumber();
};

export const deleteComment = (deleteBtn) => {
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", handleCommentId);
  });
};
