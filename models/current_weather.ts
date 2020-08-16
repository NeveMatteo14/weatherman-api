import {environment} from "../environment.ts";

export class CurrentWeather {
    private static openWeatherCurrentUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&' +
        'appid=' + environment.openWeatherApiToken;

    static async getCurrentWeather(lat: string, lon: string) {
        const url = this.openWeatherCurrentUrl
            .replace('{lat}', lat)
            .replace('{lon}', lon);
        return await (await fetch(url)).json();
    }
}
