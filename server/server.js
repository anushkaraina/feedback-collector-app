const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/feedback', (req, res) => {
  const feedback = req.body;
  const existing = JSON.parse(fs.readFileSync('server/feedbacks.json', 'utf-8'));
  existing.push(feedback);
  fs.writeFileSync('server/feedbacks.json', JSON.stringify(existing, null, 2));
  res.json({ message: 'Feedback submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
