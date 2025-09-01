document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const subject = document.querySelector("select[name='subject']").value;
  const marks = parseFloat(document.getElementById("marks").value);
  const state = document.getElementById("state").value.trim();

  let career = "";
  if (subject === "math") career = "Software Engineer";
  else if (subject === "biology") career = "Doctor";
  else if (subject === "arts") career = "Artist";

  localStorage.setItem("career", career);
  localStorage.setItem("marks", marks);
  localStorage.setItem("state", state);

  window.location.href = "result.html";
});
