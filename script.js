document.addEventListener("DOMContentLoaded", function () {
    console.log("Bone Health website loaded successfully!");
});

// Function to preview the uploaded image
function previewImage(cardNumber) {
    const input = document.getElementById(`file-input-${cardNumber}`);
    const image = document.getElementById(`image-${cardNumber}`);
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result; // Update the image source with the uploaded file
        };
        reader.readAsDataURL(file);
    }
}
