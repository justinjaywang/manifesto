$(function(){
  "use strict";

  var init = function() {
    initRandomSample();
  };

  var initRandomSample = function() {
    var samples = new Array(
      // Catalan
      "«Dóna amor que seràs feliç!». Això, il·lús company geniüt, ja és un lluït rètol blavís d’onze kWh."
      ,
      // Croatian
      "Gojazni đačić s biciklom drži hmelj i finu vatu u džepu nošnje."
      ,
      // Czech
      "Loď čeří kýlem tůň obzvlášť v Grónské úžině."
      ,
      // Danish
      "Høj bly gom vandt fræk sexquiz på wc."
      ,
      // Dutch
      "Lynx c.q. vos prikt bh: dag zwemjuf!"
      ,
      // English
      "The quick brown fox jumps over the lazy dog."
      ,
      // Estonian
      "Põdur Zagrebi tšellomängija-följetonist Ciqo külmetas kehvas garaažis."
      ,
      // Finnish
      "Hyvän lorun sangen pieneksi hyödyksi jäi suomen kirjaimet."
      ,
      // French
      "Ça me fait peur de fêter noël là, sur cette île bizarroïde où une mère et sa môme essaient de me tuer avec un gâteau à la cigüe brûlé."
      ,
      // German
      "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich."
      ,
      // Hungarian
      "Jó foxim és don Quijote húszwattos lámpánál ülve egy pár bűvös cipőt készít."
      ,
      // Icelandic
      "Kæmi ný öxi hér, ykist þjófum nú bæði víl og ádrepa."
      ,
      // // Indonesian
      // "Saya lihat foto Hamengkubuwono XV bersama enam zebra purba cantik yang jatuh dari Al Quranmu."
      // ,
      // Italian
      "In quel campo si trovan funghi in abbondanza."
      ,
      // Latvian
      "Muļķa hipiji mēģina brīvi nogaršot celofāna žņaudzējčūsku."
      ,
      // Lithuanian
      "Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą."
      ,
      // Norwegian
      "Vår sære Zulu fra badeøya spilte jo whist og quickstep i min taxi."
      ,
      // Polish
      "Jeżu klątw, spłódź Finom część gry hańb!"
      ,
      // Portuguese
      "Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português."
      ,
      // Romanian
      "Muzicologă în bej vând whisky și tequila, preț fix."
      ,
      // Serbian
      "Gojazni đačić s biciklom drži hmelj i finu vatu u džepu nošnje."
      ,
      // Slovak
      "Kŕdeľ ďatľov učí koňa žrať kôru."
      ,
      // Slovenian
      "Šerif bo za vajo spet kuhal domače žgance."
      ,
      // Spanish
      "La niña, viéndose atrapada en el áspero baúl índigo y sintiendo asfixia, lloró de vergüenza; mientras que la frustrada madre llamaba a su hija diciendo: “¿Dónde estás Waleska?”."
      ,
      // Swedish
      "Yxskaftbud, ge vår WC-zonmö IQ-hjälp."
      ,
      // // Tagalog
      // "Ang bawat rehistradong kalahok sa patimpalak ay umaasang magantimpalaan ng ñino."
      // ,
      // Turkish
      "Fahiş bluz güvencesi yağdırma projesi çöktü."
      // ,
      // // Welsh
      // "Parciais fy jac codi baw hud llawn dŵr ger tŷ Mabon."
      ),
      sample = samples[Math.floor(Math.random() * samples.length)];
    $('.sample').text(sample);
  };

  // initialize
  // ----------

  init();
});
