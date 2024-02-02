function allowDrop(event) {
  event.preventDefault();
}

function drag(ev) {
  var container = ev.target;

    var containerColor = container.style.backgroundColor;
    if (containerColor === "red" || containerColor === "green") {
        ev.preventDefault();
    } else {
        ev.dataTransfer.setData("text", container.textContent);
    }
}


let score = 0 ;

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text").trim();
  var draggedElement = document.querySelector('.container[draggable="true"]:hover');
console.log(data);
console.log(draggedElement);
  var correctAnswer;
  switch (data) {
      case "23+48":
          correctAnswer = "71";
          break;
          case "45+16":
            correctAnswer = "61";
          break;
      case "13+24":
          correctAnswer = "37";
          break;
      case "12+9":
          correctAnswer = "21";
          break;
          default:
            correctAnswer = null;
          }
  console.log(correctAnswer);

  if (draggedElement && correctAnswer !== null) {
      var userAnswer = ev.target.textContent.trim();
      console.log(userAnswer);
      if (userAnswer === correctAnswer) {
          draggedElement.style.backgroundColor = "green";
          ev.target.style.backgroundColor = "green";
          score++;
      } else {
          draggedElement.style.backgroundColor = "red";
          ev.target.style.backgroundColor = "red";
      }
  }
}

function getQueryParam(name) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get(name);
}

var data1Received = decodeURIComponent(getQueryParam('data1'));
var data2Received = decodeURIComponent(getQueryParam('data2'));
console.log(data1Received); 
console.log(data2Received);


function tot3() {
  // alert('You scored '+score+' points');

  let data2send  =  parseInt(data2Received);
  data2send+=score;
  console.log(data2send);

  window.location.href = 'p4.html?data1=' + encodeURIComponent(data1Received) + '&data2=' + encodeURIComponent(data2send);
}

