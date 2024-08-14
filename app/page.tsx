'use client';
import Header from '@/components/shared/Header';
import React from 'react';
import MainContent from '@/components/shared/MainContent';

export default function Home() {
  return (
    <main>
      <Header></Header>
      <div>
        <MainContent />
      </div>
    </main>
  );
}
