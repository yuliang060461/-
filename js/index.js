var $arrowList = $(".arrow li");
console.log($arrowList);
$arrowList.on("mouseenter", function () {

    $(this).addClass("select").siblings().removeClass("select");
});

