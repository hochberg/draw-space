import React, { useEffect } from 'react';
import { applyStroke } from './util';
import './style.css';

const Canvas = () => {

    let canvasRef = null;

    useEffect(() => {
        const context = canvasRef.getContext('2d');
        let isDrawing = false;
        let x = 0;
        let y = 0;

        canvasRef.addEventListener('mousedown', e => {
            x = e.offsetX;
            y = e.offsetY;
            isDrawing = true;
        });

        canvasRef.addEventListener('mousemove', e => {
            if (isDrawing === true) {
                applyStroke(context, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            }
        });

        window.addEventListener('mouseup', e => {
            if (isDrawing === true) {
                applyStroke(context, x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                isDrawing = false;
            }
        });
    }, []);

    return (
        <canvas className="canvas" ref={(c) => { canvasRef = c; }} width="490" height="220" />
    );
}

export default Canvas;