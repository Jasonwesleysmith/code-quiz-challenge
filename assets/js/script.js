var count = 60;
var interval = setInterval(function(){
  document.getElementById('countdown-timer').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('countdown-timer').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);