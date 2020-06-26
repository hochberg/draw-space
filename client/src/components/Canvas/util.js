export const applyStroke = (context, x1, y1, x2, y2) => {
    context.beginPath();
    context.strokeStyle = 'black'; // TODO - make variable
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}