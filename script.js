document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    // Mouse Events
    const mouseButton = document.getElementById('mouseButton');
    mouseButton.addEventListener('click', function() {
        alert('Mouse Button was clicked!');
    });

    mouseButton.addEventListener('dblclick', function() {
        alert('Mouse Button was double-clicked!');
    });

    mouseButton.addEventListener('mousedown', function() {
        console.log('Mouse button is pressed down');
    });

    mouseButton.addEventListener('mouseup', function() {
        console.log('Mouse button is released');
    });

    const mouseDiv = document.getElementById('mouseDiv');
    mouseDiv.addEventListener('mouseover', function() {
        mouseDiv.style.backgroundColor = 'lightgreen';
    });

    mouseDiv.addEventListener('mouseout', function() {
        mouseDiv.style.backgroundColor = 'lightblue';
    });

    mouseDiv.addEventListener('mousemove', function(event) {
        console.log(`Mouse position: (${event.clientX}, ${event.clientY})`);
    });

    // Keyboard Events
    const textInput = document.getElementById('textInput');
    textInput.addEventListener('keydown', function(event) {
        console.log('Key down:', event.key);
    });

    textInput.addEventListener('keyup', function(event) {
        console.log('Key up:', event.key);
    });

    textInput.addEventListener('keypress', function(event) {
        console.log('Key press:', event.key);
    });

    // Form Events
    const myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form was submitted!');
    });

    myForm.addEventListener('focus', function(event) {
        console.log('Form element focused:', event.target);
    }, true); // Using capture to catch focus events

    myForm.addEventListener('blur', function(event) {
        console.log('Form element lost focus:', event.target);
    }, true); // Using capture to catch blur events

    // Window Events
    window.addEventListener('load', function() {
        alert('welcome to our website');
        console.log('Page is fully loaded');

    });

    window.addEventListener('resize', function() {
        console.log('Window is resized');
    });

    window.addEventListener('scroll', function() {
        console.log('Window is scrolled');
    });

    window.addEventListener('beforeunload', function(event) {
        event.preventDefault();
        event.returnValue = '';
    });
});
