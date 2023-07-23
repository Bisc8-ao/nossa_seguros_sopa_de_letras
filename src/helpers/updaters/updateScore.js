
function updateScore(newpoints) {
    var element = document.getElementById("points");
    element.textContent = String(newpoints);
}

export default updateScore;