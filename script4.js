let s=0;
function todb() {
    calculatescore();

    let data2send  =  parseInt(data2Received);
    data2send+=s;
    console.log(data2send);

    // alert('Your score is ' + s );

    window.location.href = 'p5.html?data1=' + encodeURIComponent(data1Received) + '&data2=' + encodeURIComponent(data2send);

}


function calculatescore(){
    var input1Value = document.getElementById('o1').value;
    var input2Value = document.getElementById('o2').value;
    var input3Value = document.getElementById('o3').value;
    var input4Value = document.getElementById('o4').value;

    if(input1Value==36) s++;
    if(input2Value==39) s++;
    if(input3Value==88) s++;
    if(input4Value==47) s++;

    return s;
}

function getQueryParam(name) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(name);
  }
  
  var data1Received = decodeURIComponent(getQueryParam('data1'));
  var data2Received = decodeURIComponent(getQueryParam('data2'));
  console.log(data1Received); 
  console.log(data2Received); 