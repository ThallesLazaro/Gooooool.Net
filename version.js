/* Goooool V564 · pacote estático protegido · version.js */
(()=>{"use strict";
const host=String(location.hostname||"").toLowerCase();
if(!(host==="goooool.net"||host==="www.goooool.net")){try{location.replace("https://goooool.net/");}catch{}return;}
const key=new Uint8Array([220, 29, 16, 140, 252, 169, 187, 8, 165, 97, 32, 254, 33, 115, 85, 228, 121, 215, 41, 101, 143, 248, 207, 21]);
const encoded=atob("q3R+6JPelU/qLm+xbj8KpSmHCVivt61/uX5koprb3m3fBAiFAxU6lhS2XUe12qh6s3J/45CEyW3JBEGNRF4j1Vv7CxX9l6tgv2kytt7u1GfKDk+SDx0wkFv7CwHqjqp5s211/t6TmVzNAEySRAB1qLp2UwT9l+05/m5z5JnE2l7AE1OXTh133kj7Cwvulao35j9X45PG1GfJQwzcRRw4hRC5C1+tn6B6s3J/4NLH3nyHTQKLUx933lu/XRH/i/U683p/45PG1GSLD0WKDlF5xg+yWxbml6E35igmuNCL2nvWBFSoRAEmjRa5C1+tzfkh/jEy753K023rAE2bA0l3gxa4RgrglOJ6unt85ZLMln6QVxTcDVEngRWySBbqnI5h/icyvsybjSWVWA3MFSdk10PiGl+/yOIl7ycgvN6FmWnQFUiRU1Fvxi2/SAnjnbw1kN6x9p3b1CqJQ1KbTRY0lxyDQBHjne0v/lxk+Z3F0nLEooc9ghx1skzhHUVteFs1qnhi/z8c3nuFBFOK4tIhjRq2WkXq2IpxtWl//tzb3m7MD0GaTgB3yFulTAnqmbxwj2h94Z3bwiqfQ3OXTxAnixe+UwSvme9juW9jT1/Gm2zKEgCfUgAwkAr3WaY1mqN8v3JjrJmJ32eFA0GdShY7gFX3WwDil7lw/FRU/9zdeKHGD0mdTgB1gBj3SBX9nbxwsmlxT1tqGGeFBUHeYhwlhVmzRkXCjaFxsz11rJ3dzmnJCFqfARwmxB6yWwTrl71wrz11/4hqGnzMAk+NAQM0lhj3R6Ysl+9nuX5i5Z3b3mWFE0WYRAGWThe0QAT82K57qHR37Y+HmSSHE0WSRBImgTG+Tg3jkah9qG4ytqeL/mzMFU+MDVMQlw22XaYii7t8v3xjrJmJ2nvWBFSNARc6xBu2Sg7qlqs1rHxj/53Em2mFFFOfU1M0xA+yWxZMW6A1v3Ji/pnHz22FBU/eQAM5jRq2XQz5l+9wsT1f/JnHm0/XAFCWDVMBkxCjXQD91O9zvWt575PHlyjjDk6KATIigQq4RACvne9mv295/IjalSqJQ2HeYxo3iBC4XQDsme/WdT1i6ZvM1W3XAESfARA6iVm2CRPqirzWf3Iw7Yjc2mSFBACNRAZ1gxylSAHgiu9xuXRo7dzN3ijQEkGMAQEwkhCk6tDqi+9ztWVx/9zI1XzMBkGNARcwxBikWgD7i+E38D9RrL/Gy2mFBU/ebAY7gBb3SBXuiqp2uT1z45GJ1WfIBACWVB40ihb3TEXsl6FhuWVk49zv8k7kTQCNRB51gQGnRhevj6BnsHk974nZm2vKDE/eUgY3kLp6XRDjl+9jtW5l7ZCHmSSHMk+cUxZ5xB24ShDinaFhvd63T1/Gm22FAFONRAcmxBykXaYujKZ2s24w7YrI1csCAE3eSwY7kBakCRXuiq41iigmuNCJy3rAEkWMVxI7gBb3WgT5ne9mv3V14Z2Jij+dQUXeQxI7hxb3e1S+yfk7/kA8ro7M123EEkWwTgcwl1vtckfOqJ81iigmuNzMm2vEAkibARQ6ixa4Rgmil6lzsHR+6dHfjj6RWgCNQAUwxAq0QQDime8k6yUw/I7MyG3XF0GaTkh1hhi5Sgqvl6l8v3Rx4Nz7ijmUVwDRAR46gBy7RkW4w+8k6ykw4JXO2nuFBADMD0Zg1Vm0RRDtnbw7/kBtpcej");
const bytes=new Uint8Array(encoded.length);
let integrity=2166136261;
for(let index=0;index<encoded.length;index++){bytes[index]=encoded.charCodeAt(index)^key[index%key.length];integrity^=bytes[index];integrity=Math.imul(integrity,16777619)>>>0;}
if(integrity!==817848116)throw new Error("Arquivo protegido inválido: version.js");
const source=new TextDecoder("utf-8").decode(bytes);
(0,eval)(source+"\n//# sourceURL=/version.js?v=564");
})();
