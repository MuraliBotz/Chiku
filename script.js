var gradientColorsArray = new Array(
    "#0396FF",
    "#F8D800",
    "#EA5455",
    "#32CCBC", 
    "#28C76F",
    "#F55555",
    "#DE4313",
    "#3CD500",
    "#00E4FF",
    "#C32BAC"
);

// Finnally Fixed Colour Changing Background animation 

var gradientTransitionStep = 0;
var gradientColorIndices = [0, 1, 2, 3];
var gradientTransitionSpeed = 0.004;

function updateGradientBackground() {
    if (typeof jQuery === 'undefined') return; 

    var currentLeftColorIndex = gradientColorIndices[0];
    var nextLeftColorIndex = gradientColorIndices[1];
    var currentRightColorIndex = gradientColorIndices[2];
    var nextRightColorIndex = gradientColorIndices[3];

    var currentLeftColorHex = gradientColorsArray[currentLeftColorIndex];
    var nextLeftColorHex = gradientColorsArray[nextLeftColorIndex];
    var currentRightColorHex = gradientColorsArray[currentRightColorIndex];
    var nextRightColorHex = gradientColorsArray[nextRightColorIndex];

    var inverseGradientStep = 1 - gradientTransitionStep;

    function hexToRgb(hex) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    }

    var [rLeftStart, gLeftStart, bLeftStart] = hexToRgb(currentLeftColorHex);
    var [rLeftEnd, gLeftEnd, bLeftEnd] = hexToRgb(nextLeftColorHex);
    var [rRightStart, gRightStart, bRightStart] = hexToRgb(currentRightColorHex);
    var [rRightEnd, gRightEnd, bRightEnd] = hexToRgb(nextRightColorHex);

    var redLeft = Math.round(inverseGradientStep * rLeftStart + gradientTransitionStep * rLeftEnd);
    var greenLeft = Math.round(inverseGradientStep * gLeftStart + gradientTransitionStep * gLeftEnd);
    var blueLeft = Math.round(inverseGradientStep * bLeftStart + gradientTransitionStep * bLeftEnd);
    var leftGradientColor = "rgb(" + redLeft + "," + greenLeft + "," + blueLeft + ")";

    var redRight = Math.round(inverseGradientStep * rRightStart + gradientTransitionStep * rRightEnd);
    var greenRight = Math.round(inverseGradientStep * gRightStart + gradientTransitionStep * gRightEnd);
    var blueRight = Math.round(inverseGradientStep * bRightStart + gradientTransitionStep * bRightEnd);
    var rightGradientColor = "rgb(" + redRight + "," + greenRight + "," + blueRight + ")";

    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + leftGradientColor + "), to(" + rightGradientColor + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + leftGradientColor + " 0%, " + rightGradientColor + " 100%)"
    });

    gradientTransitionStep += gradientTransitionSpeed;
    if (gradientTransitionStep >= 1) {
        gradientTransitionStep %= 1;
        gradientColorIndices[0] = gradientColorIndices[1];
        gradientColorIndices[2] = gradientColorIndices[3];

        gradientColorIndices[1] = (gradientColorIndices[1] + Math.floor(1 + Math.random() * (gradientColorsArray.length - 1))) % gradientColorsArray.length;
        gradientColorIndices[3] = (gradientColorIndices[3] + Math.floor(1 + Math.random() * (gradientColorsArray.length - 1))) % gradientColorsArray.length;
    }
}

setInterval(updateGradientBackground, 30); // It Means 10 milliseconds 



  

    


        // Add the "Chiku" label and an empty bot response div under it
        
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

    // Fetch the bot's response
    const apiUrl = `http://api.brainshop.ai/get?bid=181999&key=BTx5oIaCq8Cqut3S&uid=$6764358144&msg=${userMessage}`;
    try {
        const response = await fetch(apiUrl);
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
        console.error('Error fetching the API:', error);
    }
});


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
