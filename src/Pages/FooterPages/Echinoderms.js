import React from 'react';
import Content from '../../Components/Content';
import Hero from '../../Components/Hero';
import HistoryImg from '../../Assets/History.jpg';

function Echinoderms() {
  return (
    <>
        <Hero
          cName='hero__mid'
          heroImg= {HistoryImg} 
          alt= 'Životinjsko carstvo'
        />
        <Content
        cName= 'mid_content'
        title= 'Bodljikaši'
        subtitle = 'Echinodermata'
        text= 'Morski beskralježnjaci rašireni po svim morima. Većina je slabo pokretna, neki su tipovi pričvršćeni o dno, a neki žive planktonski. Tjelesna organizacija zasniva se na peterozračnoj simetriji. Kostur je sastavljen od vapnenih pločica. Bodljikaši se pokreću s pomoću samo njima svojstvenog ambulakralnog ili vodožilnog sustava – tjelesnih kanala ispunjenih vodenastom tekućinom sastava slična morskoj vodi. Hrane se raznoliko: neke su vrste mesožderi, druge biljožderi, a poneke gutaju mulj, u kojem ima organskih tvari. Razlučena su spola, ali bez vanj. razlika. Jaja izbacuju u vodu, gdje se obavlja oplodnja; samo neke vrste imaju unutarnju oplodnju. Iz jaja se razvija ličinka, koja se dalje preobražava do konačnog oblika. Poznato je oko 6000 vrsta bodljikaša od čega u Jadranskom moru oko 60. Koljeno čini pet razreda; stapčari (Crinoidea), trpovi (Holothuroidea), ježinci (Echinoidea), zvjezdače (Asteroidea) i zmijače (Ophiruoidea). Najčešći predstavnici bodljikaša u Jadranu: sredozemna dlakavica (Antedon mediterranea), obični trp (Holothuria tubulosa), hridinasti ježinac (Paracentrotus lividus), crvena zvjezdača (Echinaster sepositus), nepravilna križalina (Asteropecten irregularis), dlakava zmijača (Ophiothrix fragilis), nitasta zmijača (Amphiura filiformis).'
        />
      
    </>
  )
}

export default Echinoderms
