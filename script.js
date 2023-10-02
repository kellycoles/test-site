function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "Images/bulbOff.jpg"
    } else {
        pic = "Images/bulbOn.jpg"
    }
    document.getElementById('myImage').src = pic;
}