function getQueryParam(name) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(name);
  }
  
  var data1Received = decodeURIComponent(getQueryParam('data1'));
  var data2Received = decodeURIComponent(getQueryParam('data2'));
  console.log(data1Received); 
  console.log(data2Received); 

  
  const studentName = data1Received;
  const marksSecured = data2Received;
  const wrongAnswers = 9-marksSecured;
  const correctAnswers = marksSecured;
  
  document.getElementById('studentName').innerText = studentName;
  document.getElementById('marks').innerText = marksSecured;



var ctx = document.getElementById('performanceChart').getContext('2d');
var performanceChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['👍 Correct Answers', '🙅‍♂️ Wrong Answers'],
        datasets: [{
            data: [correctAnswers, wrongAnswers],
            backgroundColor: ['#4CAF50', '#FF5252'],
        }]
    },
    options: {
        animation:{
            animateRotate: true,
            animateScale: true,
        }
    }
});

document.getElementById('answerCounts').innerHTML = `<p>✅ Correct Answers: ${correctAnswers}</p><p>❌ Wrong Answers: ${wrongAnswers}</p>`;

function getQueryParam(name) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(name);
  }
  
  var data1Received = decodeURIComponent(getQueryParam('data1'));
  var data2Received = decodeURIComponent(getQueryParam('data2'));