import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const idValid = /^[A-Za-z0-9]{4,20}$/.test(form.id);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const passwordValid =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password);
  const confirmPasswordValid =
    form.confirmPassword.length > 0 && form.password === form.confirmPassword;

  const isFormValid =
    idValid && emailValid && passwordValid && confirmPasswordValid;

  const handleSignup = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    sessionStorage.setItem("credentials", JSON.stringify(form));
    console.log('회원가입 정보:', form);
    navigate('/');
  };

  return (
    <div className={styles.signupPage}>
      <h2 className={styles.title}>회원가입</h2>

      <p className={styles.desc}>
        입력할 때마다 조건을 검사하고, 문제가 있으면 아
        <br />
        래에 메시지를 표시합니다.
      </p>

      <div className={styles.box}>
        <form onSubmit={handleSignup} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="signupId">아이디</label>
            <input
              id="signupId"
              name="id"
              type="text"
              placeholder="영문+숫자 4~20자"
              value={form.id}
              onChange={handleChange}
            />
            {!idValid && form.id.length > 0 && (
              <p className={styles.error}>
                아이디는 영문+숫자 4~20자로 입력해 주세요.
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="signupEmail">이메일</label>
            <input
              id="signupEmail"
              name="email"
              type="email"
              placeholder="example@domain.com"
              value={form.email}
              onChange={handleChange}
            />
            {!emailValid && form.email.length > 0 && (
              <p className={styles.error}>올바른 이메일 형식이 아닙니다.</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="signupPw">비밀번호</label>
            <input
              id="signupPw"
              name="password"
              type="password"
              placeholder="8자 이상, 영문+숫자"
              value={form.password}
              onChange={handleChange}
            />
            {!passwordValid && form.password.length > 0 && (
              <p className={styles.error}>
                비밀번호는 8자 이상이며 영문과 숫자를 모두 포함해야 합니다.
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="signupPwCheck">비밀번호 확인</label>
            <input
              id="signupPwCheck"
              name="confirmPassword"
              type="password"
              placeholder="비밀번호 다시 입력"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {form.confirmPassword.length > 0 && !confirmPasswordValid && (
              <p className={styles.error}>비밀번호가 일치하지 않습니다.</p>
            )}
          </div>

          <button type="submit" className={styles.submitBtn}>
            가입하기
          </button>
        </form>
      </div>

      <p className={styles.bottomText}>
        이미 계정이 있나요? <Link to="/login">로그인</Link>
      </p>
    </div>
  );
}

export default Signup;