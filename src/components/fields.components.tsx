import Fields from "../interface/filds.interface";
import ControllerVotation from "../controller/controller.votation";
import { useState } from "react";
import HelperText from "./helpertext";


interface FieldComponentProps {
  items: Fields[];
}


const FieldComponent:React.FC<FieldComponentProps> = ({items}) : JSX.Element => {  
  const [sucess, setSucess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  async function votationSubmit(id_restaurant:number) {
    setSucess(false);
    const voting = new ControllerVotation();
    const vote = await voting.votationController(id_restaurant);
    setMessage(vote);
    setSucess(true);
    // if(vote){
    //   alert(vote)
    // }else{
    //   alert(vote)
    // }
    
  }
  
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}>
      {items.map(item => (
        
          <div
          key={item.id}
          style={{
            backgroundColor: "#000",
            width: 300,
            height: "100%",
            padding: 50,
            marginTop: 25,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            borderRadius:40,
          }}
        >
          {<HelperText message={message} visible={sucess}/>}
          <div style={{marginBottom:20}}>
            <span style={{color:"#fff",fontSize:22}}>{item.name}</span>
          </div>
          {item.image && (
           <div style={{ 
            width: 200, 
            height: 115, 
            marginBottom: 10, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            <img 
                src={item.image} 
                alt="logo" 
                style={{ 
                    maxWidth: "100%", 
                    maxHeight: "100%", 
                    objectFit: "cover" 
                }} 
            />
        </div>
          )}
          <div style={{ display: "flex", alignItems: "center",flexDirection:"column" }}>
            <span style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" ,color:"#fff"}}>
              {item.description}
            </span>
            <button
              onClick={() => votationSubmit(item.id)} 
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                backgroundColor: "red",
                borderRadius: 15,
                marginLeft: 5,
                border: "none",
                color: "white",
                cursor: "pointer",
                marginTop:15
              }}
            >
              <span role="img" aria-label="heart"  >❤️</span>
            </button>
          </div>
        </div>        
      ))}      
    </div>
  );
};





export default FieldComponent;