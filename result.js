document.addEventListener("DOMContentLoaded", function () {
    const exam = localStorage.getItem("exam");
    const year = localStorage.getItem("year");
    const searchType = localStorage.getItem("searchType");
    const value = localStorage.getItem("value");
  
    setTimeout(() => {
      document.querySelector(".loading").style.display = "none";
      document.getElementById("resultContent").style.display = "block";
  
      document.getElementById("examType").textContent = exam.toUpperCase();
      document.getElementById("examYear").textContent = year;
      document.getElementById("searchType").textContent = searchType.toUpperCase();
      document.getElementById("searchValue").textContent = value;
    }, 2000); // Simulate 2 seconds loading
  });
  