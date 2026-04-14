import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import SignUpForm from '../components/SignUpForm';

function SignUp() {
  const navigate = useNavigate();
  const [isSuccessSignup, setIsSuccessSignup] = useState(false);

  // 페이지 관련 이벤트 핸들러
  const handlePage = (e) => {
    e.preventDefault();
    if (isSuccessSignup) {
    alert('가입이 완료되었습니다!');
      
      // 가입 후 로그인으로 이동
      navigate('/login');
    } else {
      alert('가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <h2>👤 회원가입</h2>
      <p>입력할 때마다 조건을 검사하고, <br /> 문제가 있으면 아래에 메세지를 표시합니다.</p>
      <br />
      <form>
        <SignUpForm 
          setIsSuccessSignup = {(boolean) => setIsSuccessSignup(boolean)}
          handlePage={(e) => handlePage(e)}
        />
      </form>
    </div>
  );
}

export default SignUp;