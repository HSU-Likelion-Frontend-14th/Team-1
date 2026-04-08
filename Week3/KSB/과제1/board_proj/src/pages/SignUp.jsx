import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  // 폼 제출 이벤트 핸들러
  const handleSignUp = (e) => {
    e.preventDefault();
    alert('가입이 완료되었습니다!');

    // 가입 후 홈으로 이동
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>👤 회원가입</h2>
      <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
        {/* required 속성은 입력 필드가 비어 있을 때 폼 제출을 막음 */}
        <input type="text" placeholder="아이디" required />
        <input type="password" placeholder="비밀번호" required />

        {/* type="submit" 버튼 클릭 시 폼 제출 */}
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default SignUp;