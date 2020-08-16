import { Router } from 'https://deno.land/x/oak@v6.0.1/mod.ts';

import {getCurrentWeather} from "../controllers/current_weather.ts";

const router = new Router();

router.get('/weather', getCurrentWeather);

export default router;
