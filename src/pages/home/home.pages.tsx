import FieldComponent from "../../components/fields.components";
import ControllerGetFields from "../../controller/controller.fields";
import { useEffect,useState } from "react";
import BestRestaurant from "../../components/best.restaurant";

const HomeScreen = ():JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState <Array<any>>([]);

  useEffect(() => {
    async function getAll() {
      const get = new ControllerGetFields();
      const fields = await get.getFields();
      setData(fields);
    }

    getAll();
  },[])

  return (    
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100%",width:"100vw",backgroundColor:"#4a766e"}}>
      <div style={{display:"flex",flexDirection:"column"}}>
      <div>
        <h1 style={{textAlign: "center", color:"#000",fontSize:60}}>FastFoodChoise</h1>
      </div>      
      <div style={{marginTop: "25px"}}>
      <div style={{display: "flex", justifyContent: "center", marginTop: 25}}>
        <BestRestaurant />        
      </div>
      <FieldComponent items={data}/>
      
      </div>
      </div>
    </div>
  );
};





export default HomeScreen;
