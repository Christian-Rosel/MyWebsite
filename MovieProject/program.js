function movie_titles_1() {
  var a = document.getElementById("movie_titles");
  var b = document.getElementById("movie_title");
  var c = document.getElementById("movie_info");
  a.style.backgroundImage = "url(img/fnaf.jpg)";
  b.innerHTML = "Five Nights at Freddy's";
  c.innerHTML = "2023 | Horror | 1h 49m";
}
function movie_titles_2() {
  var a = document.getElementById("movie_titles");
  var b = document.getElementById("movie_title");
  var c = document.getElementById("movie_info");
  a.style.backgroundImage = "url(img/equalizer3.jpg)";
  b.innerHTML = "The Equalizer 3";
  c.innerHTML = "2023 | Action | 1h 49m";
}
function movie_titles_3() {
  var a = document.getElementById("movie_titles");
  var b = document.getElementById("movie_title");
  var c = document.getElementById("movie_info");
  a.style.backgroundImage = "url(img/marvels.jpg)";
  b.innerHTML = "The Marvels";
  c.innerHTML = "2023 | Action | 1h 45m";
}
var movie = 0
function favourite_1(){
  var a = document.getElementById("favourite_img1");
  var b = document.getElementById("favourite_img2");
  var c = document.getElementById("favourite_img3");
  var d = document.getElementById("favourite_11");
  var e = document.getElementById("favourite_12");
  var f = document.getElementById("favourite_21");
  var g = document.getElementById("favourite_22");
  var h = document.getElementById("favourite_31");
  var i = document.getElementById("favourite_32");
  if (movie == 0){
    a.src = "img/insidious.jpg";
    b.src = "img/insidious2.jpg";
    c.src = "img/insidious3.jpg";
    d.innerHTML = "2010, Horror";
    e.innerHTML = "Insidious";
    f.innerHTML = "2013, Horror";
    g.innerHTML = "Insidious 2";
    h.innerHTML = "2015, Horror";
    i.innerHTML = "Insidious 3";
    movie = 3
  } else if (movie == 2) {
    a.src = "img/conjuring1.jpg";
    b.src = "img/conjuring2.jpg";
    c.src = "img/conjuring3.jpg";
    d.innerHTML = "2013, Horror";
    e.innerHTML = "The Conjuring";
    f.innerHTML = "2016, Horror";
    g.innerHTML = "The Conjuring 2";
    h.innerHTML = "2021, Horror";
    i.innerHTML = "The Conjuring 3";

  } else if (movie == 1) {
    a.src = "img/halloween1978.jpg";
    b.src = "img/scream.jpg";
    c.src = "img/adam.jpg";
    d.innerHTML = "1978, Horror";
    e.innerHTML = "Halloween";
    f.innerHTML = "1996, Horror";
    g.innerHTML = "Scream";
    h.innerHTML = "1991, Comedy";
    i.innerHTML = "The Adam's Family";
  }
  movie = movie - 1;
} 
function favourite_2(){
  var a = document.getElementById("favourite_img1");
  var b = document.getElementById("favourite_img2");
  var c = document.getElementById("favourite_img3");
  var d = document.getElementById("favourite_11");
  var e = document.getElementById("favourite_12");
  var f = document.getElementById("favourite_21");
  var g = document.getElementById("favourite_22");
  var h = document.getElementById("favourite_31");
  var i = document.getElementById("favourite_32");
  movie = movie + 1;
  if (movie == 1){
    a.src = "img/conjuring1.jpg";
    b.src = "img/conjuring2.jpg";
    c.src = "img/conjuring3.jpg";
    d.innerHTML = "2013, Horror";
    e.innerHTML = "The Conjuring";
    f.innerHTML = "2016, Horror";
    g.innerHTML = "The Conjuring 2";
    h.innerHTML = "2021, Horror";
    i.innerHTML = "The Conjuring 3";
  } else if (movie == 2) {
    a.src = "img/insidious.jpg";
    b.src = "img/insidious2.jpg";
    c.src = "img/insidious3.jpg";
    d.innerHTML = "2010, Horror";
    e.innerHTML = "Insidious";
    f.innerHTML = "2013, Horror";
    g.innerHTML = "Insidious 2";
    h.innerHTML = "2015, Horror";
    i.innerHTML = "Insidious 3";

  } else if (movie == 3) {
    a.src = "img/halloween1978.jpg";
    b.src = "img/scream.jpg";
    c.src = "img/adam.jpg";
    d.innerHTML = "1978, Horror";
    e.innerHTML = "Halloween";
    f.innerHTML = "1996, Horror";
    g.innerHTML = "Scream";
    h.innerHTML = "1991, Comedy";
    i.innerHTML = "The Adam's Family";
    movie = 0;
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var filters = false;
function filter(){
  if (filters == false){
    filters = true;
    document.getElementById("filters").style.display = "inline";

  } else if (filters == true) {
    filters = false;
    document.getElementById("filters").style.display = "none";
  }

}
function checkUncheck1() {
  document.getElementById("check2").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check4").checked = false;
  document.getElementById("check5").checked = false;
  document.getElementById("check6").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("movies_movierow").innerHTML = '<div class="movie_row1" id="movie_row"> \
  <div class="movie-11">\
  <img src="img/us.jpg" alt="images/Us_Alt_Poster.jpg" onclick="us()"> \
  </div> \
  <div class="movie-12"> \
  <img src="img/herditary.jpg" alt="images/Hereditary_Alt_Poster.jpg" onclick="hereditary()"> \
  </div> \
  <div class="movie-13"> \
  <img src="img/cobweb.jpg" alt="cobweb" onclick="cobweb()"> \
  </div> \
</div>'
}
function checkUncheck2() {
  document.getElementById("check1").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check4").checked = false;
  document.getElementById("check5").checked = false;
  document.getElementById("check6").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("movies_movierow").innerHTML = '<div class="movie_row1" id="movie_row"> \
  <div class="movie-11">\
  <img src="img/nohardfeelings.jpg" alt="No Hard Feelings" onclick="nohardfeelings()"> \
  </div> \
  <div class="movie-12"> \
  <img src="img/barbie.jpg" alt="Barbie" onclick="barbie()"> \
  </div> \
  <div class="movie-13"> \
  <img src="img/murdermystery.jpg" alt="Murder Mystery 2" onclick="murdermystery()"> \
  </div> \
</div>'
}
function checkUncheck3() {
  document.getElementById("check2").checked = false;
  document.getElementById("check1").checked = false;
  document.getElementById("check4").checked = false;
  document.getElementById("check5").checked = false;
  document.getElementById("check6").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("movies_movierow").innerHTML = '<div class="movie_row1" id="movie_row"> \
  <div class="movie-11">\
  <img src="img/notebook.jpg" alt="The Notebook" onclick="notebook()"> \
  </div> \
  <div class="movie-12"> \
  <img src="img/starisborn.jpg" alt="A Star is Born" onclick="starisborn()"> \
  </div> \
  <div class="movie-13"> \
  <img src="img/yourname.jpg" alt="Your Name" onclick="yourname()"> \
  </div> \
</div>'
}
function checkUncheck4() {
  document.getElementById("check2").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check1").checked = false;
  document.getElementById("check5").checked = false;
  document.getElementById("check6").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("movies_movierow").innerHTML = '<div class="movie_row1" id="movie_row"> \
  <div class="movie-11">\
  <img src="img/starwars.jpg" alt="Star Wars: The Rise of Skywalker" onclick="starwars()"> \
  </div> \
  <div class="movie-12"> \
  <img src="img/dune.jpg" alt="Dune" onclick="dune()"> \
  </div> \
  <div class="movie-13"> \
  <img src="img/avatar.jpg" alt="Avatar: The Way of Water" onclick="avatar()"> \
  </div> \
</div>'
}
function checkUncheck5() {
  document.getElementById("check2").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check4").checked = false;
  document.getElementById("check1").checked = false;
  document.getElementById("check6").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("movies_movierow").innerHTML = '<div class="movie_row1" id="movie_row"> \
  <div class="movie-11">\
  <img src="img/socialnetwork.jpg" alt="The Social Network" onclick="socialnetwork()"> \
  </div> \
  <div class="movie-12"> \
  <img src="img/tedbundy.jpg" alt="Extremely Wicked, Shockingly Evil and Vile" onclick="tedbundy()"> \
  </div> \
  <div class="movie-13"> \
  <img src="img/senna.jpg" alt="Senna" onclick="senna()"> \
  </div> \
</div>'
}
function checkUncheck6() {
  document.getElementById("check2").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check4").checked = false;
  document.getElementById("check5").checked = false;
  document.getElementById("check1").checked = false;
  document.getElementById("check7").checked = false;
  document.getElementById("movies_movierow").innerHTML = '<div class="movie_row1" id="movie_row"> \
  <div class="movie-11">\
  <img src="img/theequalizer.jpg" alt="The Equalizer 3" onclick="equalizer()"> \
  </div> \
  <div class="movie-12"> \
  <img src="img/spiderman.jpg" alt="Spider-Man: Across the Spider-Verse" onclick="spiderman()"> \
  </div> \
  <div class="movie-13"> \
  <img src="img/indianajones.jpg" alt="Indiana Jones and the Dial of Destiny" onclick="indianajones()"> \
  </div> \
</div>'
}
function checkUncheck7() {
  document.getElementById("check2").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check4").checked = false;
  document.getElementById("check5").checked = false;
  document.getElementById("check6").checked = false;
  document.getElementById("check1").checked = false;
  document.getElementById("movies_movierow").innerHTML =
  '<div class="movie_row1" id="movie_row"> \
                <div class="movie-11"> \
                <img src="img/us.jpg" alt="images/Us_Alt_Poster.jpg" onclick="us()">\
                </div>\
                <div class="movie-12">\
                <img src="img/barbie.jpg" alt="Barbie" onclick="barbie()">\
                </div>\
                <div class="movie-13">\
                <img src="img/cobweb.jpg" alt="cobweb" onclick="cobweb()">\
                </div>\
                <div class="movie-14">\
                <img src="img/starisborn.jpg" alt="A Star is Born" onclick="starisborn()">\
                </div>\
            </div>\
            <div class="movie_row2" id="movie_row2">\
                <div class="movie-21">\
                <img src="img/nohardfeelings.jpg" alt="No Hard Feelings" onclick="nohardfeelings()">\
                </div>\
                <div class="movie-22">\
                <img src="img/herditary.jpg" alt="images/Hereditary_Alt_Poster.jpg" onclick="hereditary()">\
                </div>\
                <div class="movie-23">\
                <img src="img/murdermystery.jpg" alt="Murder Mystery 2" onclick="murdermystery()">\
                </div>\
                <div class="movie-24">\
                <img src="img/yourname.jpg" alt="Your Name" onclick="yourname()">\
                </div>\
            </div>\
            <div class="movie_row3" id="movie_row3">\
                <div class="movie-31">\
                <img src="img/notebook.jpg" alt="The Notebook" onclick="notebook()">\
                </div>\
                <div class="movie-32">\
                <img src="img/tedbundy.jpg" alt="Extremely Wicked, Shockingly Evil and Vile" onclick="tedbundy()">\
                </div>\
                <div class="movie-33">\
                <img src="img/indianajones.jpg" alt="Indiana Jones and the Dial of Destiny" onclick="indianajones()">\
                </div>\
                <div class="movie-34">\
                <img src="img/avatar.jpg" alt="Avatar: The Way of Water" onclick="avatar()">\
                </div>\
            </div>\
            <div class="movie_row4" id="movie_row4">\
                <div class="movie-41">\
                <img src="img/starwars.jpg" alt="Star Wars: The Rise of Skywalker" onclick="starwars()">\
                </div>\
                <div class="movie-42">\
                <img src="img/spiderman.jpg" alt="Spider-Man: Across the Spider-Verse" onclick="spiderman()">\
                </div>\
                <div class="movie-43">\
                <img src="img/senna.jpg" alt="Senna" onclick="senna()">\
                </div>\
                <div class="movie-44">\
                <img src="img/theequalizer.jpg" alt="The Equalizer 3" onclick="equalizer()">\
                </div>\
            </div>\
            <div class="movie_row5" id="movie_row5">\
                <div class="movie-51">\
                <img src="img/socialnetwork.jpg" alt="The Social Network" onclick="socialnetwork()">\
                </div>\
                <div class="movie-52">\
                <img src="img/dune.jpg" alt="Dune" onclick="dune()">\
                </div>\
            </div>'
}
function us(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/us.jpg" alt="images/Us_Alt_Poster.jpg">\
  <h3>1. Us</h3>\
  <p>March 22 2019, Horror, 2h 1m, R-rated</p>' ;
}
function hereditary(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/herditary.jpg" alt="images/Hereditary_Alt_Poster.jpg"> \
  <h3>2. Hereditary</h3> \
  <p>June 8 2018, Horror, 2h 7m, R-rated</p>';
}
function cobweb(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/cobweb.jpg" alt="">\
  <h3>3. Cobweb</h3>\
  <p>July 21 2023, Horror, 1h 29m, R-rated</p>';
}
function nohardfeelings(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/nohardfeelings.jpg" alt="No Hard Feelings">\
  <h3>1. No Hard Feelings</h3>\
  <p>June 23 2023, Comedy,  1h 43m, R-rated </p>';
}
function barbie(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/barbie.jpg" alt="Barbie">\
  <h3>2. Barbie</h3>\
  <p>July 21 2023, Comedy, 1h 54m, PG-13</p>';
}
function murdermystery(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/murdermystery.jpg" alt="Murder Mystery 2">\
  <h3>3. Murder Mystery 2</h3>\
  <p>March 31 2023, Comedy, 1h 30m, PG-13</p>';
}
function notebook(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/notebook.jpg" alt="The Notebook">\
  <h3>1. The Notebook</h3>\
  <p>Date: June 25 2004, Romance, 2h 3m, PG-13</p>';
}
function starisborn(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML =
  '<img src="img/starisborn.jpg" alt="A Star is Born">\
  <h3>2. A star is born</h3>\
  <p>Date: October 5 2018, Romance, 2h 15m, R-rated</p';
}
function yourname(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/yourname.jpg" alt="Your Name"> \
  <h3>3. Your Name</h3> \
  <p>July 3 2016, Romance, 1h 46m, TV-PG</p>';
}
function starwars(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/starwars.jpg" alt="Star Wars: The Rise of Skywalker">\
  <h3>1. Star Wars: The Rise of Skywalker</h3>\
  <p>December 20, 2019, Sci-fi,  2h 22m, PG-13 </p>';
}
function dune(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/dune.jpg" alt="Dune">\
  <h3>2. Dune</h3>\
  <p>October 22 2021, Sci-fi, 2h 35m, PG-13</p>';
}
function avatar(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/avatar.jpg" alt="Avatar: The Way of Water">\
  <h3>3. Avatar: The Way of Water</h3>\
  <p>Dec 15 2022, Comedy, 3h 12m, PG-13</p>';
}
function socialnetwork(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/socialnetwork.jpg" alt="The Social Network">\
  <h3>1. The Social Network</h3>\
  <p>October 1 2010, Documentary, 2h, PG-13</p>';
}
function tedbundy(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/tedbundy.jpg" alt="Extremely Wicked, Shockingly Evil and Vile">\
  <h3>2. Extremely Wicked, Shockingly Evil and Vile</h3>\
  <p>June 26 2019, Action, 1h 50m, R-rated</p>';
}
function senna(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/senna.jpg" alt="Senna">\
  <h3>3. Senna</h3>\
  <p>November 3 2010, Documentary, 1h 46m, PG-13</p>';
}
function equalizer(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/theequalizer.jpg" alt="The Equalizer 3">\
  <h3>1. The Equalizer 3</h3>\
  <p>September 1 2023, Action,  1h 49m, R-rated</p>' ;
}
function spiderman(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/spiderman.jpg" alt="Spider-Man: Across the Spider-Verse">\
  <h3>2. Spider-Man: Across the Spider-Verse</h3>\
  <p>June 2 2023, Action, 2h 20m, PG</p>';
}
function indianajones(){
  document.getElementById("popup").style.display = "inline";
  document.getElementById("popup-movie").innerHTML = 
  '<img src="img/indianajones.jpg" alt="Indiana Jones and the Dial of Destiny">\
  <h3>3. Indiana Jones and the Dial of Destiny</h3>\
  <p>June 30 2023, Action, 2h 34m, PG-13</p>';
}
function closeit(){
  document.getElementById("popup").style.display = "none";
}