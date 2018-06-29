function theBeatlesPlay(musicians,instruments) {
  var empty= [];
  for(let i=0;i<musicians.length;i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}


function johnLennonFacts(facts) {
  var i=facts.length;
  var scream = [];
    while(i>0) {
        scream.push(`${facts[i]} !!!`);
        --i;
    }
    return scream;
}

