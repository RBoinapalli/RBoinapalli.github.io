const loadIceCreams = async () => {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const iceCreams = await response.json();
    
    const container = document.querySelector('.ice-cream-grid');
  
    iceCreams.forEach(iceCream => {
      const div = document.createElement('div');
      div.classList.add('ice-cream-item');
  
      // Create image element
      const img = document.createElement('img');
      img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
      div.appendChild(img);
  
      // Create overlay with ice cream name
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.textContent = iceCream.name; // Display name from JSON
      div.appendChild(overlay);
  
      container.appendChild(div);
    });
  };
  
  loadIceCreams();
  