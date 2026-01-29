
import React from 'react';
import { motion } from 'framer-motion';
import { useSiteData } from '../App';
import { Headphones, Mic2, PenTool, Check, Clock, CreditCard, Info } from 'lucide-react';

const Curriculum: React.FC = () => {
  const { data } = useSiteData();
  const { courses } = data;

  const curriculumDetails = [
    {
      id: "c1",
      icon: <Headphones className="text-mspjBlue" size={32} />,
      points: [
        "단계별 리스닝 전략 습득 (Main Idea, Inference, Detail)",
        "다양한 발음 및 억양(영국, 호주, 미국 등) 적응 훈련",
        "학술적 배경지식 확장을 위한 주제별 청취 학습",
        "쉐도잉 및 딕테이션을 통한 청취 정교화"
      ]
    },
    {
      id: "c2",
      icon: <Mic2 className="text-mspjBlue" size={32} />,
      points: [
        "논리적 스피킹 구조화 (Introduction, Body, Conclusion)",
        "표현의 다양성 확보를 위한 고급 관용구 및 어휘 학습",
        "일대일 발음 및 억양 피드백 세션",
        "실전과 유사한 압박 면접 및 토론 시뮬레이션"
      ]
    },
    {
      id: "c3",
      icon: <PenTool className="text-mspjBlue" size={32} />,
      points: [
        "아카데믹 에세이 작성의 기본 및 심화 원리",
        "문법적 오류 제거 및 문장 구조의 다양화",
        "논리적 비약 방지를 위한 사고의 흐름 교정",
        "정기적인 원어민 첨삭 및 리라이팅(Rewriting) 시스템"
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-mspjDark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Expert Curriculum</h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            학생의 레벨과 목표에 최적화된 학습 로드맵을 제공합니다.<br />PJ 박정어학원만의 노하우가 집약된 커리큘럼을 경험해 보세요.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {courses.map((course, idx) => {
            const details = curriculumDetails.find(d => d.id === course.id);
            return (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-2xl">
                      {details?.icon}
                    </div>
                    <span className="text-mspjBlue font-bold tracking-widest uppercase">Course 0{idx + 1}</span>
                  </div>
                  <h2 className="text-4xl font-black text-mspjDark mb-6">{course.title}</h2>
                  <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="space-y-4">
                    {details?.points.map((point, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="mt-1 w-5 h-5 bg-mspjBlue/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-mspjBlue" />
                        </div>
                        <span className="text-gray-600 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 p-4 border-l-4 border-mspjBlue bg-gray-50 rounded-r-xl">
                    <span className="text-sm font-bold text-gray-400 block mb-1">Target Audience</span>
                    <span className="text-mspjDark font-bold">{course.target}</span>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-mspjGray rounded-[2.5rem] overflow-hidden relative shadow-xl">
                    <img 
                      src={`https://images.unsplash.com/${idx === 0 ? 'photo-1516321497487-e288fb19713f' : idx === 1 ? 'photo-1475721027785-f74eccf877e2' : 'photo-1455390582262-044cdead277a'}?q=80&w=2070`} 
                      className="w-full h-full object-cover" 
                      alt={course.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Level System Table Section */}
      <section className="py-24 bg-mspjGray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 tracking-tight">LEVEL 기준표</h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-500 mb-8">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock size={16} className="text-mspjBlue" />
                <span>시험 시간 : 90분 실시</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CreditCard size={16} className="text-mspjBlue" />
                <span>테스트 비용 : 1만원</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-mspjDark text-white">
                    <th className="px-6 py-5 font-bold tracking-wider border-r border-gray-700">레벨명</th>
                    <th className="px-6 py-5 font-bold tracking-wider border-r border-gray-700">시험 종류</th>
                    <th className="px-6 py-5 font-bold tracking-wider">레벨 점수</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  {/* Group 1: TEST 1 */}
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">SMART 1 (S1)</td>
                    <td rowSpan={4} className="px-6 py-10 border-r border-b border-gray-100 bg-gray-50/50">
                      <div className="font-bold text-mspjBlue mb-2">TEST 1</div>
                      <div className="text-xs font-bold text-gray-500 mb-2">[객관식 80문제] + 글쓰기</div>
                      <div className="text-xs text-gray-400">- 듣기, 문법, 읽기, 어휘 -</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">41-50점</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">SMART 2 (S2)</td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">51-60점</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">SMART 3 (S3)</td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">61-65점</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">ELITE (EL)</td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">66-70점</td>
                  </tr>

                  {/* Group 2: HI-ELTE - italic removed from score cell */}
                  <tr>
                    <td className="px-6 py-6 font-bold text-mspjDark border-r border-b border-gray-100">HI-ELTE (HEL)</td>
                    <td className="px-6 py-6 border-r border-b border-gray-100 bg-gray-50/50">
                      <div className="font-bold text-mspjBlue">TEST 1 / TEST 2</div>
                    </td>
                    <td className="px-6 py-6 font-bold text-gray-600 border-b border-gray-100">71점 이상 / 65-70점</td>
                  </tr>

                  {/* Group 3: TEST 2 */}
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">YOUNGJAE (YJ)</td>
                    <td rowSpan={2} className="px-6 py-10 border-r border-b border-gray-100 bg-gray-50/50">
                      <div className="font-bold text-mspjBlue mb-2">TEST 2</div>
                      <div className="text-xs font-bold text-gray-500 mb-2">[객관식 95개] + 글쓰기</div>
                      <div className="text-xs text-gray-400">- 듣기, 문법, 읽기, 어휘 -</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">61-80점</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">SUWOL (SW)</td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">81점 이상</td>
                  </tr>

                  {/* Group 4: High School Completion */}
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">고등영어완성 A</td>
                    <td rowSpan={4} className="px-6 py-10 border-r border-gray-100 bg-mspjBlue/5">
                      <div className="font-bold text-mspjBlue mb-3">고등·수능 모의고사 실시</div>
                      <div className="text-[10px] text-left text-gray-500 leading-relaxed space-y-1">
                        <p>1) 성적을 근거로 판단</p>
                        <p>2) 단, 재원인 경우는 학생의 그동안의 성적도 함께 평가</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">A반 고3 모의 70후반</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">고등영어완성 B</td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">B반 고2 모의 중반</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-b border-gray-100">고등영어완성 C</td>
                    <td className="px-6 py-4 font-bold text-gray-600 border-b border-gray-100">C반 고1 모의 중반</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-mspjDark border-r border-gray-100">고등영어완성 D</td>
                    <td className="px-6 py-4 font-bold text-gray-600">D반 고1 모의 중반 이하</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200 flex items-start space-x-4">
            <div className="mt-1 flex-shrink-0">
              <Info className="text-mspjBlue" size={20} />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              <span className="font-black text-mspjDark block mb-1">※ 글쓰기 평가 안내</span>
              글쓰기 평가는 원장이 직접 평가하며, 이를 토대로 레벨 결정에 보조 역할로 활용합니다. 최종 레벨은 객관식 평가 결과와 합산하여 최종 채점 및 배정됩니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
