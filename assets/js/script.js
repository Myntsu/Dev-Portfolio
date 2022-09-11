// BS tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Visit counter
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

$(document).ready(function(){

    // Smooth Scroll
    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            1000 //Higher = slower
        )
    })

    // Fade Toggle
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(0);
      });
})

// Adjust font-size
var slider = document.getElementById('font-size');

slider.addEventListener('input', function() {
    var size = slider.value;
    document.body.style.fontSize = size + "rem";
});

const colors = document.querySelectorAll(`.colors`);
const btn = document.querySelector(".button");

function handleClick({ target }) {
	const clr = window
		.getComputedStyle(target)
		.getPropertyValue("background-color");
	// 	change the background color of the button to the div color
	btn.style.backgroundColor = clr;

	// 	copy the color value to clipboard
	navigator.clipboard.writeText(clr);

	// 	show the color value of div color to the button
	btn.innerHTML = clr;
}

for (let color of colors) {
	color.addEventListener("click", handleClick);
}

function myFunction() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
    }
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

$('body').on("click touchstart", ".switch", function(e){
    $(".regular, .alt").toggle();
 });