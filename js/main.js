const inputSubject=document.getElementById("inputSubject");
inputSubject.addEventListener("blur", () => {
    const text = inputSubject.value; 
    if (text!= ""){
    inputSubject.className = "border rounded-md p-2 text-info border-green-500 bg-neutral-700";}
    else {inputSubject.className = "border rounded-md p-2 text-info border-red-500 bg-neutral-700"
        const why = document.createElement("p");
        why.textContent="This field is required";
        why.className = "text-red-500";
        const div=document.getElementById("divSubject");
        const existingMessage = div.querySelector("p");
        if (existingMessage) {
            div.removeChild(existingMessage);
        }
        div.appendChild(why);
    }
});

const inputEmail = document.getElementById("inputEmail");
inputEmail.addEventListener("blur", () => {
    const text = inputEmail.value; 

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (text !== "" && emailPattern.test(text)) {
        inputEmail.className = "border rounded-md p-2 text-info border-green-500 bg-neutral-700";
    } else {
        inputEmail.className = "border rounded-md p-2 text-info border-red-500 bg-neutral-700";
        const whyEmail = document.createElement("p");
        whyEmail.textContent = "This field is required and must be a valid email address";
        whyEmail.className = "text-red-500";
        
        const div = document.getElementById("divEmail");
        const existingMessage = div.querySelector("p");
        if (existingMessage) {
            div.removeChild(existingMessage);
        }
        div.appendChild(whyEmail);
    }
});


const inputText=document.getElementById("textBody");
inputText.addEventListener("blur", () => {
    const text = inputText.value; 
    if (text!= ""){
    inputText.className = "border rounded-md p-2 text-info border-green-500 bg-neutral-700";}
    else {inputText.className = "border rounded-md p-2 text-info border-red-500 bg-neutral-700"
        const whyText = document.createElement("p");
        whyText.textContent="This field is required";
        whyText.className = "text-red-500";
        const div=document.getElementById("divTextBody");
        const existingMessage = div.querySelector("p");
        if (existingMessage) {
            div.removeChild(existingMessage);
        }
        div.appendChild(whyText);
    }
});