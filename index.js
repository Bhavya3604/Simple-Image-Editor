// Get the source image to be edited

let image=document.getElementById('sourceImage');

// Get the canvas for the edited image
let canvas=document.getElementById('canvas');

// Get the 2D context of the image
let context=canvas.getContext('2d');

// Get all the sliders of the image

let brightnessSlider=document.getElementById('brightnessSlider');
let contrastSlider=document.getElementById('contrastSlider');
let grayscaleSlider=document.getElementById('grayscaleSlider');
let sepiaSlider=document.getElementById('sepiaSlider');
let saturationSlider=document.getElementById('saturationSlider');
let hueSlider=document.getElementById('hueSlider');

function uploadImage(event){
image.src=URL.createObjectURL(event.target.files[0]);

image.onload=function(){
    canvas.width=this.width;
    canvas.height=this.height;
    canvas.crossOrigin='anonymous';
    applyFilter();
};

document.querySelector('.help-text').style.display='none';
document.querySelector('.image-save').style.display='block';
document.querySelector('.image-controls').style.display='block';
document.querySelector('.preset-filters').style.display='block';
}

function applyFilter(){
    let filterString=
        "brightness("+brightnessSlider.value+"%)"+
        " contrast("+contrastSlider.value+"%)"+
        " grayscale("+grayscaleSlider.value+"%)"+
        " sepia("+sepiaSlider.value+"%)"+
        " saturate("+saturationSlider.value+"%)"+
        " hue-rotate("+hueSlider.value+"%)";

    context.filter=filterString;
    context.drawImage(image,0,0);
}




