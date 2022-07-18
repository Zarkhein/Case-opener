let odds;
var randed;
const cards = document.getElementsByClassName("cardWeapon");

function startBtn() {
  addCards();
  spinWeapon();
  rollBtn();
  addImageToCards();
}

function rollBtn() {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= 2000) {
      clearInterval(timer); // terminer l'animation après 2 secondes
      return;
    }
    draw(timePassed);
  }, 20);

  function draw(timePassed) {
    const cards = document.getElementById("moveCard");
    cards.style.marginLeft = timePassed / -3 + "px";
    cards.style.backgroundColor = "green";
    console.log(cards.style.left);
  }
}

function spinWeapon() {
  if (odds == undefined) {
    console.log(odds);
    odds = Math.floor(Math.random() * (0, 14));
    cards[odds].style["backgroundColor"] = "yellow";
  } else {
    console.log(odds);
    cards[odds].style["backgroundColor"] = "grey";
    odds = Math.floor(Math.random() * (0, 14));
    cards[odds].style["backgroundColor"] = "yellow";
  }
}

function addCards() {
  for (let i = 0; i < 100; i++) {
    const node = document.createElement("div");
    node.classList.add("cardWeapon");
    node.setAttribute("id", "moveCard");
    node.setAttribute("margin-left", "10px");
    document.getElementById("test").appendChild(node);
    console.log("ok");
  }
}

function addImageToCards() {
  for (var i = 0, len = cards.length; i < len; i++) {
    randed = Math.floor(Math.random() * (0, 1000));
    console.log(randed);
    if (randed <= 750) {
      cards[i].style["backgroundColor"] = "cyan";
    } else if (randed > 750 && randed < 900) {
      cards[i].style["backgroundColor"] = "green";
    } else if (randed > 900 && randed < 1000) {
      cards[i].style["backgroundColor"] = "yellow";
    }
  }
}
