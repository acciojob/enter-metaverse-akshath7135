//your JS code here. If required.
// Function to change the text when the button is clicked
function enterMetaverse() {
    // Get the paragraph element by its ID
    const statusParagraph = document.getElementById('status');

    // Create a new h1 element
    const newHeading = document.createElement('h1');
    newHeading.textContent = 'Entered Metaverse';

    // Clear the current content of the paragraph
    statusParagraph.innerHTML = '';

    // Append the new h1 element to the paragraph
    statusParagraph.appendChild(newHeading);
}

// Add event listener to the button
document.getElementById('enterBtn').addEventListener('click', enterMetaverse);