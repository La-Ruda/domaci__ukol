// tady je místo pro náš program

let button = document.getElementById("button");

button.addEventListener("click", customizedInput);


function customizedInput() {

    let name = prompt("What's your name?");
        while (name === "" ) {
            alert("That's not a valid name :(")
            name = prompt("What's your name?")
        }
    let surname = prompt("What's your surname?");
        while (surname === "" ) {
            alert("That's not a valid surname :(")
            surname = prompt("What's your surname?")
        }       
    let year  = prompt("What year were you born?")  
        while (year === '' || isNaN(year)) {
            alert("Year of birth has to be a NUMBER :(")
            year  = prompt("What year were you born?") 
        }
    let color = prompt("What is your favorite color?")
        while (!color.match(/^(#[a-f0-9]{6}|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua|orange|brown|gold|grey|pink)$/i)) {
            alert("Your color has to be ONE WORD and in ENGLISH")
            color = prompt("What is your favorite color?");
        }

    let currentYear = new Date().getFullYear();

    document.getElementById("field").innerHTML = "Your name is: " + name + " " + surname +  ". Your age is: " + (currentYear - year) + ".";
    document.getElementById("field").style.border = '5px solid ' + color;    
}      

