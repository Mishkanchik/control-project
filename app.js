let likes = document.querySelectorAll(".like");

likes.forEach((btn) => {
  btn.addEventListener("click", function () {
    let btnLike = btn;
    btnLike.classList.toggle("likes");
  });
});

$(".slider").slick({ arrows: false, dots: true });
