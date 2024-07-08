import FieldComponent from "../../components/fields.components";

const HomeScreen = ():JSX.Element => {
  return (    
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh",width:"100vw",backgroundColor:"#4a766e"}}>
      <div style={{display:"flex",flexDirection:"column"}}>
      <div>
        <h1 style={{textAlign: "center", color:"#000"}}>Bem vindo! <br/>Escolha seu restaurante mais rápido</h1>
      </div>      
      <div style={{marginTop: "25px"}}>
      <div style={{display: "flex", justifyContent: "center", marginTop: 25}}>
        <button style={{marginRight: 10}}>Restaurante mais votado</button>
        {/* <button>Sobre</button> */}
      </div>
      <FieldComponent/>
      
      </div>
      </div>
    </div>
  );
};





export default HomeScreen;
