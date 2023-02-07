import React from 'react';
import Content from '../../Components/Content';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../../Components/Swiper.css';
import { ReptilesGallery} from '../../Components/AnimalGallery/ReptilesGallery';


SwiperCore.use([EffectCoverflow, Pagination]);

function Reptiles() {
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
            
            { ReptilesGallery.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.url} alt=''/>
                </SwiperSlide>
              );
            })}       
        </Swiper>
        <Content
        cName= 'mid_content'
        title= 'Gmazovi'
        subtitle = 'Reptilia'
        text= 'Najniži razred pravih kopnenih kralježnjaka. Nastanjuju sve kontinente izuzev Antarktika. Njihov je zametak ovijen zametnim omotačem, amnionom. Po tome su organu svi kopneni kralježnjaci dobili zajednički naziv Amniota, za razliku od riba i vodozemaca, koji nemaju amniona pa se nazivaju Anamnia. Poput ostalih kopnenih kralježnjaka, gmazovi imaju allantois (dišni organ embriona). Gmazovi su nestalne tjelesne topline (poikilotermne životinje), razvijaju se izravno, tj. bez preobrazbe, a dišu plućima; škržnoga disanja nema ni u jednoj fazi njihova života. Osim kornjača, koje su zdepaste, svi gmazovi imaju izduženo tijelo, koje završava repom. Zmije i neki gušteri nemaju udova i pokreću se gmižući potrbuške. Ostali imaju 2 para dobro razvijenih nogu, koje su smještene bočno na trupu, pa pri kretanju vuku tijelo uz podlogu. Po tom su načinu kretanja – gmizanju – i dobili ime. Broj i oblik kralježaka vrlo je različit (kornjače ih imaju tridesetak; zmije i do 400), a također i broj rebara, koja su u nekih vrlo pokretna, a u drugih mogu srasti i tvoriti dio koštanog oklopa. Koža im je karakteristična i drukčija od kože ostalih životinja. Zaštićena je slojem orožnjelih stanica u obliku rožnatih ljusaka ili ploča, koje se pružaju u nizovima. Zmije i gušteri pokriveni su sitnim ljuskama pa se zbog toga i nazivaju zajedničkim imenom ljuskaši (Squamata ili Lepidosauria). Raspored ljusaka, a posebno rožnatih pločica na glavi, značajan je za klasifikaciju gmazova. Koža im je bez žlijezda i potpuno suha; u tropskih je vrsta šaroliko obojena, u pustinjskih pretežno sivo. Povremeno se presvlače (→ svlak). Jezik im je dobro razvijen, a služi kao organ opipa. Osim kornjača, kojima su vilice obložene rožnatim navlakama u obliku kljuna, svi gmazovi imaju velik broj oštrih, češće kukasto povijenih zuba. Zubi im služe za pridržavanje hrane, a u zmija otrovnica zubi povezani s otrovnom žlijezdom služe za usmrćivanje plijena. Crijevo te mokraćni i spolni kanal imaju zajednički izlaz u kloaki. Gmazovi imaju dva aortina luka. Srčana im je pretklijetka potpuno, a klijetka djelomično pregrađena, osim u krokodila, koji imaju 2 pretklijetke i 2 klijetke. Mozak im je znatno razvijeniji i složeniji nego u vodozemaca i riba, jer u njih ganglijske stanice već tvore moždanu koru. Gmazovi se pare na kopnu, kod nas nakon zimskog sna. Ženka polaže jaja u pijesak ili vlažnu zemlju, a mladunci se izlegu pod utjecajem sunčane topline. Manji broj gmazova rađa žive mlade. Grabežljivci su, hrane se drugim životinjama, koje ili nepotpuno žvaču ili gutaju cijele. Samo su neke kornjače biljožderi. Žive pretežno na kopnu, jedino krokodili i većina kornjača u vodi ili uz vode, ali u doba parenja i oni izlaze na suho radi polaganja jaja. Iznimno, jedna skupina zmija živi stalno u moru – pomorčice (Hydrophiinae). – Gmazovi imaju zajedničke pretke s vodozemcima Stegocephales (→ stegocefali), od kojih su se odvojili u permu. Tijekom mezozoika (koji se naziva i erom gmazova) jako su se razvili i tada su bili najmnogobrojnija i najraznovrsnija grupa kralježnjaka. U kenozoiku su znatno prorijeđeni. Od izumrlih redova najznačajniji su gigantski dinosauri, krilati pterosauri, golemi riboliki ihtiosauri, dugovrati sauropterigiji i teriodonti, od kojih su se razvili sisavci. Živući gmazovi svrstani su u 4 reda s oko 7000 vrsta: 1. premosnici (Rhynchocephalia), 1 vrsta; 2. kornjače (Chelonia ili Testudines), oko 350 vrsta; 3. krokodili (Crocodilia) oko 25 vrsta i 4. ljuskaši (Squamata ili Lepidosauria) s podredom guštera (Lacertilia ili Sauria), s više od 3500 vrsta, i zmija (Ophidia ili Serpentes), također s više od 3000 vrsta.'
        />

    </>
  )
}

export default Reptiles
