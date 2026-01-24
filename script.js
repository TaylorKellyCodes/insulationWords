// Base part of the footer
const baseFooter = "\nSame week pickup or delivery available for a fee. \nMessage on Messenger to book. Limited slots.";

// List of 15 phone number variants (mixed digits + words)
const phoneVariants = [

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
  "Made from strong EPS foam that lasts.",
  "High-density foam keeps heat in and cold out.",
  "Tough material for homes or businesses.",
  "Built to handle impact and wear.",
  "Made to last even in tough conditions.",
  "Keeps heat in and cold out.",
  "Comfortable indoors all year round.",
  "Helps lower heating and cooling costs.",
  "Blocks sound for a quieter room.",
  "Stays stable in hot or cold weather.",
  "Light and easy to handle for DIY projects.",
  "Cuts easily to fit any project.",
  "Simple to install in workshops or garages.",
  "Works for many home or business projects.",
  "Fits sheds, storage, and other spaces.",
  "Resists water and stops mold growth.",
  "Handles humidity without damage.",
  "Keeps dry in damp areas.",
  "Closed-cell foam so water won’t soak in.",
  "Great for damp areas, mold-free.",
  "Helps lower energy bills by keeping heat in.",
  "Saves energy and keeps your space usable.",
  "Keeps indoor temperature steady and saves on utilities.",
  "Saves on heating and cooling all year.",
  "Cuts energy costs and keeps you comfy.",
  "Reduces noise and keeps temperature steady.",
  "Blocks sound and keeps your room quiet.",
  "Keeps your space cozy and comfortable.",
  "Makes indoor space calm and quiet.",
  "Reduces sound and keeps your room comfy."
];

// Optional phrases for title 4x8
const optionalPhrases4x8 = [
  "2 in x 4ft x 8ft","Foil on both sides","New","Heavily discounted","Foam board","EPS","Expanded Polystyrene","Closed cell","High-density foam","Rigid Foam","Double Foil","Long-lasting","Fire-resistant","Easy to cut","DIY-friendly","Lightweight and durable","Excellent soundproofing","Moisture-resistant","Year-round comfort","High R-value","Energy-saving","For metal buildings","For garages","For grow houses","For workshops","For pole barns","For barndominiums","For trailer skirts","Thermal barrier","Vapor barrier","Weather protection","Industrial-grade","High-strength","Impact-resistant","Multi-purpose","Budget-friendly","Quick install","Architectural grade","Great for all seasons","Renovation-ready","Thermal insulation","Home improvement","Commercial-grade","Indoor/outdoor use","Versatile solution"
];

// Optional phrases for title 4x5
const optionalPhrases4x5 = [
  "Foil on both sides", "New", "Heavily discounted", "Foam board", "EPS", "Expanded Polystyrene", "Closed cell", "High-density foam", "Rigid Foam", "Double Foil", "Long-lasting", "Fire-resistant", "Easy to cut", "DIY-friendly", "Lightweight and durable", "Excellent soundproofing", "Moisture-resistant", "Year-round comfort", "High R-value", "Energy-saving", "For metal buildings", "For garages", "For grow houses", "For workshops", "For pole barns", "For barndominiums", "For trailer skirts", "Thermal barrier", "Vapor barrier", "Weather protection", "Industrial-grade", "High-strength", "Impact-resistant", "Multi-purpose", "Budget-friendly", "Quick install", "Architectural grade", "Great for all seasons", "Renovation-ready", "Thermal insulation", "Home improvement", "Commercial-grade", "Indoor/outdoor use", "Versatile solution"
];

//Optional phrases for the metal building part of title 4x5
const metalBuildingPhrases = [
  "metal structures", "metal sheds", "prefab metal buildings", "metal workshops", "metal garages", "metal storage units", "industrial metal buildings", "agricultural metal buildings", "commercial metal buildings", "metal warehouses", "metal-framed buildings", "metal construction", "steel frame buildings", "steel workshops", "steel garages", "steel storage sheds", "heavy-duty steel structures", "steel-framed warehouses", "steel construction projects", "steel fabrication buildings", "steel barns", "post-frame buildings", "post-frame barns", "pole-frame shops", "pole building garages", "barn-style workshops", "farm buildings", "agricultural barns", "storage barns", "pole sheds", "metal pole barns", "pole barn homes", "pole barn workshops",

];

function shuffleArray(orig) {
  const arr = orig.slice(); // copy
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate 4x8 description with custom intro, 5-16 phrases, max 350 chars
function generateAdDescription4x8(introLine) {
  const shuffled = shuffleArray(phrases);
  const count = Math.floor(Math.random() * 20) + 10; // 10-29 phrases

  const footer = getFooter();                    // reserve one footer per ad
  const maxLength = 500 - footer.length - 1;    // reserve space for footer

  // Start with intro and fixed second line
  let adText = introLine + " 2\" x 4' x 8'." + " $25 a sheet\n";
  let added = 0;

  for (let phrase of shuffled) {
    if (added >= count) break;

    let prospective = adText + (adText.endsWith("\n") ? "" : " ") + phrase;
    if (prospective.length > maxLength) break;

    adText = prospective;
    added++;
  }

  // Add footer once at the end
  adText += " " + footer;

  return adText;
}

// Generate 4x5 description with custom intro, 5-16 phrases, max 350 chars
function generateAdDescription4x5 (introLine) {
  const shuffled = shuffleArray(phrases);
  const count = Math.floor(Math.random() * 12) + 5; // 5-16 phrases
  const footer = getFooter();              // reserve one footer per ad
  const maxLength = 500 - footer.length - 1; // reserve space for footer
  // Start with intro and fixed second line and fixed third line
  let adText = introLine + " 2\" x 4' x 5', $15 a sheet, R9. " + "Same-week pickup/delivery. Message on Messenger to book. Limited slots. The 4x5s reduce waste.";
  let added = 0;

  for (let phrase of shuffled) {
    if (added >= count) break;

    let prospective = adText + (adText.endsWith("\n") ? "" : " ") + phrase;
    if (prospective.length > maxLength) break;

    adText = prospective;
    added++;
  }
  adText += " " + footer;  // footer always added
  return adText;
}

// Generate 4x8 title with max 99 characters
function generateTitle4x8() {
  const shuffled = shuffleArray(optionalPhrases4x8);

  // Generate random number between 320 and 850
  const randomNum = Math.floor(Math.random() * (850 - 320 + 1)) + 320;

  let title = `${randomNum} remaining, 2" x 4' x 8', great for ${shuffleArray(metalBuildingPhrases)[0]}`;
  
  for (let phrase of shuffled) {
    if (title.length + 2 + phrase.length <= 99) {
      title += ", " + phrase;
    } else {
      break;
    }
  }

  return title;
}

// Generate 4x5 title with max 99 characters
function generateTitle4x5() {
  const shuffled = shuffleArray(optionalPhrases4x5);

  // Generate random number between 320 and 850
  const randomNum = Math.floor(Math.random() * (850 - 320 + 1)) + 320;

  let title = `${randomNum} remaining, 2" x 4' x 5', great for ${shuffleArray(metalBuildingPhrases)[0]}`;
  
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
