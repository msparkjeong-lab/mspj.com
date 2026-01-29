
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteData } from '../App';
import { 
  ArrowRight, CheckCircle2, Users, GraduationCap, 
  ChevronRight, ChevronLeft, Phone, Award, Play, Pause 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { data } = useSiteData();
  const { settings, courses, teachers } = data;

  // 슬라이더 상태 관리
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { 
      url: "https://lh3.googleusercontent.com/d/1WnmXMd-k4g1bUtWYZW0v3vb5Nd8XcOPP", 
      title: "박정어학원 명예의 전당 (마산, 창원 83명 합격)",
      year: "HALL OF FAME"
    },
    { 
      url: "https://lh3.googleusercontent.com/d/1NN3q53xiYOih15nZpIHLB1niZhUHndlx", 
      title: "2024년 대학 합격자 명단",
      year: "2024"
    },
    { 
      url: "https://lh3.googleusercontent.com/d/1lHaqXa_CveAJqZEpErrvwt6GlKLhvHCP", 
      title: "2023년 대학 합격자 명단",
      year: "2023"
    },
    { 
      url: "https://lh3.googleusercontent.com/d/1PfKfoJ_EIwLrjunrwx2lgjhFjrWC3Kv9", 
      title: "2022년 대학 합격자 명단",
      year: "2022"
    },
    { 
      url: "https://lh3.googleusercontent.com/d/1J92doaw-KMihRSvam5bK6pG_6P2bID2R", 
      title: "2021년 대학 합격자 명단",
      year: "2021"
    },
    { 
      url: "https://lh3.googleusercontent.com/d/1Y4r4vCe-JpwkI-rXu0wj0eWEwjoVcfSw", 
      title: "2020년 대학 합격자 명단",
      year: "2020"
    },
    { 
      url: "https://lh3.googleusercontent.com/d/1Ox7sTrSb-CZZV2CUy71h1EMMQKBqUMDo", 
      title: "2019년 대학 합격자 명단",
      year: "2019"
    },
    { 
      url: "https://lh3.googleusercontent.com/d/1jLoFMFqk_3BcKE9bqgwcXns0Zb68UuS9", 
      title: "2018년 대학 합격자 명단",
      year: "2018"
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 6초 자동 재생 타이머 (사용자 요청 반영)
  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={settings.heroImage} 
            alt="Academy Hero" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest bg-mspjBlue rounded-full">
              Leading the Global Future
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              {settings.slogan}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed">
              {settings.subSlogan}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-mspjBlue hover:bg-blue-600 text-white font-bold rounded-full transition-all flex items-center justify-center group"
              >
                무료 상담 예약하기
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/curriculum" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-all text-center border border-white/30"
              >
                커리큘럼 살펴보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-mspjGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <Users className="mx-auto mb-4 text-mspjBlue" size={40} />
              <div className="text-sm text-gray-400 font-bold mb-2">2006년 ~ 2025년 실적</div>
              <div className="text-3xl md:text-4xl font-black text-mspjDark mb-1">특목고 누적 1,590명</div>
              <div className="text-mspjBlue font-bold">압도적인 합격 결과</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <GraduationCap className="mx-auto mb-4 text-mspjBlue" size={40} />
              <div className="text-sm text-gray-400 font-bold mb-2">Since 2006</div>
              <div className="text-3xl md:text-4xl font-black text-mspjDark mb-1">최고의 전문성</div>
              <div className="text-mspjBlue font-bold">입시 컨설턴트 원장 직강</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section with 6s Auto Slider */}
      <section className="py-24 bg-mspjDark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-mspjBlue rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-mspjBlue font-bold tracking-widest uppercase mb-4 block">Education Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
                단순한 영어 학습을 넘어,<br />세상을 보는 눈을 키웁니다.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle2 className="text-mspjBlue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Authentic Communication</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">현지에서도 통하는 실전 영어를 배웁니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle2 className="text-mspjBlue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Critical Thinking</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">논리적인 사고를 바탕으로 자신의 의견을 정립합니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle2 className="text-mspjBlue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Self-Directed Learning</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">스스로 학습하고 성장하는 법을 가르칩니다.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="mt-12 inline-block px-10 py-4 bg-white text-mspjDark font-bold rounded-full hover:bg-mspjBlue hover:text-white transition-all">
                명예의 전당 상세보기 (갤러리)
              </Link>
            </motion.div>

            {/* Photo Slider Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white/5 p-2 aspect-[3/4] md:aspect-auto md:h-[700px] flex flex-col"
            >
              <div className="relative w-full flex-grow rounded-[2.5rem] overflow-hidden bg-black flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].url}
                    alt={slides[currentSlide].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>
                
                {/* Year Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-mspjBlue px-5 py-2 rounded-2xl shadow-xl">
                    <span className="text-white font-black text-sm tracking-tighter italic">
                      {slides[currentSlide].year} 명단
                    </span>
                  </div>
                </div>

                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-mspjBlue backdrop-blur-md rounded-full text-white flex items-center justify-center transition-all z-30"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-mspjBlue backdrop-blur-md rounded-full text-white flex items-center justify-center transition-all z-30"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Slider Bottom Player Controls */}
              <div className="py-6 px-10 flex justify-between items-center bg-black/20 backdrop-blur-lg">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                  >
                    {isAutoPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} className="ml-0.5" fill="currentColor" />}
                  </button>
                  <div className="text-xs font-bold text-gray-300 tracking-widest">
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>
                
                <div className="hidden md:block text-right">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1 text-left">Now Showing</p>
                  <p className="text-sm font-bold text-white truncate max-w-[200px]">{slides[currentSlide].title}</p>
                </div>

                <div className="flex space-x-1">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        currentSlide === idx ? 'w-6 bg-mspjBlue' : 'w-1.5 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-24 bg-mspjGray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-16 tracking-tight">Professional Expertise</h2>
          <div className="max-w-4xl mx-auto">
            {teachers.map((teacher, idx) => (
              <motion.div 
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-mspjBlue rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
                  <Award size={40} />
                </div>
                <h4 className="text-3xl font-black text-mspjDark mb-1">{teacher.name}</h4>
                <p className="text-mspjBlue font-bold text-sm mb-8 uppercase tracking-widest">{teacher.subject}</p>
                <div className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line max-w-3xl bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-left">
                  {teacher.bio.split('\n\n')[0]}...
                </div>
                <Link to="/about" className="mt-8 px-8 py-3 bg-mspjDark text-white rounded-full font-bold hover:bg-mspjBlue transition-all flex items-center shadow-lg">
                  전체 약력 및 저서 보기 <ChevronRight size={18} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-mspjBlue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">당신의 영어 인생을 바꿀 준비가 되셨나요?</h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            지금 바로 상담을 예약하고 박정어학원만의 레벨 테스트를 경험해 보세요.<br />개인별 맞춤 로드맵을 제안해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-white text-mspjBlue px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center">
              온라인 상담 예약
              <ChevronRight size={20} className="ml-1" />
            </Link>
            <a href={`tel:${settings.contactPhone}`} className="bg-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-900 transition-all flex items-center justify-center border border-white/20">
              <Phone size={20} className="mr-2" />
              전화 연결하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
