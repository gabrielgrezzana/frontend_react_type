import Fields from "../interface/filds.interface";
import ControllerVotation from "../controller/controller.votation";

interface FieldComponentProps {
  items: Fields[];
}


const FieldComponent:React.FC<FieldComponentProps> = ({items}) : JSX.Element => {
  async function votationSubmit(id_restaurant:number) {
    const voting = new ControllerVotation();
    const vote = await voting.votationController(id_restaurant);

    if(vote){
      alert(vote)
    }else{
      alert(vote)
    }
    
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
            boxSizing: "border-box"
          }}
        >
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
            <span style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}>
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

      {/* <div style={{backgroundColor:"#ccc" ,width:"25%",height:115,padding:50, marginTop:25,alignContent:"center",alignItems:"center"}}>
        <div style={{width:200,height:115}}>        
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <text style={{textAlign:"center",fontSize:15,fontWeight:"bold"}}>restaurante bom de mais</text>
        <button style={{width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontSize:15,fontWeight:"bold",backgroundColor:"red",borderRadius:15,marginLeft:5}}>
          <span role="img" aria-label="heart" >❤️</span>
        </button>
        </div>
      </div> */}
      
    </div>
  );
};





export default FieldComponent;