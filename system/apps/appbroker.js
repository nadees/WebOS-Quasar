var wincon = [];
let PID = Math.floor
function openWindow(title, src) {
  var window = document.createElement("div");
  window.setAttribute("id","window")
  window.innerHTML = `
        <div id="window_header">
          <div id="window_control">
            <button onclick="window_min()" id="min_btn" title="Minimize"></button>
            <button onclick="window_max()" id="max_btn" title="Maximum"></button>
            <button onclick="window_close()" id="close_btn" title="Close"></button>
          </div>
          <div id="window_title">${title}</div>
        </div>
        <iframe src="${src}" id="window_content"></iframe>
        `;
  document.body.appendChild(window);
  wincon.push(window);
  container();
}
  
function app_files() {
  openWindow("📁 Files", "/system/apps/files/files.html");
}

function app_calc() {
  openWindow("🧮 Calculator", "/system/apps/calc/calc.html");
}

// Add more functions for other apps
