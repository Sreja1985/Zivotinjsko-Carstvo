import React from 'react';
import Content from '../../Components/Content';
import Hero from '../../Components/Hero';
import HistoryImg from '../../Assets/History.jpg';


function Arthropods() {
  return (
    <>
        <Hero
          cName='hero__mid'
          heroImg= {HistoryImg} 
          alt= 'Životinjsko carstvo'
        />
        <Content
        cName= 'mid_content'
        title= 'Člankonošci'
        subtitle = 'Arthropoda'
        text= 'Koljeno dvostrano simetričnih beskralježnjaka kolutićava tijela i člankovitih nogu. Tijelo je zaštićeno krutim hitinskim oklopom (→ hitin), koji je između članaka tanak, pa se tijelo i noge mogu pomicati. Zbog rasta tijela oklop se mora odbaciti i zamijeniti novim (presvlačiti). Mišići za pokretanje tjelesnih kolutića i nožnih članaka nalaze se s unutarnje strane oklopa (npr. kod vrbotočca, više od 40 000 mišića). U njihovu se živčanom sustavu, kao i u kolutićavaca, ističe trbušni živčani lanac ljestvičasta oblika: dva ganglija u svakom segmentu povezana su poprečno komisurama a uzdužno konektivom. Mozak je osobito razvijen u zadružnih kukaca, a smješten je leđno ispred usta. Osjetni organi nalaze se najčešće na ticalima i oko usta. Posebno su razvijene oči, jednostavne ocele i sastavljene mrežaste oči. Srce je na leđnoj strani. Člankonošci dišu različito: škrgama, plućnim vrećicama, uzdušnicama (trahejama). Razdvojena su spola. Tjelesna organizacija omogućuje im prilagođivanje različitim životnim prilikama, pa su danas najbrojnija skupina životinja. Filogenetski se izvode od nekih izumrlih skupina kolutićavaca. Dijele se na 4 potkoljena: trorežnjaci (Trilobitomorpha), paleozojski, uglavnom izumrli člankonošci (oko 4000 vrsta), kliještari (Chelicerata, oko 30 000 vrsta), škrgaši (Branchiata) i uzdušnjaci (Tracheata), kojih ima gotovo 760 000 vrsta. Kliještare čine paučnjaci (Arachnida), prakliještari (Merostomata) i krakači (Pycnogonida), škrgaše raci (Crustacea), a uzdušnjake stonoge (Myriapoda) i kukci (Insecta ili Hexapoda), koji su najpoznatija i najbrojnija skupina životinja (više od 700 000 opisanih vrsta).'
        />
      
    </>
  )
}

export default Arthropods
