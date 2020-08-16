import {environment} from "../environment.ts";

export class Geolocation {
    private static mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/%s.json?access_token='
        + environment.mapboxApiToken;

    static async getGeolocation(location: string) {
        const urlStr = this.mapboxUrl.replace('%s', location);
        return await (await fetch(urlStr)).json();
    }
}
