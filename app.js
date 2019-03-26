const geoCode=require('./utils/geocode')
const forecast=require('./utils/forecast.js')
geoCode(process.argv[2], (error,{latitude,longitude,location}) => {
    if(error)
    return console.log(error)

    console.log(location)
    forecast(latitude,longitude, (error, forecastdata) => {
        //if we are keeping this forecast within geoCode then that would be callback chaining
        if(error)
        return console.log(error)
        console.log('Data', forecastdata)
    })
})



   
