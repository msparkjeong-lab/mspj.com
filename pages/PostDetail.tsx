
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSiteData } from '../App';
import { Calendar, Tag, ChevronLeft, Image, Bell, Lightbulb, AlertCircle } from 'lucide-react'; // 필요한 아이콘들 import

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { data } = useSiteData();
  const navigate = useNavigate();

  const post = data.posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-[60vh] bg-mspjGray flex items-center justify-center p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle size={48} className="mx-auto text-red-400 mb-4" />
          <h1 className="text-3xl font-black text-mspjDark mb-4">게시물을 찾을 수 없습니다.</h1>
          <p className="text-gray-500 mb-8">존재하지 않거나 삭제된 게시물입니다.</p>
          <Link to="/board" className="inline-flex items-center px-8 py-3 bg-mspjBlue text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">
            <ChevronLeft size={18} className="mr-2" />
            목록으로 돌아가기
          </Link>
        </motion.div>
      </div>
    );
  }

  const categoryLabel = post.category === 'Announcement' ? '공지사항' : '학습 팁';
  const categoryIcon = post.category === 'Announcement' ? <Bell size={18} /> : <Lightbulb size={18} />;

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-mspjGray py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-mspjBlue/10 text-mspjBlue rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              {categoryIcon}
              <span>{categoryLabel}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-mspjDark mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-gray-500 text-sm font-medium">
              <span className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{post.date}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.thumbnail && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-12 rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-video bg-gray-50 flex items-center justify-center"
            >
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 leading-relaxed text-lg whitespace-pre-line" // Custom styling without prose
          >
            {post.content}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-100 flex justify-start"
          >
            <button
              onClick={() => navigate('/board')}
              className="inline-flex items-center px-8 py-3 bg-mspjDark text-white font-bold rounded-xl hover:bg-mspjBlue transition-colors shadow-md"
            >
              <ChevronLeft size={18} className="mr-2" />
              목록으로 돌아가기
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PostDetail;
