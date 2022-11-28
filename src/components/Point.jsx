import CurrentWeather from "../Config/CurrentWeather";
import image from "../assets/map-point.png";
import "./Point.css"
export default function Point(props) {
    const handleClick = () =>{
        CurrentWeather(props.name,props.cidade, props.pais)

    }
  return (
    <a
      onClick={handleClick}
      style={{
        width: props.size*1.3,
        height: props.size*2,
        backgroundImage: `url(${image})`,
        position:'relative',
        backgroundSize: "100% 100%",
        top:props.top,
        left:props.left,
        
      }}
      className={'point'}
    ></a>
  );
}
