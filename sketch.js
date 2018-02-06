var budi;

function preload(){
    budi = loadImage("budi.jpeg");
}

function setup(){
    createCanvas(600,400);
    
    
}

function draw(){
    
    background(0);
    
    image(budi, 0, 0);
    
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            
            
            
            var startingIndex = (col + row * width) * 4;
            
            var r = pixels[startingIndex];
            var g = pixels[startingIndex + 1];
            var b = pixels[startingIndex + 2];
            var a = pixels[startingIndex + 3];
            
            if(keyIsPressed){
                if(key=="1"){
                    gray_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="2"){
                    purple_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="3"){
                    yellow_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="4"){
                    green_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="5"){
                    cyan_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="6"){
                    xray_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="9"){
                    random_filter(startingIndex, r, g, b, a, col, row);
                }
                
                if(key=="7"){
                    percent_filter(startingIndex, r, g, b, a);
                }
                
                if(key=="8"){
                    horizontal_flip_filter(startingIndex, r, g, b, a, row, col);
                }
                
                if(key=="0"){
                    vert_flip_filter(startingIndex, r, g, b, a, row, col);
                }
                
            }
            
    
        }
    }
    
    
    updatePixels();
}

function gray_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = g;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = g;
    pixels[startingIndex + 3] = a;
}

function purple_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = b;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = r;
    pixels[startingIndex + 3] = a;
}

function yellow_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = 0;
    pixels[startingIndex + 1] = 0;
    pixels[startingIndex + 2] = b;
    pixels[startingIndex + 3] = a;
}

function green_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r / 2;
    pixels[startingIndex + 1] = g / 2;
    pixels[startingIndex + 2] = b / 2;
    pixels[startingIndex + 3] = a;
}

function cyan_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r * 2;
    pixels[startingIndex + 1] = g * 2;
    pixels[startingIndex + 2] = b * 2;
    pixels[startingIndex + 3] = a;
}

function xray_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = 255 - r;
    pixels[startingIndex + 1] = 255 - g;
    pixels[startingIndex + 2] = 255 - b;
    pixels[startingIndex + 3] = a;
}

function percent_filter(startingIndex, r, g, b, a){
    if(startingIndex % 20 == 0){
        pixels[startingIndex + 0] = 0;
        pixels[startingIndex + 1] = 255;
        pixels[startingIndex + 2] = 0;
        pixels[startingIndex + 3] = a;
    }
}

function random_filter(startingIndex, r, g, b, a, col, row){
    
    if(startingIndex % 20 == 0){
        pixels[startingIndex + 0] = r + col * 2;
        pixels[startingIndex + 1] = g * row - 4;
        pixels[startingIndex + 2] = b + 10 + row;
        pixels[startingIndex + 3] = a;
    }
    
    if(startingIndex % 30 == 0){
        pixels[startingIndex + 0] = r +255;
        pixels[startingIndex + 1] = g;
        pixels[startingIndex + 2] = b;
        pixels[startin8gIndex + 3] = a;
    }
}

function horizontal_flip_filter(startingIndex, r, g, b, a, row, col){
    
    var diff = col - 300;
    var rdiff = -diff - 300;
    startingIndex = (rdiff + row * width) * 4;
        
    
    pixels[startingIndex + 0] = r;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = b;
    pixels[startingIndex + 3] = a;
}

function vert_flip_filter(startingIndex, r, g, b, a, row, col){
    
    var diff = row + 200;
    var rdiff = diff - 200;
    startingIndex = (col + -rdiff * width) * 4;
        
    
    pixels[startingIndex + 0] = r;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = b;
    pixels[startingIndex + 3] = a;
}