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
        
        const directionX = Math.random() > 0.5 ? 1 : -1; // Random left/right movement
        const directionY = Math.random() > 0.5 ? 1 : -1; // Random up/down movement

        // Randomize the keyframes for this emoji
        const keyframes = `
            0% { transform: translate(0, 0); }
            25% { transform: translate(${100 * directionX}px, ${100 * directionY}px); }
            50% { transform: translate(${200 * directionX}px, ${200 * directionY}px); }
            75% { transform: translate(${300 * directionX}px, ${300 * directionY}px); }
            100% { transform: translate(0, 0); }
        `;

        // Create a new style for this emoji's keyframes dynamically
        const styleSheet = document.styleSheets[0];
        const keyframeName = `emojiAnimation-${Math.random().toString(36).substr(2, 9)}`;
        
        // Insert the randomized keyframes
        styleSheet.insertRule(`
            @keyframes ${keyframeName} {
                ${keyframes}
            }
        `, styleSheet.cssRules.length);

        // Apply the new animation to the emoji
        emoji.style.animationName = keyframeName;
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
                <a href="ticket.html" class="fancy-button">⬅ Your Ticket 🎫</a>
                <a href="index.html" class="fancy-button">⬅ Back to Home</a>
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
