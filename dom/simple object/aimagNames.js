const aimagNames = document.getElementsByTagName("li");
console.log(document.querySelectorAll("li")[0].innerHTML);
console.log(document.getElementById("aimag-522").innerText);
console.log(aimagNames[aimagNames.length - 8].innerText);
for (i = 0; i < aimagNames.length; i++) {
  aimagNames[i].style.fontSize = "20px";
  aimagNames[i].style.padding = "10px";
  aimagNames[i].style.color = "Purple";
  if (aimagNames[i].id[6] == 1) {
    aimagNames[i].style.backgroundColor = 'red'
  }
  else if (aimagNames[i].id[6] == 2) {
    aimagNames[i].style.backgroundColor = 'yellow'
  }
  else if (aimagNames[i].id[6] == 3) {
    aimagNames[i].style.backgroundColor = 'gray'
  }
  else if (aimagNames[i].id[6] == 4) {
    aimagNames[i].style.backgroundColor = 'blue'
  }
  else {
    aimagNames[i].style.backgroundColor = 'green'
  }
}
