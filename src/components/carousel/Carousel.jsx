import React, {useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const Carousel = () =>{
  // const navigate = useNavigate();
  const [gamesFav, setGamesFav] = useState([]);
  const getData = async()=>{
  const response = await axios(`${process.env.REACT_APP_URL_BASE}/games`)
      setGamesFav(response.data.filter(game=> game.fav))
 }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-inner">
        {gamesFav.map(x=>{ 
        return <div className="carousel-item active col-12 content_carousel" key={x._id}>
        <img src={x.image?.[0]} className="d-block w-100 image_carousel" alt="..."/>
        <div className="carousel-caption d-none d-md-block col-3 ms-0 ps-0">
          <h3>{x.title}</h3>
        </div>
      </div> })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      </button>
</div>
  );
}

export default Carousel;
