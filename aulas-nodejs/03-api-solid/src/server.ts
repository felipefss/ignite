import { app } from './app';
import { env } from './env';

app
  .listen({
    host: '0.0.0.0', // Hackzinho para possibilitar frontend se conectar com nosso server sem problemas
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!');
  });
