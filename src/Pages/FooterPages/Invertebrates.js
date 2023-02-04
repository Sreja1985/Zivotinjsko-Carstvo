import React from 'react';
import Content from '../../Components/Content';
import Hero from '../../Components/Hero';
import HistoryImg from '../../Assets/History.jpg';

function Invertebrates() {
  return (
    <>
        <Hero
          cName='hero__mid'
          heroImg= {HistoryImg} 
          alt= 'Životinjsko carstvo'
        />
        <Content
        cName= 'mid_content'
        title= 'Beskralježnjaci'
        subtitle = 'Avertebrata'
        text= 'nesistematski naziv za sve životinje koje nemaju unutar. osovinski skelet (hrskavičnu ili koštanu kralježnicu). Pojam beskralježnjaci opravdan je s metodičke strane i upotrebljava se u pedagoškoj praksi. U znanost ga je uveo Lamare (1801), podijelivši životinje u beskralježnjake i kralježnjake. Prema stupnju organizacije beskralježnjaci se mogu podijeliti na dva podcarstva: praživotinje (Protozoa) i stanične životinje (Metazoa). Stanične životinje obuhvaćaju 3 grane: životinje slabo razvijena tkiva (Mesozoa), spužve (Spongia) i prave tkivne životinje (Eumetazoa). Stanične životinje uključuju: beskolutićavce (Ameria), plošnjake (Platodes), žarnjake (Cnidaria), rebraše (Ctenofora), oblenjake (Aschelminthes), vrpčare (Nemertina), mekušce (Mollusca), mnogokolutićavce (Polymeria), kolutićavce (Annelida), člankonošce (Arthropoda), malokolutićavce (Oligomeria), lovkaše (Lophophorata), crijevodisače (Branchiotremata), bodljikaše (Echinodermata), bradnjake (Pogonophora) i četinočeljusti (Chaetognatha). Beskralježnjaci obuhvaćaju više od 1,1 mil. opisanih vrsta. Mnogo je neotkrivenih vrsta i smatra se da kukaca ima oko 4 mil. vrsta, oblića oko 800 000 vrsta, a praživotinja oko 40 000 vrsta.'
        />
      
    </>
  )
}

export default Invertebrates
