import React from 'react';
import Content from '../../Components/Content';
import Hero from '../../Components/Hero';
import HistoryImg from '../../Assets/History.jpg';

function Amphibians() {
  return (
    <>
        <Hero
          cName='hero__mid'
          heroImg= {HistoryImg} 
          alt= 'Životinjsko carstvo'
        />
        <Content
        cName= 'mid_content'
        title= 'Vodozemci'
        subtitle = 'Amphibia'
        text= 'Razred kralježnjaka (Vertebrata) koji su se uza život u vodi prilagodili i životu na kopnu, pa evolucijski tvore prijelaz između riba i kopnenih kralježnjaka. U stanju ličinke dišu škrgama, zatim se preobrazbom razvijaju u prave kopnene kralježnjake koji dišu plućima. Neki oblici zadrže škrge i u odraslom stanju (ambistoma, pjegava). Koža je vodozemaca gola i uvijek vlažna od obilne količine sluzi, koju luče mnogobrojne sluzne žlijezde uložene u kožu. Posebne žlijezde izlučuju otrovnu bijelu sluz. Na površini kože tanak je rožnati sloj, koji se povremeno obnavlja. Kod nekih oblika vodozemaca, iznimno, postoje u koži ostatci koštanih ili vapnenih ljusaka. Osim zaštitne funkcije, koža ima ulogu i u disanju, pa neki tropski vodozemci, koji nemaju drugih dišnih organa, dišu kožom. Lubanja vodozemaca jednostavna je i pokretno spojena s kralježnicom dvama zglobovima, slično kao kod sisavaca. Mozak im je jednostavno građen; nazire se struktura maloga mozga i hemisfera velikoga mozga. Oči su dobro razvijene i zaštićene kapcima (i trećim). Rebra su smanjena (bezrepci ih ni nemaju) i nisu spojena s prsnom kosti. Srce se sastoji od jedne klijetke i dviju pretklijetka; aortini su lukovi simetrični. Temperatura tijela nije stalna i ovisi o temperaturi okoline. Borave u vlažnim i sjenovitim mjestima, ponajprije toplih i umjerenih područja, a os. su mnogobrojni po trop. šumama. Svi su vodozemci razdvojena spola. Većina odlaže jaja u vodi (uvijena u sluzaste ovoje), a mnoge se vrste brinu za leglo, pri čem sudjeluju i mužjaci. Spolna zrelost nastupa u većine vrsta nakon preobrazbe, a u nekih se pojavljuje → neotenija. Odrasli vodozemci hrane se različitim beskralježnjacima. Živući vodozemci dijele se u tri reda: beznošci (Gymnophiona), repaši (Caudata ili Urodela) i bezrepci (Anura ili Ecaudata). Od beznožaca poznat je npr. indijski rovač, od repaša daždevnjak i čovječja ribica, od bezrepaca žabe. Razlikuju se 44 porodice s 5000 vrsta.'
        />
    </>
  )
}

export default Amphibians
