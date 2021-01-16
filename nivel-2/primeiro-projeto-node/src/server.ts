import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(2398, () => {
  console.log('🤡️ Server started on port 2398');
});
