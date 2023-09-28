// a function named calculateLove created and initialised
function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();

  const name2 = document.getElementById("name2").value.trim();

  //  "if" loop used to show alert message if both names are not provided by user
  if (name1 === "" || name2 === "") {
    alert("please enter both names.");
  }
  // "else" loop is used to perfom the LOVE LOGIC if both names are provided by user
  else {
    const lovePercentage = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}`;

    if (lovePercentage < 30) {
      result.innerHTML += "<br> Not a Great Match. Keep Looking ;-]";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
      result.innerHTML += "<br> there is Potential, Give it a try!";
    } else {
      result.innerHTML += "<br> Great Match! Love is in the Air";
    }
  }
}
