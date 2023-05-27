import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CoursePage } from '@/pages/Course';
import { LandingPage } from '@/pages/Landing';
import { MindMap } from '@/pages/MindMap';
import { NotFound } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/Profile';
import { TopicPage } from '@/pages/Topic';
import { VideoPage } from '@/pages/Video';

const AppRouter = () => {
  const [openAi, setOpenAi] = useState(false);
  const checkString = (inputString: string) => {
    const regex = /^sk-[a-zA-Z0-9]{32,}$/;
    return regex.test(inputString);
  };

  useEffect(() => {
    if (!checkString(localStorage.getItem('openai-key') || '')) {
      const data = prompt('Введите open-ai api-key');
      if (!data || !checkString(data)) {
        window.location.href = 'https://google.com';
        return;
      }
      localStorage.setItem('openai-key', data);
    }
    setOpenAi(true);
  }, []);

  if (openAi) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/course/:courseId/mindmap" element={<MindMap />} />
        <Route path="/course/:courseId/topic/:topicId" element={<TopicPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  return <div />;
};

export default AppRouter;
