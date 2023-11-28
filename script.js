// javascript code for Calculating the BMI

// selecting the form element in the document.
const form = document.querySelector('form');    

// adding the event listner to get the form element after the submit button in pressed.
form.addEventListener('submit', (event) => {    

    // preventing the default action of values moving to the server after submitting.
    event.preventDefault();                     

    const height = parseInt(document.querySelector('#height').value);     // collecting the height.
    const weight = parseInt(document.querySelector('#weight').value);     // collecting the weight.
    const result = document.querySelector('#outcome');                    // selecting the element where the outcome to be showed.

    // checks on height and weight
    if(height <= 0 || height === '' || isNaN(height)) {                   
        result.innerHTML = 'Enter valid height in CMs';
    }
    else if(weight <= 0 || weight === ''|| isNaN(weight)) {               
        result.innerHTML = 'Enter valid Weight in KGs';
    }
    else{
        // calculation of BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);     

        // Giving the message according to the BMI
        if(bmi < 19){
            result.innerHTML = `${bmi} - You are Malnourished.`;
        }
        else if(bmi >= 19 && bmi < 25){
            result.innerHTML = `${bmi} - You are Normal.`;
        }
        else if(bmi >= 25 && bmi <= 30){
            result.innerHTML = `${bmi} - You are Overweight.`;
        }
        else{
            result.innerHTML = `${bmi} - You are obese.`;
        }
    }

});




