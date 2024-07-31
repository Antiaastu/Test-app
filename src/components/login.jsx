import './Login.css';
const Login = () => {
     return (
        <div className="container">
            <div className="logo-section">
               <img src="/softnet.jpg" alt="Softnet Logo" className="logo" />
            </div>
            <div className="login-section">
                <h2>Welcome To Admin Portal</h2>
                <p>Login your account</p>
                <form>
                    <label>Email</label>
                    <input type="email"  required />
                    <label>Password</label>
                    <input type="password" required />
                    <div className="forgot-password">
                    <a href="#"><u>Forget password ?</u></a>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="sign-up">
                    
                    <div className="social-buttons">
                        <p>Sign in with</p>
                        <a href="https://www.google.com"><img src="/download.png" alt="Google Logo" className="google" /></a>
                        <a href="https://www.facebook.com"><img src="/facebook.png" alt="Facebook Logo" className="facebook" /></a>
                    </div>
                </div>
                <div className="footer">Copyright@softnet 2024</div>
            </div>
      </div>
     );
}
export default Login;