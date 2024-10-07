$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu > li");
    const $tabCon = $(".tab-con-item");

    console.log($tabMenu, $tabCon);

    /*     // 처음 세팅
        $tabMenu.removeClass("on");
        $tabMenu.eq(0).addClass("on");
    
        $tabCon.hide();
        $tabCon.eq(0).show(); */

    tabAction(0); /* 처음에 보여지고 싶은것 선정 */

    // 탭메뉴를 클릭 했을때
    $tabMenu.on("click", function (e) {
        // a의 기본 동작막기
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        tabAction(tabIdx);
    });

    // 공통의 동작을 함수로 정의
    function tabAction(index) {
        // 탭메뉴 활성화
        $tabMenu.removeClass("on");
        $tabMenu.eq(index).addClass("on");

        // 인덱스에 해당하는 $tabCon 보이기
        $tabCon.hide();
        $tabCon.eq(index).show();
    }
});
