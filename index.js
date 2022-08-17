// document.getElementById("count-el").innerText = 5;
// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
console.log(countEl)
//Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
console.log(saveEl)
let count = 0

function increment() {
    count = count + 1
    // set countEl's innerText to the count
    countEl.innerText = count
}

function save(){
//Create a variable that contains both the count and the dash separator,i.e. "12 - "
    let countStr = count + " - "
    
    //Render the variable in the saveEl using innerText
    // saveEl.innerText = countStr;  //This will totally remove the previous entries
    // saveEl.innerText += countStr; //this will work but lets use textContent which shows the
    //content of all element including <script> and <style>
        saveEl.textContent += countStr;
   //Make sure to not delete the existing content of the paragraph
        
        countEl.textContent = 0; // this returns the code to 0 everytime you hit the save button
        count = 0
        return count;
}

