import React from 'react';
import Content from '../../Components/Content';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../../Components/Swiper.css';
import { BirdsGallery } from '../../Components/AnimalGallery/BirdsGallery';


SwiperCore.use([EffectCoverflow, Pagination]);

function Birds() {
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
            
            { BirdsGallery.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.url} alt=''/>
                </SwiperSlide>
              );
            })}       
        </Swiper>
        
        <Content
        cName= 'mid_content'
        title= 'Ptice'
        subtitle = 'Aves'
        text= 'Razred kralježnjaka kojima su se prednji udovi promijenili u krila. Po građi su najsličniji gmazovima reda Pseudosuchia, koji su se pojavili u kasnom permu i kao kopnene životinje prevladavali do kraja trijasa. Prijelazni oblici od gmazova do praptice arheopteriks (iz jure) nisu pronađeni, pa još uvijek nema osnove za jedinstvenu teoriju o postanku ptičjega leta. Među izumrlim pticama (oko 800 vrsta) prevladavale su plivačice, ronilice i trkačice. Danas je obratno: prevladavaju letačice, a i suvremene trkačice (nojevi, kazuari, nandui, emui, kivi) zapravo su letačice koje su prelaskom na drugačiji način života izgubile sposobnost letenja. Osnovne su prilagodbe ptica snažna krila, tijelo obraslo perjem, koje se na krilima i repu razvilo u letno perje, zrakom ispunjene (pneumatične) kosti povezane s dišnim organima, zračne vrećice, snažno razvijena prsna kost s istaknutim grebenom (carina), na koju se veže snažno letno mišićje te dobar vid. Glavno je obilježje ptičjega kostura velika sraštenost i šupljikavost kostiju. Lubanjska čahura nastala je srašćivanjem lubanjskih kostiju, leđni kralješci srasli su međusobno i s kostima kukovlja, a rep, kod praptica sastavljen od dvadesetak kralježaka, sveden je kod živućih na trokutastu pločicu za koju je pričvršćeno repno perje. Na krilima se razlikuju tri sraštena prsta, a na nogama je srastao najveći broj stopalnih i zastopalnih kostiju u cjevastu pisnicu (tarsometatarsus). Prsni koš učvršćuju postranske koštane kukice na rebrima, a rebra su, da bi ptice mogle slobodno disati, zglobno povezana na tri mjesta. Tanke lopatice (scapula), vranjača (coracoideum) i ključna kost (clavicula) u ramenom su pojasu sprijeda pri dnu srasle u vilicu (furcula). Stopalne kosti završavaju člancima prstiju s pandžom na kraju. Ptice imaju u pravilu četiri prsta, od kojih je prvi (palac) redovito okrenut unatrag. U dobrih penjačica (žuna, djetlić) dva su prsta okrenuta prema naprijed, a dva prema natrag. U dobrih je trkačica broj prstiju smanjen, pa neke imaju tri (droplja, nandu), a neke samo dva prsta (noj). Nožni mišići prelaze u jake tetive, koje omogućuju, kada se noga skvrči, automatsko stezanje prstiju i stajanje na grani bez utroška energije. Zbog različita načina života noge su u ptica građom i oblikom prilagođene hodanju, skakanju, trčanju, penjanju, plivanju. Perjem se ptice znatno razlikuju od ostalih životinja. Ono je građeno od bjelančevine keratina, koji mu daje čvrstoću i elastičnost. Razlikuje se paperje, pokrivna pera, krilna i repna pera. U doba mitarenja ptice odbacuju perje i zamjenjuju ga novim. Posebno je obilježje ptica i kljun, organ sastavljen od rožnatih prevlaka koje štite čeljusti. Kljunovi ptica specijaliziranih su oblika, prilagođenih prihvaćanju različitih vrsta hrane, npr. kukasti kljun grabljivica za kidanje plijena, plosnati kljun pataka za procjeđivanje vode i odvajanje čestica. Kratki i ravni kljunovi služe za pretraživanje mulja, a duži i zakrivljeni za izvlačenje kukaca iz tla. Za razliku od praptica, današnje ptice nemaju zubâ, a drobljenje hrane preuzeo je tzv. žvačni ili mišićni želudac. Jednjak ima proširenu voljku u kojoj hrana nabubri i omekša, prelazi u žljezdani želudac (proventriculus), u kojem se probave koštani dijelovi i ljuske, a u mišićnome želucu drobi se zrnje. Ptice imaju dva slijepa crijeva. Grabežljivci poput sova gutaju cijeli plijen i budući da ne mogu probaviti velike količine dlake, perja i kostiju, izbacuju ih povremeno u obliku zgusnutih grudica, tzv. gvalica. Zadnji dio debeloga crijeva proširen je u kloaku, u kojoj završavaju i izvodne cijevi mokraćovoda, jajovoda i sjemenovoda. Razmjerno veliko ptičje srce nema lijevog aortina luka, a arterijska i venska krv miješaju se u kapilarnom sustavu, po čem su ptice fiziološki savršenije od gmazova. Eritrociti su veliki, jajoliki, imaju jezgru i obiluju hemoglobinom, a to metabolizam ptice čini deset puta bržim od čovjekova. Ptice su toplokrvne životinje sa stalnom tjelesnom temp. između 40 i 42 °C. Rad pluća potpomaže do devet zračnih vrećica koje, pod pritiskom letnih mišića, djeluju poput mijeha te uvlače i ispuštaju zrak, a povezane s koštanim šupljinama tvore tzv. pneumatični aparat. Zračne vrećice služe i za smanjivanje tjelesne obujamne mase, povećavanje savitljivosti kostiju, smanjenje trenja pojedinih dijelova tijela tijekom gibanja, reguliranje tjelesne topline i sprječavanje pregrijavanja tijela tijekom intenzivnoga rada letnih mišića za vrijeme leta. Na mjestu na kojem se dušnik grana u dušnice nalazi se pjevalo (syrinx), organ razvijen posebno u pjevica, a nemaju ga nojevi, kazuari, rode i neki supovi. Pjevalom ptice proizvode različite glasove, kojima se međusobno sporazumijevaju, a to je osobito važno u društv. vrsta prilikom nekih zajedničkih radnji. Ptičji je mozak dobro razvijen, polutke imaju glatku površinu, a optički su režnjevi posebno izraženi (vid i sluh iznimno su dobro razvijeni). Građa je mozga na višem stupnju razvoja od one u gmazova. Osjetila za opip i toplinu razvijena su u koži i u kljunu. Oko ptica sastavljeno je od dviju spojenih kuglastih površina što povećava vidno polje. U orlova i supova nalaze se na mrežnici osjetljive pjege (foveae), s pomoću kojih sve predmete vide točnije. U nekih se vrsta oči pomiču neovisno jedno o drugome pa se prilagođuje svako posebno. I očni kapci pomiču se neovisno jedan o drugom. Postoji i treći očni kapak, koji je proziran. Uho je u ptica građeno savršenije nego u gmazova, a pužnica je znatno produžena.'        
       />
       <Content
       cName= 'mid_content'
       text='Ptice se razmnožavaju jajima. Ptičje jaje sadrži mnogo žumanjka pa se naziva polilecitelnim. U većine ptica razvijen je samo lijevi jajnik, u njem nastaju jaja, a oplođuju se u gornjem dijelu jajovoda. Dok oplođeno jaje putuje kroz jajovod, oko njega se oblikuju ovojnice, a pri prolasku kroz donji dio jajovoda, u nekih se vrsta na ljusku odlažu različiti pigmenti. Jaja nekih vrsta zaštitno su obojena pa se bojom stapaju s okolinom. Broj jaja u leglu, položaj gnijezda i način njegove izradbe razlikuju se od vrste do vrste. U doba inkubacije na jajima nekih vrsta sjedi ženka, u drugih mužjak, a u nekih se izmjenjuju. Neke vrste polažu jaja u gnijezda drugih vrsta (npr. kukavice). Ležanje na jajima različita je trajanja. Ovisi o veličini jajeta, o debljini lupine i o klimi pa u pjevica iznosi 15 do 18 dana, u kokoši 15 do 22 dana, u noja 7 do 8 tjedana. U mladih ptica razlikuju se dva morfološko-biološka oblika: potrkušci i čučavci. Potrkušci (praecoces nidifugae) obrasli su paperjem, u nekih vrsta i perjem, a kad prokljuju ljusku jajeta, odmah mogu hodati, kljuju hranu i oponašaju odrasle ptice. Potrkušci su npr. mlade ptice kokoši, galebovki, ždralovki, šljukâ. Čučavci (altrices nidicolae) loše su razvijeni i bespomoćni. Dugo čuče u gnijezdu i roditelji ih othranjuju; neki se izvale obrasli zametnim paperjem (sokolovke, sove), a neki goli (čaplje, vodomari).'
       />
       <Content
       cName= 'mid_content'
       text='Neke ptice susrećemo tijekom cijele godine, druge samo u ljetnim mjesecima ili kada se gnijezde, a treće samo zimi (gosti sa sjevera). S obzirom na životne navike dijele se na stanarice, selice, skitalice i gnjezdarice. Kako bi se istražio fenomen ptičje selidbe, osnovana su mnogobrojna ornitološka društva i zavodi. U Hrvatskoj djeluje Zavod za ornitologiju pri HAZU. Mnoge ptice poduzimaju dugotrajne selidbe (migracija), vrlo složena periodična usmjerena kretanja, uvjetovana različitim ekološkim i biol. čimbenicima. Odlazak i dolazak ptica u nekom kraju obično se poistovjećuje s jesenskom i proljetnom selidbom. Selidba ptica Južne polutke povezana je s kišnim i sušnim razdobljem. Posebnom vrstom periodičnoga kretanja smatra se najezda. Njezini su uzroci različiti, a glavni je poticaj pomanjkanje hrane u biotopima gniježđenja. Najdulji su migracijski putevi morskih ptica, a najveće udaljenosti prelazi arktička čigra (Sterna paradisaea), koja na putovanjima između Arktika i najjužnijega dijela Indijskog oceana godišnje preleti oko 35 000 km. Za praćenje selidbi važno je prstenovanje ptica. Pri letu ptica razlikuje se lebdjenje bez vodoravnih pomaka, jedrenje na zračnim strujama, let mahanjem krila, slijetanje i polijetanje'
       />
       <Content
       cName= 'mid_content'
       text='Ptice su raširene po cijeloj Zemlji. Premda mogu ustrajno i daleko letjeti, kozmopolitskih je vrsta razmjerno malo, pa faune pojedinih područja imaju i svoje posebne ptičje vrste. Ptice pokazuju izrazit nagon za zajedničkim životom te se okupljaju u jata, a samo malen broj vrsta (npr. grabljivice) živi samotno. Neke vrste žive u parovima dok ne podignu potomstvo, a zatim se udružuju u jata, jer tako lakše nalaze hranu (sjenice, češljugari, čvorci, vrane). Neke se skupljaju u golema jata (čvorci). Poznata su skupljanja ptica u selidbena jata. Neke vrste ptica gnijezde se u kolonijama u kojima može biti samo jedna vrsta (npr. bregunica), a može biti i više srodnih skupina (čaplje) s različitom brojnošću. Stanovnici kolonija često vode vrlo složen društv. život.'
       />
        <Content
       cName= 'mid_content'
       text='Ptice su među sobom slične po morfološkim osobinama. Kod mnogih se, zbog slična načina života, javlja niz konvergencija pa im ni sistematika nije jednostavna. Pojedini autori svrstavaju ih u različite skupine prema morfološko-anatomskim i biol. svojstvima. Jedna je od najtradicionalnijih i široko prihvaćenih taksonomska podjela iz 1975 (J. J. Morony, W. J. Bock i J. Farrand), koja predviđa 25 redova, a podjela iz 1995 (C. G. Sibley i J. E. Ahlquist) temelji se na biokem. analizi stupnja sličnosti i različitosti DNA te predviđa 22 reda. Najveći su red vrapčarke ili pjevice (Passeriformes), koji obuhvaća više od polovice poznatih vrsta. Neki su od poznatijih redova: nojevke (Struthioniformes), rodarice (Ciconiiformes), guščarice (Anseriformes). Danas se razlikuje oko 9000 vrsta ptica, a oko 1000 vrsta smatra se ugroženima.'
       />
    </>
  )
}

export default Birds
