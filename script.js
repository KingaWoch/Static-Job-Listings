fetch("data.json")
  .then((res) => res.json())
  .then((jobList) => {
    console.log(jobList);
    document.querySelector(".list").innerHTML = jobList
      .map(
        (job) =>
          `
      <li class="job-item">
        <img src="${job.logo}" alt="${job.company}" class="logo" />
        <div class="job">
            <div class="company">
                <span class="name">${job.company}</span>
                <span class="new">${job.new}</span>
                <span class="featured">${job.featured}</span>
            </div>
            <a href="#">
              <h2 class="role">${job.position}</h2>
            </a>
            <div class="job-details">
            <ul>
              <li class="posted-at">${job.postedAt}</li>
              <li class="contract">${job.contract}</li>
              <li class="location">${job.location}</li>
            </ul>
          </div>
        </div>
        <div class="categories">
        ${job.languages
          .map((language) => `<a href="#">${language}</a>`)
          .join("")}
        ${job.tools.map((tool) => `<a href="#">${tool}</a>`).join("")}
        </div>
      </li>
      `
      )
      .join("");
  });
