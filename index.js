// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNUmbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNUmbers,10);

    if ( left > 0) (
        dodger.style.left = `${left - 1}pz`
    )
}
function moveDodgerRight() {
    const leftNUmbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNUmbers,10);

    if ( left > 360) (
        dodger.style.left = `${left - 1}pz`

    )
}
document.addEventListener("keydown", function (e) {
    if (e.key === "Arrowleft") (
        moveDodgerLeft();
    ) else if (e.key === "ArrowRight") (
        moveDodgerRight();
    )

}
    
