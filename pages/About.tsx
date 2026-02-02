
import React from 'react';
import { motion } from 'framer-motion';
import { useSiteData } from '../App';
import { Award, BookOpen, Target, Heart, CheckCircle2, LayoutGrid } from 'lucide-react';

const About: React.FC = () => {
  const { data } = useSiteData();
  const { teachers } = data;

  const galleryImages = [
    { id: 1, url: "https://lh3.googleusercontent.com/d/1WnmXMd-k4g1bUtWYZW0v3vb5Nd8XcOPP", title: "명예의 전당" },
    { id: 2, url: "https://lh3.googleusercontent.com/d/1NN3q53xiYOih15nZpIHLB1niZhUHndlx", title: "2024년 합격 명단" },
    { id: 3, url: "https://lh3.googleusercontent.com/d/1lHaqXa_CveAJqZEpErrvwt6GlKLhvHCP", title: "2023년 합격 명단" },
    { id: 4, url: "https://lh3.googleusercontent.com/d/1PfKfoJ_EIwLrjunrwx2lgjhFjrWC3Kv9", title: "2022년 합격 명단" },
    { id: 5, url: "https://lh3.googleusercontent.com/d/1J92doaw-KMihRSvam5bK6pG_6P2bID2R", title: "2021년 합격 명단" },
    { id: 6, url: "https://lh3.googleusercontent.com/d/1Y4r4vCe-JpwkI-rXu0wj0eWEwjoVcfSw", title: "2020년 합격 명단" },
    { id: 7, url: "https://lh3.googleusercontent.com/d/1Ox7sTrSb-CZZV2CUy71h1EMMQKBqUMDo", title: "2019년 합격 명단" },
    { id: 8, url: "https://lh3.googleusercontent.com/d/1jLoFMFqk_3BcKE9bqgwcXns0Zb68UuS9", title: "2018년 합격 명단" },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-mspjGray py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">PJ 소개</h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            박정어학원은 대한민국 영어 교육의 혁신을 선도해 왔습니다.<br />우리는 학생들의 무한한 가능성을 믿고 최고의 길을 제시합니다.
          </p>
        </div>
      </section>

      {/* History & Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 items-center"> {/* Removed lg:grid-cols-2 as there's only one column now */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-full" // Ensure it takes full width on large screens
            >
              <h2 className="text-3xl font-black mb-8 text-mspjDark">대한민국 영어의 자부심,<br />PJ 박정어학원</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  박정어학원은 단순한 언어 지식의 전달을 넘어, 학생들이 글로벌 무대에서 자신의 역량을 마음껏 펼칠 수 있는 도구로서의 영어를 교육합니다.
                </p>
                <p>
                  우리의 교수법은 'Communication-Based Learning'과 'Critical Analysis'의 결합입니다. 이를 통해 학생들은 단순히 문제를 푸는 기계를 넘어, 깊이 있는 대화를 나누고 정교한 글을 쓰는 지성인으로 성장합니다.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-8 max-w-2xl mx-auto lg:mx-0"> {/* Adjusted max-width for better centering on smaller screens */}
                  <div className="p-6 bg-blue-50 rounded-2xl">
                    <Award className="text-mspjBlue mb-3" />
                    <h4 className="font-bold text-mspjDark mb-1">최고의 전문성</h4>
                    <p className="text-xs text-gray-500">각 영역별 전문가 및 입시 컨설턴트</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl">
                    <Target className="text-mspjBlue mb-3" />
                    <h4 className="font-bold text-mspjDark mb-1">결과 중심</h4>
                    <p className="text-xs text-gray-500">학생 맞춤형 성취도 및 진로 관리</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Removed the image grid section as per user request */}
          </div>
        </div>
      </section>

      {/* Hall of Fame Gallery */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-mspjBlue/10 text-mspjBlue rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <LayoutGrid size={14} />
              <span>Hall of Fame Gallery</span>
            </div>
            <h2 className="text-4xl font-black text-mspjDark mb-4">명예의 전당 게시판</h2>
            <p className="text-gray-500">박정어학원이 일궈낸 압도적인 합격 실적을 한눈에 확인하세요.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-white border-t border-gray-50 text-center">
                  <h4 className="font-bold text-mspjDark group-hover:text-mspjBlue transition-colors">{img.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 font-medium italic">PARK JUNG SUCCESS STORY</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-24 bg-mspjGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">원장 소개</h2>
            <div className="w-16 h-1.5 bg-mspjBlue mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500">20년 이상의 교육 노하우와 압도적인 입시 실적으로 증명합니다.</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {teachers.map((teacher) => (
              <motion.div 
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-mspjBlue/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-12 text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-mspjBlue mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-4xl font-black text-mspjDark mb-2">{teacher.name}</h3>
                    <span className="text-mspjBlue font-bold tracking-widest uppercase text-sm">{teacher.subject}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h4 className="flex items-center space-x-2 text-mspjDark font-black mb-4 pb-2 border-b border-gray-100">
                          <Award size={18} className="text-mspjBlue" />
                          <span>Professional Career</span>
                        </h4>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base font-medium">
                          {teacher.bio.split('\n\n')[0]}
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center space-x-2 text-mspjDark font-black mb-4 pb-2 border-b border-gray-100">
                          <Target size={18} className="text-mspjBlue" />
                          <span>Current Positions</span>
                        </h4>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base font-medium">
                          {teacher.bio.split('\n\n')[1]}
                        </p>
                      </div>
                    </div>

                    <div className="bg-mspjGray p-8 rounded-[2.5rem] border border-gray-50">
                      <h4 className="flex items-center space-x-2 text-mspjDark font-black mb-6">
                        <BookOpen size={18} className="text-mspjBlue" />
                        <span>저서 (Books)</span>
                      </h4>
                      <div className="space-y-4">
                        {teacher.bio.includes('저서.') && (
                           <p className="text-mspjDark font-bold text-lg leading-relaxed italic">
                             {teacher.bio.split('저서.')[1].trim()}
                           </p>
                        )}
                      </div>
                      <div className="mt-12 flex space-x-3">
                         <div className="flex-1 h-1 bg-mspjBlue rounded-full"></div>
                         <div className="flex-1 h-1 bg-mspjBlue/20 rounded-full"></div>
                         <div className="flex-1 h-1 bg-mspjBlue/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
