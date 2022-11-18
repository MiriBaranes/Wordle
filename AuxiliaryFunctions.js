function makeAElement(key, value, attributes) {
    let element = document.createElement(key);
    let text = document.createTextNode(value);
    for (let i = 0; i < attributes.length; i++) {
        element.setAttribute(attributes[i][0], attributes[i][1]);
    }
    if (value != null) {
        element.appendChild(text);
    }
    return element;
}