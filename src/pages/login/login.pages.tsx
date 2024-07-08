import React, { useState } from 'react';
import LoginController from '../../controller/controller.login.create';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function changeButton(): void {
    setIsRegister(prevState => !prevState);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isRegister) {
      register(email, password, name);
    } else {
      login(email, password);
    }
  }

  async function login(email: string, password: string) {
    console.log(email, password);
    const login = new LoginController();
    const logged = await login.loginController(email, password)
    if (logged) {
      navigate('/home');
    }else{
      alert('Não foi possível fazer login');
    }
    
  }

  async function register(email: string, password: string, name: string) {
    console.log(email, password, name);
    const register = new LoginController();
    const sucessRegister = await register.CreateController(email, password, name);    
    if (sucessRegister){
      alert("Registrado com sucesso!")
    }else {
      alert('Não foi possível registrar!');
    }
    setIsRegister(false);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: "#fff" }}>
      <div style={{ borderRadius: '8px', border: '1px solid #ccc', padding: '70px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '400px', margin: '0 auto', backgroundColor: "#4a766e", borderWidth: 2, borderColor: "#000" }}>
        <h1 style={{ textAlign: 'center' }}>{isRegister ? "Registrar" : "Login"}</h1>
        <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
          {isRegister && (
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <label htmlFor="name" style={{ fontSize: 20, marginRight: 10, alignContent: "flex-start" }}>Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: '10px' }}
              />
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <label htmlFor="email" style={{ marginRight: 10, fontSize: 20, alignContent: "flex-start" }}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <label htmlFor="password" style={{ marginRight: 10, fontSize: 20 }}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '10px' }}
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', width: "95%", borderRadius: '4px', cursor: 'pointer', marginRight: 10 }}
          >
            {isRegister ? "Registrar" : "Login"}            
          </button>
        </form>
        {!isRegister && (
          <button
            onClick={changeButton}
            style={{ marginTop: 10, backgroundColor: '#007bff', color: '#fff', border: 'none', width: "95%", borderRadius: '4px', cursor: 'pointer' }}
          >
            Cadastrar
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
