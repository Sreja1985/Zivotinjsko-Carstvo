import React from 'react';
import Content from '../../Components/Content';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../../Components/Swiper.css';
import { MolluscsGallery } from '../../Components/AnimalGallery/MolluscsGallery';

SwiperCore.use([EffectCoverflow, Pagination]);

function Molluscs() {
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
            
            { MolluscsGallery.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.url} alt=''/>
                </SwiperSlide>
              );
            })}       
        </Swiper>
        <Content
        cName= 'mid_content'
        title= 'Mekušci'
        subtitle = 'Mollusca'
        text= 'Koljeno beskralježnjaka mekana, dvostrano simetrična tijela (asimetrični su samo odrasli puževi), bez unutar. kostura. Tijelo obavija mekan kožnat plašt, koji kod većine vrsta izlučuje tvrdu vanj. ljušturu koja štiti i podržava tijelo. U puževa je ljuštura (kućica) neparna, u školjaka gotovo uvijek parna. Kod nekih skupina ljuštura zakržlja ili posve nestane (goli puževi). Tijelo im se sastoji od glave, probavila, plašta i stopala. Na glavi su usta, oči i ticala. U utrobnoj vreći smještena su crijeva, jetra, bubrezi i spolni organi. Plašt, koji djelomično ili potpuno obavija tijelo, stvara plaštenu šupljinu, u kojoj su smješteni dišni organi. Tijelo mekušaca s donje se strane proširuje u neparnu mišićnu tvorevinu – stopalo. Građa je živčanoga sustava različita, ali redovito postoje 3 para ganglijskih čvorova sa živčanim tracima, koji su u vezi s osjetnim organima. Srce je na leđnoj strani, smješteno u osrčju, a sastoji se od jedne klijetke i jedne ili dviju pretklijetki. Crijevo je razvijeno. U ustima su čeljusti ili nazubljena pločica. Mekušci se razmnožavaju spolnim načinom. Neki su dvospolci, a neki su razdvojena spola. Razvijaju se redovito preobrazbom; iz jaja se razvija trepetljikasta ličinka (veliger). Kopneni puževi i glavonošci razvijaju se bez preobrazbe. U nekih je izraženo spolno dvoličje (glavonošci). Mekušci su uglavnom trome životinje (osim glavonožaca) koje puze po podlozi ili se stopalom pričvršćuju za dno. Žive u moru, slatkim vodama i na kopnu. Hrane se mikroorganizmima, organskim otpadom, biljem, a mnogi su i grabežljivci. Mekušaca ima oko 128 000 vrsta, od kojih je 40 000 fosilno. Dijele se u 7 razreda: jednoljušturaši (Monoplacophora), bezljušturaši (Aplacophora), mnogoljušturaši (Polyplacophora), koponošci (Scaphopoda), puževi (Gastropoda), školjkaši (Bivalvia), glavonošci (Cephalopoda). U geol. prošlosti bili su mnogo rašireniji nego danas, a neke se izumrle vrste obilježavaju kao tzv. provodni fosili pojedine geol. formacije. Tako su glavonošci belemniti provodni fosili trijasa, a školjkaši hipuriti krede. Školjkaši su se javili već početkom kambrija, glavonošci su se razvijali u mezozoiku, a tercijar je bogat puževima. (glavonošci; jednoljušturaši; koponošci; puževi; školjkaši)'
        />
      
    </>
  )
}

export default Molluscs
