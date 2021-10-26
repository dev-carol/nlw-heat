const linksSocialMedia = {
  github: "dev-carol",
  youtube: "rocketseat",
  facebook: "rocketseat",
  instagram: "devcaroly",
  twiiter: "rocketseat",
};

function changeSocialMediaLinks() {
  for (let listMedia of socialLinks.children) {
    const social = listMedia.getAttribute("class");
    listMedia.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      userName.textContent = data.name;
      bioGitHub.textContent = data.bio;
      userLink.ahref = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    })
  );
}

getGitHubProfileInfos();
