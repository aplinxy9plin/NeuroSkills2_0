import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CoursePage } from '@/pages/Course';
import { LandingPage } from '@/pages/Landing';
import { NotFound } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/Profile';
import { TopicPage } from '@/pages/Topic';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/NeuroSkills2_0">
        <Route index element={<LandingPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="course/:courseId" element={<CoursePage />} />
        <Route path="course/:courseId/topic/:topicId" element={<TopicPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
