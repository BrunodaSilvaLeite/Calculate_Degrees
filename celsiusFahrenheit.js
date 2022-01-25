const clear = document.getElementById('clear')
const container = document.getElementById('container');
const degresInput = document.getElementById("degreesInput")
const degreesResult = document.getElementById("degreesResult")
const optionsDegreesInput = document.getElementById("opstionsDegreesInput")
const optionsDegreesResult = document.getElementById("opstionsDegreesResult")

container.addEventListener("click", ()=>{

  const valueOpstionsDegreesInput = optionsDegreesInput.options[optionsDegreesInput.selectedIndex].value
  const valueOpstionsDegreesResult = optionsDegreesResult.options[optionsDegreesResult.selectedIndex].value
  const numberDegrees = degresInput.value
  checkDegrees( numberDegrees,valueOpstionsDegreesInput, valueOpstionsDegreesResult)
})

clear.addEventListener("click", ()=>{
  degresInput.value = "" ;
  degreesResult.value = "" ;
})
function checkDegrees(number,valuInput,valueResult) {
 
  if(valuInput === "fahrenheit" && valueResult === "Celsius") {
   
    let resultCelsius = (number - 32) * 5/9 
    degresInput.value = number;
    degreesResult.value = Math.floor(resultCelsius) ;
    
    return
  }
  if(valuInput === "Celsius" && valueResult === "fahrenheit") {
    let resultFahrenheit = number * 9/5 + 32;
    degreesResult.value = Math.floor(resultFahrenheit) ;
    degresInput.value = number ;
    return
  }

  else{
    degreesResult.value = number ;
    degresInput.value = number ;
  }
}


