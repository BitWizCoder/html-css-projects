//project preview
const projectGrid = document.querySelector(".project-grid");
function displayPorjects(projects) {
  projects.map((project, i) => {
    const id = i + 1;
    const projectItem = document.createElement("div");
    projectItem.classList.add("card-width");

    projectItem.innerHTML = `
                    <div>
                        <img class="img-width" src=${project.img} alt="">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href=${project.live} target="_blank" class="btn btn-preview">Preview</a>
                        <a href=${project.github} target="_blank" class="btn btn-preview">Code</a>
                    </div>`;

    projectGrid.appendChild(projectItem);
  });
}

displayPorjects(projectData);
