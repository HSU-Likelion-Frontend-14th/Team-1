import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from "../styles/Login.module.scss";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isUsernameValid = /^[a-zA-Z0-9]{4,20}$/.test(username);
  const isPasswordValid =
    password.length >= 8 &&
    /[a-zA-Z]/.test(password) &&
    /[0-9]/.test(password);

  const isFormValid = isUsernameValid && isPasswordValid;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    console.log({
      username,
      password,
    });
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginTitle}>로그인</h2>

        <form className={styles.loginForm} onSubmit={handleLogin}>
          <label className={styles.loginLabel}>아이디</label>
          <input
            className={styles.loginInput}
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {username && !isUsernameValid && (
            <p className={styles.loginError}>
              아이디는 3자 이상 입력해주세요.
            </p>
          )}

          <label className={styles.loginLabel}>비밀번호</label>
          <div className={styles.passwordField}>
            <input
              className={styles.loginInput}
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            >
              👀
            </button>
          </div>

          {password && !isPasswordValid && (
            <p className={styles.loginError}>
              비밀번호는 8자 이상, 영문+숫자로 입력해주세요.
            </p>
          )}

          <button
            className={styles.loginSubmit}
            type="submit"
            disabled={!isFormValid}
          >
            로그인
          </button>
        </form>

        <p className={styles.loginFooter}>
          계정이 없나요? <Link className={styles.footerLink} to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
