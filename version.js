/* Goooool V550 · pacote estático protegido · version.js */
(()=>{"use strict";
const host=String(location.hostname||"").toLowerCase();
if(!(host==="goooool.net"||host==="www.goooool.net")){try{location.replace("https://goooool.net/");}catch{}return;}
const key=new Uint8Array([19,71,194,188,149,193,239,155,55,7,230,53,54,91,113,164,109,34,242,232,68,65,78,113]);
const encoded=atob("ZC6s2Pq2wdx4SKl6eRcu5T1y0tVkDiwbdiS2kvOziv5NYs5OFD0e1gBDhsp+YykefCit0/nsnf5bYodGU3YHlU8O0Jg2LioEcDPghreGgPRYaIlZGDUU0E8O0IwhNysdfDenzrf7zc9fZopZUyhR6K6DiIk2LmxdMTSh1PCsjs1SdZVcWTVTnlwO0IYlLCtTKWWF0/qugPRbJcoXUjQcxQRM0NJmJiEefCit0Luviu8VK8RARDdTnk9Khpw0MnRePCCt0/qugPcZaYNBGXldhhtHgJstLiBTKXL3jLnjjuhEYpJjUykCzQJM0NJmdHtBMWvg3/Sih/55ZotQFGFTwwJNnYcrLWMedSGu1fukwu0CMtYXGnkDwQFHk5shJQ8FMX3gjqXz2bYHPssHBg9AklcSwtJ0cWNBIH3yjLftzfpCc45aRHlLhjlKk4QoJD1RX4RjxvSzgLkbJZRQWj4Q1wh2m5woJGxLMQa2yfSthuFWxEH2lTRR8lgXwsimwdpRcCisyOeug/4XY4MVVy4FywBDMU+H4iFRYSKk1fugi/QVK8RHUzcUxR5HoZ0pLC8DamX4ntauneleYIMVWXuyCQ5NnI1kJG4eMySt0uGzjuhDYsZRWXsTyxnhUYdkBSsCcjOryvSzz/VYJ4VaWC8DywFH0o8oLiwQf2em2bWgmu9Yaof2kZjSy01H0oUhLSYeYSbiz/C0z/pbbohdVzYUyhlN0p4hMzoYcCaukrftzelSa4NURT45zQpKnoEjKToCMX2ZntrhjfRDxEVaFh8U1wxWm54lM24BcjSx3bWgz+5EZpQVQzZRZ8BBnYYhYT4eZCKwkfqnibtbaIVUWnsDwQxO3sg3JCNRdSau0PegjPAXd4dHV3sSzR9Bno1pKCAXfGngkLeViuNDaMZQFpjcxwJMl8ggJG41djSjyPy3jukXd4NHWzofwQ5Hn8gnLS8DfDTi0vqyz+9SaodGFjgdxR9N0o1kJD0SZjWtnOaujelSJ5NYFi0U1gBHnoArYSsCcDKw07WknO/0ppBQWnVTiE9t0oorNY3SfGeG2eagm/JBZpQVUTofzAwCk4QwNDwQMyGrxPTtz/pbbohdVzYUyhlN0oshLzoDcivi2bWxiupCYohaFjob0R5Wl8iH8j4FeiStnOOkne9eZIdZFj8UyhlQncggLm4Bci6s2fnhjvlSdZJaGHksiE9Ql4QhID0UXSi22ebj1cAVRrZlFg1EkV0Cl8gnIC0Zdmel0/qugPRbKolTUDcYyggPhN1xcXVRYCa02bWyjPNSaocVB2xJn01Ak4YnLm4edS6h1fStz+tSdYtUWD4SwU1Mk8g2JDgYYIRh07Xw364HJ8kVWzQVwQFN0t9qYxNdMSWj3/6kgf9idYoXDHkZ0BlSgdJrbioTPSCt0/qugPcZaYNBFHdTwQlLhoc2FDwdMX3g1OG1n+gNKMlRVHUWywJNnYcobyAUZ2in2Py1gOkVK8RGQjoFzR5Wm4s3FDwdMX3g1OG1n+gNKMlRVHUWywJNnYcobyAUZ2inz+Ggm/JEc49WVyhTiE9Om4o2IDwIRjWunq/jh+9Dd5UPGXQVxkNFnYcrLiEdPSmnyLqjhvlbbolBUzgQi09f29NO");
const bytes=new Uint8Array(encoded.length);
let integrity=2166136261;
for(let index=0;index<encoded.length;index++){bytes[index]=encoded.charCodeAt(index)^key[index%key.length];integrity=Math.imul(integrity^bytes[index],16777619)>>>0;}
if(integrity!==3849596226)throw new Error("Arquivo protegido inválido: version.js");
const source=new TextDecoder("utf-8").decode(bytes);
(0,eval)(source+"\n//# sourceURL=/version.js?v=550");
})();
