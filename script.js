// Function to change the main title text
function changeText() {
    const title = document.getElementById('main-title');
    title.textContent = 'You Changed the Title! 🎉';
  }
  
  // Function to change CSS style
  function changeStyle() {
    const description = document.getElementById('description');
    description.style.color = 'tomato';
    description.style.fontSize = '20px';
    description.style.fontWeight = 'bold';
  }
  
  // Function to add a new paragraph element
  function addElement() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = '🎈 A new element has been added!';
    newParagraph.id = 'new-element';
    document.getElementById('dynamic-area').appendChild(newParagraph);
  }
  
  // Function to remove the newly added element
  function removeElement() {
    const element = document.getElementById('new-element');
    if (element) {
      element.remove();
    } else {
      alert('No element to remove!');
    }
  }
  