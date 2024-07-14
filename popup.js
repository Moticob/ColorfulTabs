document.getElementById('changeColor').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: changeColor
    });
  });
});





function changeColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
