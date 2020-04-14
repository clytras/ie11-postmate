import Postmate from 'postmate';

window.parentSetup = function () {
  // Kick off the handshake with the iFrame
  const handshake = new Postmate({
    container: document.getElementById('child'), // Element to inject frame into
    url: 'child.php', // Page to load, must have postmate.js. This will also be the origin used for communication.
    name: 'my-iframe-name', // Set Iframe name attribute. Useful to get `window.name` in the child.
    classListArray: ["my-iframe"] //Classes to add to the iframe via classList, useful for styling.
  });

  // When parent <-> child handshake is complete, data may be requested from the child
  handshake.then(child => {
    // Listen to a particular event from the child
    child.on('some-event', data => console.log(data)); // Logs "Hello, World!"
    child.on('bg-color', color => {
      document.body.style.backgroundColor = color;
    });
  });
}

window.childSetup = function() {
  const handshake = new Postmate.Model({
    // Expose your model to the Parent. Property values may be functions, promises, or regular values
    height: () => document.height || document.body.offsetHeight
  });

  // Helper function to get random colors
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // When parent <-> child handshake is complete, events may be emitted to the parent
  handshake.then(parent => {
    parent.emit('some-event', 'Hello, World!');

    document.getElementById('change-color').onclick = function() {
      console.log('change-color clicked');

      parent.emit('bg-color', getRandomColor());
    }
  });
}
