function makeAElement(key, attributes, text) {
    let element = document.createElement(key);
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    if (text) {
        let textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }
    return element;
}

