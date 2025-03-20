// Get elements from the DOM
const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');

// Access the camera
async function initCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.error('Error accessing the camera:', err);
    alert('Could not access the camera. Please ensure you have granted permission.');
  }
}

// Capture a snapshot
captureButton.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to image and display it
  photo.src = canvas.toDataURL('image/png');
  photo.style.display = 'block';
});

// Initialize the camera when the page loads
window.addEventListener('load', initCamera);
