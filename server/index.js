const app = require('./app');

const port = app.get('PORT');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
