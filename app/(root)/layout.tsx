import StreamvideoProvider from '@/providers/StreamClientProvider';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamvideoProvider>{children}</StreamvideoProvider>
    </main>
  );
};

export default RootLayout;
