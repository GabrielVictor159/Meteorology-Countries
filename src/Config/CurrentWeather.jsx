export default function CurrentWeather(name,cidade,pais){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        }
    };
    let resposta;
    function setResposta(callback){
        let teste = 'fasdad';
        
        resposta = callback;
        console.log(callback.place)
        alert(
            `
            Local: ${name} \n
            Data: ${resposta.ob.recDateTimeISO.substring(0,10)} \n
            Horario: ${resposta.ob.recDateTimeISO.substring(11,16)} \n
            Temperatura: ${resposta.ob.tempC}° C ${resposta.tempF}° F \n
            Periodo: ${resposta.ob.isDay=='true'?'dia':'noite'} \n
            Humidade: ${resposta.ob.humidity} \n
             `)
    }
     fetch(`https://aerisweather1.p.rapidapi.com/observations/${cidade},${pais}`, options)
        .then(response => response.json())
        .then(response => setResposta(response.response))
        .catch(err => console.error(err));
    
   
}
