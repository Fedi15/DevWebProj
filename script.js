// Remember which fact should be shown next. It starts at 0.
let factNumber = 0;

// This function runs when the button in index.html is clicked.
function showGameFact() {
  // Find the paragraph where the fact should appear.
  const factParagraph = document.getElementById("gameFact");

  // Show a fact based on the current number.
  if (factNumber === 0) {
    factParagraph.textContent = "Rayker Riz is a dark fantasy action role-playing game.";
  } else if (factNumber === 1) {
    factParagraph.textContent = "One area in the game is the Crimson Canyon Ruins.";
  } else if (factNumber === 2) {
    factParagraph.textContent = "Sites of Grace are places where the player can rest and recover.";
  } else if (factNumber === 3) {
    factParagraph.textContent = "The desert path leads to a dungeon and a Golem boss.";
  } else if (factNumber === 4) {
    factParagraph.textContent = "Weapons, shields, armor, skills, and items help shape how the player fights.";
  } else if (factNumber === 5) {
    factParagraph.textContent = "The Heal Potion restores health, and the Chi Flask restores chi.";
  } else if (factNumber === 6) {
    factParagraph.textContent = "The current game build is for PC, and tester access is by approval.";
  }

  // Move to the next fact number for the next button click.
  factNumber = factNumber + 1;

  // After the last fact, start again from the first one.
  if (factNumber > 6) {
    factNumber = 0;
  }
}
