document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const scoreValue = document.getElementById('scoreValue');
    let score = 0;

    clickButton.addEventListener('click', () => {
        score++;
        scoreValue.textContent = score;
    });
});
