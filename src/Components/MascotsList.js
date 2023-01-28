import React from 'react';
import './Mascots.css';
import Mascots from './Mascots';
import Kroko from '../Assets/Avatars/kroko-sm.png';
import Gracija from '../Assets/Avatars/gracija.png';
import Amanda from '../Assets/Avatars/amanda.png';
import Stipe from '../Assets/Avatars/stipe-sm.png';
import Leoplod from '../Assets/Avatars/leopold-znak.png';


function MascotsList() {
  return (
    <section className='mascots'>
        <Mascots 
            cName= 'des'
            heading= 'Kroko'
            text= 'Bok, ja sam Kroko, najzabavniji krokodil u cijeloj močvari. Volim jedriti na dasci, plivati, plesati i pjevati. Gdje god da se pojavim, skupi se ekipa i uvijek je veselo. Pridruži nam se! '
            alt='Kroko'
            image={Kroko}        
        />

        <Mascots 
            cName= 'des-revers'
            heading= 'Gracija'
            text= 'Moje ime je Gracija, imam duge noge i još dulji vrat. Kažu da sam baš ljupka žirafa. Dođi da se slikamo zajedno!'
            alt='Gracija'
            image={Gracija}        
        />

        <Mascots 
            cName= 'des'
            heading= 'Amanda'
            text= 'Bok, ja sam panda Amanda. Imam meko krzno i crne flekice oko očiju. Ako me želiš razveseliti, pokloni mi knjigu. Jako volim čitati i učiti i strašno sam radoznala.'
            alt='Amanda'
            image={Amanda}        
        />

        <Mascots 
            cName= 'des-revers'
            heading= 'Stipe'
            text= 'Bok, ja sam Stipe, galeb s toplog juga. Lako ćeš me prepoznati, uvijek se ljuljuškam na valu i sunčam na suncu. Najdraže godišnje doba mi je ljeto, kad nema škole i dani su dugi.'
            alt='Stipe'
            image={Stipe}        
        />

        <Mascots 
            cName= 'des'
            heading= 'Leopld'
            text= 'Ja sam lav Leopold, kralj svih životinja. Prepoznat ćeš me po raskošnoj grivi i kruni od zlata. Oprosti mi ako zijevnem – od jutra do mraka se brinem za sve stanovnike u svom kraljevstvu i zato sam malko umoran.'
            alt='Leopold'
            image={Leoplod}        
        />

    </section>
  )
}

export default MascotsList
