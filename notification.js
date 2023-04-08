const collection = document.getElementById("container").children;
const points = document.querySelectorAll(".point");
const same = document.querySelectorAll(".same");
const mark = document.getElementById("mark");
const sum = document.getElementById("number");
let count = parseInt(sum.textContent);
//all element remove background and style, also notification number = 0
mark.addEventListener("click", () => {
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "white";
            points[i].style.display = "none";
            count = 0;
            sum.textContent = count.toString();
        }

});
//all element which is new notification make read, when I click some notification this background and red point remove 
for(let i = 0; same.length; i++){  
    same[i].addEventListener("click", () => {
        same[i].style.backgroundColor = "white"; 
        points[i].style.display = "none";
        count--;
        sum.textContent = count.toString();
   
        if(count < 0){
            count = 0;
        }
        sum.textContent = count.toString();
});
};