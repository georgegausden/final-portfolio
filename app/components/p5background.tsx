'use client';
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const P5Sketch = () => {
    const renderRef = useRef<HTMLDivElement | null>(null);
    const [darkMode, setDarkMode] = React.useState(false); // Add this line


    useLayoutEffect(() => {
        const p5 = require("p5");

        new p5((p: any) =>{
            let circles: Circle[] = [];
            let numCircles = 100;
            let minSize = 10;
            let maxSize = 100;
            let maxSpeed = 5;

            p.setup = () => {
                let parentDiv = renderRef.current;
                let canvasWidth = parentDiv ? parentDiv.offsetWidth : p.windowWidth;
                let canvasHeight = parentDiv ? parentDiv.offsetHeight : p.windowHeight;
                p.createCanvas(canvasWidth, canvasHeight).parent(renderRef.current);
                
                for (let i = 0; i < numCircles; i++) {
                    let x = p.random(0,p.width);
                    let y = p.random(0,p.height);
                    let r = p.random(minSize, maxSize);
                    let speedX = p.random(-2, 2);
                    let speedY = p.random(-2, 2);
                    let hue = p.random(0,360);
                    let subtraction = p.random(0,0.001);
                    circles[i] = new Circle(x, y, r, speedX, speedY, hue, subtraction);
                }


            }

            p.draw = () => {
                // Add this block
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    setDarkMode(true);
                }
                p.translate(-p.width/2,-p.height/2)
                p.translate(p.width / 2, p.height / 2);

                if (darkMode){
                    p.background(0);
                }
                p.background(255);
                
                for (let i = 0; i < circles.length; i++) {
                    circles[i].move();
                    circles[i].display();
                    circles[i].changeHue();
                }
            }



            class Circle {
                x: any;
                y: any;
                r: any;
                speedX: any;
                speedY: any;
                hue: any;
                subtraction: any;
                constructor(x: any, y: any, r: any, speedX: any, speedY: any, hue: any, subtraction: any) {
                    this.x = x;
                    this.y = y;
                    this.r = r;
                    this.speedX = speedX;
                    this.speedY = speedY;
                    this.hue = hue;
                    this.subtraction = subtraction;
                }

                

                changeHue() {
                    // Define a certain value to add or subtract from the hue
                    // let hueChange = 1; // Change this value to your needs

                    // this.hue += hueChange;
                    // // Get the total scrollable height

                

                    // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                
                    // // Calculate the hue based on the scroll position
                    // this.hue += 1/100*(window.scrollY / scrollHeight) * 360 +this.subtraction;
                
                    // // Ensure the hue is within the range 0-360
                    // this.hue = (this.hue + 360) % 360;
                }
                
                
                

                move() {
                    // // Calculate direction to mouse
                    // let dirX = p.mouseX - this.x;
                    // let dirY = p.mouseY - this.y;
                
                    // // Normalize direction
                    // let dirLen = Math.sqrt(dirX * dirX + dirY * dirY);
                    // dirX /= dirLen;
                    // dirY /= dirLen;
                
                    // // Add a fraction of direction to speed
                    // this.speedX += 0.1 * dirX;
                    // this.speedY += 0.1 * dirY;
                
                    // Define a maximum speed
                    let maxSpeed = 5; // Change this value to your needs
                
                    // Constrain speedX
                    if (this.speedX > maxSpeed) {
                        this.speedX = maxSpeed;
                    } else if (this.speedX < -maxSpeed) {
                        this.speedX = -maxSpeed;
                    }
                
                    // Constrain speedY
                    if (this.speedY > maxSpeed) {
                        this.speedY = maxSpeed;
                    } else if (this.speedY < -maxSpeed) {
                        this.speedY = -maxSpeed;
                    }
                
                    // Move circle
                    this.x += this.speedX;
                    this.y += this.speedY;
                
                    // Bounce off edges
                    if (this.x > p.width || this.x < 0) {
                        this.speedX = -this.speedX;
                    }
                    if (this.y > p.height || this.y < 0) {
                        this.speedY = -this.speedY;
                    }
                }
                

                display() {
                    p.noStroke();
                    p.colorMode(p.HSB);
                
                    if (darkMode) {
                        p.fill(this.hue, 0, 0);
                    } else {
                        p.fill(this.hue, 50, 360);
                    }
                
                    p.ellipse(this.x, this.y, this.r * 2);
                }
                
            }
        })
    }, [])

    return(
        <div id="p5-sketch" ref={renderRef}></div>
    )
    
}

export default P5Sketch;
