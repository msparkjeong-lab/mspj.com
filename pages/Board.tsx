
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSiteData } from '../App';
import { Search, Bell, Lightbulb, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Link import 추가

const Board: React.FC = () => {
  const { data } = useSiteData();
  const { posts } = data;
  const [filter, setFilter] = useState<'All' | 'Announcement' | 'EnglishTips'>('All');

  const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-mspjGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-mspjDark mb-8 tracking-tight">Board & Community</h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto">
              {['All', 'Announcement', 'EnglishTips'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                    filter === cat ? 'bg-mspjBlue text-white shadow-md' : 'text-gray-500 hover:text-mspjBlue'
                  }`}
                >
                  {cat === 'All' ? '전체' : cat === 'Announcement' ? '공지사항' : '학습 팁'}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="검색어를 입력하세요..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-mspjBlue/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer"
                >
                  <Link to={`/board/${post.id}`} className="flex items-center space-x-6 w-full md:w-auto"> {/* Link로 감싸기 */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      post.category === 'Announcement' ? 'bg-orange-50 text-orange-500' : 'bg-green-50 text-green-500'
                    }`}>
                      {post.category === 'Announcement' ? <Bell size={24} /> : <Lightbulb size={24} />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          post.category === 'Announcement' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                        }`}>
                          {post.category === 'Announcement' ? 'Notice' : 'Tips'}
                        </span>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-mspjDark group-hover:text-mspjBlue transition-colors">{post.title}</h3>
                    </div>
                  </Link>
                  <Link to={`/board/${post.id}`} className="mt-4 md:mt-0 flex items-center text-gray-400 group-hover:text-mspjBlue transition-colors font-bold text-sm">
                    상세보기
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-40">
                <p className="text-gray-400 font-medium">검색 결과가 없습니다.</p>
              </div>
            )}
          </div>
          
          <div className="mt-16 flex justify-center space-x-2">
            {[1, 2, 3].map(i => (
              <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
                i === 1 ? 'bg-mspjBlue text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
              }`}>
                {i}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
