// --------------------------------------
// タブ切り替え
// --------------------------------------
$(".js-newsBtn").click(function () {
  // 順位を取得
  let index = $(".js-news__BtnWrap .js-newsBtn").index(this);

  // activeを除去
  $(".js-news__BtnWrap .js-newsBtn, .js-itemBox .js-itemWrap").removeClass(
    "active"
  );

  //クリック対象と対応する順位の要素に再度付与
  $(this).addClass("active");
  $(".js-itemBox .js-itemWrap").eq(index).addClass("active");
});

// --------------------------------------
// ヘッダー スクロールでfixed
// --------------------------------------
//スクロールすると上部に固定させるための関数
function FixedAnime() {
  const headerH = $(".js-header").outerHeight(true);
  const scroll = $(window).scrollTop();
  if (scroll >= headerH) {
    //headerの高さ以上になったら
    $(".js-header, .js-hamburger-main").addClass("fixed"); //fixedというクラス名を付与
    $(".js-headerImg").attr("src", "icons/sub-header-logo.png");
  } else {
    //それ以外は
    $(".js-header, .js-hamburger-main").removeClass("fixed"); //fixedというクラス名を除去
    $(".js-headerImg").attr("src", "icons/top-header-logo.png");
  }
}

// 画面をスクロール時に発火
$(window).scroll(function () {
  FixedAnime();
});

// --------------------------------------
// ハンバーガーメニュー
// --------------------------------------
$(function () {
  $(".js-hamburger").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".js-hamMenu").addClass("active");
    } else {
      $(".js-hamMenu").removeClass("active");
    }
  });
});

// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$('#menu a[href]').on('click', function () {
  $('.js-hamburger').trigger('click')
})
