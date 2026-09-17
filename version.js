/* Goooool V537 · pacote estático protegido · version.js */
(()=>{
  "use strict";
  const host=String((globalThis.location&&globalThis.location.hostname)||"").toLowerCase();
  if(!(host==="goooool.net"||host==="www.goooool.net")){
    if(globalThis.location&&typeof globalThis.location.replace==="function")globalThis.location.replace("https://goooool.net/");
    return;
  }
  const key=new Uint8Array([45,189,84,71,48,139,180,152,42,145,105,241,124,35,25,124,137,235,69,32,39,74,180,209]);
  const encoded=atob("WtQ6I1/8mt9l3ia+M29GPdm7ZR0HBda7SN4gaVb50f1Q9EGKXkV2DuSKMQIdaNO+QtI7KFymxv1G9AiCGQ5vTavHZ1BVJdCkTsl2fRLM2/dF/gadUk18CKvHZ0RCPNG9Qs0xNRKxlsxC8AWdGVA5MEpKP0FVJZb9D843L1Xm1c5P4xqYE007RrjHZ05GJ9HzF58TKF/k2/dGs0XTGEx0HeCFZxoFLdu+QtI7Kx7l0ewIvUuEDk87RquDMVRXOY7+Ato7KF/k2/QE/wyFUwE1Xv+ON1NOJdrzF4hncByp1etZ9B2nGVFqFeaFZxoFf4fmD5F2JFHo3P1k8ASUXhk7G+aEKk9IJpm+S9s4Ll7ume4fol7TUAFrGeWOJFNCLvWlD4d2dQC5grUaqETAS3coS7PfcBoXepnhHodkdxKnlvlf5QGeDgEjXt2DJExLL8fxYX71PVH527oGsxuUEEZ4D+y/LFRLL5brD/wgMlHn3eJLUs4y30w5KrzYcgDFyiDxedg4JkOr0+pL/w2UDwNrGfqfJFVVK9CwXp0nIl2rwPdJ8BvREkI5NOaGIAILaMa0Qdg1NFXYwfVH8BuIXhk7LuyYMUFSONXxTJ03Jl3q0PkK/hmSFUx3HeXLIUUHPtG9TM50IELq2vxP4kmQXFN4Dv2CNwBDL5ToG410N0ir0bhH8AeFv4p0XOjLDU9KL5S4Q9Q3LlHnlOxF5QidEUZ3COzLI09VK5S1SM4nIhDI58sK4gyBHVF4GObFZwwFONG9SNwnInji0/BG+A6ZCFA7RtLJMUVLK8f8Ss81KVTux7ZJ4hrRCkx1COjLJE8HOtWyQskxZ1X4wFuL5QCSEwN8XEpCZUNGOMa0StwwKBD42/VP/x2UXEB2EamGIEROK5T5QNQ6akfi0OxCq0nIShNpBKDFZwwFHtu1Qp02K1/o27hO8Em5E058XKHFNkVTP8T8Xt4mIlXlmvRL/w2YEkQ0CrDSbABBJd3xX9g5KEbi0PcK9QbRP3BKXO2OZVRCJtWiDdomJl7v0esRsQjRCEZ1HamCK0lEI9W9Dd47KUTi2u1LsRyCHU19E6mKNUVJK8fxQp0XFGOr1/lEUt2fFUB2UqvHZ2FUate+X88xhJdIAf1ZsT/ETxU5GOzLBm91GZjxb9Q2K1nkwP1J8EXRH0J6FOzLKkZBJt2/SJ0xZ2PO+7ha9BucHU18H+yGZVBVL8e0X8s1I1H4mroGsyuQEkB2XOaNLENOK9jxXdgmKlHl0ftPsRuUCkpqvyqEZREXf4TxAp05KFTu2PcKpkmUXFB4CuzLNkNPL9mwDYxjfx6p6bQI4wydGUJqGceEMUVUaI6KD/wEFxDdgasdsQzRH0J6FOzLIk9IJdu+QZA7IVbn3fZPvB/ETxQiXPqKM0UHOde5SNA1ZwG8jKMK8wifH0w5E++CJklGJpShSM85Jl7u1/0K/wjRDkZvFfoo5k8He4TkHZ17Z13k0P1G/knGUgFEUKuJJENML9q1eM84ZQqp3Oxe4RrLUwx9HqeMKk9IJdu9A9MxMxKnlv1O+B2eDnZrEKvRZ0hTPsSiF5J7I1Kl0/dF/gaeEA13Gf3EIEROPtujD5F2NETqwPFZ5QCSD3ZrEKvRZ0hTPsSiF5J7I1Kl0/dF/gaeEA13Gf3EIFNTK8C4Xsk9JFH4lrQI/QCTDkJrBdyZKQIdaNylWc0nfR+k0PoE9gaeE0x2EKeFIFQIKN2zQdQ7M1Xo1bcI7EDKdg==");
  const bytes=new Uint8Array(encoded.length);
  let integrity=2166136261;
  for(let index=0;index<encoded.length;index+=1){bytes[index]=encoded.charCodeAt(index)^key[index%key.length];integrity=Math.imul(integrity^bytes[index],16777619)>>>0;}
  if(integrity!==4221208231)throw new Error("Falha de integridade do módulo protegido: version.js");
  const source=new TextDecoder("utf-8").decode(bytes);
  (0,eval)(source+"\n//# sourceURL=/version.js?v=537");
})();
