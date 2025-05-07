function open_it(input) {
    let output = "";
    document.getElementById("popup").style.display = "inline";
    if(input == 1) {
        output = '<img src="./img/calculator.png"><div><h3>Calculator</h3><p>A fully functional basic calculator that can do basic arithmetic equations</p><button onclick="location.href=\'CalculatorProject/home.html\'" class="link">Link</button></div>';
    } else if(input == 2) {
        output = '<img src="./img/movie.png"><div><h3>Movie Collection</h3><p>A website created in my first year along with my peers featuring a curated collection of movies organized by genres.</p><button onclick="location.href=\'MovieProject/home.html\'" class="link">Link</button></div>';
    } else if(input == 3) {
        output = '<img src=""><div><h3>DND Project</h3><p>A website created for my friends and I\'s DND game.</p><button onclick="location.href=\'OwnProject/home.html\'" class="link">Link</button></div>';
    } 
    document.getElementById("popup-box").innerHTML = output;
}
function close_it() {
    document.getElementById("popup").style.display = "none";
}