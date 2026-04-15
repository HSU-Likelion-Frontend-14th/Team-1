import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from "../styles/SignUp.module.scss";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isUsernameValid = /^[a-zA-Z0-9]{4,20}$/.test(username);
  const isEmailValid = email.includes('@');
  const isPasswordValid = 
    password.length >= 8 &&
    /[a-zA-Z]/.test(password) &&
    /[0-9]/.test(password);
  const isConfirmPasswordValid = password === confirmPassword;
  
  const isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

  const handleSignup = (e) => {
    e.preventDefault();

    if(!isFormValid){
      return
    }
    
    console.log({
      username,
      password,
      email,
      confirmPassword
    });

    navigate('/login');
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <h2 className={styles.signupTitle}>회원가입</h2>
        <p className={styles.signupDescription} />
        
        <form className={styles.signupForm} onSubmit={handleSignup}>
          <label className={styles.signupLabel}>아이디</label>
          <input
            className={styles.signupInput}
            type="text"
            placeholder="영문+숫자 4~20자"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {username && !isUsernameValid &&(
            <p className={styles.signupError}>
              아이디는 영문+숫자 4~20자로 입력해주세요.
            </p>
          )}

          <label className={styles.signupLabel}>이메일</label>
          <input
            className={styles.signupInput}
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email && !isEmailValid && (
            <p className={styles.signupError}>
              이메일 형식이 올바르지 않습니다.
            </p>
          )}

          <label className={styles.signupLabel}>비밀번호</label>
          <div className={styles.passwordField}>
            <input
              className={styles.signupInput}
              type={showPassword ? "text" : "password"}
              placeholder="8자 이상, 영문+숫자"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            >
              👁
            </button>
          </div>
          {password && !isPasswordValid && (
            <p className={styles.signupError}>
              비밀번호는 8자 이상, 영문+숫자로 입력해주세요.
            </p>
          )}
          
          <label className={styles.signupLabel}>비밀번호 확인</label>
          <div className={styles.passwordField}>
            <input
              className={styles.signupInput}
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호 다시 입력"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            >
              👁
            </button>
          </div>
          {confirmPassword && !isConfirmPasswordValid && (
            <p className={styles.signupError}>
              비밀번호가 일치하지 않습니다.
            </p>
          )}
          <button className={styles.signupSubmit} type="submit" disabled={!isFormValid}>
            가입하기
          </button>
        </form>
        <p className={styles.signupFooter}>
          이미 계정이 있나요? <Link className={styles.footerLink} to="/login">로그인</Link>
        </p>
      </div>
    </div>
  );
  
}

export default SignUp;
