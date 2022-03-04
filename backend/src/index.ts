import 'dotenv/config';
import { Application } from './framework/application';
import { config } from './configs/config';
import { userRouter } from './user/user_controller';

const app = new Application();
const PORT = config.env.PORT;

app.registerRouter(userRouter);

app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
});
