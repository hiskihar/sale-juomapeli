


let cardIndex = -1;
let lastCardIndex = -1;
let onCooldown = false;

let cardOneInStack = true;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function tryToPickCard() {
    if (!onCooldown) {
        pickCard();
        onCooldown = true;
        setTimeout(() => {
            onCooldown = false;
        }, 1000);
    }
}

function pickCard() {
    const delay = 500;

    lastCardIndex = cardIndex;
    cardIndex = getRandomInt(52);

    if (cardOneInStack) {
        // Change card image
        document.getElementById("card-1-img").src = getCardImagePath(cardIndex);
        document.getElementById("card-name").textContent = getCardName(cardIndex);
        document.getElementById("card-description").textContent = getCardDescription(cardIndex)[0];
        document.getElementById("card-rules").textContent = getCardDescription(cardIndex)[1];
        if (lastCardIndex >= 0) {
            document.getElementById("last-card-name").textContent = `Äskeinen kortti: ${getCardName(lastCardIndex)}`;
        }
        // Move card 1 to stack-pos
        document.getElementById("card-1-img").className = ''
        document.getElementById("card-1-img").classList.add('stack-pos');
        document.getElementById("card-1-img").classList.add('visible');
        // Move card 2 to under-pos
        document.getElementById("card-2-img").className = ''
        document.getElementById("card-2-img").classList.add('under-pos');

        setTimeout(() => {
            // Move card 2 to start-pos
            document.getElementById("card-2-img").className = ''
            document.getElementById("card-2-img").classList.add('start-pos');
        }, delay)
    } else {
        document.getElementById("card-2-img").src = getCardImagePath(cardIndex);
        document.getElementById("card-name").textContent = getCardName(cardIndex);
        document.getElementById("card-description").textContent = getCardDescription(cardIndex)[0];
        document.getElementById("card-rules").textContent = getCardDescription(cardIndex)[1];
        if (lastCardIndex >= 0) {
            document.getElementById("last-card-name").textContent = `Äskeinen kortti: ${getCardName(lastCardIndex)}`;
        }
        // Move card 2 to stack-pos
        document.getElementById("card-2-img").className = ''
        document.getElementById("card-2-img").classList.add('stack-pos');
        document.getElementById("card-2-img").classList.add('visible');
        // Move card 1 to under-pos
        document.getElementById("card-1-img").className = ''
        document.getElementById("card-1-img").classList.add('under-pos');

        setTimeout(() => {
            // Move card 1 to start-pos
            document.getElementById("card-1-img").className = ''
            document.getElementById("card-1-img").classList.add('start-pos');
        }, delay)
    }
    cardOneInStack = !cardOneInStack
}

function getCardImagePath(index) {
    let path = "cards/"
    path = path.concat("x32/")
    if (cardIndex >= 0) {
        switch (Math.floor(index / 13)) {
            case 0:  path = path.concat("hertta"); break;
            case 1:  path = path.concat("ruutu" ); break;
            case 2:  path = path.concat("risti" ); break;
            case 3:  path = path.concat("pata"  ); break;}
        switch (index % 13) {
            case 0:  path = path.concat("assa"      ); break;
            case 1:  path = path.concat("kakkonen"  ); break;
            case 2:  path = path.concat("kolmonen"  ); break;
            case 3:  path = path.concat("nelonen"   ); break;
            case 4:  path = path.concat("vitonen"   ); break;
            case 5:  path = path.concat("kutonen"   ); break;
            case 6:  path = path.concat("seitseman" ); break;
            case 7:  path = path.concat("kahdeksan" ); break;
            case 8:  path = path.concat("yhdeksan"  ); break;
            case 9:  path = path.concat("kymmenen"  ); break;
            case 10: path = path.concat("jatka"     ); break;
            case 11: path = path.concat("kuningatar"); break;
            case 12: path = path.concat("kuningas"  ); break;}
    } else {
        path = path.concat("pakka");
    }
    path = path.concat("@32x")
    path = path.concat(".png")
    return path
}

function getCardName(index) {
    let name = ""
    switch (Math.floor(index / 13)) {
        case 0:  name = name.concat("Hertta"); break;
        case 1:  name = name.concat("Ruutu" ); break;
        case 2:  name = name.concat("Risti" ); break;
        case 3:  name = name.concat("Pata"  ); break;}
    switch (index % 13) {
        case 0:  name = name.concat("ässä"      ); break;
        case 1:  name = name.concat("kakkonen"  ); break;
        case 2:  name = name.concat("kolmonen"  ); break;
        case 3:  name = name.concat("nelonen"   ); break;
        case 4:  name = name.concat("vitonen"   ); break;
        case 5:  name = name.concat("kutonen"   ); break;
        case 6:  name = name.concat("seitsemän" ); break;
        case 7:  name = name.concat("kahdeksan" ); break;
        case 8:  name = name.concat("yhdeksän"  ); break;
        case 9:  name = name.concat("kymmenen"  ); break;
        case 10: name = name.concat("jätkä"     ); break;
        case 11: name = name.concat("kuningatar"); break;
        case 12: name = name.concat("kuningas"  ); break;}
    return name
}

function getCardDescription(index) {
    let desc = ""
    let rules = ""

    if (cardIndex >= 0) {
        switch (index % 13) {
            case 0:
                desc  = 'Vesiputous';
                rules = 'Kaikki aloittavat juomaan, ja lopettaa saa vasta, kun oikealla puolella istuva pelaaja on lopettanut, tai juoma loppuu. Kortin nostaja saa lopettaa, milloin haluaa.';
                break;
            case 1:
                desc  = 'Ota kaksi huikkaa';
                rules = 'Kortin nostaja juo kaksi huikkaa.';
                break;
            case 2:
                desc  = '1, 2, 3...';
                rules = 'Kortin nostaja juo huikan, vasemmalla puolella istuva kaksi, hänen vasemmallaan kolme ja niin edespäin aina nostajaan saakka.';
                break;
            case 3:
                desc  = 'Jaa neljä huikkaa';
                rules = 'Kortin nostaja jakaa neljä huikkaa haluamilleen pelaajille.';
                break;
            case 4:
                desc  = 'Riimi';
                rules = 'Kortin nostaja sanoo sanan, johon vasemalla puolella istuva keksii riimin, johon taas hänen vasemmallaan ja niin edespäin aina nostajaan saakka. Epäonnistumisesta kolme huikkaa.';
                break;
            case 5:
                desc  = 'Selvin juo kolme huikkaa';
                rules = 'Kaikki pelaajat osoittavat mielestään selvintä pelaajaa. Eniten osoituksia saanut juo kolme huikkaa.';
                break;
            case 6:
                desc  = 'Kategoria';
                rules = 'Kortin nostaja keksii kategorian ja sanoo asian tästä kategoriasta. Edetään vasemmalle ja jokaisen on sanottava kyseiseen kategoriaan liittyvä asia. Epäonnistumisesta kolme huikkaa.';
                break;
            case 7:
                desc  = 'Sääntö';
                rules = 'Kortin nostaja keksii säännön, jota jokaisen tulee noudattaa tai poistaa halutessaa yhden aikaisemman säännön. Säännön rikkomisesta rangaistuksena kaksi huikkaa.';
                break;
            case 8:
                desc  = 'Kaikki juovat kolme huikkaa';
                rules = 'Kaikki pelaajat juovat kolme huikkaa.';
                break;
            case 9:
                desc  = 'Kysymysmestari';
                rules = 'Kortin nostajasta tulee kysymysmestari ja mahdollinen vanha kysymysmestari luopuu tittelistään. Jos kysymysmestarin kysymykseen vastaa, joutuu juomaan kaksi huikkaa.';
                break;
            case 10:
                desc  = 'Kortin nostajan viereiset pelaajat juovat kaksi huikkaa';
                rules = 'Kortin nostajan vasemmalla ja oikealla puolella istuvat pelaajat juovat kaksi huikkaa.';
                break;
            case 11:
                desc  = 'Lammas';
                rules = 'Kortin nostaja valitsee pelaajan, josta tulee hänen lampaansa. Lammas joutuu juoda aina yhtä monta huikkaa, kuin kortin nostaja. Lampaita saa ketjuttaa halutessaan.';
                break;
            case 12:
                desc  = 'Sauli "Sale" Niinistö';
                rules = 'Viimeinen pelaaja, joka huutaa "Sale" häviää, ja juo. Sanan sanomatta jättämisestäkin häviää.';
                break;
        }
        switch (index) {
            case 39:
                desc  = 'Kellotus';
                rules = 'Kaikki kellottavat eli juovat juomansa loppuun mahdollisimman nopeasti. Aikaa saa ottaa.';
                break;
            case 2:
                desc  = 'Välivesi';
                rules = 'Välillä on hyvä muistaa juoda vettä. Juokaa siis vettä.';
                break;
        }
    } else {
        desc  = 'Korttipakka'
        rules = 'Paina nostaaksesi kortin.'

    }
    return [desc, rules]
}
