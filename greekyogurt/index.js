function buy() {
    let name = prompt("What's your name?");
    let email = prompt("What's your email address?");
    let emoji = prompt("What's your favorite emoji?");

    alert(
      "Thank you" +
        name +
        "! we'll be in touch by email, meanwhile have a let of Yogurt"
    );
  }
  let buybutton = document.querySelector(".buybutton");
  buybutton.addEventListener("click", buy);