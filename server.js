const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// ⛳️ Render gibt den Port über process.env.PORT vor
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Beispiel-Endpunkte
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
