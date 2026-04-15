import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const idValid = form.id.trim().length >= 3;
  const passwordValid = form.password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idValid || !passwordValid) {
      return;
    }

    console.log('로그인 정보:', form);
    navigate('/');
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
            <input
              id="loginId"
              name="id"
              type="text"
              placeholder="아이디"
              value={form.id}
              onChange={handleChange}
            />
            {!idValid && form.id.length > 0 && (
              <p className={styles.error}>아이디는 3자 이상 입력해 주세요.</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="loginPw">비밀번호</label>
            <input
              id="loginPw"
              name="password"
              type="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleChange}
            />
            {!passwordValid && form.password.length > 0 && (
              <p className={styles.error}>비밀번호는 6자 이상 입력해 주세요.</p>
            )}
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