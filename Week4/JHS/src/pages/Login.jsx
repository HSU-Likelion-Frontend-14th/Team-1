import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginPage}>
      <h2 className={styles.title}>로그인</h2>

      <p className={styles.desc}>
        통신 없이 클라이언트 검증만 수행합니다. 제출 시
        <br />
        콘솔에 값이 출력되고 홈으로 이동합니다.
      </p>

      <div className={styles.box}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="loginId">아이디</label>
            <input id="loginId" type="text" placeholder="아이디" />
          </div>

          <div className={styles.field}>
            <label htmlFor="loginPw">비밀번호</label>
            <input id="loginPw" type="password" placeholder="비밀번호" />
          </div>

          <button type="submit" className={styles.submitBtn}>
            로그인
          </button>
        </form>
      </div>

      <p className={styles.bottomText}>
        계정이 없나요? <Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
}

export default Login;