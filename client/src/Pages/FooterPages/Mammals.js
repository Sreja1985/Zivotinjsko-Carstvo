import React from 'react';
import Content from '../../Components/Content';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../../Components/Swiper.css';
import { MammalsGallery} from '../../Components/AnimalGallery/MammalsGallery';


SwiperCore.use([EffectCoverflow, Pagination]);



function Mammals() {
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
            
            { MammalsGallery.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.url} alt=''/>
                </SwiperSlide>
              );
            })}       
        </Swiper>
        <Content
        cName= 'mid_content'
        title= 'Sisavci'
        subtitle = 'Mammalia'
        text= 'Razred kralježnjaka stalne tjelesne temperature, obraslih dlakom, koji mlade othranjuju mlijekom iz ženkinih mliječnih žlijezda (sisa). Imaju debelu i čvrstu kožu pokrivenu raznolikim rožnatim tvorevinama. To su najčešće dlake različita oblika, boje i čvrstine (pokrivne dlake, malje), a zatim čekinje, bodlje, ljuske kod ljuskavaca, oklop kod pasanaca.Koža je u većine sisavaca bogata žlijezdama, među kojima se razlikuju dva oblika: znojnice i lojnice. Cjevaste znojnice (glandulae tubuliformes) izlučuju vodenastu lužnatu tekućinu, znoj. Grozdaste lojnice (glandulae alveolares) stvaraju loj, uljevitu izlučinu nastalu od odumrlih stanica. U koži nekih sisavaca postoje nakupine posebno diferenciranih grozdastih žlijezda, izlučevine kojih imaju jake mirise, npr. analne ili mošusne žlijezde u mužjaka amer. smrdljivca i tvorova. Najkarakterističnija su žljezdana tvorba u sisavaca mliječne žlijezde (modifikacija znojnica), broj kojih kod različitih vrsta varira od 2 do 27, prema broju mladunčadi koju ženke kote. Koža sisavaca proizvodi i pandže, nokte, kopita i rogove. U sisavaca je razvijena karakteristična mišićno-tetivna pregrada, dijafragma, koja dijeli prsnu od trbušne šupljine.'        
       />

       <Content 
        cName='mid_content'
        text= 'Kostur sisavaca sastoji se od lubanje, kralježnice, rebara, udova, kukovlja i oplećja. Lubanja ima pet dijelova: zatiljni, tjemeni, čeoni, sljepoočni i nosno-čeljusni dio. Na zatiljnoj kosti lubanje nalaze se parne zatiljne kvržice koje zglobno spajaju kralježnicu s lubanjom. Od kostiju glave pokretna je samo donja čeljust, koja se zglobom nadovezuje na sljepoočnu kost. Razvoj i osebujni spojevi slušnih koščica (čekić, nakovanj i stremen) specifični su za sisavce. Kralježnica se dijeli u pet dijelova: vratni, prsni ili leđni, slabinski, križni i repni dio. Vratni dio kralježnice u većine sisavaca ima 7 kralježaka (npr. kod čovjeka, ali i kod žirafe); prsni dio nosi rebra, a sastoji se najčešće od 13 kralježaka; slabinski od 2 do 9, a križni u većine sisavaca od 4 kralješka srasla s manjim brojem prednjih repnih kralježaka u križnu kost; broj repnih kralježaka varira od 3 (giboni i neki netopiri) do 49 (dugorepi ljuskavac iz zap. Afrike). Oplećje tvori prsna kost s lopaticom i ključnim kostima. Ključne su kosti zakržljale u neparnoprstaša, kitova, slonova i većine zvijeri, a razvijene su kod sisavaca koji se penju, kopaju, lete. Kosti zdjeličnog obruča (crijevna, sjedna i preponska) srasle su u kukovlje. Udovi u sisavaca poprimili su tijekom evolucije različite prilagodbene oblike: npr. kod kitova su se prednji udovi pretvorili u peraje za plivanje, a stražnji su se smanjili, dočim su se u šišmiša prednji udovi pretvorili u krila. Broj prstiju varira od 1 do 5. Majmuni, kukcožderi i slonovi imaju po 5 prstiju na sve četiri noge, vodeni konj po 4, većina parnoprstaša po 2 razvijena i po 2 zakržljala; konj ima samo 1 razvijeni prst, a ostali su zakržljali. Probavni sustav sisavaca građen je ugl. kao u ostalih kralježnjaka. Zubalo, veoma značajna struktura u sistematici sisavaca, u pravilu je raznovrsno (heterodontno), iznimno je jednostavno (homodontno), npr. kod dupina. Raznovrsno zubalo sastavljeno je od sjekutića, očnjaka, pretkutnjaka i kutnjaka. Broj zubâ i njihova građa u različitih su skupina sisavaca različiti i u tijesnoj su vezi s načinom na koji se hrane.'
       />
       <Content
        cName='mid_content'
        text='U krvožilnom sustavu plućni je krvotok jasno odijeljen od velikoga krvotoka. Srce se sastoji od dvije pretklijetke i dvije klijetke. Crvena su krvna zrnca bez jezgre (osim u deve). Dišni se sustav sastoji od grkljana, dušnika, dušnica i pluća. U grkljanskoj se šupljini nalaze glasnice sposobne za oblikovanje raznolikih glasova. Sisavci imaju najrazvijeniji veliki mozak među svim kralježnjacima. U nižih je sisavaca površina velikoga mozga glatka, a u viših nabrana, čime je znatno povećano područje viših centara. Polutke velikoga mozga povezane su komisurnim nitima koje oblikuju žuljevito tijelo. Sisavci imaju 12 pari moždanih živaca. Osjetila su im vrlo razvijena. Bubrezi kod sisavaca izlučuju mokraću preko mokraćovoda koji se ulijevaju u mokraćni mjehur (samo kod jednootvora u kloaku) iz kojeg izlazi mokraćna cijev.'
        />
      <Content
        cName='mid_content'
        text= 'Sisavci su razdvojena spola, a po građi su mužjaci obično veći i snažniji od ženki. Sisavci su živorodni, osim jednootvora koji nesu jaja. Oplodnja je unutarnja. Mladi se u većine sisavaca razvijaju u majčinoj utrobi, u maternici, gdje se zametak hrani preko posteljice. U tobolčara nema posteljice, plod dolazi na svijet još nerazvijen te nastavlja svoj razvoj u majčinu tobolcu.'
      />
      <Content
        cName='mid_content'
        text= 'Sisavci su rašireni po cijeloj Zemlji. Iako su uglavnom kopnene životinje neki su se potpuno prilagodili životu u vodi (kitovi, sirene), a neki mogu i letjeti (netopiri). Sisavci su se javili u trijasu u oblicima sličnima gmazovima, a u tercijaru su već bili jako rašireni. Suvremeni sisavci dijele se na jednootvore, tobolčare i više sisavce. Pripadnici reda jednootvori (Monotremata) najjednostavnije su građe i obuhvaćaju najmanji broj oblika. Opsežniju skupinu tobolčara (Marsupialia) čini 7 redova. Najveći su dio sisavaca pravi sisavci (Placentalia), koji se dijele u 18 redova: 1. kukcožderi (Insectivora), 2. kožuškari (Dermoptera), 3. netopiri (Chiroptera), 4. krezubice (Xenarthra), 5. ljuskavci (Pholidota), 6. glodavci (Rodentia), 7. zvijeri (Carnivora), 8. pećinari (Hyracoidea), 9. kitovi (Cetacea), 10. parnoprstaši (Artiodactyla), 11. neparnoprstaši (Perissodactyla), 12. slonovi (Proboscidea), 13. sirene (Sirenia), 14. cjevozupci (Tubulidentata), 15. majmuni (Primates), 16. tupaje ili verirovke (Scandentia), 17. dvojezupci (Lagomorpha), 18. slonovske rovčice (Macroscelidae).'
      />

    </>
  )
}

export default Mammals
