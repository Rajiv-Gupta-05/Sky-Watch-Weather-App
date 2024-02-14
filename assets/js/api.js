/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict'

const api_key = "0e8de6cee07fc0ee733219d0f666287f";

/**
 * 
 * @param {string} URL API url
 * @param {function} callback callback
 */
export const fetchData = function(URL,callback){
    fetch(`{URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}
// postman.com/galactic-resources-776965/workspace/openweather-free

export const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast (lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution (lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * 
     * @param {string} query search query e.g: "Kathmandu", "London"
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}