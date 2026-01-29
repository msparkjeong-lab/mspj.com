
import { SiteData } from './types';

export const INITIAL_SITE_DATA: SiteData = {
  settings: {
    academyName: "PJ박정어학원",
    slogan: "영어의 품격, 결과로 증명하는 박정",
    subSlogan: "Listening, Speaking, Writing의 완벽한 밸런스로 글로벌 리더의 꿈을 현실로 만듭니다.",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
    pointColor: "#0689db",
    contactEmail: "MSParkJeong@gmail.com",
    contactPhone: "055-222-0599",
    address: "경상남도 창원시 마산합포구 3.15대로 38",
    kakaoLink: "https://pf.kakao.com/",
    instaLink: "https://instagram.com/",
    youtubeLink: "https://youtube.com/"
  },
  courses: [
    {
      id: "c1",
      title: "Active Listening",
      description: "단순히 듣는 것을 넘어, 핵심을 파악하고 비판적으로 사고하는 전략적 청취 능력 배양.",
      target: "중/고등부 및 성인",
      icon: "👂"
    },
    {
      id: "c2",
      title: "Persuasive Speaking",
      description: "논리적인 구조를 바탕으로 자신의 의견을 당당하게 전달하는 고급 스피킹 스킬.",
      target: "유학 준비생 및 비즈니스 실무자",
      icon: "🎙️"
    },
    {
      id: "c3",
      title: "Academic Writing",
      description: "에세이 작성법부터 논문 기법까지, 문법적 정확도와 표현의 다양성을 극대화.",
      target: "토플/아이엘츠 준비생",
      icon: "✍️"
    }
  ],
  teachers: [
    {
      id: "t1",
      name: "고부성 원장",
      subject: "Head Director / Entrance Exam Consultant",
      bio: "-전. 대한민국 영어교육개혁 협회 위원\n-전. 두드림 연구소 비전 디자이너 전문가\n-전. 동아일보 “10년 후의 영어교육” 칼럼게시\n-전. 연합일보 시사뉴스터치 칼럼게시\n-전. 중앙 유웨이 & 서울교대 MOU 입시 컨설턴트\n-전. 전국 교육학회(블루타이) 회장 역임\n-전. 이투스북 검토위원(2020~2025년)\n-현. 고입. 대입 컨설턴트 전문가(자격증 13개 취득)\n-현. (사)한진연 진로진학 연구소 창원마산점 센터장\n-현. 시중교재 검수위원(기출의 바이블, 531프로젝트, 워드마스터 등)\n\n-현. T.O.P 교육 대표\n[박정어학원, 스카이에듀수학, 티오피에듀정상학원 원장]\n\n저서.\n“시사 속으로 생각 속으로”, “한 방에 끝내는 실전 공부법”",
      imageUrl: "" // 사진 제거
    }
  ],
  posts: [
    {
      id: "p1",
      title: "2024년 여름방학 집중 특강 안내",
      content: "이번 여름, 당신의 영어 실력을 한 단계 업그레이드할 수 있는 특별 과정을 모집합니다.",
      date: "2024-05-20",
      category: "Announcement"
    },
    {
      id: "p2",
      title: "스피킹 실력을 높이는 3가지 데일리 습관",
      content: "매일 10분 투자로 영어 자신감을 되찾는 노하우를 공개합니다.",
      date: "2024-05-18",
      category: "EnglishTips"
    }
  ]
};
