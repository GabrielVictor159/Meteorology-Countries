import React, {useEffect, useLayoutEffect, useState} from "react";
import "./Home.css"
export default function Home() {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [weather, setWeather] = useState({});
    const username = 'gabriel159487263';
    
    
    
    useEffect(() => {
       function setCountie(){
        let a=[] 
        fetch(`https://secure.geonames.org/countryInfoJSON?username=${username}`,{
          credentials:'same-origin', referrerPolicy:'unsafe-url'
        })
        .then((response)=>response.json())
        .then((data)=>{data.geonames.forEach((country)=>{
            a.push({ name: country.countryName, geonameId: country.geonameId, code:country.countryCode })
            
        })
        setCountries(a)
    })
    }
    setCountie()
    }, []);
    
    useEffect(() => {
    if (selectedCountry) {
        function setState(){
            let a=[] 
            fetch(`https://secure.geonames.org/childrenJSON?geonameId=${selectedCountry.geonameId}&username=${username}`,{
              credentials:'same-origin', referrerPolicy:'unsafe-url'
            })
            .then((response)=>response.json())
            .then((data)=>{data.geonames.forEach((city)=>{
                a.push({ name: city.toponymName, geonameId: city.geonameId, lat:city.lat, lon:city.lng })
                
            })
            setStates(a)
        })
        }
        setState()
    }
    }, [selectedCountry]);
    
    useEffect(() => {
        if (selectedState) {
            function setCitie(){
                let a=[] 
                fetch(`https://secure.geonames.org/childrenJSON?geonameId=${selectedState.geonameId}&username=${username}`,{
                  credentials:'same-origin', referrerPolicy:'unsafe-url'
                })
                .then((response)=>response.json())
                .then((data)=>{data.geonames.forEach((city)=>{
                    a.push({name: city.toponymName, geonameId:city.geonameId, lat:city.lat, lon:city.lng})
                })
                setCities(a)
            });
            }
            setCitie()
            }
           
        }
        , [selectedState]);
    
        async function mostWeather (properties) {
            let resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?${properties}&appid=10c482805f2d9fe4dd442a1157286720`)
              .then(res => res.json())
            return resposta
          }
          
          useEffect(() => {
            if (selectedCity) {
              (async () => {
                let z = await mostWeather(`q=${selectedCity.name},${selectedCountry.code}`)
                if(z.cod==="404"){
                  z = await mostWeather(`lat=${selectedCity.lat}&lon=${selectedCity.lon}`)
                  if(z.cod==="404"){
                      z = await mostWeather(`q=${selectedState.name},${selectedCountry.code}`)
                      if(z.cod==="404"){
                          z = await mostWeather(`lat=${selectedState.lat}&lon=${selectedState.lon}`)
                          if(z.cod==="404"){
                              z = await mostWeather(`q=${selectedCountry.name}`)
                              if(z.cod==="404"){
                                z = await mostWeather(`q=${selectedCountry.code}`)
                                if(z.cod==="404"){
                                    z = "could not find data"
                                
                                }
                            }
                          }
                        
                      }
                  }
                
                }
                console.log(z)
                setWeather(z)
              })();
            }
          }, [selectedCity]);
          
    
    const handleCountryChange = (event) => {
        setSelectedState('')
        setSelectedCity('')
    setSelectedCountry(countries[event.target.value]);
    };
    
    const handleStateChange = (event) => {
        setSelectedCity('')
    setSelectedState(states[event.target.value]);
    };
    const handleCityChange = (event) =>{
        setSelectedCity(cities[event.target.value])
    }
    return (
      <div className="Home_body">
        <br /> <br />
        <div className="Home_Container" >
       
       <h1>Dados meteorologicos</h1>
       <div className="Home_Container_Select">
       <label>Pais: </label>
       <select   onChange={handleCountryChange}>
         <option value="" disabled selected>Selecione um Pais</option>
         {countries.map((country, index) => (
           <option key={`country${index}`} value={index}>{`${country.name}`}</option>
         ))}
       </select>
       </div>
       <div className="Home_Container_Select">
       <label>Estado: </label>
       <select onChange={handleStateChange}>
       <option value="" selected>Selecione um Estado</option>
       {states.map((state,index) => (
       <option key={`state${index}`} value={index}>{state.name}</option>
       ))}
       </select>
       </div>
       <div className="Home_Container_Select">
       <label>Cidade: </label>
       <select   onChange={handleCityChange}>
       <option value="" selected>Selecione uma Cidade</option>
       {cities.map((city,index) => (
       <option key={`city${index}`} value={index}>{city.name}</option>
       ))}
       </select>
       </div>
       <div>
       {
       weather!=="could not find data"?
       Object.keys(weather).length > 0 && (
           <div>
             <p>Temperatura: {`${(weather.main.temp - 273.15).toFixed(1)}Cº`}</p>
             <p>Pressão: {weather.main.pressure}</p>
             <p>Umidade: {weather.main.humidity}</p>
             <p>Velocidade do vento: {weather.wind.speed}</p>
             <p>Direção do Vento: {weather.wind.deg}</p>
             <p>Nebulosidade: {weather.clouds.all}</p>
             <p>Nascer do sol: {`${(new Date(weather.sys.sunrise * 1000)).toLocaleString('pt-BR')}`}</p>
             <p>Pôr do sol: {`${(new Date(weather.sys.sunset * 1000)).toLocaleString('pt-BR')}`}</p>
           </div>
         )
         : <p>{weather}</p>}
         <br /><br />
       </div>
       </div>
      </div>
    
    );
    }