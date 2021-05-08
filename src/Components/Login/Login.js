import React from "react";
import loginrca from "./img/imagem.jpg";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.loginpage}>
        <div className={styles.imagem}>
          <img src={loginrca} alt="" />
          <p className={styles.nome}>RCA</p>
        </div>
      </div>
      <div className={styles.form}>
        <p className={styles.titulo}>Acesso ao chatbot</p>
        <form action="" className={styles.loginform}>
          <input type="text" placeholder="Número de identificação" />
          <input type="password" placeholder="Senha" />
          <button value="Submit">Entrar</button>
          <p className={styles.message}>
            <p>Esqueceu a senha</p>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
