import React from 'react';


const LoginPage = () => {
  function handlesubmit(email:string, password:string) {
    console.log(email, password);//ja esta vindo aq oq foi digitado.
    //faco aqui a conexao com a api e vejo se retorna true ou false
    //nesse caso vou retornar true
    if (email === 'a@a' && password === 'a') {
      window.location.href = '/home';
    }else{
      alert("Email ou senha inválidos tente a@a a");
    }
  }

//   #5C4033
// Dark Green	#2F4F2F
// Dark Green Copper	#4A766E
// Dark Olive Green	#4F4F2F
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh',backgroundColor:"#fff"}}>
      <div style={{borderRadius: '8px', border: '1px solid #ccc', padding: '70px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '400px', margin: '0 auto',
        backgroundColor:"#4a766e",borderWidth:2,borderColor:"#000"}}>
        <h1 style={{textAlign: 'center'}}>Login</h1>
        <form style={{textAlign: 'center'}} onSubmit={(e) => {
            e.preventDefault();
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;
            handlesubmit(email, password);
          }}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display:'flex', flexDirection:"column"}}>
          <label htmlFor="email" style={{fontSize:20,marginRight:10, alignContent:"flex-start"}}>Email</label>
          <input type="email" id="email" style={{marginBottom: '10px'}} />
          </div>
          <div style={{display:'flex', flexDirection:"column"}}>
          <label htmlFor="password"style={{marginRight:10,fontSize:20}}>Password</label>
          <input type="password" id="password" style={{marginBottom: '10px'}} />
          </div>
          <div>
          <button type="submit" style={{backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer'}}>Login</button>
          </div>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;
