const career = localStorage.getItem("career");
const marks = parseFloat(localStorage.getItem("marks"));
const state = localStorage.getItem("state");

document.getElementById("careerBox").innerText = `🎯 You should pursue: ${career}\nYour 12th Marks: ${marks}%`;

fetch("data/colleges.json")
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("collegeList");
    let found = false;

    data.forEach(college => {
      if (
        college.career === career &&
        college.cutoff <= marks &&
        college.state.toLowerCase() === state.toLowerCase()
      ) {
        const li = document.createElement("li");
        li.innerText = `${college.college} – ${college.course} (Cutoff: ${college.cutoff}%)`;
        list.appendChild(li);
        found = true;
      }
    });

    if (!found) {
      list.innerHTML = "<li>No colleges found matching your profile in the selected state.</li>";
    }
  });
