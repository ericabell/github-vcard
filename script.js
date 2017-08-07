// set up for a request

let url = 'https://api.github.com/users/ericabell'
let request = new XMLHttpRequest();

request.open('GET', url);
request.addEventListener('load', processResults);
request.send();


function processResults() {
  console.log(request.responseText);
  let userData = JSON.parse(request.responseText);
  let basicsContent = `<dl>
    <dt>Name</dt> ${userData.name}
    <dt>Github URL</dt> <dd>${userData.url}</dd>
    <dt>Email</dt> <dd>${userData.email}</dd>
    <dt>Company</dt> <dd>${userData.company}</dd>
    <dt>Website</dt> <dd>${userData.blog}</dd>
  </dl>
  `
  let basicsContainer = document.querySelector('.basics');
  let storyContainer = document.querySelector('.story');
  let pictureContainer = document.querySelector('.picture');

  basicsContainer.innerHTML = basicsContent;
}
