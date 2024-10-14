$(document).ready(function () {
    let currentSlide = 0; // 현재 슬라이드 인덱스
    const totalSlides = $(".video-slider li").length; // 슬라이드의 총 개수

    // 모든 슬라이드 숨기고 첫 번째 슬라이드만 보여주기
    $(".video-slider li").hide();
    $(".video-slider li").eq(currentSlide).show(); // 첫 번째 슬라이드 표시

    // "다음" 버튼 클릭 이벤트
    $("#next").click(function () {
        $(".video-slider li").eq(currentSlide).hide(); // 현재 슬라이드 숨기기
        currentSlide = (currentSlide + 1) % totalSlides; // 다음 슬라이드로 이동
        $(".video-slider li").eq(currentSlide).show(); // 다음 슬라이드 표시
    });

    // "이전" 버튼 클릭 이벤트
    $("#prev").click(function () {
        $(".video-slider li").eq(currentSlide).hide(); // 현재 슬라이드 숨기기
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // 이전 슬라이드로 이동
        $(".video-slider li").eq(currentSlide).show(); // 이전 슬라이드 표시
    });
});
