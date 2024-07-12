document.addEventListener("DOMContentLoaded", () => {
    // Step 4 of the instructions
    // Array of image objects containing the paths for full-size and thumbnail images and descriptions
    const images = [
        {
            full: "images/flowers-pink-large.jpg",
            thumb: "images/flowers-pink-small.jpg",
            info: "Pink Flowers",
        },
        {
            full: "images/flowers-purple-large.jpg",
            thumb: "images/flowers-purple-small.jpg",
            info: "Purple Flowers",
        },
        {
            full: "images/flowers-red-large.jpg",
            thumb: "images/flowers-red-small.jpg",
            info: "Red Flowers",
        },
        {
            full: "images/flowers-white-large.jpg",
            thumb: "images/flowers-white-small.jpg",
            info: "White Flowers",
        },
        {
            full: "images/flowers-yellow-large.jpg",
            thumb: "images/flowers-yellow-small.jpg",
            info: "Yellow Flowers",
        },
    ];

    // Select the featured image element and the figcaption element
    const featured = document.getElementById("featured");
    const imageInfo = document.querySelector("figcaption");
    const thumbnailList = document.querySelector("ul");

    // Loop through each image object in the images array
    images.forEach((image, index) => {
        // Create a list item element
        let li = document.createElement("li");
        // Create an image element for the thumbnail
        let img = document.createElement("img");
        img.src = image.thumb;
        img.alt = `Thumbnail ${index + 1}`;
        img.width = 240;
        img.height = 160;
        // Add an event listener to handle thumbnail clicks
        img.addEventListener("click", () => {
            featured.src = image.full;
            imageInfo.textContent = image.info;
            document
                .querySelectorAll("ul img")
                .forEach((img) => img.classList.remove("active"));
            img.classList.add("active");
        });
        li.appendChild(img);
        thumbnailList.appendChild(li);
    });

    // Set the first thumbnail as active by default
    document.querySelector("ul img").classList.add("active");
});
