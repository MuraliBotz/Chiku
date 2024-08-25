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
    "Image/chikuu.png",
    "Image/chikuu1.png",
    "Image/chikuu2.png",
];

const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
document.getElementById("random-image").src = randomImageUrl;
