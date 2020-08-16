import {Geolocation} from "../models/geolocation.ts";

import {RContext} from "../models/router_context.ts";

export async function getLocation(ctx: RContext) {
    if (ctx.params.loc) {
        ctx.response.body = await Geolocation.getGeolocation(ctx.params.loc);
    } else {
        ctx.response.body = {error: 'There is an error that shouldn\'t happen!'};
    }
}
