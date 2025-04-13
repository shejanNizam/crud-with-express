const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// application routes

// error handler middleware default
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
