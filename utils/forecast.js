const request=require('request')
// const url = 'https://api.darksky.net/forecast/9cc6b43495d83d095c864cb64bd44075/37.8267,-122.4233' //This is the normal way to get the url and by reading docs we can read which are the optional options available in thr url and that those options can be added using query in url and that comes after ? sign in url like given below, https://api.darksky.net/forecast/9cc6b43495d83d095c864cb64bd44075/37.8267,-122.4233?key=value&key2=value
// console.log(response)
// const data=JSON.parse(response.body)
    // console.dir(data, { depth: null }) This is used to view the object till infinite recursion and does not show [Object] as is shown by console.log(data)
// console.dir(data,{depth:null})

const forecast = (lat, long, callback) => {
    url = 'https://api.darksky.net/forecast/9cc6b43495d83d095c864cb64bd44075/'+lat+','+long+'?units=si&lang=en'
    request({ url, json: true }, (error, {body}) => {
        if (error){
            callback('Sorry check your internet connection,', undefined)}
        else if (body.error)
            {callback('Sorry the latitude and longitude entered does not exist', undefined)}
        else
        {
            callback(undefined, 
             body.daily.data[0].summary+
            " It is currently " + body.currently.temperature + " degrees out. " + "There is a " + body.currently.precipProbability * 100 + "% chance of rain"
            )}
    })
}
module.exports=forecast