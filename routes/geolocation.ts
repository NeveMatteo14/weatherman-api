import { Router } from 'https://deno.land/x/oak@v6.0.1/mod.ts';

import {getLocation} from "../controllers/geolocation.ts";

const router = new Router();

router.get('/location/:loc', getLocation);

export default router;
