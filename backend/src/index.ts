import 'dotenv/config';
import { Application } from './framework/application';
import { config } from './configs/config';

const app = new Application();
const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
});
