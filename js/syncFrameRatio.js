// // Get elements
// const frame = document.querySelector('.frame');
// const ratioButtons = document.querySelectorAll('input[name="imgRatio-group"]');
// const autoRatioButton = document.getElementById('imgRatio1');

// // Define aspect ratios for each option
// const aspectRatios = {
//   'imgRatio1': 'auto', // Auto
//   'imgRatio2': '4 / 3', // 4:3
//   'imgRatio3': '1 / 1', // 1:1
//   'imgRatio4': '4 / 5', // Notion (common blog ratio)
//   'imgRatio5': '16 / 9' // YouTube
// };

// // Store original dimensions for "Auto" mode
// let originalWidth = frame.clientWidth;
// let originalHeight = frame.clientHeight;

// // Function to update the frame's aspect ratio
// function updateAspectRatio(ratioId) {
//   if (ratioId === 'imgRatio1') {
//     // Auto mode - restore original resizable behavior
//     frame.style.aspectRatio = 'auto';
//     frame.style.width = originalWidth + 'px';
//     frame.style.height = originalHeight + 'px';
//   } else {
//     // Set specific aspect ratio
//     frame.style.aspectRatio = aspectRatios[ratioId];
    
//     // Maintain the current size while updating aspect ratio
//     const currentWidth = frame.clientWidth;
//     frame.style.width = currentWidth + 'px';
//     frame.style.height = 'auto'; // Height will be determined by aspect ratio
//   }
// }

// // Add event listeners to ratio buttons
// ratioButtons.forEach(button => {
//   button.addEventListener('change', function() {
//     if (this.checked) {
//       updateAspectRatio(this.id);
//     }
//   });
// });

// // Create a ResizeObserver to monitor manual resizing
// const resizeObserver = new ResizeObserver(entries => {
//   for (let entry of entries) {
//     // Skip if Auto is already selected
//     if (autoRatioButton.checked) return;
    
//     // Calculate current aspect ratio after resize
//     const currentRatio = entry.target.clientWidth / entry.target.clientHeight;
    
//     // Check if the current ratio matches any of our predefined ratios
//     let matchFound = false;
    
//     for (let button of ratioButtons) {
//       if (button.id === 'imgRatio1') continue; // Skip Auto
      
//       const ratio = aspectRatios[button.id];
//       const [width, height] = ratio.split('/').map(num => parseFloat(num.trim()));
//       const buttonRatio = width / height;
      
//       // Check if current ratio is close to this button's ratio (with some tolerance)
//       if (Math.abs(currentRatio - buttonRatio) < 0.05) {
//         if (!button.checked) {
//           button.checked = true;
//           frame.style.aspectRatio = ratio; // Ensure exact ratio
//         }
//         matchFound = true;
//         break;
//       }
//     }
    
//     // If no match found, switch to Auto
//     if (!matchFound) {
//       autoRatioButton.checked = true;
      
//       // Update the original dimensions to the current size
//       originalWidth = entry.target.clientWidth;
//       originalHeight = entry.target.clientHeight;
//     }
//   }
// });

// // Start observing the frame element
// resizeObserver.observe(frame);

// // Initialize with default selection
// document.addEventListener('DOMContentLoaded', function() {
//   // Save initial dimensions
//   originalWidth = frame.clientWidth;
//   originalHeight = frame.clientHeight;
  
//   // Apply the initial ratio based on what's selected
//   for (let button of ratioButtons) {
//     if (button.checked) {
//       updateAspectRatio(button.id);
//       break;
//     }
//   }
// });