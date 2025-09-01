document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const marks = document.getElementById("marks").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const studentData = { subject, marks, state };
  localStorage.setItem("studentData", JSON.stringify(studentData));

  // redirect to result page
  window.location.href = "result.html";
});
