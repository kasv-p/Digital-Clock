setInterval(showTime,1000);
function showTime()
{
  time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  m='AM';

  if (hours>12)
  {
    hours-=12;
    m='PM';
  }
  if (hours==0)
  {
    hours=12;
    m='AM';
  }
  hours=hours>=10?hours:'0'+hours;
  minutes=minutes>=10?minutes:'0'+minutes;
  seconds=seconds>=10?seconds:'0'+seconds;
timestring=hours+':'+minutes+':'+seconds+' '+m;
document.getElementById('clock').innerHTML=timestring;
}
showTime();
