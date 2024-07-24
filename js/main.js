let input = document.getElementById('input');
let grams = document.getElementById('grams');
let pounds = document.getElementById('pounds');
let oz = document.getElementById('ounces');
let values = document.getElementById('values');


input.addEventListener('input' , convertValue);


function convertValue(e){
    e.preventDefault();
    values.style.display = '';
    let inputValue = input.value; 
    let gramsValue = grams.value;
    let poundsValue = pounds.value;
    let ozValue = oz.value;   

   


    if(inputValue !== ''){
        let convertToPound = inputValue * 2.20;
        let convertToGrams = inputValue * 1000;
        let convertToOz = convertToPound * 16;

        pounds.innerHTML = convertToPound;
        oz.innerHTML = convertToOz;
        grams.innerHTML = convertToGrams;
    


    }

 

    


}
