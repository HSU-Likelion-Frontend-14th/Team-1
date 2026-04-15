import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>로그인</h2>
      <p>통신 없이 클라이언트 검증만 수행합니다. 제출 시 콘솔에 값이 출력되고 홈으로 이동합니다.</p>

      <form onSubmit={handleSubmit}>

        <div>
          <label>아이디</label>
          <input type="text" placeholder="아이디" />
        </div>

        <div>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호" />
        </div>

        <button type="submit">로그인</button>

      </form>

      <p>계정이 없나요? <Link to="/signup">회원가입</Link></p>
    </div>
  );
}

export default Login;