import React, { useEffect, useState } from 'react'
import { FaCloud } from "react-icons/fa";
import axios from 'axios'
const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDatas = async () => {
          try {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?&appid=de7e9e5cabf1db28201cac646548c99e&q=Malappuram,India&unit");
            setData(response.data);
            console.log(response,"edgg");
          } catch (error) {
            console.log(error);
          }
        };
        fetchDatas();
      }, []);
  return (
   <div>

    <div>
    <div className="w-full flex flex-col md:flex-row">
      <div className='w-full md:w-5/12 h-auto md:h-screen flex items-center justify-center p-4'>
        <div className='w-full max-w-xs md:max-w-md h-auto rounded-2xl text-center bg-red-200 border border-gray-200 shadow-lg'>
          <h1 className='text-xl text-white'>Today</h1>
          <h1 className='text-5xl md:text-9xl text-center font-bold'>{data.wind}</h1>
          <h1 className='text-center text-lg md:text-2xl mt-4 font-bold'>Sunny</h1>
          <p className='text-lg md:text-2xl mt-4'>Calicut, Kerala</p>
          <p className='text-base md:text-xl mt-4'>21, October</p>
          <p className='text-base md:text-xl mt-4'>Calicut, Kerala</p>
        </div>
      </div>

      <div className='w-full md:w-7/12 h-auto p-4'>
        <div className='w-full bg-gray-400 rounded-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-wrap justify-center gap-4'>
              {[...Array(5)].map((x, index) => (
                <div
                  key={index}
                  className='text-white sm:w-32 md:w-36 lg:w-24 p-4 flex flex-col items-center justify-center rounded-lg'
                >
                  <p className='text-sm md:text-lg font-bold'>Now</p>
                  <div className='flex items-center'>
                    <FaCloud className='text-white w-6 h-6 md:w-8 md:h-8 mr-2' />
                    <p className='text-base md:text-xl'>25*</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='w-full border-t-2 border-white my-4' />
            <div className='flex flex-wrap justify-center gap-4'>
              {[...Array(5)].map((x, index) => (
                <div
                  key={index}
                  className='text-white sm:w-32 md:w-36 lg:w-24 p-4 flex flex-col items-center justify-center rounded-lg'
                >
                  <p className='text-sm md:text-lg font-bold'>Now</p>
                  <div className='flex items-center'>
                    <FaCloud className='text-white w-6 h-6 md:w-8 md:h-8 mr-2' />
                    <p className='text-base md:text-xl'>25*</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full mt-5'>
          <p className='text-lg md:text-2xl text-white mb-2'>Random Text</p>
          <p className='text-base md:text-lg text-white'>
            Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
    </div>

</div>
  )
}

export default Home
