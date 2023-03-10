import React from 'react';
import Content from '../../Components/Content';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../../Components/Swiper.css';
import { FishGallery } from '../../Components/AnimalGallery/FishGallery';


SwiperCore.use([EffectCoverflow, Pagination]);

function Fish() {
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
            
            { FishGallery.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.url} alt=''/>
                </SwiperSlide>
              );
            })}       
        </Swiper>

        <Content
        cName= 'mid_content'
        title= 'Ribe'
        subtitle = 'Pisces'
        text= 'Skupina vodenih kralježnjaka sastavljena od šest razreda u dalekom srodstvu. Tipična riba hladnokrvna je životinja, tijela prekrivena ljuskama, kreće se s pomoću peraja, a diše škrgama. Većina vrsta živi u slatkoj vodi ili u moru, a nekoliko ih se seli između tih dvaju okoliša. Današnje se ribe dijele u 3 skupine: beščeljusti, sastavljene od triju razreda, a od živućih vrsta obuhvaćaju paklare i sljepulje, te hrskavičnjače i koštunjače. Svaka od tih skupina ima svojega pretka i razvila se odvojeno od ostalih. Poznato je oko 25 000 živućih vrsta riba.'
        />
        <Content
        cName= 'mid_content'
        text= 'Tijelo je većine riba oblikom prilagođeno strujanju vode, prekriveno glatkim ljuskama, a peraje mu omogućuju pokretačku snagu, kormilarenje i stabilnost. Sve ribe imaju unutrašnji kostur, različita oblika u svake od triju glavnih skupina. Oblik tijela ribe obično odražava način njezina plivanja. Tako one koje dugo i brzo plivaju u otvorenoj vodi imaju oblik tijela sličan torpedu. Visoko, bočno splošteno tijelo često je među grebenskim ribama, koje izvode nagle okrete oko gustoga bilja ili kamenitih površina. Ribe tanka cilindričnoga tijela, kao što su jegulje, lako se mogu uvući u pukotine kako bi našle hranu ili zaklon pred grabežljivcem. U vrsta koje obitavaju uz dno, tijelo je u pravilu splošteno u leđno-trbušnom smjeru, što im omogućuje da ostanu teško primjetne na dnu. Ribe mogu biti dugačke od 1 cm (neki glavoči) pa do 18 i više metara (npr. gorostasni morski psi). Mužjaci su obično manji od ženki. Nosni su otvori riba parni, a škržni otvori otkriveni (morski psi, raže) ili, u većine živućih, pokriveni koštanim škržnim poklopcem. Peraje se nadovezuju na kostur, a poduprte su šipčicama. Razlikuju se parne (prsne i trbušne) i neparne (leđna, repna i podrepna) peraje. Gl. peraja za pokretanje repna je peraja, koja je u većine riba (većina koštunjača) homocerkalna, tj. simetrična, iako kralježnica završava u leđnom dijelu tijela. Hrskavičnjače imaju heterocerkalnu, nesimetričnu, repnu peraju, u koje je gornji režanj, gdje završava kralježnica, veći od donjega. Takav oblik repne peraje pomaže održavanju na određenoj dubini, jer dubinske ribe nemaju plivaćega mjehura. U resoperki i dvodihalica repna je peraja dificerkalna, tj. kraj kralježnice dolazi do njezina vrha, a perajni se obrub proteže na leđnu i trbušnu stranu. Postoji i rijedak slučaj hipocerkalne peraje, u koje kralježnica završava u njezinu donjem dijelu.'
        />
        <Content
        cName= 'mid_content'
        text= 'U kožnom sloju većine riba, kao proizvod usmine, nastale su ljuske. Hrskavičnjače imaju zubaste, plakoidne ljuske. Neke primitivne koštunjače imaju debele, nesavitljive ganoidne ljuske romboidna oblika (koštunjavke), te slojevite kosmoidne ljuske (resoperke). Poput zubastih ljusaka, one su izgrađene od dentina, tvari slične caklini. U koštunjača su ljuske tanke, izgrađene od koštane tvari (elasmoidne ljuske), jednim krajem utaknutim u kožu. Dijele se na cikloidne ljuske, vanjska površina kojih je glatka, i ktenoidne ljuske, u kojih je hrapava ili bodljasta. U koži riba nalaze se kromatofori s pigmentom različitih boja (crni – melanofori; crveni ili žuti – ksantofori, s blistavim kristalima guanina – guanofori) koji, poredani na različite načine, daju raznolike šare. Metalni sjaj mnogih riba potječe od odraza svjetlosti na pločicama u kojima ima gvanina (→ purini). Ribe obalne zone po boji su slične okolišu, a one iz trop. mora često su živih boja. Pučinske vrste, koje plivaju u gornjim slojevima mora, s leđne su strane modre, a s trbušne strane srebrnaste (srdele, skuše i dr.). Ribe dna pretežno se bojom uklapaju u okoliš (raže, grdobina), dubinske su ribe tamne, a ribe iz srednjih dubina crvene. Slatkovodne ribe koje žive u špiljama bezbojne su, a mnoge su pelagične ličinke riba prozirne. Neke ribe mogu mijenjati boju prema okolišu (plosnatice) ili prema osvjetljenju, pa i prema uznemirenosti (trlja). Poznata je promjena boje za vrijeme mriješćenja, tzv. svadbeno ruho, osobito kod mužjaka (lipljen, losos).'
        />
        <Content
        cName= 'mid_content'
        text= 'Osovinski je kostur riba hrskavična (kod morskih pasa i raža) ili koštana kralježnica, sastavljena od nejednaka broja kralježaka različita oblika. Hrskavičnjače, resoperke, dvodihalice i jesetre do kraja života zadržavaju svitak (notochorda), koji se pruža sredinom kralježaka, dok se on u ostalih riba odrastanjem gubi. Riblje su škrge smještene u unutrašnjoj komorici na objema stranama tijela, odmah iza usta. U većine se vrsta svaka škrga sastoji od koštane ili hrskavične okosnice, koja podupire tkiva prožeta gustom mrežom kapilara. Voda u škrge ulazi kroz usta, a izlazi kroz škržni otvor. Prilikom prolaska kroz škrge otopljeni se kisik iz vode prenosi, kroz tanku vanj. membranu kapilara, u krvni optok. Istodobno ugljikov dioksid izlazi iz kapilara i otpušta se u vodu. Uz škržni sustav, dvodihalice imaju i pluća (modificirani plivaći mjehur).'
        />
        <Content
        cName= 'mid_content'
        text= 'U koštunjača se, između probavne cijevi i bubrega, duž cijele leđne strane trbušne šupljine proteže plivaći mjehur. On nastaje u zametnom razvoju kao leđna izbočina jednjaka, s kojim u nekih riba ostane povezan s pomoću tzv. zrakovoda, pa se one nazivaju zrakovodnicama (štitonoše, cjelokoste, dvodihalice i neke prave koštunjače). U drugih riba zrakovoda nema pa se zovu bezzrakovodnicama. Plivaći mjehur, djelujući kao hidrostatski organ, omogućuje ribi promjenu dubine bez plivanja: smanjenjem mjehura riba tone, a njegovim se širenjem diže prema površini.'
        />
        <Content
        cName= 'mid_content'
        text= 'Srce riba smješteno je iza stražnjega para škržnih lukova, a sastoji se od pretklijetke i klijetke. Kroza nj prolazi samo venska krv, a iz njega trbušna aorta vodi vensku krv u škrge, gdje se ona obogaćuje kisikom te postaje arterijska. Ribe većinom imaju prabubreg (mesonephros), kao i vodozemci. Takav bubreg u ostalih kralježnjaka djeluje samo u doba zametnoga razvoja. Oči su u riba smještene postrance na glavi i prilagođene su gledanju na blizinu. Mogu biti malene ili ih uopće nema u riba koje žive u špiljama, muljevitim vodama ili na velikim morskim dubinama, ispod 1000 m (u batipelagijalu), kamo ne dopire svjetlo. Iznimka su mezopelagičke ribe, koje žive na dubinama između 200 i 1000 m, i imaju vrlo velike, tzv. teleskopske oči. Mnoge ribe što žive u velikim dubinama imaju svjetleće organe, koji proizvode plavozelenu svjetlost djelovanjem svjetlećih simbiotskih bakterija, ili fotofore – svjetlila nastala preobrazbom sluznih žlijezda. Svjetleći organi uglavnom služe za prepoznavanje spolova, plašenje neprijatelja, osvjetljivanje okoliša te privlačenje žrtve. Organ sluha unutrašnje je uho, smješteno u slušnoj čahuri unutar lubanje. Služi za osjet ravnoteže i ubrzanja, a u mnogih vrsta i za sluh. Posebno je osjetilo riba tzv. bočna pruga. Pruža se duž cijeloga tijela, od glave do repa, a u nekih se riba na glavi nalazi nekoliko kanala. U kanalu, koji se otvara porama na površini tijela, nalaze se neuromasti, skupine trepetljikavih i potpornih stanica u kupolama. Bočna pruga daje ribi osjet kretanja u vodi i informaciju o pokretima drugih tijela u vodi. Zubi ribama uglavnom služe za hvatanje plijena, a rijetko za drobljenje hrane. Postavljeni su u više redova i mogu se obnavljati. Manji je broj riba bez zuba (jesetra, morski konjic). Spolovi su u riba pretežno odvojeni, a oplodnja je vanjska, osim u živorodnih morskih pasa i cjeloglavki, u kojih je unutarnja. Među koštunjačama ima i dvospolnih vrsta (kanjac, podlanica). Većina riba mrijesti se u toplo doba godine, a ima vrsta koje se mrijeste samo jednom u životu, a zatim ugibaju (jegulja, losos). Jaja (ikru) izbacuju odjednom ili u više navrata; obično su sitna (osim u mnogih hrskavičnjača, u kojih mogu biti velika i do 20 cm) i mnogobrojna (kod bakalara i po nekoliko milijuna). Manji broj riba brine se za oplođena jaja (npr. morski konjic čuva ih u brazdi na trbuhu). Pri mriješćenju se ribe obično sele na kraće udaljenosti, prilaze obalnomu području, a neke vrste putuju i po nekoliko tisuća kilometara; pritom se sele iz mora u rijeke (losos – anadromna migracija), ili iz rijeka u more (jegulja, neke plosnatice – katadromna migracija).'
        />
        <Content
        cName= 'mid_content'
        text= 'Ribe žive u moru i slatkoj vodi. Morske se ribe dijele na pelagične (žive u vodenom sloju iznad dna do same površine), litoralne (žive uz obalu) i abisalne ili dubinske (nalaze se i na dubini od 6000 m). Prema hrv. pučkoj terminologiji morska se riba dijeli na plavu, pridnenu (bijelu) i obalnu. – Plavoj ribi pripadaju pelagične ribe selice (srdela, papalina, brgljun, lojka, skuša) i krupna plava riba (tunj ili tuna, polanda, trup). Pridnena (bentoska) riba zove se i bijelom ribom. Mnogo je raznovrsnija od plave i čini 90% svih naših morskih vrsta, ali se znatno manje lovi. Prema vrsti morskoga dna razlikuje se: pridnena riba pješčana dna (najsiromašnija vrstama), od koje su najvažnije pauk, glavoč, bežmek; pridnena riba muljevita dna, kao oslić, pišmolj (ugotica), jegulja, grdobina, kovač, trlja, pa plosnatice, kao list, iverak, oblić; pridnena riba kamenita dna (tzv. riba od kamena), koja ima najveći broj vrsta, među kojima su arbun, škrpina, pirka, zubatac, podlanica, kirnja, ugor, murina. U pridnenu ribu muljevita dna ubraja se i tzv. landovina ili divlja riba, koju čine ribe hrskavičnjače, od kojih su najpoznatije raža, sklat, morska mačka, neke manje vrste morskih pasa (kostelj), golub i žutulja. Landovina se obično lovi povlačnim mrežama, rjeđe ostima i parangalima. Važna je kao izvor ribljeg ulja kojeg u jetri hrskavičnjača ima više od 50%. Obalna riba zadržava se duž plitkih obala kopna i otokâ uz hridinasto dno, a zalazi i u uvale i pristaništa, u manjim ili većim skupinama. Najpoznatije su obalne ribe: cipal, lubin, ušata, ovčica, šarak, pic, špar, gavun, salpa, bukva, šarene usnače i dr.'
        />
        <Content
        cName= 'mid_content'
        text= 'Po načinu prehrane u riba se razlikuju grabežljivci, koji se hrane drugim ribama (štuka, som, lubin), te ribe koje se hrane sitnim beskralježnjacima i biljem (šaran, usnače i dr.). Za vrijeme mriješćenja neke ne uzimaju hranu (losos čak godinu dana). Starost riba može se ustanoviti po krugovima na ljuskama, po kralješcima, nekim kostima glave, slušnim kamencima (otolitima) itd. Ribe žive od jedne do 80 god. (npr. štuka).'
        />
    </>
  )
}

export default Fish
