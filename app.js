// ====== Grab HTML Elements ======
const uploadInput = document.getElementById('uploadImage');
const canvas = document.getElementById('editorCanvas');
const ctx = canvas.getContext('2d');

// ====== Listen for Image Upload ======
uploadInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Resize canvas to match image size if needed
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);
      };
      img.src = event.target.result;
    };
    
    reader.readAsDataURL(file);
  }
});
