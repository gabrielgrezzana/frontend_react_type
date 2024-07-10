import ControllerBestRestaurant from "../controller/controller.best.restaurant";
import { useState } from "react";
import Restaurant from "../interface/bestrestaurant.interface";
import '../index.css'

const BestRestaurant = () :JSX.Element => {  
  const [winner, setWinner] = useState<boolean>(false);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  async function getBestRestaurant(){
    const restaurant = new ControllerBestRestaurant();
    const best = await restaurant.controllerBestRestaurant();
    if(best.id === 0){
      alert("Restaurantes sem votos")      
          
    } else{
      setRestaurant(best);
      setWinner(true);
      setShowAnimation(true);      
    }    
  }

  function handleClose(){
    setWinner(false);
  }

  return(
    <div>
    {!winner ? 
    <button onClick={getBestRestaurant} style={{marginRight: 10,fontSize:18,borderRadius:15,padding:15,fontWeight:"bold",backgroundColor:"#fff"}}>Restaurante ganhador da votação</button>
    :  <div style={{ 
      border: "2px solid #000", 
      padding: "10px", 
      position: "relative", 
      width: "250px", 
      margin: "20px auto", 
      backgroundColor: "#fff", 
      borderRadius: "8px"
    }}>
      <button 
        onClick={handleClose} 
        style={{
          position: "absolute", 
          top: "5px", 
          right: "5px", 
          background: "red", 
          color: "#fff", 
          border: "none", 
          borderRadius: "50%", 
          width: "25px", 
          height: "25px", 
          cursor: "pointer"
        }}
      >
        X
      </button>
      {showAnimation && <div className="reveal-animation"></div>}
      <h1 style={{ textAlign: "center" }}>{`O vencedor é: ${restaurant?.name}`}</h1>
      <div style={{ 
          width: "200px", 
          height: "115px", 
          margin: "10px auto", 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
      }}>
          <img 
              src={restaurant?.image} 
              alt="logo" 
              style={{ 
                  maxWidth: "100%", 
                  maxHeight: "100%", 
                  objectFit: "cover" 
              }} 
          />
      </div>
    </div>
  }
  </div>
  )
}

export default BestRestaurant;