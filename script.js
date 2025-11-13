// Base part of the footer
const baseFooter = "I have 2 inch by 4 ft by 5 ft for $15 a sheet and 2 inch by 4 ft by 8 ft for $25 a sheet.";

// List of 15 phone number variants (mixed digits + words)
const phoneVariants = [
  "8two8 4zero6 2three2five",
  "eight2eight 4zero6 2three2five",
  "8two8 fourzero6 2three2five",
  "8two8 406 2three2five",
  "8two8 4zero6 twothree2five",
  "eight2eight 406 2three2five",
  "8two8 4zero6 2three25",
  "8two8 4zero6 2three-two-five",
  "8two8 4zero6 2three2-5",
  "8two8 4zero6 23two5",
  "8two8 4zero6 2three two five",
  "8two8 4zero6 2three2five",
  "eight-two-eight 4zero6 2three2five",
  "8two8 4zero6 two3two5",
  "8two8 4zero6 2three.2five"
];

// Function to randomly select a phone variant
function randomPhoneVariant() {
  const index = Math.floor(Math.random() * phoneVariants.length);
  return phoneVariants[index];
}

// Function to get the full footer
function getFooter() {
  return baseFooter + " " + randomPhoneVariant();
}

// Phrases for ad description
const phrases = [
  "Made from premium Expanded Polystyrene (EPS) for lasting quality.",
  "Built with high-density, closed-cell foam for effective thermal control.",
  "Durable, heavy-duty material designed for both residential and commercial use.",
  "Industrial-grade quality that’s built to withstand impact and resist wear.",
  "Designed for longevity, even in demanding environments.",
  "High R-value for excellent heat retention and temperature regulation.",
  "Keeps indoor spaces comfortable across all seasons.",
  "Reduces heating and cooling expenses by maintaining indoor climate.",
  "Excellent sound-dampening properties for a quieter indoor environment.",
  "Superior temperature stability, perfect for both hot and cold climates.",
  "Lightweight and easy to manage, ideal for DIY projects.",
  "Effortlessly cut and sized to fit any type of project.",
  "Simple to install, perfect for workshops, garages, and more.",
  "Versatile for various applications around home or business.",
  "Adaptable for a range of spaces, including sheds and storage areas.",
  "Resists moisture and prevents mold and mildew buildup.",
  "Designed to withstand humidity and repel moisture.",
  "Water-resistant design that keeps the material dry and functional.",
  "Closed-cell structure minimizes water absorption for added longevity.",
  "Ideal for damp areas, keeping spaces dry and mold-free.",
  "Helps reduce energy bills by improving temperature retention.",
  "Promotes energy efficiency for a more cost-effective indoor climate.",
  "Effective at controlling indoor temperatures, saving on utilities.",
  "Boosts energy savings while enhancing comfort year-round.",
  "Cuts down on heating and cooling needs for added savings.",
  "Enhances comfort by minimizing noise and temperature shifts.",
  "Provides a quieter, more stable indoor environment.",
  "Maintains a cozy atmosphere with improved sound and temperature control.",
  "Great for creating a calm, comfortable indoor space.",
  "Effective at reducing sound transfer and maintaining indoor comfort."
];

// Optional phrases for title 4x8
const optionalPhrases4x8 = [
  "2 in x 4ft x 8ft", "foil on both sides", "new", "heavily discounted", 
  "foam board", "EPS", "Expanded Polystyrene", "closed cell", "foam", "high density radiant barrier",
  "Rigid Foam", "Double Foil", "Long-lasting", "fire-resistant", "easy to cut and install", 
  "perfect for DIY projects", "lightweight and durable", "excellent soundproofing", "moisture-resistant",
  "provides year-round comfort", "high R-value insulation", "reduces energy consumption", 
  "for metal buildings", "for garages", "for grow houses", "for crawl spaces", "for workshops", 
  "for pole barns", "for barndominiums", "for trailer skirts", "thermal barrier", "vapor barrier",
  "weather protection", "industrial-grade", "high-strength", "impact-resistant", "multi-purpose", 
  "budget-friendly", "quick and easy install", "architectural grade", "DIY-friendly", "great for all seasons",
  "renovation-ready", "excellent thermal insulation", "ideal for home improvement", "commercial-grade quality",
  "indoor/outdoor use", "versatile insulation solution"
];

// Optional phrases for title 4x5
const optionalPhrases4x5 = [
  "foil on both sides", "new", "heavily discounted", 
  "foam board", "EPS", "Expanded Polystyrene", "closed cell", "foam", "high density radiant barrier",
  "Rigid Foam", "Double Foil", "Long-lasting", "fire-resistant", "easy to cut and install", 
  "perfect for DIY projects", "lightweight and durable", "excellent soundproofing", "moisture-resistant",
  "provides year-round comfort", "high R-value insulation", "reduces energy consumption", 
  "for metal buildings", "for garages", "for grow houses", "for crawl spaces", "for workshops", 
  "for pole barns", "for barndominiums", "for trailer skirts", "thermal barrier", "vapor barrier",
  "weather protection", "industrial-grade", "high-strength", "impact-resistant", "multi-purpose", 
  "budget-friendly", "quick and easy install", "architectural grade", "DIY-friendly", "great for all seasons",
  "renovation-ready", "excellent thermal insulation", "ideal for home improvement", "commercial-grade quality",
  "indoor/outdoor use", "versatile insulation solution"
];

// Shuffle helper
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Generate 4x8 description with custom intro, 5-16 phrases, max 350 chars
function generateAdDescription4x8 (introLine) {
  const shuffled = shuffleArray(phrases);
  const count = Math.floor(Math.random() * 12) + 5; // 5-16 phrases

  // Start with intro and fixed second line and fixed third line
  let adText = introLine + "\n2 in x 4ft x 8ft\n" + "\n$25 a sheet\n";
  let added = 0;

  for (let phrase of shuffled) {
    if (added >= count) break;

    // Check if adding this phrase and the footer stays under 350
    let prospective = adText + (adText.endsWith("\n") ? "" : " ") + phrase + " " + getFooter();
    if (prospective.length > 350) break;

    adText += (adText.endsWith("\n") ? "" : " ") + phrase;
    added++;
  }

  // Add footer at the end if it fits
  const fullFooter = getFooter();
  if (adText.length + fullFooter.length + 1 <= 350) {
    adText += " " + fullFooter;
  }

  return adText;
}

// Generate 4x5 description with custom intro, 5-16 phrases, max 350 chars
function generateAdDescription4x5 (introLine) {
  const shuffled = shuffleArray(phrases);
  const count = Math.floor(Math.random() * 12) + 5; // 5-16 phrases

  // Start with intro and fixed second line and third line
  let adText = introLine + "\n2 in x 4ft x 5ft\n" + "\n$15 a sheet, R9\n";
  let added = 0;

  for (let phrase of shuffled) {
    if (added >= count) break;

    // Check if adding this phrase and the footer stays under 350
    let prospective = adText + (adText.endsWith("\n") ? "" : " ") + phrase + " " + getFooter();
    if (prospective.length > 350) break;

    adText += (adText.endsWith("\n") ? "" : " ") + phrase;
    added++;
  }

  // Add footer at the end if it fits
  const fullFooter = getFooter();
  if (adText.length + fullFooter.length + 1 <= 350) {
    adText += " " + fullFooter;
  }

  return adText;
}

// Generate 4x8 title with max 115 characters
function generateTitle4x8() {
  const shuffled = shuffleArray(optionalPhrases4x8);
  let title = "";
  
  for (let phrase of shuffled) {
    if (title.length === 0) {
      title = phrase;
    } else if (title.length + 2 + phrase.length <= 99) {
      title += ", " + phrase;
    } else {
      break;
    }
  }

  return title;
}

// Generate 4x5 title with max 115 characters
function generateTitle4x5() {
  const shuffled = shuffleArray(optionalPhrases4x5);

  // Generate random number between 320 and 850
  const randomNum = Math.floor(Math.random() * (850 - 320 + 1)) + 320;

  let title = `${randomNum} remaining, 2 in x 4ft x 5ft`;
  
  for (let phrase of shuffled) {
    if (title.length + 2 + phrase.length <= 99) {
      title += ", " + phrase;
    } else {
      break;
    }
  }

  return title;
}

function displayAndCopy(text) {
    const output = document.getElementById("output");
    output.innerText = text;
    navigator.clipboard.writeText(text)
        .then(() => console.log("Copied to clipboard!"))
        .catch(err => console.error("Clipboard error:", err));
}
// Concord buttons
document.getElementById("concordTitle4x8Btn").addEventListener("click", () => {
    displayAndCopy(generateTitle4x8());
});

document.getElementById("concordDesc4x8Btn").addEventListener("click", () => {
    displayAndCopy(generateAdDescription4x8("Located in Concord."));
});

document.getElementById("concordTitle4x5Btn").addEventListener("click", () => {
    displayAndCopy(generateTitle4x5());
});

document.getElementById("concordDesc4x5Btn").addEventListener("click", () => {
    displayAndCopy(generateAdDescription4x5("Located in Concord."));
});

// Durham buttons
document.getElementById("durhamTitle4x8Btn").addEventListener("click", () => {
    displayAndCopy(generateTitle4x8());
});

document.getElementById("durhamDesc4x8Btn").addEventListener("click", () => {
    displayAndCopy(generateAdDescription4x8("Located in Durham."));
});

document.getElementById("durhamTitle4x5Btn").addEventListener("click", () => {
    displayAndCopy(generateTitle4x5());
});

document.getElementById("durhamDesc4x5Btn").addEventListener("click", () => {
    displayAndCopy(generateAdDescription4x5("Located in Durham."));
});
