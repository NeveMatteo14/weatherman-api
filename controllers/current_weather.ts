import {helpers} from 'https://deno.land/x/oak@v6.0.1/mod.ts';

import {CurrentWeather} from "../models/current_weather.ts";
import {RContext} from "../models/router_context.ts";

export async function getCurrentWeather(ctx: RContext) {
    const queryParams = helpers.getQuery(ctx);
    if ('lat' in queryParams && 'lon' in queryParams) {
        ctx.response.body = await CurrentWeather.getCurrentWeather(queryParams.lat, queryParams.lon);
    } else {
        ctx.response.body = {error: 'There is an error that shouldn\'t happen!'};
    }
}
