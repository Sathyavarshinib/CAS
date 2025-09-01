document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let subject = document.getElementById("subject").value;
  let marks = parseInt(document.getElementById("marks").value); // 👉 number-ஆ convert
  let state = document.getElementById("state").value;

  let student = {
    subject: subject,
    marks: marks,
    state: state
  };

  localStorage.setItem("studentData", JSON.stringify(student));
  window.location.href = "result.html";
});
