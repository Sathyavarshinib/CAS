const student = JSON.parse(localStorage.getItem("studentData"));
const resultDiv = document.getElementById("result");
if (student) {
  let suggestion = "";
  if (student.subject === "Math") {
    suggestion = "Engineering, B.Sc. in Mathematics";
  } else if (student.subject === "Biology") {
    suggestion = "MBBS, BDS, B.Sc. in Biology";
  } else if (student.subject === "Commerce") {
    suggestion = "B.Com, BBA, CA Foundation";
  } else {
    suggestion = "General courses";
  }
  fetch("college.json")
    .then(res => res.json())
    .then(data => {
      let eligibleColleges = data.filter(c =>
        c.state.toLowerCase() === student.state.toLowerCase() &&
        student.marks >= c.cutoff
      );
      let collegeList = eligibleColleges.length > 0
        ? eligibleColleges.map(c => `${c.name} (${c.course})`).join("<br>")
        : "No colleges found matching your criteria."
      resultDiv.innerHTML = `
        <p>You should pursue: <b>${suggestion}</b></p>
        <p>Your 12th Marks: <b>${student.marks}%</b></p>
        <p>Preferred State: <b>${student.state}</b></p>
        <h3>Colleges You Can Apply To:</h3>
        <p>${collegeList}</p>
      `;
    });
} else {
  resultDiv.innerHTML = "<p>No student data found. Please take the quiz first.</p>";
}
