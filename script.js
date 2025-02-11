document.addEventListener('DOMContentLoaded', () => {
    // Get references to buttons and vote count spans
    const yesButton = document.getElementById('btn-yes');
    const noButton = document.getElementById('btn-no');
    const yesCount = document.getElementById('count-yes');
    const noCount = document.getElementById('count-no');

    // Initialize counters
    let yesVotes = 0;
    let noVotes = 0;

    // Add click event listener for "Yes" button
    yesButton.addEventListener('click', () => {
        yesVotes += 1; // Increment yes votes
        yesCount.textContent = yesVotes; // Update the displayed count
    });

    // Add click event listener for "No" button
    noButton.addEventListener('click', () => {
        noVotes += 1; // Increment no votes
        noCount.textContent = noVotes; // Update the displayed count
    });
});

