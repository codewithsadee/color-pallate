var web = {
  title: document.querySelectorAll(".title"),
  cards: document.querySelectorAll(".card"),
  searchBtn: document.querySelector(".search-btn")
}

web.searchBtn.addEventListener("click", function () {
  var userInput = document.querySelector(".search-bar").value.toLowerCase();

  for (var x = 0; x < web.cards.length; x++) {
    var cardTitle = web.title[x].innerText.toLowerCase();
    var matchTitle = "";
    for (var y = 0; y < userInput.length; y++) {
      matchTitle += cardTitle.charAt(y);
    }
    if (userInput === matchTitle) {
      web.cards[x].style.display = "block";
    } else {
      web.cards[x].style.display = "none";
    }
  }
});