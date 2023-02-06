import React from 'react';
import Content from '../../Components/Content';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../../Components/Swiper.css';
import { InvertebratesGallery } from '../../Components/AnimalGallery/InvertebratesGallery';

SwiperCore.use([EffectCoverflow, Pagination]);

function Invertebrates() {
  return (
    <>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
              
            }}
            pagination={true}
            className="mySwiper"        
            >   
            
            { InvertebratesGallery.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.url} alt=''/>
                </SwiperSlide>
              );
            })}       
        </Swiper>
        <Content
        cName= 'mid_content'
        title= 'Beskralježnjaci'
        subtitle = 'Avertebrata'
        text= 'Nesistematski naziv za sve životinje koje nemaju unutarnji, osovinski skelet (hrskavičnu ili koštanu kralježnicu). Pojam beskralježnjaci opravdan je s metodičke strane i upotrebljava se u pedagoškoj praksi. U znanost ga je uveo Lamare (1801), podijelivši životinje u beskralježnjake i kralježnjake. Prema stupnju organizacije beskralježnjaci se mogu podijeliti na dva podcarstva: praživotinje (Protozoa) i stanične životinje (Metazoa). Stanične životinje obuhvaćaju 3 grane: životinje slabo razvijena tkiva (Mesozoa), spužve (Spongia) i prave tkivne životinje (Eumetazoa). Stanične životinje uključuju: beskolutićavce (Ameria), plošnjake (Platodes), žarnjake (Cnidaria), rebraše (Ctenofora), oblenjake (Aschelminthes), vrpčare (Nemertina), mekušce (Mollusca), mnogokolutićavce (Polymeria), kolutićavce (Annelida), člankonošce (Arthropoda), malokolutićavce (Oligomeria), lovkaše (Lophophorata), crijevodisače (Branchiotremata), bodljikaše (Echinodermata), bradnjake (Pogonophora) i četinočeljusti (Chaetognatha). Beskralježnjaci obuhvaćaju više od 1,1 mil. opisanih vrsta. Mnogo je neotkrivenih vrsta i smatra se da kukaca ima oko 4 mil. vrsta, oblića oko 800 000 vrsta, a praživotinja oko 40 000 vrsta.'
        />
      
    </>
  )
}

export default Invertebrates
