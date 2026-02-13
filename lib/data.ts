// Navigation data
export const navigation = [
  { name: "Home", href: "/" },
  { name: "Flight Schedule", href: "/flight-schedule" },
  {
    name: "Ziyaraah",
    items: [
      { name: "Makkah", href: "/ziyaraah/makkah" },
      { name: "Madinah", href: "/ziyaraah/madinah" },
      { name: "Taif", href: "/ziyaraah/taif" },
      { name: "Badr", href: "/ziyaraah/badr" },
    ],
  },
  { name: "Du'a", href: "/doua" },
  { name: "Contact Us", href: "/contact" },
  // { name: "Admin", href: "/admin" },
  {
    name: "Hotel Location",
    href: "/hotels"
  },
];

// Contact / Guide data
export const guides = [
  {
    name: "Sheikh Ahmad Al-Farsi",
    role: "Head Guide - Group A",
    phone: "+966501234567",
    avatar: null,
  },
  {
    name: "Br. Yusuf Hassan",
    role: "Assistant Guide - Group A",
    phone: "+966507654321",
    avatar: null,
  },
  {
    name: "Sheikh Omar Bakri",
    role: "Head Guide - Group B",
    phone: "+966509876543",
    avatar: null,
  },
  {
    name: "Br. Ibrahim Malik",
    role: "Assistant Guide - Group B",
    phone: "+966502345678",
    avatar: null,
  },
  {
    name: "Sr. Fatima Zahra",
    role: "Ladies Coordinator",
    phone: "+966508765432",
    avatar: null,
  },
  {
    name: "Br. Khalid Noor",
    role: "Emergency Contact",
    phone: "+966503456789",
    avatar: null,
  },
];

// Flight schedule data
export const flights = [
  {
    departureDate: "15 Mar 2026",
    departureTime: "08:30",
    flightNumber: "SV 812",
    groupRep: "Sheikh Ahmad Al-Farsi",
  },
  {
    departureDate: "15 Mar 2026",
    departureTime: "11:45",
    flightNumber: "SV 814",
    groupRep: "Sheikh Omar Bakri",
  },
  {
    departureDate: "28 Mar 2026",
    departureTime: "14:00",
    flightNumber: "SV 821",
    groupRep: "Sheikh Ahmad Al-Farsi",
  },
  {
    departureDate: "28 Mar 2026",
    departureTime: "17:30",
    flightNumber: "SV 823",
    groupRep: "Sheikh Omar Bakri",
  },
];

// Hotels data
export const hotels = [
  {
    name: "Nawarat As Shams 3",
    city: "Makkah",
    address: "Ibrahim Al Khalil St, Makkah, Saudi Arabia",
    lat: 21.4195,
    lng: 39.8235,
    description: "Located in the heart of Makkah, just minutes from Masjid al-Haram. The hotel offers comfortable accommodation for pilgrims with easy access to all holy sites.",
    other: {
      name: "Diwan Al Madinah",
      city: "Madinah",
    }
  },
  {
    name: "Diwan Al Madinah",
    city: "Madinah",
    address: "Central Area, Madinah, Saudi Arabia",
    lat: 24.4686,
    lng: 39.6112,
    description: "Conveniently situated near Al-Masjid an-Nabawi, providing a peaceful stay for pilgrims visiting the Prophet's city.",
    other: {
      name: "Nawarat As Shams 3",
      city: "Makkah",
    }
  }
];

// Ziyaraah data
export interface ZiyaraahPlace {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface ZiyaraahCategory {
  name: string;
  slug: string;
  places: ZiyaraahPlace[];
}

export interface ZiyaraahCity {
  name: string;
  slug: string;
  image: string;
  categories: ZiyaraahCategory[];
}

export const ziyaraahData: ZiyaraahCity[] = [
  {
    name: "Makkah",
    slug: "makkah",
    image: "/images/makkah-city.jpg",
    categories: [
      {
        name: "Haram",
        slug: "haram",
        places: [
          {
            name: "Baab ul Fatah",
            slug: "baab-ul-fatah",
            description: "Sa l’ouverture à Ka’bah là connu comme Bab ul-Fatah (La Porte de la Victoire). C’était depuis là ki Nabi e Kareem ﷺ ti rentrer pendant la conquête de Makkah le vendredi, 20 Ramadhan 8 AH.<br><br>Kan l’armée Musulmans ti vine vers Makkah, zot ti en premier arretés à Dhu Tuwa, pas loin depuis cité là mais dans so vue. Kan Qaswa so chameau ti areté, le Prophète ﷺ ti baisse so la tête ziska ki so la barbe tousse so selle, en gratitude à Allah.<br><br>Nabi e Kareem ﷺ ensuite ti rassemblé so troupes pou rentre dans Makkah. Khralid bin Waleed (رضي الله عنه) ti pren commande koter droite et ti rentre par parti bas de Makkah. Zubair (رضي الله عنه) ti pren commande koter gauche et ti rentre par parti haut de Kada. Centre de l’armee ti divisé en deux; la ti moitié dirigé par Sa’d bin Ubadah (رضي الله عنه) et so garçon, et lot la moitié, dans lakel le Prophète ﷺ li mem ti à cheval, ti dirigé par Abu Ubaidah bin Jarrah (رضي الله عنه) ki ti commande l’infanterie. La surprise absolue de l’attaque ti shock ban Quraysh et bien tigite resistance ti faire contre bannes Musulmans.<br><br>Rapporté ki Ali, petit fils de Nabi e Kareem ﷺ à travers so tifille Zainab (رضي الله عنه), ti assizé avec  le Prophète ﷺ lor le dos chameau pendant l’entrée triomphale dans Makkah.<br><br>Ene la tente rouge ti meter pou Nabi e Kareem ﷺ dans lakel li ﷺ ti faire wudhu (ablution) et ti faire huites rakahs namaz nafil, après koi li ﷺ ti reposer pou ene une heure temps ou plis. Ensuite li ti appel Qaswa, et après ki lin met so cotte de mailles et helmet, li ﷺ ti pren so l’épée; mais dans so la main li ti saryer ene bâton, et so viseur ti en haut. Certains ki ti à cheval ek li ﷺ sa matin la ti déjà dans la ligne en dehors la tente, et zot ti faire escorte pou li ﷺ le temps li ﷺ ti ale vers Haram, en parlant à Abu Bakr (رضي الله عنه), ki ti à so koter.<br><br><br>Nabi e Kareem ﷺ ti ale vers Ka’bah et ti faire tawaf.  Autour Ka’bah ti ena trois cents soixantes idoles. Avec ene bâton li ﷺ ti p saryer li ﷺ ti renverse zot, en disant:<br><br>‘’Et dire, ‘’Verité in vini, et fausseté in disparaître. Certainement fausseté (par nature) li tout le temps obliger pou aler.’’<br>Qur’aan 17:81<br><br>‘’Dire, ‘’La verité in vini, et fausseté pa capave ni commencer (nerporte ki kitsoz) et ni repeter (sa kitsoz la).’’<br><br>Qur’aan 34:49<br><br>Après circumambulation Nabi e Kareem ﷺ ti déssane de so chameau et ti faire salah à Maqame Ebrahim, ensuite ti boire depuis puit Zamzam. Li ﷺ ti ensuite demane la clefs à Ka’bah et ti rentre endans pou ene moment. Le temps ki lin sorti bannes Quraysh ti rempli Haram, en attendant anxieusement pou gueter ki li ﷺ pou faire après.<br><br>Nabi e Kareem ﷺ ti deboute kot la porte Ka’bah, en attrapant so bordière et ti koze longuement à so bannes anciens persécuteurs ki ti soumet zot à lui ﷺ, en expliquant plusieurs la lois islamiques et en abrogeant tous bannes pratiques pagans. Ensuite li ﷺ ti deman zot, ‘’Hommes de Quraysh! Ki zot penser mo pou faire à zot?’’ Zot ti dire, ‘’Nous espére le meilleur. To ene frère noble et garçon de ene frère noble!’’. Le Prophète ﷺ ti répone, ‘’Mo dire zot séki Yusuf ti dire so bannes frères, ‘Pas de reproche pou lors zot sa jour là.’ Faire zot chemin, zot libre.’’<br><br>Nabi e Kareem ﷺ ti ordonne Bilal (رضي الله عنه) pou grimpe lors toit de Ka’bah et donne adhan (racconté ki le Prophète ﷺ li mem ti offert so zépaules pou Bilal (رضي الله عنه) monter depuis). Ti premier fois ki bannes dirigeants de Quraysh ti tanne parole Allah retenti; vallée Makkah ti résonne avec le son.<br><br>Bocou membres éminents de Quraysh, anciens enemis acharnés, ti rentre dans l’Islam sa jour là incluant Abu Sufyan et so madame Hind ki pendant la bataille de Uhud ti masse le foie de Hamza (رضي الله عنه).<br><br>Localité de Bab ul-Fatah dans Masjid al-Haram",
            image: "/images/ziyaraah/baab-ul-fatah.jpg",
          },
          {
            name: "Dar Ul Arqam",
            slug: "dar-ul-arqam",
            description: "Sa partie au pied de Montagne Safa c’est partie approximative kot Daarul Arqam (Lakaz de Arqam (رضي الله عنه)) ti été. C’était là dans période initiale de l’Islam ki le Prophète ﷺ secrètement ti prêche l’Islam<br><br>Arqam (رضي الله عنه)Lakaz là ti appaternir à ene Sahabi appelé Arqam bin Abil Arqam (رضي الله عنه). Li ti ena plusieurs lakazes lor so propriété, et li ti donne sanla comme ene centre secret pou propagation. Li ti situé au Nord bas de Montagne Safa, avec au moins ene la porte cachiète depuis vues bannes voisins<br><br>Arqam (رضي الله عنه) ti seulement entre 12-16 ans kan li ti embrace l’Islam ki li ti gardé en secret. Lakaz là ti ene héritage depuis so papa. Li ti depuis Bani Makhzum, mem tribu dirigé par Abu Jahal<br><br>Premier ‘Madressa’ en Islam Pou ene certaine le temps après le Prophète ﷺ ti proclame so Nabuwwat, bannes musulmans ti rassemblés là pou faire salah et apran à propos de l’Islam sans peur d’être torturés ou persécutés. Comme li ti ene marche courte depuis Ka’bah et so gro la foule, bannes pagans ki ti reste près pa ti pren compte sa kantiter dimounes ki ti p rassembler la. Li effectivement ti vinne premier Madressa (Ecole Islamique) en Islam<br><br>Révélations Qur’aan Bocou versets de Qur’aan ti révélés là et ti aussi là ki bocou versets Qur’aan ti premier fois être enseignés par le Prophète ﷺ<br><br>C’était là ki sa verset ki suivre là depuis Surah al-Anfal ti révélé: ‘’O Prophète, Allah suffit pou toi, et pou bannes ki suivre toi parmi bannes croyants.’’ [8:64] Conversion de Umar bin Khattab (رضي الله عنه) Bocou dimounes ti embrace l’Islam à Daarul Arqam incluant Ammar bin Yasir et Suhayb bin Sinan (رضي الله عنهم) ki ti embrasse l’Islam ensam. Hamza (رضي الله عنه) aussi ti embrasse l’Islam là, suivi de quelques jours par Umar (رضي الله عنه)<br><br>Kan Umar (رضي الله عنه) ti envi faire so Shahadah (déclaration de croyance en Islam) li ti deman Khabbab (رضي الله عنه) kot li ti pou trouve le Prophète ﷺ. En entendant so désir pou accepter l’Islam, Khabbab (رضي الله عنه) ti dire, ‘’Umar, mo ena l’espoir ki Allah in choisir toi à travers du’ahs So Prophète, ki hier mo ti tanne li faire du’ah: ‘O Allah, renforci l’Islam avec Abu Hakam (Abu Jahal) garçon de Hisham ou avec Umar garçon de Khattab!”. ‘’O Khabbab,’’ Umar dire, ‘’kot Muhammad pou été la, afin ki mo al vers li et rentre dans l’Islam?’’ Khabbab (رضي الله عنه) ti dire li ki li ti dans lakaz de Arqam près ek La Porte Safa avec bocou so bannes Compagnons<br><br>Umar (رضي الله عنه) ti ale vers Safa, tape la porte, et dire kisanla li été. Bannes Sahabahs ti être alertés ki li ti p vini mais zot ti frappés par ton bas so la voix. Ene de bannes Compagnons ti ale vers la porte et gueter à travers ene fentre et ti retourner perturbé. ‘’O Messager d’Allah’’, li dire, ‘’c’est certainement Umar et li ine paré ek so lepée’’. ‘’Laisse li rentrer,’’ Hamza (رضي الله عنه) dire. ‘’si lin vinne avec bon l’intention, nous pou donne li bon kitsoz; et si so l’intention mauvais, nous pou coupe li ek so lepée mem.’’ Le Prophète ﷺ ti d’accord pou laisse li rentrer et, en allant pou zoine li, li ﷺ ti trappe li par so ceinture et ti risse li au milieu la chambre en disant, ‘’Kin amen toi ici, O garcon de Khattab? Mo pa trouve toi arreter ziska ki Allah avoy quelques calamités lor toi’’. ‘’O Messager d’Allah,’’ Umar dire, ‘’Mo in vinne vers toi afin ki mo déclare mo croyance en Allah, et en so Messager et séki lin amener depuis Allah’. ‘’Allahu-Akbar!,’’ le Prophète ﷺ dire, dans tel façon ki tous missiers et madames dans lakaz là in connés ki Umar ti rentre dans l’Islam; et zot tou in contan<br><br>De par courage Umar (رضي الله عنه) ki zot tous ti reconnaître, c’était après so conversion en Islam ki bannes musulmans ti commence faire salah ouvertement et l’Islam ti propagé en publique<br><br>Dar al-Khayzuran Propriété Al Arqam ti plitard vinne connu comme Dar al-Khayzuran, quant à lakaz ki bannes musulmans ti habitiés rassembler avec le Prophète ﷺ ti plitard être converti en ene masjid par al-Khayzuran bt. Ata, madame de Caliph (et la maman de Caliph Harun al-Rashid) ki ti aster sa propriété la.",
            image: "/images/ziyaraah/dar-ul-arqam.webp",
          }
        ],
      },
      {
        name: "Walking Distance",
        slug: "walking",
        places: [
          {
            name: "Jabal al-Nour (Cave of Hira)",
            slug: "jabal-al-nour",
            description: "Jabal al-Hira (Arabic: جبل الحراء) ç’est ene montagne ki trouve environ 2 miles dépi Ka’bah. Près la haut ena ene ti la cave connu comme la cave de Hira (Arabic: غار حراء), ki ene tigite plis tigite ki 4 mètres en longueur et ene tigitie plis ki 1.5 mètres en largeur. Ç‘est là ki le Prophète ﷺ ti gagne premier révélations de Qur’aan Majeed pendant le mois de Ramadhaan en 610 CE. Montagne la aussi connu comme Jabal al-Noor (Montagne de la Lumière) et Jabal al-Islam (Montagne de l’Islam).<br><br>Le Prophète ﷺ al méditer Le Prophète ﷺ ti kumans gagne révélations dans forme de rêves ki ti vin vrai. Ensuite li ti kumans contant la solitude. Li ti pou al la cave de Hira et méditer labas tousel pou ene nombres de jours et nuits. Li ti pou pren provisions avec li pou reste pou ene période étendue, et kan li retourne vers Khadija (رضي الله عنه), li ti pou pren encore et ré al versla cave. Sa ti so pratique ziska la Vérité ti révélée a travers ene Ange kan li ti dans la cave de Hira. <br><br>Premier révélation Qur’aan<br><br>Pendant Tahajjud ene soir, kan Rasoulullah ﷺ ti dans la cave tousel, ene ange ti vine ek li ﷺ  . et ti dire li, ‘’Réciter!’’.’’Mo pa conne lire’’, le Prophète ﷺ finne répone. Ange la ti pren li ene deuxième fois et presse li ziska li ﷺ ti népli capave tini. Après kin largue li, ange la dire encore, ‘’Réciter!’’. Encore ene fois, le Prophète ﷺ fine répone ‘’Mo pa conne lire’’. Ange la ré serre li encore ziska ki li ﷺ  ti arive so limite pou supporter et dire ‘’Réciter!’’pou la troisième fois le Prophète ﷺ dire ‘’Mo pa conne lire’’. Ange la largue li et dire: ‘’Lire au nom de to Rabb, Le Créateur. Celui kin crée humain dépi ene caillot du sang. Lire! Et to Rabb li Généreux. Kin enseigne par la Plume, kin enseinge humain séki li pa ti koner.’’ [96:1-5]<br><br>Sa ti premier jour de Nabuuwat et sa ç’était ban premiers versets Qur’aan ki ti révélés à Rasoulullah ﷺ. Li ti récite sa ban mots la après ange la, ki ensuite ti laisse li ﷺ; et li ﷺ ti dire; ‘’Kumadire ban mots la ti gravés dans mo le coeur.’’ Rasoulullah ﷺ ti bien alarmé par sa l’expérience là et li ti peur ki li ﷺ ti vine possédé.<br><br>Le Prophet ﷺ ti sauvé dépi la cave là, et kan li ti à moitié chemin lor la pente montagne là li ﷺ ti tanne ene la voix là haut li dire: ‘’O Muhammad, to Méssager d’Allah, et moi mo Jibraeel  عليه السلام.  Le Prophet ﷺ ti debouté ek fixé ange là; ensuite li ﷺ ti guette lot koter, mais chaque direction li ti pe gueté ange la ti la, lors même l’horizon, sois li ti vers le nord, l’est, le sud ou l’ouest. Finalement ange la in aler. Le Prophet ﷺ ti peur et so le Coeur ti pe bate fort. Li ﷺ ti retourne vers so madame Khadija (رضي الله عنها) et li ﷺ ti dire, ‘’Couvert moi!’’. Khadija (رضي الله عنها) ti couvert Rasoolullah ﷺ et ti aide li ﷺ pou calmer.<br><br>Qur’aan dire nous ki premier révélation ti desan dans Ramadhaan la ‘Nuit du Pouvoir’. ‘’Le mois de Ramadhaan ç’est le mois dans lakel Qur’aan ti révélé.’’ [2:185] ‘’Nous finne certainement révéle sa message là pendant la Nuit du Pouvoir.’’ [97:1]<br><br>Qur’aan en entier ti révélé lor ene période de approximativement 22 ans, 5 mois et 14 jours.",
            image: "/images/ziyaraah/jabal-e-noor.png",
          },
          {
            name: "Jabal Thawr",
            slug: "jabal-thawr",
            description: "Jabal al-Thawr c’est ene montagne ki ena la cave kot Rasouloullah (SAW) et Abu Bakr (RA) fine cherche refuge depi ban Quraysh pour 3 jours et nuits kan zot ti kit Makkah en secret pou emigrer vers Madinah<br><br>  Kan Rasouloullah (SAW) et Abu Bakr (RA) finn arrive kot la cave dn Jabal al-Thawr, Abu Bakr (RA) finn rentrer en premier pou retire n’importe ki kitsoz ki kpv blesse Rasouloullah (SAW). Li finn trouve quelque bann trou et li finn bousse sa ban trou la avec ban boute la toile. Lerla, Rasouloullah (SAW) finn rentrer, et li finn dormi lor Abu Bakr (RA) so genoux<br><br>  Ene kitsoz fine pique Abu Bakr (RA) so li pied, mais li pa fine fer okene mouvement, attention li pou leve Rasouloullah (SAW). Douleur la ti si tant fort ki larmes fine coumens couler lor so la joue et lor visage de Rasouloullah (SAW). Rasouloullah (SAW) fine lever et fine trouv Abu Bakr (RA) dan douleur. Li fine pass so salive lor blessure la et douleur la fine aller<br><br> Pou 3 nuits consecutifs, le Prophet (SAW) et Abu Bakr (RA) fine reste cachiette dans sa la cave la. Pendant sa periode la, Abu Bakr (RA) so garson, Abdullah, would pass his nights nearby. Abu Bakr so garson ti p retourne Makkah gramatin bien bonheur koumsa ban Quraysh pakoner ki li finn dormi enn lot place. Tous les jours dan Makkah, li ti p ramasse information lor activities de ban Quraysh, et dans la nuit, li ti pe retourne Jabal al-Thawr pou informe Rasouloullah (SAW) et so papa Abu Bakr (RA)<br><br> Abu Bakr (RA) so esclave, Amir bin Fuhayra (RA), ti pe fer Abu Bakr (RA) so ban cabris brouter pres kot la cave la koumsa tou les deux kapav gagne du lait frais pou boire. Lendemain matin bonheur, Amir (RA) ti pe retourne ban cabris la Makkah et li ti pE passe par meme chemin ki Abu Bakr (RA) so garson, pou cachiette Abu Bakr (RA) so garson so empreinte<br><br> Kan zot ti endan dans la cave, Allah (SWT) fine envoye enn zaraigner pou aranz ene lakaz depi enn buisson ziska kot l’entree la cave la. Allah (SWT) fine osi donne l’ordre 2 pigeons pou fly down between the spider and the tree, fer enn nid et ponde dizef. Entretemps, ban Quraysh fine fouille region sud de Makkah kot Prophet (SAW) et Abu Bakr (RA) ti p cachiette. Zot fine vine kot la bouche la cave la, et si zot ti deboute lor bord la cave la et gette enba, certainement zot ti pou trouve Rasouloullah (SAW) et Abu Bakr (RA)<br><br> With the Quraysh so close to discovering their hiding place, Abu Bakr (رضي الله عنه) became very tense about the Prophet’s (ﷺ) safety. The Prophet (ﷺ) reassured him, “How can you be apprehensive about two with whom is a third, especially when the third one is Allah?”<br><br> Kan ban Quraysh finn trouve la caze zaraignee et nid pigeon, zot finn pensee ki persone pa fine kapav rentre dan sa la cave la et sorti. Pou decrire sa scene la, Quran mentionner dan Surah Tawbah: “”[9:40]<br><br> Apre 3 jours, kan zot finn aprane ki ban Quraysh fine fatigue rod zot, zot fine kit la cave la et fine al vers Yathrib (Madinah). Asma (RA), tifi de Abu Bakr (RA) fine apporte manger pou zot, pou sa voyage la. Asma (RA) pa fine trouve naryein pou li kapav attache manger la avek zot la selle, alors li fine largue so ceinture, dechire li en deux, mette la moitie et attache manger la avek lot la moitie. Alors, Rasouloullah (SAW) fine li et fine apel li “”. Et par la suite, ban musulman fine conne li par sa nom la<br><br> L’entree la cave la li pli large ki saki li ti ete dans le passe. Dans environ l’annee 800 AH, enn dimoune ti reste coince dans l’entree la, et ti bizin grandi l’entree la pou kapav libere li. <br><br> Jabal al-Thawr li situe environ 4 km sud de Makkah.",
            image: "/images/ziyaraah/jabal-al-thawr.png",
          },
        ],
      },
      {
        name: "By Bus",
        slug: "bus",
        places: [
          {
            name: "Maison de Aboo Bakr(R.A)",
            slug: "maison-de-aboo-bakr-ra",
            description: 'Ça c’est location approximative kot lakaz de Abu Bakr (رضي الله عنه) ti trouvé dans Makkah et depuis kotsa Hijrah à Madinah ti commencé. Li dans bloque Makkah Towers Hotel, kot ene masjid (Masjid Abu Bakr) in arranzé lor 4ème étage.<br><br>Kan la decision pou assassine le Prophète ﷺ ti faire par bannes Quraysh, Jibraeel (عليه السلام)  ti être envoyé à le Prophète ﷺ pou révéle à li ﷺ plan là et pou donne li ﷺ permission so Créateur pou kite Makkah.<br><br>Kan in gagne commande pou émigrer, le Prophète ﷺ ti ale dans lakaz de Abu Bakr (رضي الله عنه)  à midi kan le soleil brulant ti force bannes dimounes endans. Puisque ti ene le temps pas habituel pou rendre visite, Abu Bakr (رضي الله عنه) ti penser ki émigration in être ordonné. En premier lieu li ﷺ in enquerir si ti ena ene étranger dans lakaz. Kan li ti être informé ki pa ti ena personne dans lakaz là excepté Abu Bakr (رضي الله عنه) et so bannes tifilles,  Asma et Aisha (رضي الله عنهم), li ti révélé ki émigration vers Madinah in certainement être ordonné. ‘’Kisanla pou accompagne ou lors sa voyage la?’’ Abu Bakr (رضي الله عنه) ti demandé. Le Prophète ﷺ ti dire, ‘’To pou accompagne moi.’’ Kan in tanne sa, larmes de joies ti coule depuis liziés Abu Bakr (رضي الله عنه) et li ti dire, ‘’O Prophete d’Allah! Mo in fini aster deux chamelles pou sa démarche la et in faire zot fort et lourd, et mo donne ou ene.’’ Le Prophète ﷺ ti dire, ‘’Mo pou acheter li.’’<br><br>Alors lin paie pou li et Abu Bakr (رضي الله عنه) ti accepté li. Et depuis sa moment là, préparations pou émigration in commencé. Asma (رضي الله عنها) in faire provisions pou zot de l’orge et les autres types de nourriture, Aisha (رضي الله عنها) ti à sa moment lé encore tres jeune. Après ki in dire Abu Bakr (رضي الله عنه) plan là, le Prophète ﷺ ti retourne so lakaz.',
            image: "/images/ziyaraah/aboo-bakr-house.png",
          },
          {
            name: "Jannat Ul Mu'alla",
            slug: "jannat-ul-mualla",
            description: "Sa foto la haut la montrer Jannatul Mu’alla, qabarastaan principale historique de Makkah ki situé à vallée l’est de Masjid al-Haram. Plusieurs membres de la famille du Prophète ﷺ et bocou ban Sahabah (رضي الله عنهم) entérés ici.<br><br>Sa bannes personalités suivants la entérés dan sa qabarastan la:<br><br>Ummul Mu’mineen Khadija (رضي الله عنها), premier madame du Prophète ﷺ<br><br>Qasim, pli grand garcon du Prophète ﷺ depuis so madame Khadija (رضي الله عنها); lin intekaal dans so l’enfance.<br><br>Abdullah, deuxième garcon du Prophète ﷺ depuis so madame Khadija (رضي الله عنها); li ti aussi connu comme Tahir et Tayyab.<br><br>Abu Talib - l’oncle du Prophète ﷺ<br><br>Abdul Muttalib - Dada du Prophète ﷺ",
            image: "/images/ziyaraah/Jannatul-Mulla.jpg",
          },
          {
            name: "Qabarastaan Al Shabeka",
            slug: "qabarastaan-al-shabeka",
            description: "Qabarastan Al-Shabeka trouve sud-ouest de Masjid al-Haram, près ek nouvo éxtension le roi Abdullah. Avant l’arrivée de l’Islam, quelques de ban Arabes pagan ti habitier pratique l’act ignorant enterrement de zot tifi vivant, par croire ki zot ene signe de dehonneur. Fine mentionné ki zot in être enterés dans qabarastan Al-Shabeka. Aussi rapporté ki Sumayyah (عنها الله رضي) enterée ici. Li ti premier dimoune ki finne shaheed dans cause de l’Islam.<br><br> La pratique de enterre tifille vivant dans société Makkah pré-islamique Ene parmi mauvais pratiques de la sociéte pré-islamique ti entere vivant premier née si li ti ene fille. L’élite pa ti pe faire sa, parksi zot madames ti ena plis statut ki mem ban missiers moyen/bas class sociale. Sa ti arrivé principalement dans moyen à bas classe sociale.<br><br>Si zot premier née ti ene fille, zot ti pou entere li vivant comme ene offrande à zot bondiés pagans. Li ti être vue comme ene fardeaux, bizin grandi et ensuite donne en marriage. Allah mentioner dans Qur’aan la réaction de ban papas en entendant la naissance de ene fille:<br><br>‘’Quand ene parmi zot ti être annoncé de ene bon nouvel de naissance ene bebée fille, so figir ti assombrit , pendant ki li ti pe suppresse so la rage. Li cachiette li mem de ban dimounes par sa mauvias nouvel ki li ti gagné la. Eski li bizin garde li en dehonneur, ou enterre li vivant dans la terre? Mauvais certainement zot jugement!’’ Surah an-Nahl 16:58-59<br><br>Le jour de la résurrection tifi innocent la pou être demandé la raison ki li fine être tuée. Li pou dire séki in passer kuma li ti traitée cruellement par so parents barbares et enterée vivant.<br><br>‘’Et quand tifi ki ti enterée vivant être demandée pou ki pêché li ti être tuée’’ Surah At-Takwir 81:8-9<br><br>Le ‘Hanif’ Zayd Ibn Amr ibn Nufail Parmi société Makkah, ti ena ene vié home ki ti apel Zayd ibn Amr ibn Nufail, ti  mem être regardé comme personne bizarre, li ti être respecté parmi Quraysh. Li ti parmi ‘Hunafa’, dimoune ki ti rejette l’adoration idols et ti croire dans l’unique, vrai, bondié. Zayd souvent ti pou dire, ‘’Mo bondié cest bondié de Ibrahim. Mo être Divine ç’est être divine de Ibrahim. Mo réligion ç’est réligion Ibrahim. Sa mem tou mo koner.’’<br><br>Zayd ti pe ale dans les environs, essaye empêche sa ban tifilles la être enterée vivant. Si li ti tande ene couple ki récemment in donne naissance à ene premier né fille et ban parents la ti pe intenté pou touille bébé la, Zayd ti pou intervenir et dire ban parents la, ‘’ Écoutez, si zot pa oulé sa tifille la, zis donne moi li. Zot pena pou tracasser à propos li dorénavant. Zot capave considère li mort ou enterée vivant ou séki zot oulé. Zis laisse moi prend soin de li. S’il vous plaît pa touille sa zenfant innocent la.’’<br><br>Zayd ti pe pren soin ban tifilles la, li mem ou soit trouve ene lot kikaine pou prend soin ban tifilles la. Dans sa façon la, ti être dit ki li finne sauve des centaines de filles.<br><br>Sumayyah Bint Khabbat (R.A) Sumayyah Bint Khabbat (عنها الله رضي) ti ene parmi ban premier convertis vers l’Islam. Née comme esclave, li plitard in gagne liberté et in marrié Yasir Ibn Amir (رضي الله عنه) ki ti vini depuis Yemen.<br><br>Zot garcon Ammar ti accepté l’Islam à travers Abu Bakr (رضي الله عنه) et li ti pou sorti tranquille asoir pou asize avec le Prophète (ﷺ) et faire salah avec li dans Daarul Arqam. So parents finne rémarque so l’absences et ti bien tracassés de répercussions so l’acceptation de l’Islam si fine être découvert per ban Kuffaar. Ammar (رضي الله عنه) ti servi sa l’opportunité là pou donne zot da’wah. Li ti partaz ek zot Qur’aan et le méssage du Prophet (ﷺ), tous les deux ti touché profondément et fine aussi acceptés l’Islam depuis le Prophète (ﷺ). Sumayyah (رضي الله عنها) ti ene parmi ban premier pou ouvertement montrer so l’Islam.",
            image: "/images/ziyaraah/shabeqa.jpg",
          },
          {
            name: "Masjid Jinn",
            slug: "masjid-jinn",
            description: "Masjid Al-Jinn (arabe: مسجد الجن) arranzé dans place kot le Prophète ﷺ ti récite Qur’aan à ene groupe de Jinn.<br><br>Abdullah bin Mas’ood (رضي الله عنه) racconter, ‘’À Makkah, le Prophète ﷺ ene fois ti dire à bannes Sahabahs (رضي الله عنهم), ‘’Celui ki envi pou trouve kuma Jinn été ki li vinne ensam’’. Aparte mo meme, personne pan vini. Kan lin arrive place dans district Ma’la de Makkah le Prophète ﷺ ti servi so lipied pou dessine ene cercle lors la terre. Li ﷺ ensuite ti donne moi instruction pou assise endans sa cercle là. Apres ki lin avance imper devant, le Prophète ﷺ ti commence lire Qur’aan. Par la suite Jinn in commence arriver par troupes kan zot in rassemblés là. Sitant bocou in vini ki mo pa ti pe capave mem trouve le Prophète ﷺ ni tanne li ﷺ. Le Prophète ﷺ ensuite in contigner koz ek ene groupe de zot ziska Fajr.  [Tafseer ibn Kathir]<br><br> Aussi rapporté par Abdullah bin Mas’ood (رضي الله عنه) ki le Prophète ﷺ ti dire, ‘’Ene annoceur depuis jinn ti vine vers moi, et mo ti ale ek li et récite Qur’aan à zot.’’ Li racconter encore ki le Prophète ﷺ ti pren zot et montrer zot zot pas et traces de zot diffés. Zot in demane li ﷺ provision et li ﷺ in faire du’ah à Allah et in dire zot, ‘’Zot pou gagne toue les os lors ki nom Allah in mentioné; kan li pou tombe dans zot la mains li pou ena plein la viande lors li. Et tous excréments nourritures pou zot zanimaux.’’ Ensuite le Prophète ﷺ ti dire, ‘’Pas servi zot (les os ek excréments) pou nettoye zot après ki zot in faire zot besoin, parski zot manzer pou zot frères.’’ [Saheeh Muslim]<br><br>Masjid al-Jinn aussi connu comme Masjid Haras.",
            image: "/images/ziyaraah/masjid-jinn.png",
          },
          {
            name: "Jabal Abu Qubais",
            slug: "jabal-abu-qubais",
            description: "Jabal Abu Qubais (Arabic: جبل أبو قبيس) ç’est ene montagne akoter Masjid al-Haram. Finne etre dit ki ç’est depuis le haut de sa montagne là ki le Prophète ﷺ ti pointe vers la lune et ti sépare li en deux.<br><br>Muraille l’ouest de Jabal Abu Qubais (faisant face à Ka’bah) ti appel ‘Fadih’. Montagne là ti aussi connu comme ‘al-Amin’, ene mot arabe ki veut dire ‘le digne de confiance’ ki servi pou décrire ene personne so charactère honorable, mais ki capave être compris pou veut dire le ‘gardien’.<br><br>Sa nom la ti gagné depuis la tradition ki sa montagne là ti protège Hajar al-Aswad (la Roche Noire de Ka’bah) kan l’inondation dans l’époque le Prophète Nuh (عليه السلام) ti traverse Makkah, en écrasant li ek Ka’bah. Jabal Abu Qubais, cru par certain pou être le premier montagne à être crée par Allah raconté dans plusieurs registres comme le dernier place d’encrage de Hajar al-Aswad pendant sa évènement catastrophique là. Lerla, comme ban registres là confirmer, ene fois Ebrahim (عليه السلام) ti être guidé vers place kot fondations Ka’bah été et ti par la suite engagé dans reconstruire li, li ti de nouvo guidé kot Hajar al-Aswad ti été lor montagne Abu Qubais. Li ti ensuite être informé ki ç’était ene roche ki ti dessan depuis Jannah (Paradis) et li ti être dit kotsa li bizin être place lor Ka’bah.<br><br><br><br>Les autres narrations mentioner ki ange Jibraeel (Gabriele) (عليه السلام) ti enlève roche la kan l’innondation ti arriver, et ensuite plitard ti dessan pou donne roche là à Ebrahim (عليه السلام). Si tous les deux narrations assez fort pou être authentique, ou ena support depuis hadith authentique, lerla li paraître ki séki veut dire c’est ki Jibraeel (عليه السلام) ki ti soulève roche là depuis Ka’bah et ti place li en sécurité dans Jabal Abu Qubais. Ensuite, kan Ebrahim (عليه السلام) ti être commandé generations plitard pou reconstruire Ka’bah lor so fondations d’origines, Jibraeel (عليه السلام) lerla ti dessan et ti montré Ebrahim (عليه السلام) kot Roche Noire là ti été.<br><br>Quand à nom Abu Qubais, narrations dire ki dans commencement l’ère pré-islamqiue, ene dimoune ki ti appel Qubais ti le premier pou arranz ene lakaz lor sa montagne là, alors montagne là ti appele Abu Qubais de par so nom.<br><br>Gouverneur Umayyad Hajjaj bin Yusuf ti lance ene catapult depuis le sommet de montagne Abu Qubais lors Ka’bah pendant l’assaut de Makkah en 691 CE. Sa ti résulte par la mort de Abdullah bin Zubair (رضي الله عنه).<br><br>Pendant le regne de Caliph Harun al-Rashid (786-809 CE), Abdallah bin Malik al-Khuza’I ti érige plusieurs minarets lors montagne Abu Qubais et les autres montagnes afin ki l’adhan (l’appel à la prière) capave être entendu à travers Makkah. Ça ç’était parski certains résidents de la vallée ti faire complainte ki zot ti rate certains salaahs akoz zot pa ti capave tende son adhan.<br><br>Ene palaix royale actuellement existe lors sommet montagne là.",
            image: "/images/ziyaraah/jabal-abu-qubais.png",
          },
        ],
      },
    ],
  },
  {
    name: "Madinah",
    slug: "madinah",
    image: "/images/madinah-mosque.jpg",
    categories: [
      {
        name: "Masjid Nabawi (S.A.W)",
        slug: "masjid-nabawi-saw",
        places: [
          {
            name: "Maison de Hafsa (R.A)",
            slug: "maison-de-hafsa-ra",
            description: "Sa c’est place approximative kot lakaz de Hafsa (رضي الله عنها) ti été. Li ti madame du Prophète ﷺ et tifille de Umar (رضي الله عنه). Li situé directement devant Rawdah Mubarak.",
            image: "/images/ziyaraah/hafsa-house.png",
          }
        ],
      },
      {
        name: "Walking Distance",
        slug: "walking",
        places: [
          {
            name: "Jardin de Saqeefah",
            slug: "jardin-de-saqeefah",
            description: "Situé a 200 metre a l’ouest de Masjid-e-Nabawi, Jardin de Saqeefah ti appartenir a Banu Sa’edah et c’est laba mem ki ban Musulman ti reuni pou decider kisanla pou vinn Khalifa après ki le Prophete (SAW) fine inteqaal. Actuellement c’est ene librairie.<br><br> <br><br>Confusion reined among the Sahabah as a result of the devastating impact of the death of the Prophet (ﷺ) and the most significant dispute that arose was choosing the Prophet’s (ﷺ) successor. Ali (رضي الله عنه) thought that he was within his rights to succeed the Prophet because he had been close to him from the beginning of his mission. He withdrew to his house with Talha and Zubair (رضي الله عنهم). The Ansar (Helpers) had gathered at Saqeefah Banu Sa’edah to discuss the question of succession and felt that it should be one of them as they had protected Islam and offered a home for the Prophet (ﷺ) and his companions when they were persecuted by their own people.<br><br>When news of this dispute reached Abu Bakr and Umar (رضي الله عنهم), they rushed from Masjid-e-Nabwi to Saqeefah Banu Sa’edah accompanied by a group of Muhajireen (Emigrants). The Ansar were on the verge of pledging allegience to Sa’d ibn Ubadah (رضي الله عنه). They re-iterated the right of the Ansar to the leadership of the Muslims but Abu Bakr (رضي الله عنه) spoke about the gravity of the problem. He pointed out that the matter did not concern the citizens of Madinah alone; it was a matter of concern for all the Arabs who had become Muslims, who were not likely to accept the leadership of the Ansars, particularly when there were differences among the two principal tribes of the Ansars themselves.<br><br> Abu Bakr (رضي الله عنه) pointed out that under the circumstances the Quraysh, who were the custodians of the Ka’bah could alone provide the leadership for the Muslim community. Addressing his appeal to the Ansar he said: “O Ansar, none can deny the superiority of your position in religion or the greatness of your eminence in Islam. You were chosen by Allah as the helpers of His religion and His Apostle. To you the Prophet (ﷺ) was sent on his emigration from Makkah and from you come the majority of his companions and his wives. Indeed in position you are next only to the earliest companions. Therefore it would be fair if we take the Caliphate and you accept the ministry. You should not be obstinate in your stand. We assure you that we will do nothing without consulting you.”<br><br>Abu Bakr (رضي الله عنه) then caught the hand of Umar and Abu Ubaidah bin Jarrah and said, “I choose either of these two to be our Amir”. “One Amir from among us and one from among you,” someone from among the Ansar suggested. People began to raise their voices until finally Umar (رضي الله عنه) intervened saying, ”O Helpers, know ye not that the Messenger of Allah ordered Abu Bakr to lead the prayer?”. “We know it,” they answered, and he said: “Then which of you will willingly take precedence over him?”. “Allah forbid that we take precedence over him!” they said whereupon Umar (رضي الله عنه) seized the hand of Abu Bakr (رضي الله عنه) and pledged allegiance to him, followed by Abu Ubaidah (رضي الله عنه) and others of the Emigrants who had now joined them. Then all the Helpers who were present likewise pledged their allegiance to Abu Bakr (رضي الله عنه). Only Sa’d ibn Ubadah (رضي الله عنه) did not offer allegiance.<br><br> Whatever they had decided in the hall, it would have been unacceptable for anyone to have led the prayers in Masjid-e-Nabwi other than Abu Bakr (رضي الله عنه) so long as he was there. The next day at dawn, before leading the prayer, he sat in the pulpit and Umar (رضي الله عنه) rose and addressed the assembly, bidding them pledge their allegiance to Abu Bakr, whom he described as “the best of you, the Companion of Allah’s Messenger, the second of two when they were both in the cave.” A recent Revelation of the Quran had recalled the privilege of Abu Bakr (رضي الله عنه) to have been the Prophet’s sole companion at this crucial moment; and with one voice the whole congregation swore allegiance to him – all except Ali (رضي الله عنه), who did so later.<br><br>Some months later, Ali (رضي الله عنه) said to Abu Bakr (رضي الله عنه): “We know well thy pre-eminence and what Allah has bestowed upon thee, and we are not jealous of any benefit that He hath caused to come unto thee. But thou didst confront us with a thing accomplished, leaving us no choice, and we felt that we had some claim therein for our nearness of kinship unto the Messenger of Allah.” Then Abu Bakr’s (رضي الله عنه) eyes filled with tears and he said: “By Him in whose hand is my soul, I had rather that all should be well between me and the kindred of Allah’s Messenger than between me and mine own kindred”; and at noon that day in the masjid he publicly exonerated Ali for not yet having recognised him as Caliph, whereupon Ali (رضي الله عنه) affirmed the right of Abu Bakr (رضي الله عنه) and pledged his allegiance to him.",
            image: "/images/ziyaraah/jardin-de-saqeefa.jpg",
          },
          {
            name: "Jannat ul Baqee",
            slug: "jannat-ul-baqee",
            description: "Jannat ul Baqee veut dire ‘Jardins de L’au dela’, c’est sa meme Qabarastaan principale de Madiinah. Beaucoup membres famille de Rasoulullah (saw) fine enterer ici, a peu pres dix milles companions de Nabi (saw), et beaucoup personalites pieux aussi fine enterer.<br><br>Premier personne ki fine etre enterer dan Baqi c’est As’aad bin Zaraara (R.A) , ene Ansaari ki fine inteqaal zis apres l’immigration du Prophete (SAW) a Madinah. Rasouloullah (SAW) finn choisir pou sa place la vinn enn qabarastaan. Premier de ban Muhajiroun ki finn enterrer laba, c Uthman bin Mazoun (RA), ki finn inteqaal enn ti p letemp apre ki le Prophete (SAW) finn retourne dpi bataille de Badr.<br><br>Parmi ban personalite nobles ki finn etre enterrer a Jannatul Baqee c’est: tentes de Rasoulullah (SAW) Safiyyah bint Abdul Muttalib et so soeur Aatika (RA).<br><br> Ban madames du Prophet (SAW), aussi connu comme mamans de ban croyants. Zot noms c Aisha bint Abu Bakr, Sawdah bint Zamaa, Hafsa bint Umar, Zainab bint Khuzaymah, Juwairiyah bint Harith, Umm Habibah bint Abu Sufyan, Safiyyah bint Hayy al Akhtab, Zainab bint Jahash, Umme Salamah bint Abu Umama (RA). Deux madames ki pa finn etre enterrer ici (a Baqi) c Khadijah bint Khuwaylid (RA) ki finn etre enterrer a Makkah et Maymuna bint al-Harith (RA) ki finn etre enterrer a Sarif.<br><br>Bann filles du Prophet (SAW): Fatima, Ruqayyah, Zainab et Umme Kulthum (RA).<br><br>Lezot bann famille proches du Prophet (SAW) ki finn etre enterrer a Baqi c so chacha Abbas bin Abdul Muttalib, Hasan bin Ali bin Abi Taleb, Zainul Abideen bin Husain bin Ali, Muhammad al-Baqir bin Zainul Abideen and Jafar bin Muhammad al-Baqir (RA). Zot finn etre enterrer pres avek Fatima (RA).<br><br>Imam Malik et so professeur Imam Nafi’ bin Abi Nu’aym (RA)<br><br>Ebrahim (RA),  enfant bebe de Rasoulullah (saw) a travers Maria Al- Qibtiyya (رضي الله عنها)<br><br>Uthman (RA), troisieme caliph et gendre du Prophète (SAW). Li finn inteqaal dan l’annee 656 AH.<br><br>Haleemah Sa’diya, nourrice du lait du Prophete (SAW)",
            image: "/images/ziyaraah/baqi.webp",
          },
          {
            name: "Masjid Sabaq",
            slug: "masjid-sabaq",
            description: "Sa c’est place approximative kot Masjid Sabaq ti été. Dans l’époque le Prophète ﷺ chevals ti p entrainés pou la guerre pour la cause d’Allah. Masjid la ti enlevé dans redéveloppement de Madinah.<br><br>Place kot masjid la ti été c’est à peu pres 520m nord-ouest de Masjid-e-Nabwi.<br><br>D’apres certains récits sa place là ti kot bannes Sahabahs ti pou zouer avoye la peau melondon lors saken et kot le Prophète ﷺ et Aisha (رضي الله عنها) ti pou parfois faire le course.<br><br>Sa place là ti point commencement le course ki ti ena deux points d’arrivés, le premier étant à la localité de Banu Zuraiq (près ek Masjid Ghamama) et plus loin ene à Hafyaa, à peu pres 10km de Masjid-e-Nabwi.",
            image: "https://placehold.co/600x400/grey/FFFFFF.png?text=Masjid+Sabaq",
          }
        ],
      },
      {
        name: "By Bus",
        slug: "bus",
        places: [
          {
            name: "Masjid Quba",
            slug: "masjid-quba",
            description: "Masjid Quba (Arabic: مسجد قباء) ç’est kotsa le Prophète ﷺ, accompagné par Abu Bakr (رضي الله عنه), ti rester pou la première fois dans Madinah après l’émigration dépi Makkah.<br><br>Zot ti arrivé lundi le 12 Rab’i al-Awwal, 14 ans après Nubuwwah et sa date la marque commencement calendrier Islamique (Hijra), (16ème julliet 622 CE).<br><br>Ene masjid ti établi la par Rasoulullah ﷺ, et c'est premier kin arranzé en Islam.<br><br>Vertus Masjid Quba mentionné dans sa verset Quranique dans Surah Taubah:<br><br> ‘’…certainement ene masjid fondé lors piété depuis le premier jour plis mérité ki zot deboute endans…’’ [9:108]<br><br>Le Prophète ﷺ ti dire: ‘’Celui ki purifier depi so lakaz et vin Masjid Quba et faire deux rakaat dedans, pou être recompensé ene recompense de ene Umrah (moyen pèlerinage).’’ [Sunan ibn Majah]<br><br> Banne dimounes Yathrib (ki plitard in nommé Al-Madinah Al-Munawwarah, la Cité Éclairé) ti atane le Prophète ﷺ pou ene bon boute le temps, et chaque jours banla ti pou al ziska après ban champs et verger de pieds tam et atane Rasoulullah ﷺ ziska soleil ti vine insupportable. Ene jour banne dimounes ti retourne depuis zot lakazes après ene bon moment d’attente pou le Prophète ﷺ. Ene juif in trouve ene ti groupe de voyageurs vêtus de linges blancs depi ene distance. Li ti crié: ‘’Oh banne dimounes de l’Arabie! Séki zot ti pe atanne in arrivé!’’<br><br>Banne Musulmans ti pren zot zarmes et ti galoupé pou saluer le Prophète ﷺ. Ti ena ene grand bruit akoz zot tou ti précipité ziska bordière desert pou trouve banne voyageurs là. Le Prophète ﷺ ensuite ti tourne vers droite et ti ale vers Banu Amr bin Auf à Quba. La plupart banne musulmans ki ti émigrés depuis Makkah ti reste à Quba et boucou parmi zot ti là kan le Prophète ﷺ ti arrivé.<br><br>Après ki le Prophète ﷺ ti arrive Quba, le Prophète ﷺ ti dessane depuis so monture. Banne Ansar (littéralement veut dire ‘banne aideurs’, nom kin donné à banne ki dans Al-Madinah ki ti vinne musulmans) ki pa ti trouve le Prophète ﷺ ti croire ki Abu Bakr (رضي الله عنه) ki ti le prophet parski so cheveux ti vinne imper gris. Mais kan zot in trouve Abu Bakr barre le Prophète (ﷺ) avec ene drap, zot ti réalise zot erreur.<br><br> Cetait ene le temps joyeux des deux cotes. Le Prophète ﷺ ti addresse zot en disant: ‘’O banne dimounes, faire salaam parmi zot; donne a manger a banne dimounes; renforci relation familiale, faire namaz pendant l’heure ki ban dimounes pe dormi.ki kumsa zot pour rentre dans Paradis en paix.’’<br><br>En arrivant dans le village de Quba après Hijra béni (l’émigration), le Prophète ﷺ ti reste pendant plusieurs jours dans lakaz de  Kulthoom bin Hadm (رضي الله عنه) et ti fonde Masjid Quba lor so la terre. Avant l’émigration le Prophète ﷺ ban musulmans parfois ti faire zot Jummah dans lakaz de Sa’ad ibn Khaithamah (رضي الله عنه) ki ti à proximité. Lakaz là inclus dans extension modern de Masjid Quba quand lakaz de Kulthoom bin Hadm (رضي الله عنه) marqué par imper roches dans le Sud Ouest de Masjid Quba.<br><br>Le Prophète ﷺ li même ti saryer pierres, roches et du sable avec so ban compagnons pou le travay de construction. Al-Tabarani ti cite Al-Shimous Bint Al-Nuaman comme disant, ‘’Mo ti trouve le Prophète ﷺ kan li ti construire sa masjid là. Li ti habitier saryer pierres et Cetait ene le temps joyeux des deux cotes. Le Prophète ﷺ ti addresse zot en disant: ‘’O banne dimounes, faire salaam parmi zot; donne a manger a banne dimounes; renforci relation familiale, faire namaz pendant l’heure ki ban dimounes pe dormi.ki kumsa zot pour rentre dans Paradis en paix.’’<br><br> Ali (رضي الله عنه) ti reste pou trois jours après ki le Prophète ﷺ secrètement ti kite Makkah pou al Madinah. Pendant sa période là li ti régler tou banne affaires le Prophète ﷺ dans Makkah. Ensuite li ti aler à pieds et in zoine le Prophète ﷺ dans Quba.<br><br>Raconté par Abdullah bin Dinar: Ibn ‘Umar (رضي الله عنه) ti dire, ‘’Le Prophète ﷺ ti habitier ale Masjid Quba tous les samedis (parfois) marcher et (parfois) lor monture.’’<br><br>Le Prophète ﷺ ti dirige premier jamaat depuis Masjid Quba kan Masjid Al-Aqsa dans Al-Quds (Jérusalem) ti Qibla à sa le temps là. So vendredi li ﷺ ti kit Quba avec Abu Bakr (رضي الله عنه). Li ﷺ ti kit ene message à Banu Najjar, lakaz so grand-père maternel. So familles ti vinne Quba et ti joine le Prophète ﷺ pour so chemin vers Madinah.<br><br>",
            image: "/images/ziyaraah/masjid-quba.png",
          },
          {
            name: "Masjid Qiblatayn",
            slug: "masjid-qiblatayn",
            description: "Ça ç’est masjid al-Qiblatain (Arabic: مسجد القبلتين), traduit comme ‘’Masjid de deux Qiblas’’. Dans Rajjab 2 AH, révélation verset Quranique ti vini pou change direction Qibla depuis Masjid al-Aqsa dans Jérusalem vers Ka’bah dans Makkah. Masjid al-Qiblatain historiquement important pou musulmans car ç’est ça place là kot premier jamaat ti faire à la suite changement.<br><br>Pendant  le temps à Makkah, le Prophète ﷺ ti habitier faire namaaz vers Bait-al-Maqdis, Ka’bah devant li. Kan li ﷺ finne émigré à Madinah, Rasoulullah ﷺ ti faire namaaz vers Jérusalem pendant 16 mois, mais li ﷺ ti espéré li ça changer vers Ka’bah.<br><br>Pendant namaaz Zohr (ou ti dire ki ti asr), le Prophète ﷺ ti dirige so ban compagnons kan li ti être commandé pou faire face Ka’bah par sa révélation Quranique dans Surah al-Baqarah là: ‘’Vraiment, Nous in trouve to visage touner vers le ciel. Surement, nous pou tourne toi à ene Qiblah (direction faire namaaz) ki pou plaire toi, alors tourne to visage dans direction Al-Masjid Al-Haram (a Makkah). Et kotsa zot ete banne dimounes, tourne zot visages (dans namaaz) dans sa direction là.’’ [2:144]<br><br> Le Prophète ﷺ ti tourne li vers Ka’bah et ban Sahabahs ti suivre par l’obéissance. Alors Ka’bah in vin nouvo Qiblah ban musulmans pou tou le temps à venir.<br><br>Masjid al-Qiblatain ti habitier ena uniquement deux mehrabs, ene dans direction Masjid al-Aqsa et l’autre vers Makkah. Mais, l’ancien mehrab in maintenant couvert.<br><br> Alors, li ti ene jour de joie pou ban musulmans, li ti ene jour de détresse pou ban juifs. Ban Musulmans aster ti vin complètement indépendent de zot et ene prophétie dans zot livres auparavant in réalisé, ki le dernier de bannes Prophètes pou change orientation Religion Allah depuis Jérusalem à la Maison Ancienne de Ebrahim (عليه السلام).<br><br> Zot ban grands ti al vers le Prophète ﷺ en groupe et ti dire ki si li pou change so orientation ré vers Jérusalem, lerla zot pou suivre li. Allah (ﷻ) in révéle dans Qur’aan dans Surah al-Baqarah: ‘’Et meme si to amene vers ban kin gagne les Livres tous kalités signes, zot pa pou suivre to Qibla, ni to pou capave être ene suiveur de zot Qibla; ni certains d’entres zot suiveurs de Qibla de les autres. Et si to pou suivre zot désires après connaissance kin vine vers toi, lerla surement to pou parmi ban ki faire mauvais.’’ [2:145]<br><br> Ban musulmans ti commence gagne ene charactère distincte alors ki ban juifs ti commence rapproche zot à ban hypocrites et polythéistes. Bocou de ban hypocrites ti converti à soit Judaisme ou Paganisme, ainsi purifiant rangs de ban musulmans.<br><br> Imam Ahmad in rapporté depuis Aisha (رضي الله عنها) ki le Prophète ﷺ ti dire: ‘’Les gens du Livre pa envier nous pou nerporte ki kitsoz kuma zot envier nous pou Vendredi donné à nous par Allah avec lekel zot être déprivés. Zot aussi envier nous pou Qibla ki Allah in donne nou mais pas zot, et aussi pou Aameen (recitation après Surah Fatihah dans namaaz) derrière imam.’’",
            image: "/images/ziyaraah/masjid-qiblatayn.jpg",
          },
          {
            name: "Montagne Uhud",
            slug: "montagne-uhud",
            description: "La Cave de Montagne Uhud. Sa l'endroit la, dans le nord Madiinah, c'est place kot bataille Uhud ti prend place dans l'anee 3 AH (624 CE). C'etait deuxieme la guerre entre banne musulmans et banne la force Mushrikeen de Makkah apres bataille Badr.<br><br>Apres defaite humiliant dans bataille Badr 1 ans avant, banne Quraysh de Makkah fine rassembler ene grand l’armee pou la guerre contre banne musulmans enkor ene fois et pou prend revenge. Zot fine rassembler ene l’armee de 3000 soldats avec 300 chameaux, 200 chevals, et 700 cottes de mailles. Banne epouses et banne filles de banne chefs ki ti etre tuer dans bataille Badr fine accompagne sa l’armee la. Abu Sufyan ti commandant en chef de l’armee Makkah et so madame Hind ti p commande cote madames. Tous les deux ti non-musulmans a sa l’epoque la et zot ti p banne l’ennemi acharnes de l’Islam. Flanc gauche ti p etre commander par Ikrimah ibn Abi Jahl et flanc droite par Khalid bin Waleed. Amr ibn al-As ti chef de cavalrie. (Tous les 3 plus tard fine embrasse l’Islam et fine vine banne grands generals/commandants de l’Islam).<br><br>Rasouloullah (ﷺ) fine quitte Madiinah vers vallee de Montagne Uhud avec l’armee de seulement 700 musulmans et fine rassembler so troupe pou bataille. Zubair bin al-Awwam (RA) ti commandant l’aile droite et Mundhir bin Amr (RA) ti commandant l’aile gauche. Hamza (RA), chacha de Rasouloullah (ﷺ), ti etre nommer avant-garde. Mus’ab bin Umair (RA) ti porte-drapeau de l’Islam et Abu Dujanah (RA) fine gagne la chance recevoir l’epee de Rasouloullah (ﷺ) (ki ti connu comme Zulfikar).<br><br>Avant bataille, Rasouloullah (ﷺ) ti positionne 50 archees sous Abdullah bin Jubair (RA) kot Jabal al-Rumah. Rasouloullah (ﷺ) fine donne zot l’ordre stricte pou reste laba mem ziska prochain l’ordre, n’importe ki condition la li ete. Zot tache c’etait pou bloque l'ennemi si banla attaque banne musulmans depi par derriere.<br><br>Tous les deux l’armees fine affronte zot prochain et ene bataille intense fine commencer. Banne soldats musulmans fine concentrer zot l’attaque lor 11 porte-drapeau de banne Mushrikeen ziska ki tou fine etre tuer. Kan 11 porte-drapeau la fine tombe par terre, banne soldats musulmans fine precipite zot contre l’enemi. Abu Dujanah (RA) et Hamza (RA), fine la guerre sans aucaine la peur.<br><br>Hamza (RA), le ‘Lion d’Allah’, fine etre martyriser dans mem bataille ki li ti pe dominer. Li fine etre tuer par javelot de Wahshi bin Harb, ene esclave abyssinien, ki fine gagne so liberte dpei so maitre Jubayr bin Mutim a travers sa action la.<br><br>Malgre la mort de Hamza (RA), banne musulmans fine reussi domine banne Kuffaar, ki fine coummence sauver vue zot defaite. Banne madames païennes osi fine disperser alors ki quelque banne soldats musulmans ti pe poursuivre zot.<br><br>Banne archers musulmans ki ti gagne comme responsabilite securite de zot banne freres fine desobeir l’ordre stricte de Rasouloullah (ﷺ) et fine deserte zot positions, en pensant ki bataille fine terminer. 40 de banne arrière-gardes fine descendre montagnes et fine laisse banne musulmans vulnerable a ene contre-attaque depi l’ennemi.<br><br>Khralid bin Waleed fine trouve ene l’espace vide vu ki banne arrière-gardes fine deserte zot positions, et so banne cavaliers fine attaque banne musulmans depi par derriere, et fine touille plusieurs. Kan banne musulmans fine trouve zot mem entourer, zot fine paniquer et zot pa fine reussi trouve ene plan.<br><br>L’enemi fine la guerre ziska zot fine arrive pres kot Rasouloullah (ﷺ). Rasouloullah (ﷺ) fine gagne ene coute roche, et li fine tomber. Ene ti boute fine casser dans ene parmi so banne le dent par devant, so la levre enba fine couper, et so helmet fine endommager.<br><br>Mus’ab bin Umair (RA) ti etre cibler par l’enemi car li ti porte-drapeau de banne musulmans et li fine etre tuer. Vue ki Mus’ab bin Umair (RA) ti ressembler Rasouloullah (ﷺ) boucou, celui ki fine touille li, Abdullah bin Qam’a, fine penser ki li fine touille Rasouloullah (ﷺ) et fine crier avec la joie ki li fine touille Muhammad.<br><br>Rumeur de la mort de Rasouloullah (ﷺ) fine eparpiller parmi banne musulmans, et sa fine fer zot moral chuter. Frapper par la chagrin, certains fine quitte champs de bataille, tandis ki lezot avec determination fine rassembler en disant, “Vini, laisse nou mort pour mem cause ki Rasouloullah (ﷺ) fine donne so la vie.”<br><br>Tension fine diminuer kan Ka’b bin Malik (RA) fine arriver trouve Rasouloullah (ﷺ) p al joindre banne musulmans assieges. Ka’b fine reconnaitre lizie Rasouloullah (ﷺ) malgrer so helmet. Li fine crier fort, “O banne musulmans, rejouir! Voila le Prophete!”.<br><br>Ka’b so banne paroles fine motive banne musulmans ki fine rester, et zot fine alle cote Rasouloullah (ﷺ). Dans ene ti moment, 30 compagnons fine entoure li. Rasouloullah (ﷺ) fine decide pou pa continuer la guerre.<br><br>Par decide pou pa continuer la guerre, Rasouloullah (ﷺ) fine reussi sauve so l’armee depi banne lezot la perte; banne la perte ki fine arriver a travers désobéissance de so l’ordres. Désobéissance fine change victoire de banne musulmans a ene desastre, mais avek l’aide Allah, banne musulmans fine etre sauver depi ene desastre.<br><br>La Cave de Montagne Uhud (en arabe: غار جبل احد) c’est ene la cave naturellement formé lors koter Montagne Uhud faisant face à Masjid-e-Nabwi. C’est kotsa le Prophète ﷺ ti pren refuge après être blessé pendant la Bataille de Uhud. Li ﷺ ti être saryé lors le dos de Talha (رضي الله عنه).",
            image: "/images/ziyaraah/montagne-uhud.png",
          }
        ],
      }
    ],
  },
  {
    name: "Taif",
    slug: "taif",
    image: "/images/taif.jpg",
    categories: [
      {
        name: "Historical Sites",
        slug: "historical",
        places: [
          {
            name: "Masjid Abdullah ibn Abbas",
            slug: "masjid-ibn-abbas",
            description: "Masjid Abdullah Ibn Abbas, dans Taif, arranzé près avec Qabr le grand Sahabi Abdullah Ibn Abbas (رضي الله عنه). Li ti cousin paternel le Prophète ﷺ et ti respecté par bannes Musulmans pou so connaissance. Li ti ene expert dans Tafseer (exégesis Qur’aan) et ti ene autorité lor sunnah islamique, la pratique le Prophète ﷺ.<br><br>Famille et la vie avant de Abdullah Ibn Abbas (رضي الله عنه) Abdullah Ibn Abbas (رضي الله عنه) ti garçon de Abbas (رضي الله عنه), l’oncle paternel de Prophète ﷺ. So mama ti Umm al-Fadl, soeur de Maymoonah (رضي الله عنها), ene de bannes madames le Prophète ﷺ.<br><br>Li ti né autour trois l’années avant Hijrah. Kan li ti né, so mama ti amene li kot le Prophète ﷺ avant so allaitement ti commencé. Le Prophète ﷺ ti met imper so salive lor nouveau né là so la langue, et sa ti commencement relation proche entre les deux.<br><br> Service le Prophète ﷺ<br><br>Kan li ti pe grandi, li ti akoter Nabe e Kareem  ﷺ en faisant différent taches kuma al sers de l’eau pou ablution. Li ti pou faire salah avec le Prophète ﷺ et zoine so assemblés, voyages et expéditions. Le Prophète ﷺ ti pou rapproche li, tappe so zépaule et faire du’ah, ‘’O Seigneur, faire li acquérir ene compréhension profond de religion Islam, et instruire li la signification et l’interprétation de bannes affaires.’’ Ibn Abbas (رضي الله عنه) racconté, ‘’Le Messager d’Allah ﷺ ti frote mo chest et ti dire ‘O Allah, donne li la sagesse.’’ Ibn Abbas (رضي الله عنه) ti consacré so la vie à la quête de l’apprentissage et la connaissance, suivant le Prophète ﷺ et mémorisant so bannes enseignements.<br><br> <br><br>Quête pou la connaissance<br><br>Sa`ad ibn Abi Waqqas (رضي الله عنه) ti dire, ‘’Mo panne trouve kikaine aussi vite dans comprend kitsoz, ki ti ena plis connaissance et plis grand sagesse ki Ibn Abbas. Mon trouve Umar apel li pou discute problemes difficiles en présence bannes vétérans de Badr parmi bannes Muhajireen et Ansar. Ibn Abbas ti pou kozer et Umar pa ti pou délaisse séki li ti ena pou dire.<br><br>Abdullah Ibn Abbas (رضي الله عنه) dire, ‘’Aprês wafaat le Prophète ﷺ, mo ti dire ene mo camarade Ansari. Le Prophète ﷺ nepli avec nous. Mais ene grand nombre de Sahabahs (Compagnons le Prophète ﷺ) encore avec nous. Laisse nou ale vers zot et pren connaissance bannes pratiques islamiques.’’ Li ti dire, ‘Kisanla pou approche toi pou apran ene règle dans présence sa bannes Sahabah éminents là?’ mo pa ti découragé. Mon garde mo quête pou la connaissance et approche tou dimoune ki ti supposé tanne kitsoz depuis le Prophète ﷺ. Mon reussi ramasse ene quantité important d’information depuis bannes Ansar.lLors de ene visite à ene de bannes Sahabahs, mo ti trouve li pe dormi, mo ti pou tale mo shawl devant la porte et assizer atan. Parfois mo figir et le corps ti pou couvert ek la poussiêre, mais mo ti reste assizer ziska zot ti lever et mo ti capave contacter zot. Certains parmi zot dire: ‘Abdullah, to le cousin le Prophète ﷺ; to ti capave avoy kikaine vine guet nou. Ki faire ton faire la peine pou vin kot nou?’ Mo ti dire zot: ‘Mo bizin vin vers zot, car mo ene étudiant et zot mo professeurs.’ Certains dimounes pou ki mone atane ti dire: ‘Dépi kan t ti p atan nou?’ Mone informe zot ki mo ti p assize là pou ene bon le temps. Zot ti dire: ‘Dommage! To ti capave lev nou depuis nou sommeil.’ Mo ti dire, ‘’Mo pa contan pou dérange zot akoz moi.’ Kumsa mo ti continge mo quêtes, ziska arrive ene le temps kan dimounes ti commence affluer vers moi pou appran. Mo camarade Ansari ti réalise sa à sa le temps là et ti remarqué. ‘sa garcon là in certainement prouve li meme plis raisonnable ki nou.’’<br><br> <br><br>Wahab Ibn Munabbah dire, “Abdullah Ibn Abbas (رضي الله عنه) ti perdi so vue dans so vié l’age. Ene fois mo ti amen li Haram dans Makkah, kot li ti tanne ene groupe dimoune échange mots forts entre zot meme. Li ti deman moi pou amen li vers zot. Li ti faire zot salaam avec ‘Assalamu Alaikum.’ Zot ti demane li pou assizer, mais li ti refuser et ti dire; ‘Mo capave dire zot dimounes ki Allah guete avec grand estime? Sa banla So la peur in faire zot silencieux, meme si zot ni incapable ni imbécile. Mais zot possesseurs d’éloquence et ena pouvoir pou kozer et sense pou comprend. Mais glorification constant de Allah So Nom in tellement dépasse zot intelligence ki zot le coeurs in intimidés et zot la lèvres in sélés. Kan zot vinne dans sa l’état là zot dégazer pou faire bon actions. Vers ki l’état zot in déviés de puis sa chemin là? Après sa avertissement là, mo pa in trouve ene assemblé de meme de deux personnes dans Haram.’’<br><br>C’était dévotion pou la connaissance, ki ti cause Abdullah Ibn Abbas (رضي الله عنه) pou être connu comme ’Hibr-ul–Ummat’ (l’homme le plus enseigné de l’Islam) et ‘Bahrul Ulum’ (océan de connaissance) dans so l’époque. Li ti raconte 1660 hadith et ti génerallement regardé comme le plus enseigné de bannes Compagnons en Tafsir.<br><br>La mort de Abdullah Ibn Abbas (رضي الله عنه) Li ti décédé en 68 AH dans Taif et ti entéré près ek masjid montré en haut. Muhammad Ibn Ali (رضي الله عنه) ti dirige service funéraire et ti remarqué, ‘’Zordi nou in perdi nou grand dirigeant",
            image: "/images/ziyaraah/masjid-ibn-abbas.webp",
          }
        ],
      },
    ],
  },
  {
    name: "Badr",
    slug: "badr",
    image: "/images/badr.jpg",
    categories: [
      {
        name: "Historical Sites",
        slug: "historical",
        places: [
          {
            name: "Lieu de Bataille Badr",
            slug: "lieu-de-bataille-badr",
            description: "Bataille de Badr ti plis important ek premier bataille majeure ki musulmans ti laguerre. Le vendredi 17ème Ramzaan 2 AH, larmée musulman, ki ti au nombre d’environ 313, ti faire face à ene larmée de 1000 quraish. A travers l’aide Allah, musulmans ti sorti victorieux.<br><br> Le matin de la bataille, le Prophète ﷺ ti apel so ban zoms pou faire salah et ensuite ti fortement encourage zot pou laguerre dans chemin Allah. Kan soleil ti p lever lor desert, li ﷺ ti rassemblé so ti larmée, et en pointant avec ene flèche ki li ti p tenir dans so la main, ti dresse ban rangs.<br><br> Abu Jahl aussi ti priyé en disant, ‘’Nous bondié, nerporte ki partie de sa deux parties la ki ti moins gentilles envers so familles, et in amène nous kitsoz ki nou pa koner, alors détruire li demain.’’ Allah dire à propos requette de Abu Jahl dans Surah Anfal: ‘’(Dire ban non croyants:) Si zot in rode ene jugement, alors certainement ene jugement in vin vers zot…’ [8:19]<br><br> Ban quraysh ti positionés à l’opposé de ban musulmans ki ti aligne zot ban la forces à Al-Udwat Al-Quswa. Ene tigite parmi zot ti approché, dans ene façon provocatif, pou tire délo depuis puits de badr, mais tou ti être touyé excepté Hakeem bin Hizam, ki plitard in vin ene musulman dévoué. Le premier parmi ban non croyants pou déclenche la bataille ti Al-Aswad bin Abdul Asad Al-Makhzumi, ene brite avec ene mauvais temperament idolatre. Li ti sorti devant promettant ki li pou boire depuis basin délo ban musulmans, ou pou détruire ou pou mort pou sa. Lin engage dans combat avec Hamza رضي الله عنه , ki ti frappe so la jambe avec so lépé et ti frappe li ene lot coup ki ti fini li.<br><br>Défi combat ene à ene Quraish so trois meilleur cavaliers, Utbah bin Rabi’a, so frère Shayba bin Rabi’a, et so garçon Waleed bin Utbah, ti avance devant et défier musulmans à combat ene à ene. En réponse, trois membres de Ansar ti vin devant, mais ban défieurs ti soif pou disang ban exilés mecquinois et ti criés, ‘’Nou ouler nous cousins.’’ Ban Ansar ti retraités, et Ubaydah bin Harith, Hamzah and Ali (رضي الله عنهم) ti avance devant pou releve zot défi.<br><br> Hamza (رضي الله عنه) ti faire face à Shayba, Ali (رضي الله عنه) ti déboute devant Waleed, et Ubaydah (رضي الله عنه) ti accepté Utbah so défi. Hamza et Ali (رضي الله عنهم) tous les deux in touille zot opposants facilement, mais Ubaydah (رضي الله عنه) et Utbah ti blesses saken d’entre zot, et ni Ubaydah (رضي الله عنه) et ni Utbah ti ena la main haute. Les autres deux ti galoupé pou vin aide zot companion et in touille zot opposant, et ensuite in amen Ubaydah (رضي الله عنه), ki ti perdi so lipied, de retour parmi zot rangs. Plitar li mort de so blessure à Safra’a lor chemin retours vers Madiinah.<br><br> Bataille de Badr commencer Quraysh ti bouleversés à la perdition de plusieurs zoms avant bataille la ti commencé mem. Zot in sorte lor musulmans, ki, encouragé par zot succès avant, ti faire face à l’attaque sans reculer.<br><br> Proclamant l’unicité d’Allah, ban musulmans ti crier: ‘’Ahad! Ahad!’’ [Ene! Ene!]<br><br>Le Prophète ﷺ ti engage dans du’ah et Allah ti répone so ban du’ahs par envoyant ene larmée de milles Anges.<br><br> Sa ban alliés surnaturelles la ti visibile à le Prophète ﷺ ki ti tourne vers Abu Bakr (رضي الله عنه) et ti dire, ‘’Rejoui, O Abu Bakr, Allah so l’aide in vini. Li c’est Jibraeel, ki p bouze devant avec reigne so cheval dans so la main. So linz in couvert ek sale ek la poussière.<br><br> Le Prophète ﷺ ensuite in marche devant vers laguerre, et à sa moment là ça verset ki suivre la in révélé: ‘’Bientot le grand nombre pou faire faire sover, et zot pou montrer zot les dos.’’ [54:45]<br><br> Ensuite li ﷺ in pren ene poignée disable et in envoye li lors Quraysh en disant, ‘’Ki zot figires défigurés.’’ Disable la in envole dans liziés et nénés de ban Quraysh, comme mentionné dans Qur’aan: ‘’Pa toi kin envoyé, mais Allah.’’ [8:17]<br><br> Le Prophète ﷺ in ordonne so ban zoms pou attaquer, en criant, ‘’Monter!’’. Bans musulmans, dépassés par nombre de trois à ene, ti insipirés kan zot in trouve le Prophète ﷺ li mem ki ti présent parmi zot et paré pou laguerre. Aidés par larmée invisible de Anges, ban musulmans ti inonde ban Quraysh. Ban Quraysh ti tombés ene après l’autre, et bientôt zot in retraité en désordre. Ban musulmans ti poursuivre zot, en touillant certains et capturant les autres.<br><br> Satan, ki ti aussi présent en guise de Suraqa bin Malik, ti trouve larmée de Anges, et in sové en plongeant dans La Mer Rouge.<br><br> Badr situé 130 km (80 miles) depuis Madiinah.<br><br> Mémorial de banne martyrs de Bataille Badr Sa monument là, en dehors de site de Bataille de Badr, lister noms bannes Sahabahs (Compagnons du Prophète ﷺ) ki ti martyr sa jour là. Zot ti bannes premiers musulmans pou décéder dans bataille pou l’Islam.<br><br>Ena noms 14 Sahabahs ki ti donne zot la vies. Premier sisse ti bannes Muhajiroon (Émigrants), les autres huite bannes Ansar (aideurs):<br><br>1. Umayr bin Abi Waqqas (رضي الله عنه) 2. Safwan bin Wahb (رضي الله عنه)<br> 3. Zish Shamalain ibn ‘Abdi ‘Amr (رضي الله عنه)<br> 4. Mihja’ bin Salih (رضي الله عنه)<br> 5. Aaqil bin al-Bukayr (رضي الله عنه)<br> 6. Ubayda bin al-Harith (رضي الله عنه)<br> 7. Sa’d bin Khaythama (رضي الله عنه)<br> 8. Mubashshir bin ‘Abdi’l Mundhir (رضي الله عنه)<br> 9. Haritha bin Suraqa (رضي الله عنه)<br> 10. Rafi’ bin al-Mu’alla (رضي الله عنه)<br> 11. Umayr bin al-Humam (رضي الله عنه)<br> 12. Yazid bin al-Harith (رضي الله عنه)<br> 13. Mu’awwidh bin al-Harith (رضي الله عنه)<br> 14. Awf bin al-Harith (رضي الله عنه)<br><br>Masjid Areesh<br><br>En préparation pou bataille la nuite avant (certains savants dire le matin de la bataille), le Prophète ﷺ ti dans la tente ki Sa’d bin Mu’adh رضي الله عنه ti arranzé. Abu Bakr رضي الله عنه ti avec li ﷺ. Le Prophète ﷺ ti kumans faire du’ah encore et encore pendant des heures en disant: ‘’O Allah, si to laisse sa ti groupe croyants dévoué la détruire ek fini lors champ de bataille demain, to pa pou être prié lor la terre kuma to bizin être prie. O Allah, ton promete moi victoire, alors donne moi victoire aster. O Allah, nou bizin to laide ek victoire aster.’’<br><br> Le Prophet ﷺ in leve so la main la haut vers le ciel aussi haute ki sa shawl ki ti autour so zépaules la in tombé. Abu Bakr رضي الله عنه ti ramasse sa shawl la et ti remete li lors le Prophète ﷺ dépi à l'arrière et ti console li, ‘’O Rasulullah, ou fine faire assez du’ah à ou Rabb. Li pou réalise so promesse envers ou. Line réalise so promesse envers ou.’’<br><br> Abu Bakr رضي الله عنه ti la personne principale choisi pou veille lors le Prophète ﷺ. Le temps en entier le Prophète ﷺ ti p assizé et faire du’ah, Abu Bakr رضي الله عنه ti p dibouté et li ti tire so lépé pou veille lors le Prophète ﷺ et assurer ki li ti en sécurité.<br><br>Kan Ali رضي الله عنه ti Caliph, li ti donne ene khutbah kot li ti dire, ‘’O ban dimounes, kisanla pli courageux de tous ban dimounes?’’. Congrégation la ti répone, ‘’Ou, O commandant de bannes croyants.’’ Ali رضي الله عنه ti répone, ‘’Kan zot dire mo mem pli courageux de tous ban dimounes, mo ti capave pli cone la guerre. Zamais mone faire face ene kikaine dans bataille ki mo pan capave vaincre. Mais seulement, l’homme le plus courageux ki zamais mone trouver mo la vie en entier ç’est Abu Bakr رضي الله عنه. Nous ti arranze ene la tente pou le Prophète ﷺ dans la bataille de Badr. Nous ti demandé, ‘’ Kisanla pou veille lors le Prophète ﷺ afin ki personne pas oser approche li parmi ban mushrikoon?’ Par Allah, personne parmi nous pa fin lévé plis vite ki Abu Bakr رضي الله عنه. Li ti tire so lépé et li ti déboute kote la tête le Prophète ﷺ pou veille lor li. Nerporte ki ler ene kikaine ti mem vine vers le Prophète ﷺ, Abu Bakr رضي الله عنه désuite ti pou vin devant vers diréction sa kikaine la. Li ti pli courageux parmi tou ban dimounes.’’<br><br> ‘Areesh’ faire référence à lombraze de ban pieds tam. Masjid origine ti localisé approximativement kot mimbar la été zordi.<br><br>",
            image: "/images/badr.jpg",
          },
          {
            name: "Masjid al-Areesh",
            slug: "masjid-al-areesh",
            description: "Masjid Areesh in arranzé lor site kot la tente le Prophète ﷺ ti installé pendant le bataille de Badr. Bataille la ti dirigé dépi la.<br><br> Sa’d bin Mu’adh رضي الله عنه ti suggéré ki ene labri être arranzé pou le Prophète ﷺ pou fonctionner kuma bazes pou larmée musulman. Li ti justifié so proposition par dire ki si ban musulmans faire victoire, lerla tou pou satisfaisant. En cas de défaite, le Prophète ﷺ pa pou blessé et li pou capave retourne Madiinah kot ena plis boucou dimounes ki contant li et ki pou vini pou aide li.<br><br> Le Prophète ﷺ ti honore li et ti faire du’ah benedictions lor li, et labri la ti façonné avec branches pied tam. Ene lékip de ban gardes ti choisiré, la plupart dépi ban Ansar sou le commandement de Sa’d bin Mu’adh رضي الله عنه pou défane le Prophète ﷺ.<br><br>En préparation pou bataille la nuite avant (certains savants dire le matin de la bataille), le Prophète ﷺ ti dans la tente ki Sa’d bin Mu’adh رضي الله عنه ti arranzé. Abu Bakr رضي الله عنه ti avec li ﷺ. Le Prophète ﷺ ti kumans faire du’ah encore et encore pendant des heures en disant: ‘’O Allah, si to laisse sa ti groupe croyants dévoué la détruire ek fini lors champ de bataille demain, to pa pou être prié lor la terre kuma to bizin être prie. O Allah, ton promete moi victoire, alors donne moi victoire aster. O Allah, nou bizin to laide ek victoire aster.’’<br><br> Le Prophet ﷺ in leve so la main la haut vers le ciel aussi haute ki sa shawl ki ti autour so zépaules la in tombé. Abu Bakr رضي الله عنه ti ramasse sa shawl la et ti remete li lors le Prophète ﷺ dépi à l'arrière et ti console li, ‘’O Rasulullah, ou fine faire assez du’ah à ou Rabb. Li pou réalise so promesse envers ou. Line réalise so promesse envers ou.’’<br><br> Abu Bakr رضي الله عنه ti la personne principale choisi pou veille lors le Prophète ﷺ. Le temps en entier le Prophète ﷺ ti p assizé et faire du’ah, Abu Bakr رضي الله عنه ti p dibouté et li ti tire so lépé pou veille lors le Prophète ﷺ et assurer ki li ti en sécurité.",
            image: "/images/ziyaraah/masjid-al-areesh.jpg",
          },
          {
            name: "Jabal Malaikah",
            slug: "jabal-malaikah",
            description: "Jabal Malaikah situé à koter Katheeb al-Hannan. Ç’est dépi sa montagne la ki banne Anges ti vine assisté le Rasoulullah ﷺ et banne Sahabahs pendant la bataille de Badr.<br><br>Rasoulullah ﷺ ti leve so la tête et ti dire avec contentement: ‘’O Abu Bakr, bonne nouvelles in vini pou zot; Allah so victoire in approché, par Allah mo capav trouve Jibraeel lor so monture dans ene tempête de sable éppé.’’ Ensuite lin récite verset Qur’aan: ‘’Zot grand nombre pou faire faire sover et zot pou montrer zot ledos.’’ [54:45]<br><br>500 Anges ti vini lor koter droite de l’armée, dirigé par Jibraeel السلام عليه. Le Prophète ﷺ ti envoye Abu Bakr رضي الله عنه pou dirige flanc koter droite. Lor koter gauche de l’armée, ti ena encore 500 Anges, dirigé par Mikaeel السلام عليه. Le Prophète ﷺ ti envoye Ali رضي الله عنه lor sa koter la pou dirige banne Anges. Dans tou bataille, Allah ti envoye Anges pou reconforte le Prophète ﷺ et ban croyants. Mais seulement, sel ‘occasion ki banne Anges ti laguerre mem lor champ de bataille ti pendant la bataille de Badr.<br><br>Boucou banne narations ti koz à propos l’apparition de banne Anges dans la bataille de Badr. Mentionné dans Sahih Muslim ki Ibn Abbas رضي الله عنه ti dire: ‘’Sa zour la ene musulman ki ti p galoupe derrière ene non croyant ki ti p aler devant li, li ti tanne ene son ene fouete lor li et la voix sa ki ti p voyaer lor so monture la dire: ‘’Contigner, Haizum!’ Li ti zette ene coup d’oeil lor polythéiste la ki ti maintenant tombé lor so lédos. Kan li ti guette li (bien mem li ti trouvé ki) ti ena ene cicatrice lor so nez nez et so figir ti déchiré kumadire li ti être foueté avec ene fouete, et li ti vin vert avec so poison. Ene Ansari ti vin vers le Prophète ﷺ et ti raconte sa (l’évènement) a li ﷺ. Li ﷺ  ti dire: ‘’Tonne dire la vérité. Sa Ç,était l’aide dépi troisième le ciel.’’<br><br>Ene lot incident rapporté, kot ene lot dimoune dépi banne Ansar ti capture Abbas bin Abdul Muttalib, ki ti dire: ‘’O Messager d’Allah! Par Allah sa dimoune la pa ti capture moi. Mo ti capturé par ene dimoune ki ti chauve et ti ena pli zoli visage, et ki ti p monte ene cheval. M pa trouve li ici parmi banne dimounes.’’ Sa dimoune depi banne Ansar la ti dire: ‘’Mon capture li, O Messager d’Allah! Le Prophète ﷺ ti réponne: ‘’Reste tranquille, Allah, le Plus-Fort, in faire toi vin fort avec l’aide ene Ange noble.’’<br><br>Aussi rapporté ki après la bataille, banne dimounes ti p rappel banne kin être tués par banne Anges, par blessures lor zot licous, le doigts et pouces lipied, parski sa ban partis la ti ena ene marque kumadire zot ti marqué ek dife.<br><br>Jibraeel  السلام عليه ti approche le Messager d’Allah ﷺ et ti démane li pou pren ene poigné la poussière et envoye li lor l’ennemis.<br><br>Le Prophète ﷺ ti envoye la poussière la en disant, ‘’Confusion in saisi zot figires!’’ Ene tempête de sable violent in soufflé dans liziés l’ennemis et poignée disable la ti rentre dans liziés banne idolatres, saken parmi zot ti être frappé par ene parti de sa, et li ti distracté zot en faisant saken d’entre zot occupé. Allah dire dans Surah Al-Anfal: ‘’Et toi (O Muhammad (sallallahu alaihe wa-sallam)) pan envoyé kan ton envoyé mais Allah in envoyé.’’ [8:17] ki veut dire sa poignée disable ki le Prophète ﷺ ti envoyé lor bannes non croyants pa ti par so pouvoir et la force mais li ti atteindre liziés banne pagans à travers le voulu d’Allah.",
            image: "https://placehold.co/600x400/grey/FFFFFF.png?text=Jabal+Malaikah",
          },
          {
            name: "Bir e Shifa",
            slug: "bir-e-shifa",
            description: "Bir e Shifa ena ene grand l’importance dan histoire Islamique. Situé à a peu près 1 heur temps voyage par l’auto depuis la ville sacré Madinah,<br><br>Li ti originalement fouyé pou servi de l’eau à ban Hajee ki ti pé voyager pou Hajj ek Umrah.<br><br>Au commencement , de l’eau de sa puit la ti amère et salée, et sa ti cause maladie pou beaucoup dimounes ki ti boire ladan. Fine rapporté ki Le Prophete Muhammad (SAW) fine etre informé conçernant sa, et aprés ki li fine met so la salive Mubaarak dan de l’eau la, par miracle de l’eau la fine vine doux et bon par volonté d’Allah. Azordi, bane visiteurs encore capave arrêter kot sa puit la, ki trouve dan grande route, et goûte douceur de l’eau la.",
            image: "https://placehold.co/600x400/grey/FFFFFF.png?text=Bir+e+Shifa",
          }
        ],
      },
    ],
  },
];

// Du'a images data
export const douaCategories = {

  hajjMadinah: [
    {
      id: "1",
      imagePath: '/images/duah/hajj-madinah/1.png'
    },
    {
      id: "2",
      imagePath: '/images/duah/hajj-madinah/2.png'
    },
    {
      id: "3",
      imagePath: '/images/duah/hajj-madinah/3.png'
    },
    {
      id: "4h",
      imagePath: '/images/duah/hajj-madinah/4.png'
    },
    {
      id: "5",
      imagePath: '/images/duah/hajj-madinah/5.png'
    },
    {
      id: "6",
      imagePath: '/images/duah/hajj-madinah/6.png'
    },
    {
      id: "7",
      imagePath: '/images/duah/hajj-madinah/7.png'
    },
    {
      id: "8",
      imagePath: '/images/duah/hajj-madinah/8.png'
    }
  ],
  voyage: [
    {
      id: "1",
      imagePath: '/images/duah/voyage/1.png'
    },
    {
      id: "2",
      imagePath: '/images/duah/voyage/2.png'
    },
    {
      id: "3",
      imagePath: '/images/duah/voyage/3.png'
    }
  ]

};
