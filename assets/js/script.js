const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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