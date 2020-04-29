// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
// Self Note:
// volume of box = w * h * l

// pseudocode
// declare a function called volumeOfBox with a single parameter, sizes;
// 

function volumeOfBox(sizes) {
    const {width, length, height} = sizes;
    const volume = width * length * height;
    return volume;
}
