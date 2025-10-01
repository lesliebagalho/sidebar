import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles.login}>
            <h1>Cadastrar</h1>

            <hr />

            <div className={styles.input}>
                <label>Seu nome</label>
                <input type="text" name="nome" id="nome" placeholder='nome' />
            </div>
            
            <div className={styles.input}>
                <label>Seu e-mail</label>
                <input type="email" name="email" id="email" placeholder='contato@gmail.com' />
            </div>

            <div className={styles.input}>
                <label htmlFor="">Sua senha</label>
                <input type="password" name="senha" id="senha" placeholder='1234' />
            </div>
            
            <div className={styles.input}>
                <label htmlFor="">Repita Sua senha</label>
                <input type="password" name="senha" id="senha" placeholder='1234' />
            </div>

            <a href="" className={styles.btn_logar}>Cadastrar</a>

            <p>
                Ao clicar em Cadastrar, você concorda com nossos Termos, Política de Privacidade e Política de Cookies. Você poderá receber notificações por SMS e cancelar isso quando quiser.
            </p>

        </div>
    )
}