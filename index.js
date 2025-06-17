// index.js — نقطة انطلاق تطبيقك
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve الواجهة إذا موجودة مجلد client أو dist/public
const publicPath = path.join(__dirname, 'client');
app.use(express.static(publicPath));

// إذا تستخدم React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
