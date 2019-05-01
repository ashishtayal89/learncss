const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const capitalize = (stringInput) => {
    return stringInput.split(" ").map((word) => {
        return capitalizeFirstLetter(word);
    }).join(" ");
}

export {
    capitalize
}