function unhide() {
    console.log("in function unhide");
    const news_area = document.querySelector("#newsArea");
    news_area.classList.remove("hidden");

    const cards = document.querySelectorAll(".newscard");

    // cards is an array
    const user_no_articles = document.querySelector(".user_articles").value;
    for (i=0; i<user_no_articles; i++) {
        cards[i].classList.remove("hidden");
        console.log("unhiding card "+(i+1));
    }
}

