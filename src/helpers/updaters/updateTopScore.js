

function updateTopScore(newpoints) {
    // var element = document.getElementById("pointsTop");
    // element.textContent = parseInt(newpoints);
    // localStorage.setItem("pointsTop", parseInt(newpoints));

    var element = document.getElementById("pointsTop");
    element.textContent = String(newpoints);
    localStorage.setItem("TOPSCORE", JSON.stringify(newpoints));
}

export default updateTopScore;