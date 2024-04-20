
function SolarCal(){
  const RU = document.getElementById("RU").value;
  const PE = document.getElementById("PE").value;
  const SH = document.getElementById("SH").value;
  const AR = document.getElementById("AR").value;
  const total = (RU / (PE * SH)) * AR;
  const rounded=total.toFixed(3);
  console.log(rounded);
  
  document.getElementById("result").innerHTML="The needed area is "+ rounded +" m² ";
  return rounded;
}


