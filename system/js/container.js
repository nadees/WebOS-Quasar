  // Get the window element
    var windowEl = document.querySelector('.window');
    
    // Get the header element
    var headerEl = windowEl.querySelector('.window-header');
    
    // Flag to track whether the window is being moved
    var isMoving = false;
    
    // Initial mouse position
    var initialMouseX = 0;
    var initialMouseY = 0;
    
    // Initial window position
    var initialWindowX = 0;
    var initialWindowY = 0;
    
    // Listen for the mousedown event on the header
    headerEl.addEventListener('mousedown', function(e) {
      // Set the isMoving flag to true
      isMoving = true;
      
      // Capture the current mouse position
      initialMouseX = e.clientX;
      initialMouseY = e.clientY;
      
      // Capture the current position of the window
      initialWindowX = windowEl.offsetLeft;
      initialWindowY = windowEl.offsetTop;
    });
    
    // Listen for the mousemove event on the document
    document.addEventListener('mousemove', function(e) {
      // If the window is not being moved, do nothing
      if (!isMoving) return;
      
      // Calculate the distance the mouse has moved
      var deltaX = e.clientX - initialMouseX;
      var deltaY = e.clientY - initialMouseY;
      
      // Update the position of the window based on the distance the mouse has moved
      windowEl.style.top = initialWindowY + deltaY + 'px';
      windowEl.style.left = initialWindowX + deltaX + 'px';
    });
    
    // Listen for the mouseup event on the document
    document.addEventListener('mouseup', function() {
      // Set the isMoving flag to false
      isMoving = false;
    });

    // App container controllers
    function window_min() {
      var element = document.getElementById("window");
        element.style.display = "none";
    }

    function window_restore() {
      element.style.display = "";
    }

    function window_max() {
      var element = document.getElementById("window");
        element.style.display = "";
    }

    function window_close() {
      var element = document.getElementById("window");
        element.style.display = "none";
    }
    
    function window_open() {
      var element = document.getElementById("window");
        element.style.display = "block";
    }
