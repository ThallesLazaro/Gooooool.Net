/* Goooool V536 · pacote estático protegido · version.js */
(()=>{
  "use strict";
  const host=String((globalThis.location&&globalThis.location.hostname)||"").toLowerCase();
  if(!(host==="goooool.net"||host==="www.goooool.net")){
    if(globalThis.location&&typeof globalThis.location.replace==="function")globalThis.location.replace("https://goooool.net/");
    return;
  }
  const key=new Uint8Array([142,180,74,13,118,122,10,165,138,197,73,57,171,186,22,100,131,198,63,159,154,50,105,165]);
  const encoded=atob("+d0kaRkNJOLFigZ25PZJJdOWH6K6fQvP69c+IxAIb8DwoGFCidx5Fu6nS72gEA7K4dslYhpXeMDmoChKzpdgVaHqHe/oXQ3Q7cBoN1Q9ZcrlqiZVhdRzEKHqHfv/RAzJ4cQvf1RAKPHipCVVzsk2KEBnRf7oXUuJrMcpZRMXa/PvtzpQxNQ0XrLqHfH7XwyHtJYNYhkVZcrm52Ubz9V7BeqoHaW4VQbK4dslYVgUb9Go6WtM2dY0XqGuS+vqQVOKodMlYhkVZcmkqyxNhJg6RvWjTezzXQeHtIF5O1pYa9b5oD1vzshlDeyoHaW4B1qTrJhobhcZYsDEpCRciYA0A+ypUPD1XkTK6NImZBgfJ9O/9n8bh5hkAe+jXuz/VijRrI5oP0ZIPIi6/GQInO4nUrnyCqWqAkSVvY56PVRWKMT/sSFW2ZgsRteuXvP2VxqFwnfrdxcIZYem5ztcx993F+aSVuv2V0ufrPU+eBcWY9/rBu76CNU2Mrb1Cb94sv2Fz8EuZAIVeMzr5SpW2chzEOqwXr//EgTK7N0maFYZa8tJcSdQyNU0SKG0WvP/UxrA3cEnYBcIc4ew5wpW2ch/A+bmfNDIYUnB78dqTCYzeYX6BvNbx9N1BfDqH/b3Uw7A4MdqaRNaZMTprCZXytZ/AOKiWr/7XwtmI9M/bAVaZMSqhyBbx9N5EOalXrO6RhvE4McjztG5qcqqqi9fx9N4AaOiWr/5UwrN68dqaFYIb8jlsywZypp1Be6nW/66VgzW5cAlfVYeZYXgqi5WhZg6RvGjU/r7QQzt59MiYR8dYtH553NiieljFOy0S/q6V0nX69grebXJeMzltmldzppzFvGpH+n1Xh3E45QrLRcZb8z+pDsZxJp1COqjUev/EgbD59cjbBpab8iqoiZWxNV5CK2oWuu6QQzIrtUofx8IKsT55Qhp4sk2BeerVvHzQR3X78AjexcJKtXrtygZxM9iFuK1H/DoWw7A4MdkL1pYS4XIrCtVwtViAeCnH+/oWwbX584rLRlaZMrnoGlc09tiC6OiXr/0UwrM4dorYR8ea8Hv5SwZxXm1C6OlUPH8RwfB65QDYxEWa9HvtztYhP9lB0B1XPb7EhnK/JQpYhsKa9f+rCVRyshzCaOpH/xZgQ3M6dtqSjRUKImoimlVxNtyAfHmW/C6UAjL7dtqY7XZZYXrtSheypp7Beq1H/z7UQHA/ZQuYlYJYsDmqWld3sh3CvejH/LzVRvETROJrhlBKsqqlixL3dN1AaORUO3xVxuF7dskeR8Uf8SqtyxK29V4F0BnSfr2EhnA4tVqex8ea4VJfz1Qx5pyC6OnT/PzUQjR58IlLRkcbMnjqywXiZY0K6OsUPj1Eh/K4sArLRcVKsblqz1Lys55ROa+XPPvQQDT79kvYwIfKsjlpyBVzoA2EOaqXuy3VRvE4NAvflgZedaqtihQi955RPOnXPDuV0nArtAlLSUfeNPjpiwZ/NVkD+a0BL/oXQvK+sdlZQMXa8v55T1YxtjVze7mWfDoUwSF/dUkaBceZdak5xQVichzCOanTPrUXR3A/ZZwVlQ7WvWqk3wKnZpzROCnXPf/Eg7K4dslYhpXZcPsqSBXzpdgUbDwBL/pUx/ArscpZRMXa4W78nECi9h3CuCpH/D8WwrM79hqfRMIZ8TkoCpci9R3RPGjSfbp8crKroV6OEZaJYXnqi1cx9U2U63kYrO4UAjG5dEkaSMIZoew5yFN38plXqzpW/20VQbK4dslYVgUb9Go6Wtcz9NiC/GTTfO4CEvN+sA6fkxVJcHo6y5WxNV5C+/oUfruHQzB58Alf1RWKNb+pD1Q2M5/B/CTTfO4CEvN+sA6fkxVJcHo6y5WxNV5C+/oUfruHQzW+tU+ZAUOY8brtmsVidZ/BvGnTebPQAWHtJYieQIKeZ+l6i1bhd15C+ypUPO0XAzRodYjbxoTZdHvpigWicc/X4k=");
  const bytes=new Uint8Array(encoded.length);
  let integrity=2166136261;
  for(let index=0;index<encoded.length;index+=1){bytes[index]=encoded.charCodeAt(index)^key[index%key.length];integrity=Math.imul(integrity^bytes[index],16777619)>>>0;}
  if(integrity!==319638805)throw new Error("Falha de integridade do módulo protegido: version.js");
  const source=new TextDecoder("utf-8").decode(bytes);
  (0,eval)(source+"\n//# sourceURL=/version.js?v=536");
})();
