import React from 'react';
import Hero from '../Components/Hero';
import HistoryImg from '../Assets/History.jpg';
import Content from '../Components/Content';
import AlbumList from '../Components/AlbumList';

function History() {
  return (
    <>
      <Hero
          cName='hero__mid'
          heroImg= {HistoryImg} 
          alt= 'Životinjsko carstvo'
      />

      <Content 
        title='Album'
        subtitle='Životinjsko carstvo kroz povijest'
      />

      <AlbumList />
    
    </>
  )
}

export default History