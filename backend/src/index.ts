import 'dotenv/config';
import { Application } from './framework/application';

const app = new Application();
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
});
