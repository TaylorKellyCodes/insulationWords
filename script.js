function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialString = "These are located in Durham but can be delivered for a fee";
const lines = [
    "I have about 5,000 rigid foam boards.",
    "The system r-value is 10.5.",
    "They are 2 inches by 4 ft by 8 ft.",
    "These work great in Metal Buildings.",
    "These work great to stop condensation.",
    "These work great in crawl spaces.",
    "These work great in grow houses.",
    "These work great in basement walls.",
    "These work great in attics.",
    "These work great in roofs.",
    "These work great in coolers.",
    "These work great in workshops.",
    "These work great anywhere you need a good insulation.",
    "These work great in foundation work.",
    "They are rated for under slab use.",
    "These work great in garages.",
    "The foil acts as a vapor barrier.",
    "The foil acts a radiant barrier and is on both sides.",
    "Spray foam or bubble wrap are not as efficient.",
    "These boards don’t absorb moisture like fiberglass batts.",
    "The boards are brand new, still wrapped up from the factory.",
    "$25 per sheet.",
    "They keep the heat out in the summer and the heat in in the winter.",
    "Loctite Quick Grab or Loktite Fast Grab will help hold it in place.",
    "The price is firm."
];

// Get the content div
const contentDiv = document.getElementById('content');

// Check if the content div exists
if (contentDiv) {
    // Print the initial string
    const initialParagraph = document.createElement('p');
    initialParagraph.textContent = initialString;
    contentDiv.appendChild(initialParagraph);

    // Shuffle the lines array
    const shuffledLines = shuffleArray(lines);

    // Get a random number between 13 and 22
    const randomLineCount = getRandomInt(13, 22);

    // Print the first N lines from the shuffled array
    for (let i = 0; i < randomLineCount; i++) {
        const lineParagraph = document.createElement('p');
        lineParagraph.textContent = shuffledLines[i];
        contentDiv.appendChild(lineParagraph);
    }
} else {
    console.error("Element with ID 'content' not found.");
}

// Function to copy text to clipboard
function copyToClipboard() {
    const contentText = contentDiv.innerText;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(contentText).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = contentText;
        textArea.style.position = 'fixed';  // Avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            alert('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }

        document.body.removeChild(textArea);
    }
}

// Add event listener to the copy button
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyToClipboard);
