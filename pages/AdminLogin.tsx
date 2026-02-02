
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { LogIn, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../store';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // 이미 로그인되어 있으면 Admin 페이지로 리디렉션
  if (isLoggedIn) {
    navigate('/admin');
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // 실제 환경에서는 백엔드 API 호출 등을 통해 인증을 수행합니다.
    // 여기서는 간단하게 하드코딩된 값으로 대체합니다.
    try {
      const success = login(username, password);
      if (success) {
        navigate('/admin'); // 로그인 성공 시 Admin 페이지로 이동
      } else {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    } catch (err) {
      setError('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-mspjGray flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 w-full max-w-md border border-gray-100"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-mspjBlue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
            <LogIn size={32} />
          </div>
          <h1 className="text-3xl font-black text-mspjDark mb-2">관리자 로그인</h1>
          <p className="text-gray-500 text-sm">Admin Center에 접속하려면 로그인하세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-bold text-gray-400 mb-2">
              아이디
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-mspjBlue/20 outline-none font-medium"
              placeholder="관리자 아이디를 입력하세요"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-400 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-mspjBlue/20 outline-none font-medium"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center space-x-3 text-sm"
            >
              <AlertCircle size={18} />
              <span>{error}</span>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 bg-mspjBlue text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <LogIn size={18} />
                <span>로그인</span>
              </>
            )}
          </button>
          <p className="text-[10px] text-gray-400 text-center mt-6">
            이 페이지는 관리자 전용입니다. 일반 사용자는 메인 페이지를 이용해주세요.
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
