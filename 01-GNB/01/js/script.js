$(function () {
    // 대상을 변수에 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");

    // 메뉴에 마우스가 들어왔을 때
    $menu.on("mouseeter", function () {
        $submenu.slideDown();
    });

    // 메뉴에 마우스가 나갔을 때
    $submenu.on("mouseeter", function () {
        $submenu.slideDown();
    });
});
