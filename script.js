// set up for a request

let url = 'https://api.github.com/users/ericabell'
let request = new XMLHttpRequest();

request.open('GET', url);
request.addEventListener('load', processResults);
request.send();


function processResults() {
  console.log(request.responseText);
  let userData = JSON.parse(request.responseText);

  // the containers for the data we will insert
  let basicsContainer = document.querySelector('.basics');
  let storyContainer = document.querySelector('.story');
  let pictureContainer = document.querySelector('.picture');

  // create The Basics content HTML
  let basicsContent = `<h3>The Basics</h3>
  <dl>
    <dt>Name:</dt> ${userData.name}
    <dt>Github URL:</dt> <dd><a href=${userData.url}>${userData.name}</a></dd>
    <dt>Email:</dt> <dd>${userData.email} - because I don't want SPAM!</dd>
    <dt>Company:</dt> <dd>${userData.company}</dd>
    <dt>Website:</dt> <dd>${userData.blog}</dd>
  </dl>
  `
  // insert the content
  basicsContainer.innerHTML = basicsContent;

  // create The Story content HTML
  let storyContent = `<h3>The Story</h3>
  <p>${userData.bio}
  </p>
  `

  // insert the content
  storyContainer.innerHTML = storyContent;

  // create The Picture content
  let pictureContent = `<img class='circular' src=${userData.avatar_url}>`

  // insert the content
  pictureContainer.innerHTML = pictureContent;


}
