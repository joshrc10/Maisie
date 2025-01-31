document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const emojis = document.querySelectorAll('.emoji');

    emojis.forEach(emoji => {
        // Randomize the initial position on the screen
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        emoji.style.left = `${startX}px`;
        emoji.style.top = `${startY}px`;

        // Randomize animation duration between 4s and 10s
        const duration = Math.random() * 6 + 4;  // Duration between 4 and 10 seconds
        emoji.style.animationDuration = `${duration}s`;

        // Randomize animation delay (from 0s to 3s)
        const delay = Math.random() * 3;
        emoji.style.animationDelay = `${delay}s`;

        // Optionally, we could also randomize the direction of movement
        // (This part is optional but will make the movement feel more random)
        const direction = Math.random() > 0.5 ? 1 : -1;
        emoji.style.animationTimingFunction = direction === 1 ? "ease-in-out" : "ease-out";
    });

    // Moving "No" Button
    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);

        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // When "Yes" is Clicked
    yesButton.addEventListener("click", () => {
        document.body.innerHTML = `
            <div class="container">
                <h2 class="question">Never in any doubt 🎉</h2>
                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGs1Z2J4MWlyanR0a3BwdHQyZ3o4ZGZybmk0NWltOHhnZGcxY2YyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AcfTF7tyikWyroP0x7/giphy.gif" alt="Happy Love" style="width: 100%; border-radius: 15px;">
            </div>
        `;

        document.addEventListener("DOMContentLoaded", () => {
            document.body.addEventListener("click", () => {
                const audio = new Audio('get_lucky.mp3');
                audio.play().catch(error => console.log("Autoplay blocked: ", error));
            }, { once: true });  // Ensures it only plays once on first click
        });
        // Play a sweet sound (Optional)
        // const audio = new Audio('get_lucky.mp3'); // Cute chime sound
        // audio.play();
    });
});
