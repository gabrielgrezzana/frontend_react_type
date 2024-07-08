
const FieldComponent = ():JSX.Element => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}>
      <div style={{backgroundColor:"#ccc" ,width:"25%",height:115,padding:50, marginTop:25,alignContent:"center",alignItems:"center"}}>
        <div style={{width:200,height:115}}>
        {/* <img src={require('../../ass')} className="logo" alt="logo" /> */}        
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <text style={{textAlign:"center",fontSize:15,fontWeight:"bold"}}>restaurante bom de mais</text>
        <button style={{width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontSize:15,fontWeight:"bold",backgroundColor:"red",borderRadius:15,marginLeft:5}}>
          <span role="img" aria-label="heart" >❤️</span>
        </button>
        </div>
      </div>
      
    </div>
  );
};





export default FieldComponent;