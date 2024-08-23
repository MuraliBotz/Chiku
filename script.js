document.getElementById('input-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const userMessageInput = document.getElementById('user-message');
    const userMessage = userMessageInput.value;
    if (!userMessage.trim()) return;  // Don't send empty messages

    // Clear the input box immediately after the user submits the form
    userMessageInput.value = '';

    const messagesContainer = document.getElementById('messages');

    // Append the user's message to the chat
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.innerHTML = `<div><div class="user-label">You</div>${userMessage}</div>`;
    messagesContainer.appendChild(userMessageDiv);

    // Scroll to the bottom of the chat
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Add the typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot-message', 'typing-indicator');
    typingIndicator.textContent = "Chiku is typing.....";
    messagesContainer.appendChild(typingIndicator);

    // Scroll to the bottom again to show the typing indicator
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Keep the input field focused to avoid dismissing the keyboard
    userMessageInput.focus();

    // Simulate a delay for typing
    await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust delay as needed

    // Remove the typing indicator once the bot response is ready
    messagesContainer.removeChild(typingIndicator);

    const uid = "6764358144"; // Replace with actual user ID if needed
    const apiUrl = `http://api.brainshop.ai/get?bid=183059&key=nDymyEFVKg5NH7Yq&uid=6764358144&msg={userMessage}`;

    // Log details for debugging
    console.log("User message:", userMessage);
    console.log("API URL:", apiUrl);
    console.log("Fetching response...");

    // Fetch the bot's response
    try {
        const response = await fetch(apiUrl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Create a new div for each bot message
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot-message');

        // Add the "Chiku" label and an empty div for the bot's response
        botMessageDiv.innerHTML = `<div><div class="bot-label">Chiku</div><div class="bot-response"></div></div>`;
        
        // Append the new bot message div to the chat
        messagesContainer.appendChild(botMessageDiv);

        // Scroll to the bottom to show the new message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Display the bot response text letter by letter
        const botResponseDiv = botMessageDiv.querySelector('.bot-response');
        const botResponseText = data.cnt;
        let currentCharIndex = 0;

        const typeWriterEffect = setInterval(() => {
            botResponseDiv.textContent += botResponseText[currentCharIndex];
            currentCharIndex++;

            if (currentCharIndex === botResponseText.length) {
                clearInterval(typeWriterEffect);
            }

            // Scroll to the bottom to keep up with the typing effect
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 50); // Adjust the speed of the typing effect here

        // Keep the input field focused
        userMessageInput.focus();

    } catch (error) {
        console.error("Error fetching the API:", error);

        // Display a user-friendly error message in the chat
        const errorMessageDiv = document.createElement("div");
        errorMessageDiv.classList.add("message", "bot-message");
        errorMessageDiv.textContent = "Sorry, there was an error processing your request. Please try again.";
        messagesContainer.appendChild(errorMessageDiv);

        // Scroll to the bottom to show the error message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

}); // <-- This is the missing closing brace for the form submit event listener

// Toggle sidebar and overlay
document.getElementById('menu-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');

    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    } else {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }
});

// Hide sidebar when clicking outside
document.getElementById('overlay').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

var typed = new Typed('#elementTwo', {
    strings: ['CHIKU....', 'Im A AI Chat Bot', 'Made By @MuraliBotz'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const imageUrls = [
    "chikuu.png",
    "chikuu1.png",
    "chikuu2.png",
];
const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
document.getElementById("random-image").src = randomImageUrl;

