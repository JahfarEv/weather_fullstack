const { default: axios } = require("axios");
const axios = require('axios')
const getCurrentCity=async(req,res,next)=>{
    console.log('success');
    try {
        const city = req.query.city
        if(!city){
            res.status(400).json({ 
                status:'failed',
                message:'please provide city field' 
            })
        }
    const data=await axios.get(`https://api.openweathermap.org/data/2.5/weather?&appid=de7e9e5cabf1db28201cac646548c99e&q=${location},India&units=metric`)
    const convertUnixToDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleString(); 
      };
    return res.status(200).json({
        status: 'success',
        data: {
            coord: data.data.coord,
            weather: data.data.weather,
            base: data.data.base,
            main: data.data.main,
            visibility: data.data.visibility,
            wind: data.data.wind,
            clouds: data.data.clouds,
            dt:convertUnixToDate(data.data.dt),
            sys:data.data.sys,
            timezone: data.data.timezone,
            id: data.data.id,
            name: data.data.name,
            cod: data.data.cod
          }
        });
      
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          status: 'failed',
          message: 'Internal Server Error'
        });
    }
    }
    
    const getForcast = async (req, res,next) => {
        try {
            console.log('success');
            const { lat, lon } = req.query;
    
            if (!lat || !lon) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'Latitude or longitude is not provided'
                });
            }
    
    
            const forecastData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`);
    
            const groupedData = groupByDate(forecastData.data.list);
    
            res.json({
                status: 'success',
                data: groupedData
            });
        } catch (error) {
            console.error('Error fetching forecast:', error);
            res.status(500).json({
                status: 'error',
                message: 'Failed to fetch weather forecast'
            });
            next(error)
        }
    };
    
    function groupByDate(data) {
        const groupedData = {};
    
        data.forEach(item => {
            const date = item.dt_txt.split(' ')[0]; 
    
            if (!groupedData[date]) {
                groupedData[date] = [];
            }
    
            groupedData[date].push(item);
        });
    
        return groupedData
    }
    
    
    const favoriteCity=async(req,res)=>{
    try {
        const decoded=req.decoded;
        const userId=decoded.userId.id
    
        const {name}=req.body;
        console.log(userId,"vvefefde");
        const newFavoriteCity = await prisma.favoriteCity.create({
            data: {
              userId: userId,
              name:name,
            },
          });
    
          res.status(200).json({
            status:'success',
            message:'data fetched succesfully',
            newFavoriteCity
          })
    
    } catch (error) {   
        console.log(error);
    }
    }
    
    const getCity=async(req,res)=>{
    try {
        const decoded=req.decoded;
        let userId=decoded.userId. id;
        const favoriteCity=await prisma.favoriteCity.findMany({where:{userId:userId}})
        res.status(200).json({
            status:'success',
            message:'succesfully fetched favourite City',
            favoriteCity
        })
    } catch (error) {
        console.log(error,"err");
    }
    }
    
    
    module.exports={signup,userLogin,getCurrentCity,getForcast,favoriteCity,getCity}