
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteData } from '../App';
import { Save, RefreshCcw, Layout, FileText, Users, Globe, Trash2, Plus, LogOut } from 'lucide-react'; // LogOut 아이콘 import
import { useAuth } from '../store'; // useAuth 훅 import
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 import

const Admin: React.FC = () => {
  const { data, updateSettings, addPost, deletePost, resetData } = useSiteData();
  const { logout } = useAuth(); // logout 함수 가져오기
  const navigate = useNavigate(); // useNavigate 훅 사용

  const [activeTab, setActiveTab] = useState<'General' | 'Posts' | 'Teachers' | 'SEO'>('General');
  const [settingsForm, setSettingsForm] = useState(data.settings);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'Announcement' as any });

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettingsForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = () => {
    updateSettings(settingsForm);
    alert('설정이 저장되었습니다.');
  };

  const handleAddPost = () => {
    if (!newPost.title || !newPost.content) return;
    addPost({
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      date: new Date().toISOString().split('T')[0]
    });
    setNewPost({ title: '', content: '', category: 'Announcement' });
    alert('게시물이 추가되었습니다.');
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login'); // 로그아웃 후 로그인 페이지로 리디렉션
  };

  const menuItems = [
    { id: 'General', label: '기본 설정', icon: <Layout size={18} /> },
    { id: 'Posts', label: '게시물 관리', icon: <FileText size={18} /> },
    { id: 'Teachers', label: '강사진 관리', icon: <Users size={18} /> },
    { id: 'SEO', label: 'SEO & 소셜', icon: <Globe size={18} /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-mspjDark p-8 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-12">
              <div className="w-8 h-8 bg-mspjBlue rounded-lg flex items-center justify-center font-black text-xs">P</div>
              <span className="font-bold text-lg">Admin Center</span>
            </div>
            
            <nav className="space-y-2">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id ? 'bg-mspjBlue text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span className="font-bold text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-2 text-xs text-gray-400 hover:text-white transition-colors p-4 border border-gray-800 rounded-xl"
            >
              <LogOut size={14} />
              <span>로그아웃</span>
            </button>
            <button 
              onClick={resetData}
              className="w-full flex items-center space-x-2 text-xs text-gray-500 hover:text-red-400 transition-colors p-4 border border-gray-800 rounded-xl"
            >
              <RefreshCcw size={14} />
              <span>초기화 (Reset All)</span>
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8 md:p-12 overflow-y-auto">
          <header className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
            <h2 className="text-2xl font-black text-mspjDark">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h2>
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-full">System Live</span>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {activeTab === 'General' && (
              <motion.div
                key="general"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase">학원 명칭</label>
                    <input 
                      name="academyName"
                      value={settingsForm.academyName}
                      onChange={handleSettingsChange}
                      className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-mspjBlue/20 outline-none font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase">대표 연락처</label>
                    <input 
                      name="contactPhone"
                      value={settingsForm.contactPhone}
                      onChange={handleSettingsChange}
                      className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-mspjBlue/20 outline-none font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase">메인 슬로건</label>
                  <input 
                    name="slogan"
                    value={settingsForm.slogan}
                    onChange={handleSettingsChange}
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-mspjBlue/20 outline-none font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase">서브 슬로건 (설명)</label>
                  <textarea 
                    name="subSlogan"
                    value={settingsForm.subSlogan}
                    onChange={handleSettingsChange}
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-mspjBlue/20 outline-none h-24"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase">학원 주소</label>
                  <input 
                    name="address"
                    value={settingsForm.address}
                    onChange={handleSettingsChange}
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-mspjBlue/20 outline-none"
                  />
                </div>

                <div className="pt-6">
                  <button 
                    onClick={handleSaveSettings}
                    className="bg-mspjBlue text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 flex items-center space-x-2 hover:scale-105 transition-all"
                  >
                    <Save size={18} />
                    <span>설정 저장하기</span>
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'Posts' && (
              <motion.div
                key="posts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                {/* Add Post Form */}
                <div className="bg-blue-50 p-8 rounded-3xl space-y-4">
                  <h4 className="font-bold text-mspjBlue flex items-center space-x-2">
                    <Plus size={18} />
                    <span>새 게시물 작성</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      placeholder="제목을 입력하세요"
                      value={newPost.title}
                      onChange={e => setNewPost({...newPost, title: e.target.value})}
                      className="bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-mspjBlue/20 outline-none font-bold"
                    />
                    <select 
                      value={newPost.category}
                      onChange={e => setNewPost({...newPost, category: e.target.value as any})}
                      className="bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-mspjBlue/20 outline-none appearance-none font-bold"
                    >
                      <option value="Announcement">공지사항</option>
                      <option value="EnglishTips">학습 팁</option>
                    </select>
                  </div>
                  <textarea 
                    placeholder="내용을 입력하세요"
                    value={newPost.content}
                    onChange={e => setNewPost({...newPost, content: e.target.value})}
                    className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-mspjBlue/20 outline-none h-32"
                  />
                  <button 
                    onClick={handleAddPost}
                    className="w-full py-4 bg-mspjBlue text-white font-bold rounded-xl"
                  >
                    작성 완료
                  </button>
                </div>

                {/* Post List */}
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-500 px-2">게시물 목록 ({data.posts.length})</h4>
                  {data.posts.map(post => (
                    <div key={post.id} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                      <div>
                        <span className="text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full mr-3">{post.category}</span>
                        <span className="font-bold text-mspjDark">{post.title}</span>
                        <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                      </div>
                      <button 
                        onClick={() => deletePost(post.id)}
                        className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Teachers' && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <Users size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-400 font-bold">강사진 관리 모듈 준비 중...</p>
              </div>
            )}

            {activeTab === 'SEO' && (
              <motion.div
                key="seo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="bg-mspjGray p-8 rounded-3xl border border-gray-100">
                   <h4 className="font-bold mb-6 flex items-center space-x-2">
                     <Globe className="text-mspjBlue" size={18} />
                     <span>소셜 링크 설정</span>
                   </h4>
                   <div className="space-y-4">
                     {['kakaoLink', 'instaLink', 'youtubeLink'].map(key => (
                        <div key={key} className="space-y-2">
                          <label className="text-xs font-black text-gray-400 uppercase">{key}</label>
                          <input 
                            name={key}
                            value={(settingsForm as any)[key]}
                            onChange={handleSettingsChange}
                            className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-mspjBlue/20 outline-none text-sm text-blue-500 underline"
                          />
                        </div>
                     ))}
                   </div>
                </div>

                <div className="p-8 border-2 border-mspjBlue/10 rounded-3xl">
                   <h4 className="font-bold mb-6">검색 엔진 최적화 (SEO Meta)</h4>
                   <div className="space-y-4">
                     <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase">Meta Keywords</label>
                        <input className="w-full bg-gray-50 border-none p-4 rounded-xl outline-none" placeholder="어학원, 박정, 영어, 토플, 스피킹, 강남어학원" />
                     </div>
                     <p className="text-xs text-gray-400">네이버/구글 검색 결과에 반영되는 키워드를 설정할 수 있습니다.</p>
                   </div>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={handleSaveSettings}
                    className="bg-mspjBlue text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20"
                  >
                    SEO 저장하기
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Admin;
