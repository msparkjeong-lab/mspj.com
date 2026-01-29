
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteData } from '../App';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Contact: React.FC = () => {
  const { data } = useSiteData();
  const { settings } = data;
  const mapContainer = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (mapContainer.current && window.kakao && window.kakao.maps) {
      const position = new window.kakao.maps.LatLng(35.1788734, 128.5623866);
      
      const options = {
        center: position,
        level: 3
      };

      const map = new window.kakao.maps.Map(mapContainer.current, options);

      // 마커 생성
      const marker = new window.kakao.maps.Marker({
        position: position
      });
      marker.setMap(map);

      // 커스텀 오버레이 (라벨) 생성 - '박정어학원'으로 수정
      const content = `
        <div class="kakao-label" style="position: relative; bottom: 50px;">
          박정어학원
        </div>
      `;

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: position,
        content: content,
        yAnchor: 1
      });

      customOverlay.setMap(map);
      setIsMapLoaded(true);

      // 컨트롤 추가
      const mapTypeControl = new window.kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xqeqrryv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || '제출 중 오류가 발생했습니다.');
      }
    } catch (err: any) {
      setStatus('ERROR');
      setErrorMessage(err.message || '네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <div className="bg-white">
      <section className="bg-mspjGray py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">상담 및 오시는 길</h1>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                PJ 박정어학원은 언제나 여러분의 목소리에 귀를 기울입니다.<br />성장을 향한 첫 걸음을 저희와 함께 시작하세요.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-mspjBlue flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-xl font-bold text-mspjDark">{settings.contactPhone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-mspjBlue flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Address</h4>
                    <p className="text-xl font-bold text-mspjDark leading-tight">{settings.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-mspjBlue flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Business Hours</h4>
                    <p className="text-xl font-bold text-mspjDark">평일 13:30 - 23:00 | 주말 및 공휴일 휴무</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50 relative"
            >
              <h3 className="text-2xl font-black mb-8">상담 신청</h3>
              
              <AnimatePresence mode="wait">
                {status === 'SUCCESS' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">신청이 완료되었습니다!</h4>
                    <p className="text-gray-500 mb-8">확인 후 담당자가 곧 연락드리겠습니다.</p>
                    <button 
                      onClick={() => setStatus('IDLE')}
                      className="px-8 py-3 bg-mspjBlue text-white font-bold rounded-xl"
                    >
                      새로 작성하기
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">이름</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          className="w-full bg-mspjGray border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-mspjBlue/20 outline-none" 
                          placeholder="홍길동" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">연락처</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          className="w-full bg-mspjGray border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-mspjBlue/20 outline-none" 
                          placeholder="010-0000-0000" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2">관심 프로그램</label>
                      <select 
                        name="program"
                        className="w-full bg-mspjGray border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-mspjBlue/20 outline-none appearance-none"
                      >
                        <option value="AI_Session">AI로 세특쓰기 설명회</option>
                        <option value="Listening">Listening</option>
                        <option value="Speaking">Speaking</option>
                        <option value="Writing">Writing</option>
                        <option value="General">전체 상담</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2">상담 내용</label>
                      <textarea 
                        name="message"
                        required
                        className="w-full bg-mspjGray border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-mspjBlue/20 outline-none h-32" 
                        placeholder="궁금하신 내용을 입력해 주세요."
                      ></textarea>
                    </div>

                    {status === 'ERROR' && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center space-x-2 text-sm">
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={status === 'SUBMITTING'}
                      className="w-full py-5 bg-mspjBlue text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'SUBMITTING' ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <>
                          <span>신청하기</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-gray-400 text-center">보내주신 정보는 상담 목적으로만 활용되며 개인정보처리방침에 따라 보호됩니다.</p>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kakao Map Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Location</h2>
            <p className="text-gray-500">경상남도 창원시 마산합포구 3.15대로 38 (박정어학원)</p>
          </div>
          
          <div className="bg-mspjGray rounded-[3.5rem] h-[600px] overflow-hidden relative shadow-2xl border-8 border-white group">
            {!isMapLoaded && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-50">
                <Loader2 size={40} className="animate-spin text-mspjBlue mb-4" />
                <p className="text-gray-400 font-bold">지도를 불러오는 중입니다...</p>
              </div>
            )}
            <div 
              ref={mapContainer} 
              className="w-full h-full z-10 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            ></div>
            
            {/* Map Info Overlay */}
            <div className="absolute bottom-10 left-10 z-20 hidden md:block">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-mspjBlue rounded-2xl flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <span className="font-black text-mspjDark">박정어학원</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  마산 해운동의 중심, 3.15대로에 위치하고 있어 접근성이 뛰어납니다.
                </p>
                <a 
                  href="https://map.kakao.com/link/to/박정어학원,35.1788734,128.5623866" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block text-center py-3 bg-mspjBlue text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition-colors"
                >
                  카카오맵으로 길찾기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
