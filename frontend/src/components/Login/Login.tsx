"use client";

import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles.login}>
            <h1>Login</h1>

            <hr />

            <div className={styles.input}>
                <label>Seu e-mail</label>
                <input type="email" name="email" id="email" placeholder='contato@gmail.com' />
            </div>

            <div className={styles.input}>
                <label htmlFor="">Sua senha</label>
                <input type="password" name="senha" id="senha" placeholder='1234' />
            </div>

            <a href="" className={styles.btn_logar}>Logar</a>

            <p>Ainda não tem conta?
                <a href="" className={styles.btn_cadastrar}> Cadastre-se</a>
            </p>

        </div>
    )
}