let voteCounts = {
  JavaScript: 0,
  Python: 0,
  Java: 0,
  "C++": 0,
  Ruby: 0,
};

document.getElementById("submit-btn").addEventListener("click", function () {
  let radios = document.getElementsByName("language");

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      voteCounts[radios[i].value]++;
      break;
    }
  }

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  for (let language in voteCounts) {
    resultDiv.innerHTML += `${language}: ${voteCounts[language]} votes<br>`;
  }
});
