const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            1000
        )
    })

    // Fade In About Me Button (), ("slow"), ("10000")
    $("about-me-btn").click(function(){
        $("#div2").fadeIn("slow");
        $("#div2").fadeIn("slow");
        $("#div2").fadeIn("slow");
      });
})