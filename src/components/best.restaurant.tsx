import ControllerBestRestaurant from "../controller/controller.best.restaurant";

const BestRestaurant = () :JSX.Element => {  

  async function getBestRestaurant(){
    const restaurant = new ControllerBestRestaurant();
    const best = await restaurant.controllerBestRestaurant();
    if(best.id === 0){
      alert("Restaurantes sem votos")
    } else{
      alert(`Restaurante ganhador é: ${best.name}`)
    }

  }
  return(
    <button onClick={getBestRestaurant} style={{marginRight: 10,fontSize:18}}>Restaurante ganhador da votação</button>
  )
}

export default BestRestaurant;