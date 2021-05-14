$(function () {
  const queryParams = getUrlVars();

  const filmId = queryParams["filmId"];
  if (!filmId) {
    $(".container").html(
      `<h2>You need to specify an film to see details, please use <a href="search.html">search</a></h2>`
    );

    return;
  }

  let url = URL_API_MOVIE_DETAILS + filmId + "?api_key=" + URL_API_KEY;
  console.log("url", url);
  $.ajax({
    url,
    success: function (data) {
      $(".left").html(`<img src="${URL_IMAGE_PREFIX + data.poster_path}">`);
      $(".title-movie").text(data.original_title);
      $(".overview").text(data.overview);
      $(".backdrop").css({
        backgroundImage: `url("${URL_IMAGE_PREFIX_HD + data.backdrop_path}")`,
        backgroundSize: "cover",
      });
    },
  });
});
