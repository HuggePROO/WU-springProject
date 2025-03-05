// Ensure proper rendering of the graph in stats.html
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('graph')


  // Set canvas dimensions explicitly based on parent container
  const parentWidth = canvas.parentElement.clientWidth;
  canvas.width = parentWidth ? parentWidth : 600;
  canvas.height = 400;

  const ctx = canvas.getContext('2d');

  // Graph settings
  const width = canvas.width;
  const height = canvas.height;
  const graphHeight = height - 20;
  const graphWidth = width - 20;
  //const data = new Array(50).fill(height / 2); // Initialize with constant value
  const data = new Array(50).fill(height / 2); // Initialize with constant value
  const step = graphWidth / data.length;

  // Function to draw the graph
  function drawGraph() {
    ctx.clearRect(0, 0, width, height); // Clear the canvas

    // Draw axes
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10, graphHeight);
    ctx.lineTo(graphWidth, graphHeight);
    ctx.stroke();

    // Draw graph line
    ctx.strokeStyle = '#00f';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(10, data[0]);

    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(10 + i * step, data[i]);
    }

    ctx.stroke();
  }

  // Function to update the graph with a new random data point
  function updateGraph() {
    const newY = 200 + (Math.random() * (graphHeight / 10)); // Generate a random Y value
    data.shift(); // Remove the oldest data point
    data.push(newY); // Add the new data point
    drawGraph();
  }

  // Initial draw
  drawGraph();

  // Update the graph every 100 ms
  setInterval(updateGraph, 100);
});