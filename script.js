let projects = document.getElementById('projects')
let sidebar = document.getElementById('sidebar')
let divider = document.getElementById('divider')
let main = document.getElementById('main')

projects.onclick = function() {
  if (divider.style.display == "block") {
    divider.style.display = "none";
    sidebar.style.display = "none";
    main.style.marginRight = "25%";
    projects.innerHTML = "<div id='button'>PROJECTS</div>";
  } else {
    divider.style.display = "block";
    sidebar.style.display = "block";
    main.style.marginRight = "0px";
    projects.innerHTML = "<div id='button'>HIDE</div>";
  }
}
