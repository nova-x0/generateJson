let isFinalized = false; // Track if the JSON has been finalized

document.getElementById("itemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collecting form data
    const itemId = parseInt(document.getElementById("itemId").value);
    const itemName = document.getElementById("itemName").value;
    const itemImage = document.getElementById("itemImage").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);
    const itemRating = parseFloat(document.getElementById("itemRating").value);
    const itemPopularity = document.getElementById("itemPopularity").checked;
    const itemSale = document.getElementById("itemSale").checked;
    const itemGender = document.getElementById("itemGender").value;
    const itemSubcategory = document.getElementById("itemSubcategory").value;
    const itemSizes = document.getElementById("itemSizes").value.split(",").map(size => size.trim());
    const isLatest = document.getElementById("isLatest").checked;
    const isFeatured = document.getElementById("isFeatured").checked;
    const itemImages = document.getElementById("itemImages").value.split(",").map(image => image.trim());
    const itemDescription = document.getElementById("itemDescription").value;

    // Generating JSON object
    const itemDetails = {
        id: itemId,
        name: itemName,
        image: itemImage,
        price: itemPrice,
        rating: itemRating,
        popularity: itemPopularity,
        sale: itemSale,
        gender: itemGender,
        subcategory: itemSubcategory,
        sizes: itemSizes,
        isLatest: isLatest,
        isFeatured: isFeatured,
        images: itemImages,
        description: itemDescription
    };

    // Generate the new item JSON
    const newItemJSON = JSON.stringify(itemDetails, null, 2);
    
    // Check if the JSON has been finalized
    if (isFinalized) {
        // Reset for a new round of input
        document.getElementById("output").textContent = `[${newItemJSON}`; 
        isFinalized = false; // Reset the finalized state
    } else {
        // Append new item details to the existing output
        const currentOutput = document.getElementById("output").textContent;
        if (currentOutput.trim() && !currentOutput.trim().endsWith(']')) {
            document.getElementById("output").textContent += `,\n${newItemJSON}`;
        } else {
            document.getElementById("output").textContent = `[${newItemJSON}`;
        }
    }
});

// Finalize the JSON array
document.getElementById("finalizeButton").addEventListener("click", function() {
    const currentOutput = document.getElementById("output").textContent;
    if (currentOutput.trim() && !currentOutput.trim().endsWith(']')) {
        document.getElementById("output").textContent += `\n]`;
        isFinalized = true; // Set the finalized state
    }
});
