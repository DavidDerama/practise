const postsContainer = document.querySelector("main");

document.addEventListener("DOMContentLoaded", () => {
  fetchPosts();
});

function renderPosts(data, liked = "solid") {
  let html = "";

  data.forEach((post, index) => {
    let likedClass = "";
    if (post.isLiked) {
      likedClass = "postLiked";
    }
    html += `<section class="post">
        <div class="post-cred">
          <img src="/inc/./${post.avatar}" alt="" class="profile-image"/>
          <div class="name-location">
            <p class="avatar-name">${post.name}</p>
            <p class="location">${post.location}</p>
          </div>
        </div>
        <div class="post-image" data-username="${post.username}">
          <img src="/inc/${post.post}" alt="" class="post-image" data-username="${post.username}"/>
          <div class="heart-icon" data-username="${post.username}"></div>
        </div>
        <div class="buttons-comments">
          <div class="buttons">
            <i class="fa-${liked} fa-heart ${likedClass}" data-like="${post.username}"></i>
            <button><img src="/inc/images/icon-comment.png" alt="" /></button
            ><button><img src="/inc/images/icon-dm.png" alt="" /></button>
          </div>
          <p class="likes">${post.likes} likes</p>
          <div class="comments">
            <p class="commenter">
              <span class="commenter-name">${post.username}</span> ${post.comment}
            </p>
          </div>
        </div>
      </section>`;
  });
  postsContainer.innerHTML = html;
}

document.addEventListener("dblclick", (e) => {
  if (e.target.dataset.username) {
    const username = e.target.dataset.username;
    handeLikes(username);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.like) {
    const username = e.target.dataset.like;
    handeLikes(username);
  }
});

function handeLikes(username) {
  fetch(`/post/${username}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      renderPosts(data);
    });

  // if (post.isLiked) {
  //   post.likes--;
  // } else {
  //   post.likes++;
  // }
  // post.isLiked = !post.isLiked;
  // renderPosts("solid");
}

function fetchPosts() {
  fetch("/posts", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      renderPosts(data);
    });
}
