$(function () {
  $searchButton = $("#search-button");
  $searchInput = $("#search-input");
  let onClickFunction = function () {
    window.location.href = "search.html?query=" + $searchInput.val();
  }
  
  $searchButton.click(onClickFunction);
})