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
  $.ajax({
    url,
    success: function (data) {
      console.log(data);
      $(".left").html(`<img src="${URL_IMAGE_PREFIX + data.poster_path}">`);
      $(".title-movie").text(data.original_title);
      $(".overview").text(data.overview);
      $(".backdrop").css({
        backgroundImage: `url("${URL_IMAGE_PREFIX_HD + data.backdrop_path}")`,
        backgroundSize: "cover",
      });

      let url =
        URL_API_MOVIE_DETAILS_CREDITS.replace("{id}", data.id) +
        "?api_key=" +
        URL_API_KEY;
      $.ajax({
        url,
        success: function (details) {
          details.cast.forEach(function (data) {
            let urlPerson =
              URL_API_PERSON_DETAILS.replace("{id}", data.id) +
              "?api_key=" +
              URL_API_KEY;
            $.ajax({
              url: urlPerson,
              success: function (person) {
                let personHTML = "";
                personHTML += `<div>`;
                personHTML += `<h2>${person.name}</h2>`;
                personHTML += person.profile_path ? `<img src="${
                  URL_IMAGE_PREFIX + person.profile_path
                }">` : '';
                personHTML += `</div>`;
                $(".cast").append(personHTML);
              },
            });
          });
        },
      });
    },
  });
});
