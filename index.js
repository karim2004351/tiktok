// index.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 10000;

// مثال مسار بسيط
app.get('/', (req, res) => {
  res.send('OK — backend is running');
});

// إضافة مسارات أخرى حسب مشروعك
// app.use('/api', yourRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
