document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const downloadButton = document.getElementById('downloadButton');
  const popupContainer = document.getElementById('popupContainer');
  const overlay = document.getElementById('overlay');

  // Add click event listener to the Download button
  downloadButton.addEventListener('click', function() {
    overlay.style.display = 'block';
      // Show the popup container
    popupContainer.style.display = 'block';

      // Simulate a download process
    simulateDownload();
  });

  function simulateDownload() {
    

      let progress = 0;

      // Update the progress bar every 100 milliseconds
      const interval = setInterval(function() {
          // Increment the progress
          progress += 1;

          // Update the width of the progress bar
          progressBar.style.width = `${progress}%`;

          // Update the text to show the percentage
          progressText.innerText = `${progress}%`;

          // Check if download is complete (progress reaches 100%)
          if (progress >= 101) {
              clearInterval(interval);
              alert('Download complete!');
              
              // Hide the popup container after download completion
              popupContainer.style.display = 'none';
          }
      }, 100); // Adjust the interval as needed
  }
});
