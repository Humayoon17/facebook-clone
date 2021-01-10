import React from 'react';
import Logo from '../assets/images/facebook.svg';
import Programming from '../assets/images/programming.png';
import CreateStory from './CreateStory';
import Story from './Story';

export default function StoryReel() {
  return (
    <div className='story-reel'>
      <CreateStory userProfileSrc='https://scontent.fkbl10-1.fna.fbcdn.net/v/t1.0-9/118774101_2787714794883936_3227725703656835059_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=H8evbMnE9A8AX_LTctj&_nc_ht=scontent.fkbl10-1.fna&oh=1fec3470b40568067f65659aa4b74b62&oe=60184A4A' />
      <Story
        profileSrc='https://scontent.fkbl10-1.fna.fbcdn.net/v/t1.0-9/116706254_2752157881721942_466223013606601417_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=Uk8mnkMKGwQAX-2wCKx&_nc_ht=scontent.fkbl10-1.fna&oh=bb1ee9396419eb007c22f8a7be00c13e&oe=601B7B55'
        image='https://scontent.fkbl10-1.fna.fbcdn.net/v/t1.0-9/135783087_2887568304847565_6323944374151861027_n.jpg?_nc_cat=104&ccb=2&_nc_sid=5b7eaf&_nc_ohc=dy-Au_Ow4KoAX903O8e&_nc_ht=scontent.fkbl10-1.fna&oh=be83c3b9eaa8021c33bc6d274f16ef48&oe=6019CC24'
        title='Danish Shahr Yaar'
      />
      <Story profileSrc={Logo} image={Programming} title='Jalil Ahmadi' />
      <Story profileSrc={Logo} image={Programming} title='Mujad Ashoori' />
      <Story
        profileSrc={Logo}
        image={Programming}
        title='Arsalan Hashimi'
        showMoreBtn={true}
      />
    </div>
  );
}
