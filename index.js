$(".slidebar").on("click", handleClick);

function handleClick() {

    if ($(".dot").css("left") === "5px") {
        $(".dot").css("left", "25px");
        $(".p1").text("$19.99");
        $(".p2").text("$24.99");
        $(".p3").text("$39.99");
    } else {
        $(".dot").css("left", "5px");
        $(".p1").text("$199.99");
        $(".p2").text("$249.99");
        $(".p3").text("$399.99");

    }
}