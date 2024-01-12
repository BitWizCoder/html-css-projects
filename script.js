//project preview
const projectGrid = document.querySelector(".project-grid");
function displayPorjects(projects) {
  projects.map((project, i) => {
    const id = i + 1;
    const projectItem = document.createElement("div");
    projectItem.classList.add("card");

    projectItem.innerHTML = `
                    <div>
                        <img class="img-width" src=${project.img} alt="">
                    </div>
                    <div class="project-info">
                        <h2 class="title">${project.title}</h2>
                        <p class="description">${project.description}</p>
                        <div class="btns">
                        <a href=${project.live} target="_blank" class="btn btn-preview">Preview</a>
                        <a href=${project.github} target="_blank" class="btn btn-preview">Code</a>
                        </div>
                    </div>`;

    projectGrid.appendChild(projectItem);
  });
}

displayPorjects(projectData);
