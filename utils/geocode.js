const request=require('request')
const geoCode = (location, callback) => {
    request({
        url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1IjoiYWJoaXNoZWstMzEiLCJhIjoiY2p0bXBqcThlMHBsYTQ0cGY1MzN1dXczciJ9.uVuHWuBdm64VGWoLoaJ4Eg&limit=1', json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        }
        else if (body.error)
            callback('Unable to find location. Try again', undefined)
        else
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
    })
}
module.exports = geoCode