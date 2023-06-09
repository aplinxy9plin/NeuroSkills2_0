import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CoursePage } from '@/pages/Course';
import { LandingPage } from '@/pages/Landing';
import { MindMap } from '@/pages/MindMap';
import { NotFound } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/Profile';
import { TopicPage } from '@/pages/Topic';
import { VideoPage } from '@/pages/Video';

const AppRouter = () => {
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
};

export default AppRouter;
