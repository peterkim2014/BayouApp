// registerCard.js
export async function registerCard(name, email) {
    const response = await fetch('http://192.168.1.212:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
  
    const data = await response.json();
    return data;
  }
  