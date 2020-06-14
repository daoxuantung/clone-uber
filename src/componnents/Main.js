import React from 'react';
import SlideSection from './SlideSection';
import PostSection from './PostSection.js';
import CardSection from './CardSection.js';
import CommitmentSection from './CommitmentSection.js';
import ContentSection from './ContentSection.js';

import { SlideProvider } from '../contexts/Slide';
import { CardProvider } from '../contexts/Card';
import { ContentProvider } from '../contexts/Content';

import '../App.css';

function Main() {
  return (
      <main className='Main'>
          <SlideProvider>
            <SlideSection />
          </SlideProvider>
          <PostSection />
          <CardProvider>
            <CardSection />
          </CardProvider>
          <CommitmentSection />
          <ContentProvider>
            <ContentSection />
          </ContentProvider>
      </main>
  );
}

export default Main;