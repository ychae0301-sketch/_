/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  PenTool, 
  Palette, 
  Coffee, 
  AlarmClock, 
  CheckCircle2, 
  BookOpen, 
  UserPlus, 
  Castle, 
  CloudRain, 
  Moon, 
  RotateCcw, 
  Box, 
  Heart, 
  LogOut,
  Zap,
  Star,
  Send,
  Smile,
  Image as ImageIcon,
  Type,
  Rocket,
  Gift,
  Camera
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'rika' | 'user';
  text: string;
  timestamp: Date;
}

const RIKA_CHEERS = [
  "작가짱 하이-! ✨ 오늘도 미모가 에바야, 완전 갓생 살고 있는 거 실화? 리카가 기 팍팍 넣어줄게! 🎀",
  "헐, 선 따는 거 미쳤다리! 💅 필압 조절 완전 신의 경지 아냐? 손가락에 모터 달았냐구! 🔥",
  "와... 색감 폼 미쳤다! 🌈 작가짱 눈에 필터 씌운 거 아냐? 완전 톤그로 1도 없는 천재 팔레트! ✨",
  "자기야, 뇌 정지 실화? 🛑 잠깐 스탑하고 리카랑 당 충전 가자! 작가짱은 금방 부활할 거니까! 🧸",
  "마감 5분 전?! 🚨 완전 쫄깃해! 근데 작가짱은 위기에 강한 타입이잖아, 찢어버려! 🔥",
  "꺄아아악! 마감 컷 실화냐구!! 👑 오늘 밤은 진짜 칼로리 폭탄 먹고 꿀잠 자야 해, 수고했어! 💖",
  "방금 연출 뭐야? 소름 돋아서 닭살 돋았잖아! 🐥 다음 화 궁금해서 리카 현기증 나니까 빨리 그려줘! ✨",
  "비주얼 에바야... 😍 심장 폭격당해서 리카 지금 응급실 가야 할 듯? 완전 내 스타일! 🎀",
  "배경 퀄리티 무엇? 🏰 나 여기로 이사 가고 싶어! 작가짱 손가락 혹시 건축가 아니야? 💅",
  "에바야, 그런 말 마! 😭 작가짱이 그린 선 하나에 리카는 구원받았다구! 넌 우주 최강이야! 🌈",
  "아직 안 자는 거야? 🌙 완전 열정맨! 근데 작가짱 다크서클 내려오면 리카 마음 찢어져! 🧸",
  "수정? 흥, 그 사람들은 작가짱의 예술 세계를 모르는 거야! 더 쩔게 만들어서 입 막아버리자! 🔥",
  "이 투시 뭐야? 공간 왜곡 실화냐구! 📐 작가짱 머릿속에 3D 카메라 들어있는 거 리카는 다 알아! ✨",
  "자기야, 거울 좀 봐! 이렇게 예쁜 마음으로 그리는데 안 좋을 리 없잖아! 넌 이미 갓벽해! 💖",
  "벌써 가려구? 잉... 오늘 진짜 수고했어! 내일은 오늘보다 더 대박 날 거야! 뱌뱌-! ✨",
  "러프부터 벌써 완성형 실화? ✍️ 대충 그은 선도 힙해버려! 작가짱 감각 진짜 미쳤다리! 🔥",
  "이 이펙트 뭐야? 화면 뚫고 나오는 줄! 💥 작가짱 손가락에서 마법 나가는 거 아니야? 🌈",
  "폰트 센스 에바야! 🔠 가독성 완전 쩔고 분위기랑 찰떡궁합! 작가짱은 못 하는 게 뭐야? 💅",
  "업로드 버튼 누르기 1초 전! 🚀 우주 대스타 탄생 예감! 리카가 1등으로 댓글 달러 갈게! 🎀",
  "작가짱 팬들 사랑 실화? 🎁 그만큼 작가짱이 쩔게 그린다는 증거지! 완전 사랑받는 천재! 💖"
];

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'rika', text: "작가짱 등장! ✨ 리카가 기다리고 있었다구! 오늘 마감도 찢어버릴 준비 됐어? 🎀", timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const randomCheer = RIKA_CHEERS[Math.floor(Math.random() * RIKA_CHEERS.length)];
      const rikaMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'rika',
        text: randomCheer,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, rikaMsg]);
    }, 800);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFB7CE] text-[#4B2E2E] font-sans selection:bg-[#4B2E2E] selection:text-[#FFB7CE] relative flex items-center justify-center overflow-hidden p-4">
      {/* Star Dot Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30" 
           style={{ 
             backgroundImage: `radial-gradient(#4B2E2E 2px, transparent 2px), radial-gradient(#4B2E2E 2px, transparent 2px)`,
             backgroundSize: '60px 60px',
             backgroundPosition: '0 0, 30px 30px'
           }}>
      </div>
      
      {/* Floating Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{ 
              duration: 4 + Math.random() * 3, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute text-[#4B2E2E]"
          >
            <Star size={15 + Math.random() * 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 w-full max-w-4xl h-[85vh] flex flex-col bg-[#A67B5B] rounded-xl border-[3px] border-white shadow-2xl p-2 md:p-4">
        {/* Minihompy Outer Frame */}
        <div className="flex-1 bg-[#FFF0F5] rounded-lg border-2 border-white p-4 flex gap-4 relative overflow-hidden">
          
          {/* Sidebar */}
          <aside className="w-48 flex flex-col gap-4 hidden md:flex">
            {/* Visitor Count */}
            <div className="text-[10px] font-bold text-center bg-white border border-pink-200 py-1 rounded text-[#A67B5B]">
              <span className="text-red-500">TODAY</span> 486 | <span className="text-[#A67B5B]">TOTAL</span> 1204
            </div>

            {/* Profile Section */}
            <div className="bg-white border border-pink-200 p-2 flex flex-col gap-2 rounded-sm">
              <div 
                className="aspect-square border border-pink-100 overflow-hidden cursor-pointer group relative bg-[#FDF5E6] flex items-center justify-center"
                onClick={() => fileInputRef.current?.click()}
              >
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Rika" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Star size={48} fill="#FFB7CE" className="text-[#FFB7CE]" />
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Camera size={20} className="text-white" />
                </div>
              </div>
              <div className="text-[11px] text-[#8B6B4F] leading-tight border-t border-dotted border-pink-200 pt-2 h-20 overflow-y-auto scrollbar-hide">
                "작가짱의 마감을 응원하는 리카의 미니홈피에 오신 걸 환영해요! ✨ 오늘도 텐션업!"
              </div>
              <div className="text-[11px] font-bold text-[#A67B5B] flex items-center gap-1">
                <Heart size={10} fill="#A67B5B" /> 리카 (RIKA)
              </div>
            </div>

            {/* Friends Dropdown (Decorative) */}
            <div className="mt-auto">
              <select className="w-full text-[10px] p-1 border border-pink-200 rounded bg-white outline-none text-[#A67B5B] font-bold">
                <option>일촌 목록</option>
                <option>작가짱 (Bestie)</option>
                <option>마감요정</option>
              </select>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="flex-1 flex flex-col gap-2">
            {/* Top Bar / BGM */}
            <div className="flex items-center justify-between border-b-2 border-[#A67B5B] pb-1">
              <h2 className="text-[#A67B5B] font-black text-lg italic">리카의 텐션업! 💖</h2>
              <div className="flex items-center gap-2 bg-white border border-pink-200 px-2 py-1 rounded text-[10px]">
                <span className="text-red-500 font-bold">BGM</span>
                <span className="text-[#A67B5B] font-bold truncate max-w-[100px]">MISS YOU</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#FFB7CE] rounded-full" />
                  <div className="w-2 h-2 bg-[#FFB7CE] rounded-full" />
                </div>
              </div>
            </div>

            {/* Chat/Guestbook Content */}
            <div className="flex-1 bg-white border border-pink-200 rounded p-4 flex flex-col relative overflow-hidden">
              {/* Dotted Inner Border */}
              <div className="absolute inset-2 border border-dotted border-pink-100 pointer-events-none rounded" />
              
              <div className="flex-1 overflow-y-auto space-y-6 relative z-10 scrollbar-hide p-2">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${msg.sender === 'rika' ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      {msg.sender === 'rika' && (
                        <div className="w-10 h-10 rounded border border-pink-200 overflow-hidden flex-shrink-0 bg-[#FDF5E6] flex items-center justify-center">
                          {profileImage ? (
                            <img src={profileImage} alt="Rika" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          ) : (
                            <Star size={20} fill="#FFB7CE" className="text-[#FFB7CE]" />
                          )}
                        </div>
                      )}
                      <div className={`flex flex-col ${msg.sender === 'rika' ? 'items-start' : 'items-end'} flex-1`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold ${msg.sender === 'rika' ? 'text-[#A67B5B]' : 'text-orange-500'}`}>
                            {msg.sender === 'rika' ? '리카 (RIKA)' : '작가짱'}
                          </span>
                          <span className="text-[9px] text-pink-300">
                            ({msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})
                          </span>
                        </div>
                        <div className={`
                          max-w-[90%] p-3 rounded-lg border border-pink-100 text-sm leading-relaxed font-bold
                          ${msg.sender === 'rika' 
                            ? 'bg-[#FFF0F5] text-[#A67B5B]' 
                            : 'bg-[#FDF5E6] text-[#8B6B4F]'}
                        `}>
                          {msg.text}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <form 
                onSubmit={handleSendMessage}
                className="mt-4 pt-4 border-t border-dotted border-pink-200 flex gap-2 relative z-10"
              >
                <input 
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="방명록을 남겨주세요... ✨"
                  className="flex-1 bg-[#FFF9FB] border border-pink-200 px-3 py-2 text-xs font-bold focus:outline-none focus:bg-white transition-colors text-[#A67B5B]"
                />
                <button 
                  type="submit"
                  disabled={!inputText.trim()}
                  className={`px-4 py-2 text-[11px] font-bold border border-pink-300 transition-all ${inputText.trim() ? 'bg-[#FFB7CE] text-white border-[#FFB7CE]' : 'bg-pink-50 text-pink-200'}`}
                >
                  확인
                </button>
              </form>
            </div>
          </section>

          {/* Vertical Tabs (Right Side) */}
          <nav className="absolute -right-10 top-10 flex flex-col gap-1 hidden md:flex">
            {['홈', '프로필', '다이어리', '사진첩', '방명록'].map((tab, idx) => (
              <div 
                key={tab}
                className={`
                  w-10 py-3 text-[11px] font-bold text-center border border-l-0 border-gray-300 rounded-r-lg cursor-pointer transition-colors
                  ${idx === 4 ? 'bg-white text-black' : 'bg-[#A67B5B] text-white hover:bg-[#8B6B4F]'}
                `}
                style={{ writingMode: 'vertical-rl' }}
              >
                {tab}
              </div>
            ))}
          </nav>
        </div>

        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleImageChange}
        />
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Inter:wght@900&display=swap');
        
        body {
          font-family: 'Inter', 'Black Han Sans', sans-serif;
          background-color: #FFB7CE;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
