// function which adds the text to the chat window
function createText(party, content) {
    var text = document.createElement('div');
    text.textContent = content;
    if (party == 'me') {
        text.classList.add('chat-bubble', 'me');
    } else if (party == 'you') {
        text.classList.add('chat-bubble', 'you');
    }
    return text;
}

function createTypingEffect(party) {
    
    const animate1 = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animate1.setAttribute('attributeName', 'cy');
    animate1.setAttribute('calcMode', 'spline');
    animate1.setAttribute('keySplines', '0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5');
    animate1.setAttribute('repeatCount', 'indefinite');
    animate1.setAttribute('values', '57.5;42.5;57.5;57.5');
    animate1.setAttribute('keyTimes', '0;0.3;0.6;1');
    animate1.setAttribute('dur', '1s');

    const animate2 = animate1.cloneNode(true);
    const animate3 = animate1.cloneNode(true);

    animate1.setAttribute('begin', '-0.6s');
    animate2.setAttribute('begin', '-0.39999999999999997s');
    animate3.setAttribute('begin', '-0.19999999999999998s');

    const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("fill", '#ffffff');
    circle1.setAttribute("r", 15);

    const circle2 = circle1.cloneNode(true);
    const circle3 = circle1.cloneNode(true);

    circle1.setAttribute("cx", 0);
    circle1.setAttribute("cy", 44.1678);
    circle1.appendChild(animate1);

    circle2.setAttribute("cx", 45);
    circle2.setAttribute("cy", 43.0965);
    circle2.appendChild(animate2);

    circle3.setAttribute("cx", 90);
    circle3.setAttribute("cy", 52.0442);
    circle3.appendChild(animate3);

    var effect = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    effect.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    effect.setAttribute('style', 'margin: auto;display: block;shape-rendering: auto;width: 43px;height: 20px;');
    effect.setAttribute('viewBox', '0 0 100 100');
    effect.setAttribute('preserveAspectRatio', 'xMidYMid');
    effect.appendChild(circle1);
    effect.appendChild(circle2);
    effect.appendChild(circle3);
    
    var div = document.createElement('div');
    div.appendChild(effect);
    if (party == 'me') {
        div.classList.add('chat-bubble', 'me');
    } else if (party == 'you') {
        div.classList.add('chat-bubble', 'you');
    }
    return div;
}