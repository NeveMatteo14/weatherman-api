import { Application } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import geolocationRoutes from './routes/geolocation.ts'
import currentWeatherRoutes from './routes/current_weather.ts'

const app = new Application();

app.use(geolocationRoutes.routes());
app.use(geolocationRoutes.allowedMethods());

app.use(currentWeatherRoutes.routes());
app.use(currentWeatherRoutes.allowedMethods());

app.listen({port: 3000});
