function pvp() {
    document.getElementById("gameMode").style.display = "none";
    document.getElementById("PVPbox").style.display = "block";
    document.getElementById("pvpNumofChar_buttons").style.display = "block";
}
function campaign() {
    document.getElementById("gameMode").style.display = "none";
    document.getElementById("Campaignbox").style.display = "block";
}
function char1() {
    document.getElementById("charSelection1").style.display = "block";
    document.getElementById("pvpNumofChar").style.display = "none";
}
function refresh() {
    document.getElementById("gameMode").style.display = "block";
    document.getElementById("PVPbox").style.display = "none";
    document.getElementById("Campaignbox").style.display = "none";
}

// function pvp() {
//     var a = document.getElementById("gameMode");
//     var b = document.getElementById("pvpNumOfChar");
//     a.style.display = "none";
//     b.style.display = "block";
    
// }
// function char1() {
//     var a = document.getElementById("team_1");
//     var b = document.getElementById("pvpNumOfChar");
//     a.style.display = "block";
//     b.style.display = "none";

// }
// function team11(){
//     var hero = document.getElementById("team1Char1").value;
//     var health = document.getElementById("team1Char1HP").value;
//     var ac = document.getElementById("team1Char1AC").value;
//     var a = document.getElementById("formchar1");
//     a.style.display = "none";
//     document.getElementById("charChosen1").style.display = "block";
//     document.getElementById("charChosen1Hero").innerHTML = hero;
//     document.getElementById("charChosen1Hp").innerHTML += health;
//     document.getElementById("charChosen1Ac").innerHTML += ac;
// }
// function charSubmit() {

// }
// function campaign(){
//     var a = document.getElementById("gameMode");
//     var b = document.getElementById("cammpaignNumofTeams");
//     a.style.display = "none";
//     b.style.display = "block";
// }
// function refresh() {
//     var a = document.getElementById("pvpNumOfChar");
//     var b = document.getElementById("cammpaignNumofTeams");
//     var c = document.getElementById("gameMode");
//     var d = document.getElementsByClassName("team");
//     var e = document.getElementById("charChosen1");
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "block";
//     for (let i = 0; i < d.length; i++) {
//         d[i].style.display = 'none';
//       }
//     e.innerHTML = '<h1 id="charChosen1Hero"></h1> \
//                             <h2 id="charChosen1Hp">Health:</h2> \
//                             <h2 id="charChosen1Ac">AC:</h2>' ;
//     e.style.display = "none";
//     document.getElementById("charSelection1").style.display = "block";
// }