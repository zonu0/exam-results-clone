document.getElementById("searchType").addEventListener("change", function () {
    const inputFields = document.getElementById("inputFields");
    inputFields.innerHTML = "";
  
    const type = this.value;
  
    if (type === "index") {
      inputFields.innerHTML = `
        <label for="index">Index Number:</label>
        <input type="text" id="index" name="index" required />
      `;
    } else if (type === "nic") {
      inputFields.innerHTML = `
        <label for="nic">NIC:</label>
        <input type="text" id="nic" name="nic" required />
      `;
    }
  });
  
  document.getElementById("resultForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const exam = document.getElementById("exam").value;
    const year = document.getElementById("year").value;
    const searchType = document.getElementById("searchType").value;
    const value = document.getElementById(searchType)?.value;
  
    if (!value) {
      alert("Please enter a valid value.");
      return;
    }
  
    // Store data temporarily in localStorage
    localStorage.setItem("exam", exam);
    localStorage.setItem("year", year);
    localStorage.setItem("searchType", searchType);
    localStorage.setItem("value", value);
  
    // Redirect to result page with loading effect
    window.location.href = "result.html";
  });
  