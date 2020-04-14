<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test</title>
    <script src="dist/shim.js?v=<?php echo time() ?>"></script>
    <style type="text/css">
      body {
        background-color: beige;
      }  
    </style>
</head>
<body>

<p><h1>This is the child iFrame</h1></p>
<div><button id="change-color">Set parent random background color</button></div>

<script>

document.addEventListener("DOMContentLoaded", function() {

  console.log('Child Loaded!');

  let sym = Symbol('foo');

  console.log("Child sym type = " + typeof(sym));

  childSetup();

});

</script>

</body>
</html>
