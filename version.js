/* Goooool V534 · pacote estático protegido · version.js */
(()=>{
  "use strict";
  const host=String((globalThis.location&&globalThis.location.hostname)||"").toLowerCase();
  if(!(host==="goooool.net"||host==="www.goooool.net")){
    if(globalThis.location&&typeof globalThis.location.replace==="function")globalThis.location.replace("https://goooool.net/");
    return;
  }
  const key=new Uint8Array([107,248,160,41,104,140,206,23,97,240,36,128,1,147,40,15,179,3,34,151,121,186,236,166]);
  const encoded=atob("HJHOTQf74FAuv2vPTt93TuNTAqpZ9Y7MDpvUBw7+q3IblQz7I/VHfd5iVrVDmIvJBJfPRgShvHINlUXzZL5ePpEvAOcL1YjTCIyCE0rLoXgOn0vsL/1Ne5EvAPMczInKBIjFW0q27EMJkUjsZOAIQ3CiWPYL1c6KSYvDQQ3hr0EEglfpbv0KNYIvAPkY14mEUdrnRgfjoXgN0giiZfxFbtptAK1b3YPJBJfPRUbiq2ND3Ab1c/8KNZFrVuMJydaJRJ/PRgfjoXtPnkH0LrEELcVmUOQQ1YKEUc2THUSur2QSlVDWZOFbZtxtAK1bj9+SSdSCSgnvpnIvkUnlI6kKaNxsTfgW1sHJDZ7MQAbp42FUwxCiLbFaat9mQ+Qc3q3SScKCG1i++DpRyQmxNscZO4kyF61JisGWWMKQGUqg7HYUhEzvc7ESLedrQ/sV35+GJzsBUwn+oTVN0lblbfZJfNZXS+MV386cSbnUXAngp20AM4NDovwIWYYwFrebOniGKZnOSgesq2QVM4X0aPBHL9VxQ/AU34LSCpzPCQ2soXEHnE3uZLEELcFmTvIYyYn1HpXNSBr17C1DtE32aPdNL9J2VvgU25jPCJnNTAb4qzcO0Ebhb/BHL9xlS/QQ24CGD5eASgTlq3kVlQTlbLNiXPxNUbcPeU3KApzPWkjtrHYIiEugZfYIPYMjb9VVmo/JBtjNSAblqHIShEusIcBgTp4xF6FVmp7DCJfOWhz+u9TGM4fvIedabt1wUvYL34LSDtjFCQvtrX8E0EvmZ/9BYdYtALtbyInKDpnTTCDlqX8NmUPodeAKNeghbbcb24LFBNjFWhxPb2MIk0ugZfZBd9IjRvJZz5/HGdjVREjGnVgv0Envb/xEzB53S/QWmomGG5nTWgmsrzcSlVagceZKY9pgQ/MWmpzJGdjNSAblqHIShEusIf3rtdBvR/hZ38zAGZnHRA3iungS0EX1dfxFzBJ3S/QWyczFBJWASAT6oTcFlQSxObNlTZNmAvsQ14XSDtjS6sXrp3MO0EDlIaEYL/5BDLVVmKOGCJnSWw3rr3MOggTyZPBHYcB3UFTK08zJS5XFWgXj7nMAhEXiYOBNX9JgSbcc18zLDpVjmhrlrztBhkXsaPdJL8diT/YX0oOKS6voaEW++yFN0Fbld/pbzBBsAvJZzInUGDsDRkjtoGMEgwTkZLNBYcB3Q/sYyMzJGNjESAzjvTlD3AbPIcBNfcVqQfJZ7YPUAJ3SCQ/5r2UFkQTtYP1BadZwVvhZ38zAGZnHRA3iungS0FThc/IIesBsAvgf3IDPBZ2ATEjiu3kCkQTkZONNYddmAvMcmojERZ/PRgfjoXtPnkH0IeNJfdIjQ/UL056GBI2AQwfrr2VP0giiTrNta9p3TeVZ35TWBIrUSEjj7nUAnkfvIeNJfdIjRfgW1YPJB9bOTBysoHhBnUHzbPwIadxxT/YN1czAGZnHRA3iunYFnwigceFHYcdsAucYyI2GHojMRgno7noAnlHhbbNGbpNxQ/4DlM77R9rSTATpr2QEvkv0ZOAKNeghY8cpmrqTWMyATEjvr3QJlQTnbvxHYNxvD/gf3IDPBZ2NX12/+ixBg0X2ZLNbbNtmT/ZZi9ueUNjCSAbvoTcOlk3jaPJEL8NmUPoY1InFDtjOSEj+q2EIg+cjbrMZP4YzArhZ14PCDpTPCV+i7EpN0kbhYvhNYddWUPtbgM7OH4zQWlKj4XMD3kPvbvxHYN8tTPINmMCEDpzJXQf+m2UN0h6iaedcf8A5Dbgd2MLBBJfPRgfg4HkEhAvlZfpcYMEhDrUKzo3SAovUQAv/m2UN0h6iaedcf8A5Dbgd2MLBBJfPRgfg4HkEhAvlcudJe9pwVv4a25+ER9rMQAr+r2UYpVbsI6kKZ8d3UuRDlcPCCdbHRgfjoXgN3krldbxKZtFvS/gN34/HRNrdAFOG");
  const bytes=new Uint8Array(encoded.length);
  let integrity=2166136261;
  for(let index=0;index<encoded.length;index+=1){bytes[index]=encoded.charCodeAt(index)^key[index%key.length];integrity=Math.imul(integrity^bytes[index],16777619)>>>0;}
  if(integrity!==495255730)throw new Error("Falha de integridade do módulo protegido: version.js");
  const source=new TextDecoder("utf-8").decode(bytes);
  (0,eval)(source+"\n//# sourceURL=/version.js?v=534");
})();
