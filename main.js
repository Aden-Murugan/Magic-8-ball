document.getElementById("btn").addEventListener("click", ballClicked);

function ballClicked() {
  let question = document.getElementById("input").value.toLowerCase();

  if (question === "does a magic 8 ball actually work?") {
    document.getElementById("output").innerHTML = `How dare you doubt me!`;
  } else if (question === "is javascript awesome?") {
    document.getElementById("output").innerHTML = `Of course!`;
  } else if (question === "does the background look bad?") {
    document.getElementById("output").innerHTML = `definitely`;
  } else {
    let randNum = Math.random();
    if (randNum < 0.2) {
      document.getElementById("output").innerHTML = `Without a Doubt`;
    } else if (randNum < 0.4) {
      document.getElementById("output").innerHTML = `As I see it, yes`;
    } else if (randNum < 0.6) {
      document.getElementById("output").innerHTML = `Concentrate and ask again`;
    } else if (randNum < 0.8) {
      document.getElementById("output").innerHTML = `Don't Count on it`;
    } else {
      document.getElementById("output").innerHTML = `Outlook not so good`;
    }
  }
}
