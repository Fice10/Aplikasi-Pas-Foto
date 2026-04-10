var Pg=Object.defineProperty,Ug=(e,t,r)=>t in e?Pg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Wg=(e,t,r)=>Ug(e,t+"",r);/*!
* ONNX Runtime Web v1.21.0
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/var Sa=Object.defineProperty,qg=Object.getOwnPropertyDescriptor,Lg=Object.getOwnPropertyNames,Gg=Object.prototype.hasOwnProperty,Vg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),lr=(e,t)=>{for(var r in t)Sa(e,r,{get:t[r],enumerable:!0})},Hg=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Lg(t))!Gg.call(e,s)&&s!==r&&Sa(e,s,{get:()=>t[s],enumerable:!(a=qg(t,s))||a.enumerable});return e},Pr=e=>Hg(Sa({},"__esModule",{value:!0}),e),Kt,ft,Mt,so,Ud,Wd=L(()=>{Kt=new Map,ft=[],Mt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Kt.get(e);if(a===void 0)Kt.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let s=ft.indexOf(e);s!==-1&&ft.splice(s,1);for(let o=0;o<ft.length;o++)if(Kt.get(ft[o]).priority<=r){ft.splice(o,0,e);return}ft.push(e)}return}throw new TypeError("not a valid backend")},so=async e=>{let t=Kt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ud=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),a=r.length===0?ft:r,s,o=[],i=new Set;for(let p of a){let d=await so(p);typeof d=="string"?o.push({name:p,err:d}):(s||(s=d),s===d&&i.add(p))}if(!s)throw new Error(`no available backend found. ERR: ${o.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:d}of o)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${d}`);let l=t.filter(p=>i.has(typeof p=="string"?p:p.name));return[s,new Proxy(e,{get:(p,d)=>d==="executionProviders"?l:Reflect.get(p,d)})]}}),Fg=L(()=>{Wd()}),qd,jg=L(()=>{qd="1.21.0"}),mi,Ge,Ld=L(()=>{jg(),mi="warning",Ge={wasm:{},webgl:{},webgpu:{},versions:{common:qd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);mi=e}},get logLevel(){return mi}},Object.defineProperty(Ge,"logLevel",{enumerable:!0})}),be,Kg=L(()=>{Ld(),be=Ge}),Gd,Vd,Zg=L(()=>{Gd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let s,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],o=e.dims[3]):(s=e.dims[3],o=e.dims[2]);let i=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,p,d;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?d=[0,0,0,0]:typeof l.bias=="number"?d=[l.bias,l.bias,l.bias,l.bias]:(d=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(d[3]=l.bias[3]));let f=o*s,g=0,y=f,_=f*2,w=-1;i==="RGBA"?(g=0,y=f,_=f*2,w=f*3):i==="RGB"?(g=0,y=f,_=f*2):i==="RBG"&&(g=0,_=f,y=f*2);for(let $=0;$<o;$++)for(let S=0;S<s;S++){let v=(e.data[g++]-d[0])*p[0],b=(e.data[y++]-d[1])*p[1],k=(e.data[_++]-d[2])*p[2],T=w===-1?255:(e.data[w++]-d[3])*p[3];a.fillStyle="rgba("+v+","+b+","+k+","+T+")",a.fillRect(S,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Vd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let s,o,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],o=e.dims[1],i=e.dims[3]):(s=e.dims[3],o=e.dims[2],i=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t==null?void 0:t.norm,d,f;p===void 0||p.mean===void 0?d=[255,255,255,255]:typeof p.mean=="number"?d=[p.mean,p.mean,p.mean,p.mean]:(d=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(d[3]=p.mean[3])),p===void 0||p.bias===void 0?f=[0,0,0,0]:typeof p.bias=="number"?f=[p.bias,p.bias,p.bias,p.bias]:(f=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(f[3]=p.bias[3]));let g=o*s;if(t!==void 0&&(t.format!==void 0&&i===4&&t.format!=="RGBA"||i===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,_=0,w=1,$=2,S=3,v=0,b=g,k=g*2,T=-1;l==="RGBA"?(v=0,b=g,k=g*2,T=g*3):l==="RGB"?(v=0,b=g,k=g*2):l==="RBG"&&(v=0,k=g,b=g*2),a=r.createImageData(s,o);for(let E=0;E<o*s;_+=y,w+=y,$+=y,S+=y,E++)a.data[_]=(e.data[v++]-f[0])*d[0],a.data[w]=(e.data[b++]-f[1])*d[1],a.data[$]=(e.data[k++]-f[2])*d[2],a.data[S]=T===-1?255:(e.data[T++]-f[3])*d[3]}else throw new Error("Can not access image data");return a}}),vr,Hd,Fd,jd,Kd,Zd,Qg=L(()=>{ka(),vr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,s=t.norm??{mean:255,bias:0},o,i;typeof s.mean=="number"?o=[s.mean,s.mean,s.mean,s.mean]:o=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?i=[s.bias,s.bias,s.bias,s.bias]:i=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,f=p==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),g=4,y=0,_=1,w=2,$=3,S=0,v=d,b=d*2,k=-1;l==="RGB"&&(g=3,y=0,_=1,w=2,$=-1),p==="RGBA"?k=d*3:p==="RBG"?(S=0,b=d,v=d*2):p==="BGR"&&(b=0,v=d,S=d*2);for(let T=0;T<d;T++,y+=g,w+=g,_+=g,$+=g)f[S++]=(e[y]+i[0])/o[0],f[v++]=(e[_]+i[1])/o[1],f[b++]=(e[w]+i[2])/o[2],k!==-1&&$!==-1&&(f[k++]=(e[$]+i[3])/o[3]);return p==="RGBA"?new Pe("float32",f,[1,4,r,a]):new Pe("float32",f,[1,3,r,a])},Hd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",i,l=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=p();f.width=e.width,f.height=e.height;let g=d(f);if(g!=null){let y=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=y,l.width=_}else l.tensorFormat="RGBA",l.height=y,l.width=_;g.drawImage(e,0,0),i=g.getImageData(0,0,_,y).data}else throw new Error("Can not access image data")}else if(a){let f,g;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,g=t.resizedWidth):(f=e.height,g=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=f,l.width=g,t!==void 0){let y=p();y.width=g,y.height=f;let _=d(y);if(_!=null)_.putImageData(e,0,0),i=_.getImageData(0,0,g,f).data;else throw new Error("Can not access image data")}else i=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=p();f.width=e.width,f.height=e.height;let g=d(f);if(g!=null){let y=e.height,_=e.width;return g.drawImage(e,0,0,_,y),i=g.getImageData(0,0,_,y).data,l.height=y,l.width=_,vr(i,l)}else throw new Error("Can not access image data")}else{if(o)return new Promise((f,g)=>{let y=p(),_=d(y);if(!e||!_)return g();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{y.width=w.width,y.height=w.height,_.drawImage(w,0,0,y.width,y.height);let $=_.getImageData(0,0,y.width,y.height);l.height=y.height,l.width=y.width,f(vr($.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(i!==void 0)return vr(i,l);throw new Error("Input data provided is not supported - aborted tensor creation")},Fd=(e,t)=>{let{width:r,height:a,download:s,dispose:o}=t,i=[1,a,r,4];return new Pe({location:"texture",type:"float32",texture:e,dims:i,download:s,dispose:o})},jd=(e,t)=>{let{dataType:r,dims:a,download:s,dispose:o}=t;return new Pe({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:s,dispose:o})},Kd=(e,t)=>{let{dataType:r,dims:a,download:s,dispose:o}=t;return new Pe({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:s,dispose:o})},Zd=(e,t,r)=>new Pe({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),kt,ir,gi,Qd,Xg=L(()=>{kt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ir=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),gi=!1,Qd=()=>{if(!gi){gi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(kt.set("int64",BigInt64Array),ir.set(BigInt64Array,"int64")),t&&(kt.set("uint64",BigUint64Array),ir.set(BigUint64Array,"uint64")),a?(kt.set("float16",r),ir.set(r,"float16")):kt.set("float16",Uint16Array)}}}),Xd,Yd,Yg=L(()=>{ka(),Xd=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},Yd=(e,t)=>{switch(e.location){case"cpu":return new Pe(e.type,e.data,t);case"cpu-pinned":return new Pe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Pe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Pe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Pe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Pe,ka=L(()=>{Zg(),Qg(),Xg(),Yg(),Pe=class{constructor(e,t,r){Qd();let a,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,s=e.dims,e.location){case"cpu-pinned":{let i=kt.get(a);if(!i)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof i))throw new TypeError(`buffer should be of type ${i.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let i,l;if(typeof e=="string")if(a=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");i=t}else{let p=kt.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?i=p.from(t,BigInt):i=p.from(t)}else if(t instanceof p)i=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")i=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&p!==Uint16Array)i=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${p}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")a="string",i=e;else if(p==="boolean")a="bool",i=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",i=Uint8Array.from(e);else{let p=ir.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=p,i=e}if(l===void 0)l=[i.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");s=l,this.cpuData=i,this.dataLocation="cpu"}let o=Xd(s);if(this.cpuData&&o!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=s,this.size=o}static async fromImage(e,t){return Hd(e,t)}static fromTexture(e,t){return Fd(e,t)}static fromGpuBuffer(e,t){return jd(e,t)}static fromMLTensor(e,t){return Kd(e,t)}static fromPinnedBuffer(e,t,r){return Zd(e,t,r)}toDataURL(e){return Gd(this,e)}toImageData(e){return Vd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Yd(this,e)}}}),rt,Jd=L(()=>{ka(),rt=Pe}),Ur,yi,it,Qe,ep=L(()=>{Ld(),Ur=(e,t)=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||console.timeStamp(`${e}::ORT::${t}`)},yi=(e,t)=>{var r;let a=((r=new Error().stack)==null?void 0:r.split(/\r\n|\r|\n/g))||[],s=!1;for(let o=0;o<a.length;o++){if(s&&!a[o].includes("TRACE_FUNC")){let i=`FUNC_${e}::${a[o].trim().split(" ")[1]}`;t&&(i+=`::${t}`),Ur("CPU",i);return}a[o].includes("TRACE_FUNC")&&(s=!0)}},it=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||yi("BEGIN",e)},Qe=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||yi("END",e)}}),tp,Jg=L(()=>{Wd(),Jd(),ep(),tp=class rp{constructor(t){this.handler=t}async run(t,r,a){it();let s={},o={};if(typeof t!="object"||t===null||t instanceof rt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let i=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof rt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");i=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);s[d]=null}if(typeof a=="object"&&a!==null)o=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(r);for(let g of this.outputNames)if(f.indexOf(g)!==-1){let y=r[g];(y===null||y instanceof rt)&&(d=!0,i=!1,s[g]=y)}if(d){if(typeof a=="object"&&a!==null)o=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else o=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(i)for(let d of this.outputNames)s[d]=null;let l=await this.handler.run(t,s,o),p={};for(let d in l)if(Object.hasOwnProperty.call(l,d)){let f=l[d];f instanceof rt?p[d]=f:p[d]=new rt(f.type,f.data,f.dims)}return Qe(),p}async release(){return this.handler.dispose()}static async create(t,r,a,s){it();let o,i={};if(typeof t=="string"){if(o=t,typeof r=="object"&&r!==null)i=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof r=="object"&&r!==null)i=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,g=0,y=t.byteLength;if(typeof r=="object"&&r!==null)i=r;else if(typeof r=="number"){if(g=r,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(y=t.byteLength-g,typeof a=="number"){if(y=a,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||g+y>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-g}].`);if(typeof s=="object"&&s!==null)i=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(f,g,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,p]=await Ud(i),d=await l.createInferenceSessionHandler(o,p);return Qe(),new rp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),ip,ey=L(()=>{Jg(),ip=tp}),ty=L(()=>{}),ry=L(()=>{}),iy=L(()=>{}),ay=L(()=>{}),ap={};lr(ap,{InferenceSession:()=>ip,TRACE:()=>Ur,TRACE_FUNC_BEGIN:()=>it,TRACE_FUNC_END:()=>Qe,Tensor:()=>rt,env:()=>be,registerBackend:()=>Mt});var Xe=L(()=>{Fg(),Kg(),ey(),Jd(),ty(),ry(),ep(),iy(),ay()}),Ta=L(()=>{}),np={};lr(np,{default:()=>sp});var _i,wi,sp,ny=L(()=>{var e;df(),At(),Ca(),_i="ort-wasm-proxy-worker",wi=((e=globalThis.self)==null?void 0:e.name)===_i,wi&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":Ea(a.wasm).then(()=>{Fa(a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})})},s=>{postMessage({type:r,err:s})});break;case"init-ep":{let{epName:s,env:o}=a;ja(o,s).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})});break}case"copy-from":{let{buffer:s}=a,o=Hr(s);postMessage({type:r,out:o});break}case"create":{let{model:s,options:o}=a;Ka(s,o).then(i=>{postMessage({type:r,out:i})},i=>{postMessage({type:r,err:i})});break}case"release":Za(a),postMessage({type:r});break;case"run":{let{sessionId:s,inputIndices:o,inputs:i,outputIndices:l,options:p}=a;Qa(s,o,i,l,new Array(l.length).fill(null),p).then(d=>{d.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Ya([...i,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Xa(a),postMessage({type:r});break;default:}}catch(s){postMessage({type:r,err:s})}}),sp=wi?null:t=>new Worker(t??Me,{type:"module",name:_i})}),op={};lr(op,{default:()=>up});var $i,bi,up,oo,sy=L(()=>{var e,t;bi=($i=import.meta.url,async function(r={}){var a,s,o,i=r,l=new Promise((n,u)=>{s=n,o=u}),p=typeof window=="object",d=typeof WorkerGlobalScope<"u",f=d&&((a=self.name)==null?void 0:a.startsWith("em-pthread"));i.mountExternalData=(n,u)=>{n.startsWith("./")&&(n=n.substring(2)),(i.Bd||(i.Bd=new Map)).set(n,u)},i.unmountExternalData=()=>{delete i.Bd};var g=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let y=()=>{let n=(c,h,m)=>(...x)=>{let C=Je,A=h==null?void 0:h();x=c(...x);let B=h==null?void 0:h();return A!==B&&(c=B,m(A),h=m=null),Je!=C?new Promise((W,H)=>{oi={resolve:W,reject:H}}):x},u=c=>async(...h)=>{var m;try{if(i.Cd)throw Error("Session already started");let x=i.Cd={be:h[0],errors:[]},C=await c(...h);if(i.Cd!==x)throw Error("Session mismatch");(m=i.Dd)==null||m.flush();let A=x.errors;if(0<A.length){let B=await Promise.all(A);if(B=B.filter(W=>W),0<B.length)throw Error(B.join(`
`))}return C}finally{i.Cd=null}};i._OrtCreateSession=n(i._OrtCreateSession,()=>i._OrtCreateSession,c=>i._OrtCreateSession=c),i._OrtRun=u(n(i._OrtRun,()=>i._OrtRun,c=>i._OrtRun=c)),i._OrtRunWithBinding=u(n(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,c=>i._OrtRunWithBinding=c)),i._OrtBindInput=n(i._OrtBindInput,()=>i._OrtBindInput,c=>i._OrtBindInput=c),y=void 0};i.jsepInit=(n,u)=>{if(y==null||y(),n==="webgpu"){[i.Dd,i.Rd,i.Vd,i.Hd,i.Ud,i.hc,i.Wd,i.Zd,i.Sd,i.Td,i.Xd]=u;let c=i.Dd;i.jsepRegisterBuffer=(h,m,x,C)=>c.registerBuffer(h,m,x,C),i.jsepGetBuffer=h=>c.getBuffer(h),i.jsepCreateDownloader=(h,m,x)=>c.createDownloader(h,m,x),i.jsepOnCreateSession=h=>{c.onCreateSession(h)},i.jsepOnReleaseSession=h=>{c.onReleaseSession(h)},i.jsepOnRunStart=h=>c.onRunStart(h),i.$d=(h,m)=>{c.upload(h,m)}}else if(n==="webnn"){[i.Dd,i.Yd,i.Id,i.jsepEnsureTensor,i.Jd,i.jsepDownloadTensor]=u,i.jsepReleaseTensorId=i.Id,i.jsepUploadTensor=i.Jd;let c=i.Dd;i.jsepOnRunStart=h=>c.onRunStart(h),i.jsepOnRunEnd=c.onRunEnd.bind(c),i.jsepRegisterMLContext=(h,m)=>{c.registerMLContext(h,m)},i.jsepOnReleaseSession=h=>{c.onReleaseSession(h)},i.jsepCreateMLTensorDownloader=(h,m)=>c.createMLTensorDownloader(h,m),i.jsepRegisterMLTensor=(h,m,x,C)=>c.registerMLTensor(h,m,x,C),i.jsepCreateMLContext=h=>c.createMLContext(h),i.jsepRegisterMLConstant=(h,m,x,C,A)=>c.registerMLConstant(h,m,x,C,A,i.Bd),i.jsepRegisterGraphInput=c.registerGraphInput.bind(c),i.jsepIsGraphInput=c.isGraphInput.bind(c),i.jsepCreateTemporaryTensor=c.createTemporaryTensor.bind(c)}};var _,w,$=Object.assign({},i),S=(n,u)=>{throw u},v="";(p||d)&&(d?v=self.location.href:typeof document<"u"&&document.currentScript&&(v=document.currentScript.src),$i&&(v=$i),v=v.startsWith("blob:")?"":v.slice(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1),d&&(w=n=>{var u=new XMLHttpRequest;return u.open("GET",n,!1),u.responseType="arraybuffer",u.send(null),new Uint8Array(u.response)}),_=async n=>{if(D(n))return new Promise((c,h)=>{var m=new XMLHttpRequest;m.open("GET",n,!0),m.responseType="arraybuffer",m.onload=()=>{m.status==200||m.status==0&&m.response?c(m.response):h(m.status)},m.onerror=h,m.send(null)});var u=await fetch(n,{credentials:"same-origin"});if(u.ok)return u.arrayBuffer();throw Error(u.status+" : "+u.url)});var b=console.log.bind(console),k=console.error.bind(console),T=b,E=k;Object.assign(i,$),$=null;var I,z,R,P,V,J,ee,Q,te,le,G,pe,ye,F=i.wasmBinary,ce=!1,D=n=>n.startsWith("file://");function q(){return I.buffer!=P.buffer&&Ie(),P}function re(){return I.buffer!=P.buffer&&Ie(),V}function _e(){return I.buffer!=P.buffer&&Ie(),J}function Ae(){return I.buffer!=P.buffer&&Ie(),ee}function U(){return I.buffer!=P.buffer&&Ie(),Q}function de(){return I.buffer!=P.buffer&&Ie(),te}function We(){return I.buffer!=P.buffer&&Ie(),le}function Ve(){return I.buffer!=P.buffer&&Ie(),ye}if(f){let n=function(u){try{var c=u.data,h=c.yd;if(h==="load"){let m=[];self.onmessage=x=>m.push(x),self.startWorker=()=>{postMessage({yd:"loaded"});for(let x of m)n(x);self.onmessage=n};for(let x of c.Od)i[x]&&!i[x].proxy||(i[x]=(...C)=>{postMessage({yd:"callHandler",Nd:x,args:C})},x=="print"&&(T=i[x]),x=="printErr"&&(E=i[x]));I=c.he,Ie(),Te(c.ie)}else if(h==="run"){Sf(c.xd),pi(c.xd,0,0,1,0,0),on(),ni(c.xd),Se||(ts(),Se=!0);try{kf(c.de,c.Fd)}catch(m){if(m!="unwind")throw m}}else c.target!=="setimmediate"&&(h==="checkMailbox"?Se&&cr():h&&(E(`worker: received unknown command ${h}`),E(c)))}catch(m){throw rs(),m}};var Te,Se=!1;E=function(...u){u=u.join(" "),console.error(u)},self.alert=function(...u){postMessage({yd:"alert",text:u.join(" "),fe:$r()})},self.onunhandledrejection=u=>{throw u.reason||u},self.onmessage=n}function Ie(){var n=I.buffer;i.HEAP8=P=new Int8Array(n),i.HEAP16=J=new Int16Array(n),i.HEAPU8=V=new Uint8Array(n),i.HEAPU16=ee=new Uint16Array(n),i.HEAP32=Q=new Int32Array(n),i.HEAPU32=te=new Uint32Array(n),i.HEAPF32=le=new Float32Array(n),i.HEAPF64=ye=new Float64Array(n),i.HEAP64=G=new BigInt64Array(n),i.HEAPU64=pe=new BigUint64Array(n)}function dr(){f?startWorker(i):M.Bb()}f||(I=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ie());var Bt,qt=0,Lt=null;function Ja(){if(--qt==0&&Lt){var n=Lt;Lt=null,n()}}function at(n){throw E(n="Aborted("+n+")"),ce=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),o(n),n}function en(){return{a:{Ta:xf,Va:vf,W:Tf,la:Cf,b:If,u:zf,R:Af,Za:Of,d:Bf,pb:pn,g:Ef,T:fn,Ga:mn,lb:yn,nb:_n,Ha:wn,Ea:$n,wb:bn,Da:vn,pa:xn,mb:Sn,jb:kn,Fa:Tn,kb:Cn,Ma:Rf,za:Nf,eb:Df,cb:Pf,ya:Wf,V:qf,N:Lf,db:Gf,ma:Qf,fb:Xf,zb:Yf,hb:Jf,qb:em,ab:tm,Aa:rm,yb:ni,Ja:im,S:am,Wa:nm,$:um,G:lm,E:pm,m:ri,H:cm,B:mm,X:gm,J:ym,v:_m,O:wm,D:$m,t:bm,A:vm,z:xm,w:Sm,r:km,tb:Tm,ub:Cm,vb:Em,rb:qn,sb:Ln,bb:Gn,Oa:zm,La:Om,y:Bm,ja:Rm,Ba:Nm,Ka:Am,qa:Dm,Ia:Mm,ib:Pm,U:Im,fa:Um,Sa:Wm,gb:qm,Qa:Lm,Pa:Gm,Ab:jn,Ca:Kn,ob:Qr,aa:Zn,oa:Qn,xb:Xn,na:Yn,$a:gg,ia:Ig,sa:Rg,ga:fg,da:vg,ua:Og,p:cg,e:Qm,c:Km,ea:$g,f:Xm,n:Jm,k:ug,Y:tg,ka:lg,j:hg,wa:wg,Ra:Mg,ca:Cg,Ua:Dg,P:bg,K:ig,_:Tg,Q:mg,Z:zg,x:rg,l:Zm,va:kg,i:jm,h:eg,ra:Ng,ta:Bg,o:Ym,q:ag,s:sg,I:og,C:pg,L:dg,xa:_g,_a:yg,F:Eg,Ya:xg,ba:Ag,M:ng,Xa:Sg,ha:Hm,a:I,Na:Zr}}}var Fr={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(n,u,c,h,m)=>{if(i===void 0||!i.Bd)return 1;if((n=ke(Number(n>>>0))).startsWith("./")&&(n=n.substring(2)),!(n=i.Bd.get(n)))return 2;if(u=Number(u>>>0),c=Number(c>>>0),h=Number(h>>>0),u+c>n.byteLength)return 3;try{let x=n.subarray(u,u+c);switch(m){case 0:re().set(x,h>>>0);break;case 1:i.$d(h,x);break;default:return 4}return 0}catch{return 4}},1320198:(n,u,c)=>{i.Jd(n,re().subarray(u>>>0,u+c>>>0))},1320261:()=>i.Yd(),1320302:n=>{i.Id(n)},1320338:()=>{i.Sd()},1320369:()=>{i.Td()},1320398:()=>{i.Xd()},1320423:n=>i.Rd(n),1320456:n=>i.Vd(n),1320488:(n,u,c)=>{i.Hd(Number(n),Number(u),Number(c),!0)},1320551:(n,u,c)=>{i.Hd(Number(n),Number(u),Number(c))},1320608:n=>{i.hc("Abs",n,void 0)},1320659:n=>{i.hc("Neg",n,void 0)},1320710:n=>{i.hc("Floor",n,void 0)},1320763:n=>{i.hc("Ceil",n,void 0)},1320815:n=>{i.hc("Reciprocal",n,void 0)},1320873:n=>{i.hc("Sqrt",n,void 0)},1320925:n=>{i.hc("Exp",n,void 0)},1320976:n=>{i.hc("Erf",n,void 0)},1321027:n=>{i.hc("Sigmoid",n,void 0)},1321082:(n,u,c)=>{i.hc("HardSigmoid",n,{alpha:u,beta:c})},1321161:n=>{i.hc("Log",n,void 0)},1321212:n=>{i.hc("Sin",n,void 0)},1321263:n=>{i.hc("Cos",n,void 0)},1321314:n=>{i.hc("Tan",n,void 0)},1321365:n=>{i.hc("Asin",n,void 0)},1321417:n=>{i.hc("Acos",n,void 0)},1321469:n=>{i.hc("Atan",n,void 0)},1321521:n=>{i.hc("Sinh",n,void 0)},1321573:n=>{i.hc("Cosh",n,void 0)},1321625:n=>{i.hc("Asinh",n,void 0)},1321678:n=>{i.hc("Acosh",n,void 0)},1321731:n=>{i.hc("Atanh",n,void 0)},1321784:n=>{i.hc("Tanh",n,void 0)},1321836:n=>{i.hc("Not",n,void 0)},1321887:(n,u,c)=>{i.hc("Clip",n,{min:u,max:c})},1321956:n=>{i.hc("Clip",n,void 0)},1322008:(n,u)=>{i.hc("Elu",n,{alpha:u})},1322066:n=>{i.hc("Gelu",n,void 0)},1322118:n=>{i.hc("Relu",n,void 0)},1322170:(n,u)=>{i.hc("LeakyRelu",n,{alpha:u})},1322234:(n,u)=>{i.hc("ThresholdedRelu",n,{alpha:u})},1322304:(n,u)=>{i.hc("Cast",n,{to:u})},1322362:n=>{i.hc("Add",n,void 0)},1322413:n=>{i.hc("Sub",n,void 0)},1322464:n=>{i.hc("Mul",n,void 0)},1322515:n=>{i.hc("Div",n,void 0)},1322566:n=>{i.hc("Pow",n,void 0)},1322617:n=>{i.hc("Equal",n,void 0)},1322670:n=>{i.hc("Greater",n,void 0)},1322725:n=>{i.hc("GreaterOrEqual",n,void 0)},1322787:n=>{i.hc("Less",n,void 0)},1322839:n=>{i.hc("LessOrEqual",n,void 0)},1322898:(n,u,c,h,m)=>{i.hc("ReduceMean",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1323073:(n,u,c,h,m)=>{i.hc("ReduceMax",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1323247:(n,u,c,h,m)=>{i.hc("ReduceMin",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1323421:(n,u,c,h,m)=>{i.hc("ReduceProd",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1323596:(n,u,c,h,m)=>{i.hc("ReduceSum",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1323770:(n,u,c,h,m)=>{i.hc("ReduceL1",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1323943:(n,u,c,h,m)=>{i.hc("ReduceL2",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1324116:(n,u,c,h,m)=>{i.hc("ReduceLogSum",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1324293:(n,u,c,h,m)=>{i.hc("ReduceSumSquare",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1324473:(n,u,c,h,m)=>{i.hc("ReduceLogSumExp",n,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1324653:n=>{i.hc("Where",n,void 0)},1324706:(n,u,c)=>{i.hc("Transpose",n,{perm:u?Array.from(U().subarray(Number(u)>>>0,Number(c)>>>0)):[]})},1324830:(n,u,c,h)=>{i.hc("DepthToSpace",n,{blocksize:u,mode:ke(c),format:h?"NHWC":"NCHW"})},1324963:(n,u,c,h)=>{i.hc("DepthToSpace",n,{blocksize:u,mode:ke(c),format:h?"NHWC":"NCHW"})},1325096:(n,u,c,h,m,x,C,A,B,W,H,X,se,we,Le)=>{i.hc("ConvTranspose",n,{format:B?"NHWC":"NCHW",autoPad:u,dilations:[c],group:h,kernelShape:[m],pads:[x,C],strides:[A],wIsConst:()=>!!q()[W>>>0],outputPadding:H?Array.from(U().subarray(Number(H)>>>0,Number(X)>>>0)):[],outputShape:se?Array.from(U().subarray(Number(se)>>>0,Number(we)>>>0)):[],activation:ke(Le)})},1325529:(n,u,c,h,m,x,C,A,B,W,H,X,se,we)=>{i.hc("ConvTranspose",n,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(U().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:h,kernelShape:Array.from(U().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),pads:Array.from(U().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(U().subarray(Number(C)>>>0,2+(Number(C)>>>0)>>>0)),wIsConst:()=>!!q()[B>>>0],outputPadding:W?Array.from(U().subarray(Number(W)>>>0,Number(H)>>>0)):[],outputShape:X?Array.from(U().subarray(Number(X)>>>0,Number(se)>>>0)):[],activation:ke(we)})},1326190:(n,u,c,h,m,x,C,A,B,W,H,X,se,we,Le)=>{i.hc("ConvTranspose",n,{format:B?"NHWC":"NCHW",autoPad:u,dilations:[c],group:h,kernelShape:[m],pads:[x,C],strides:[A],wIsConst:()=>!!q()[W>>>0],outputPadding:H?Array.from(U().subarray(Number(H)>>>0,Number(X)>>>0)):[],outputShape:se?Array.from(U().subarray(Number(se)>>>0,Number(we)>>>0)):[],activation:ke(Le)})},1326623:(n,u,c,h,m,x,C,A,B,W,H,X,se,we)=>{i.hc("ConvTranspose",n,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(U().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:h,kernelShape:Array.from(U().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),pads:Array.from(U().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(U().subarray(Number(C)>>>0,2+(Number(C)>>>0)>>>0)),wIsConst:()=>!!q()[B>>>0],outputPadding:W?Array.from(U().subarray(Number(W)>>>0,Number(H)>>>0)):[],outputShape:X?Array.from(U().subarray(Number(X)>>>0,Number(se)>>>0)):[],activation:ke(we)})},1327284:(n,u)=>{i.hc("GlobalAveragePool",n,{format:u?"NHWC":"NCHW"})},1327375:(n,u,c,h,m,x,C,A,B,W,H,X,se,we)=>{i.hc("AveragePool",n,{format:we?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:m,dilations:x?Array.from(U().subarray(Number(x)>>>0,Number(C)>>>0)):[],kernel_shape:A?Array.from(U().subarray(Number(A)>>>0,Number(B)>>>0)):[],pads:W?Array.from(U().subarray(Number(W)>>>0,Number(H)>>>0)):[],strides:X?Array.from(U().subarray(Number(X)>>>0,Number(se)>>>0)):[]})},1327854:(n,u)=>{i.hc("GlobalAveragePool",n,{format:u?"NHWC":"NCHW"})},1327945:(n,u,c,h,m,x,C,A,B,W,H,X,se,we)=>{i.hc("AveragePool",n,{format:we?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:m,dilations:x?Array.from(U().subarray(Number(x)>>>0,Number(C)>>>0)):[],kernel_shape:A?Array.from(U().subarray(Number(A)>>>0,Number(B)>>>0)):[],pads:W?Array.from(U().subarray(Number(W)>>>0,Number(H)>>>0)):[],strides:X?Array.from(U().subarray(Number(X)>>>0,Number(se)>>>0)):[]})},1328424:(n,u)=>{i.hc("GlobalMaxPool",n,{format:u?"NHWC":"NCHW"})},1328511:(n,u,c,h,m,x,C,A,B,W,H,X,se,we)=>{i.hc("MaxPool",n,{format:we?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:m,dilations:x?Array.from(U().subarray(Number(x)>>>0,Number(C)>>>0)):[],kernel_shape:A?Array.from(U().subarray(Number(A)>>>0,Number(B)>>>0)):[],pads:W?Array.from(U().subarray(Number(W)>>>0,Number(H)>>>0)):[],strides:X?Array.from(U().subarray(Number(X)>>>0,Number(se)>>>0)):[]})},1328986:(n,u)=>{i.hc("GlobalMaxPool",n,{format:u?"NHWC":"NCHW"})},1329073:(n,u,c,h,m,x,C,A,B,W,H,X,se,we)=>{i.hc("MaxPool",n,{format:we?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:m,dilations:x?Array.from(U().subarray(Number(x)>>>0,Number(C)>>>0)):[],kernel_shape:A?Array.from(U().subarray(Number(A)>>>0,Number(B)>>>0)):[],pads:W?Array.from(U().subarray(Number(W)>>>0,Number(H)>>>0)):[],strides:X?Array.from(U().subarray(Number(X)>>>0,Number(se)>>>0)):[]})},1329548:(n,u,c,h,m)=>{i.hc("Gemm",n,{alpha:u,beta:c,transA:h,transB:m})},1329652:n=>{i.hc("MatMul",n,void 0)},1329706:(n,u,c,h)=>{i.hc("ArgMax",n,{keepDims:!!u,selectLastIndex:!!c,axis:h})},1329814:(n,u,c,h)=>{i.hc("ArgMin",n,{keepDims:!!u,selectLastIndex:!!c,axis:h})},1329922:(n,u)=>{i.hc("Softmax",n,{axis:u})},1329985:(n,u)=>{i.hc("Concat",n,{axis:u})},1330045:(n,u,c,h,m)=>{i.hc("Split",n,{axis:u,numOutputs:c,splitSizes:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1330201:n=>{i.hc("Expand",n,void 0)},1330255:(n,u)=>{i.hc("Gather",n,{axis:Number(u)})},1330326:(n,u)=>{i.hc("GatherElements",n,{axis:Number(u)})},1330405:(n,u)=>{i.hc("GatherND",n,{batch_dims:Number(u)})},1330484:(n,u,c,h,m,x,C,A,B,W,H)=>{i.hc("Resize",n,{antialias:u,axes:c?Array.from(U().subarray(Number(c)>>>0,Number(h)>>>0)):[],coordinateTransformMode:ke(m),cubicCoeffA:x,excludeOutside:C,extrapolationValue:A,keepAspectRatioPolicy:ke(B),mode:ke(W),nearestMode:ke(H)})},1330846:(n,u,c,h,m,x,C)=>{i.hc("Slice",n,{starts:u?Array.from(U().subarray(Number(u)>>>0,Number(c)>>>0)):[],ends:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[],axes:x?Array.from(U().subarray(Number(x)>>>0,Number(C)>>>0)):[]})},1331110:n=>{i.hc("Tile",n,void 0)},1331162:(n,u,c)=>{i.hc("InstanceNormalization",n,{epsilon:u,format:c?"NHWC":"NCHW"})},1331276:(n,u,c)=>{i.hc("InstanceNormalization",n,{epsilon:u,format:c?"NHWC":"NCHW"})},1331390:n=>{i.hc("Range",n,void 0)},1331443:(n,u)=>{i.hc("Einsum",n,{equation:ke(u)})},1331524:(n,u,c,h,m)=>{i.hc("Pad",n,{mode:u,value:c,pads:h?Array.from(U().subarray(Number(h)>>>0,Number(m)>>>0)):[]})},1331667:(n,u,c,h,m,x)=>{i.hc("BatchNormalization",n,{epsilon:u,momentum:c,spatial:!!m,trainingMode:!!h,format:x?"NHWC":"NCHW"})},1331836:(n,u,c,h,m,x)=>{i.hc("BatchNormalization",n,{epsilon:u,momentum:c,spatial:!!m,trainingMode:!!h,format:x?"NHWC":"NCHW"})},1332005:(n,u,c)=>{i.hc("CumSum",n,{exclusive:Number(u),reverse:Number(c)})},1332102:(n,u,c)=>{i.hc("DequantizeLinear",n,{axis:u,blockSize:c})},1332192:(n,u,c,h,m)=>{i.hc("GridSample",n,{align_corners:u,mode:ke(c),padding_mode:ke(h),format:m?"NHWC":"NCHW"})},1332362:(n,u,c,h,m)=>{i.hc("GridSample",n,{align_corners:u,mode:ke(c),padding_mode:ke(h),format:m?"NHWC":"NCHW"})},1332532:(n,u)=>{i.hc("ScatterND",n,{reduction:ke(u)})},1332617:(n,u,c,h,m,x,C,A,B)=>{i.hc("Attention",n,{numHeads:u,isUnidirectional:c,maskFilterValue:h,scale:m,doRotary:x,qkvHiddenSizes:C?Array.from(U().subarray(Number(A)>>>0,Number(A)+C>>>0)):[],pastPresentShareBuffer:!!B})},1332889:n=>{i.hc("BiasAdd",n,void 0)},1332944:n=>{i.hc("BiasSplitGelu",n,void 0)},1333005:n=>{i.hc("FastGelu",n,void 0)},1333061:(n,u,c,h,m,x,C,A,B,W,H,X,se,we,Le,jt)=>{i.hc("Conv",n,{format:X?"NHWC":"NCHW",auto_pad:u,dilations:c?Array.from(U().subarray(Number(c)>>>0,Number(h)>>>0)):[],group:m,kernel_shape:x?Array.from(U().subarray(Number(x)>>>0,Number(C)>>>0)):[],pads:A?Array.from(U().subarray(Number(A)>>>0,Number(B)>>>0)):[],strides:W?Array.from(U().subarray(Number(W)>>>0,Number(H)>>>0)):[],w_is_const:()=>!!q()[Number(se)>>>0],activation:ke(we),activation_params:Le?Array.from(We().subarray(Number(Le)>>>0,Number(jt)>>>0)):[]})},1333645:n=>{i.hc("Gelu",n,void 0)},1333697:(n,u,c,h,m,x,C,A,B)=>{i.hc("GroupQueryAttention",n,{numHeads:u,kvNumHeads:c,scale:h,softcap:m,doRotary:x,rotaryInterleaved:C,smoothSoftmax:A,localWindowSize:B})},1333914:(n,u,c,h)=>{i.hc("LayerNormalization",n,{axis:u,epsilon:c,simplified:!!h})},1334025:(n,u,c,h)=>{i.hc("LayerNormalization",n,{axis:u,epsilon:c,simplified:!!h})},1334136:(n,u,c,h,m,x)=>{i.hc("MatMulNBits",n,{k:u,n:c,accuracyLevel:h,bits:m,blockSize:x})},1334263:(n,u,c,h,m,x)=>{i.hc("MultiHeadAttention",n,{numHeads:u,isUnidirectional:c,maskFilterValue:h,scale:m,doRotary:x})},1334422:(n,u)=>{i.hc("QuickGelu",n,{alpha:u})},1334486:(n,u,c,h,m)=>{i.hc("RotaryEmbedding",n,{interleaved:!!u,numHeads:c,rotaryEmbeddingDim:h,scale:m})},1334625:(n,u,c)=>{i.hc("SkipLayerNormalization",n,{epsilon:u,simplified:!!c})},1334727:(n,u,c)=>{i.hc("SkipLayerNormalization",n,{epsilon:u,simplified:!!c})},1334829:(n,u,c,h)=>{i.hc("GatherBlockQuantized",n,{gatherAxis:u,quantizeAxis:c,blockSize:h})},1334950:n=>{i.Wd(n)},1334984:(n,u)=>i.Zd(Number(n),Number(u),i.Cd.be,i.Cd.errors)};function vf(n,u,c){return Nn(async()=>{await i.Ud(Number(n),Number(u),Number(c))})}function xf(){return typeof wasmOffsetConverter<"u"}class jr{constructor(u){Wg(this,"name","ExitStatus"),this.message=`Program terminated with exit(${u})`,this.status=u}}var tn=n=>{n.terminate(),n.onmessage=()=>{}},Kr=[],rn=n=>{dt.length==0&&(ln(),un(dt[0]));var u=dt.pop();if(!u)return 6;Gt.push(u),wt[n.xd]=u,u.xd=n.xd;var c={yd:"run",de:n.ce,Fd:n.Fd,xd:n.xd};return u.postMessage(c,n.Ld),0},lt=0,$e=(n,u,...c)=>{for(var h=2*c.length,m=ae(),x=hi(8*h),C=x>>>3,A=0;A<c.length;A++){var B=c[A];typeof B=="bigint"?(G[C+2*A]=1n,G[C+2*A+1]=B):(G[C+2*A]=0n,Ve()[C+2*A+1>>>0]=B)}return n=is(n,0,h,x,u),ie(m),n};function Zr(n){if(f)return $e(0,1,n);if(R=n,!(0<lt)){for(var u of Gt)tn(u);for(u of dt)tn(u);dt=[],Gt=[],wt={},ce=!0}S(0,new jr(n))}function an(n){if(f)return $e(1,0,n);Qr(n)}var Qr=n=>{if(R=n,f)throw an(n),"unwind";Zr(n)},dt=[],Gt=[],nn=[],wt={},sn=n=>{var u=n.xd;delete wt[u],dt.push(n),Gt.splice(Gt.indexOf(n),1),n.xd=0,as(u)};function on(){nn.forEach(n=>n())}var un=n=>new Promise(u=>{n.onmessage=m=>{var x=(m=m.data).yd;if(m.Ed&&m.Ed!=$r()){var C=wt[m.Ed];C?C.postMessage(m,m.Ld):E(`Internal error! Worker sent a message "${x}" to target pthread ${m.Ed}, but that thread no longer exists!`)}else x==="checkMailbox"?cr():x==="spawnThread"?rn(m):x==="cleanupThread"?sn(wt[m.ee]):x==="loaded"?(n.loaded=!0,u(n)):x==="alert"?alert(`Thread ${m.fe}: ${m.text}`):m.target==="setimmediate"?n.postMessage(m):x==="callHandler"?i[m.Nd](...m.args):x&&E(`worker sent an unknown command ${x}`)},n.onerror=m=>{throw E(`worker sent an error! ${m.filename}:${m.lineno}: ${m.message}`),m};var c,h=[];for(c of[])i.propertyIsEnumerable(c)&&h.push(c);n.postMessage({yd:"load",Od:h,he:I,ie:z})});function ln(){var n=new Worker(import.meta.url.startsWith("file:")?new URL("/assets/ort.bundle.min-OfoG_cy9-CCEEaD6t.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});dt.push(n)}var Sf=n=>{Ie();var u=de()[n+52>>>2>>>0];n=de()[n+56>>>2>>>0],os(u,u-n),ie(u)},kf=(n,u)=>{lt=0,n=fi(n,u),0<lt?R=n:ci(n)},pr=[];function Tf(n){var u=new Xr(n>>>=0);if(q()[u.wd+12>>>0]==0){var c=1;q()[u.wd+12>>>0]=c}return c=0,q()[u.wd+13>>>0]=c,pr.push(u),ls(n),ps(n)}var $t=0,Cf=()=>{ne(0,0);var n=pr.pop();us(n.Gd),$t=0};class Xr{constructor(u){this.Gd=u,this.wd=u-24}}function Ef(n){throw $t||($t=n>>>0),$t}var Yr=n=>{var u=$t;if(!u)return Ft(0),0;var c=new Xr(u);de()[c.wd+16>>>2>>>0]=u;var h=de()[c.wd+4>>>2>>>0];if(!h)return Ft(0),u;for(var m of n){if(m===0||m===h)break;if(ds(m,h,c.wd+16))return Ft(m),u}return Ft(h),u};function If(){return Yr([])}function zf(n){return Yr([n>>>0])}function Af(n,u){return Yr([n>>>0,u>>>0])}var Of=()=>{var n=pr.pop();n||at("no exception to throw");var u=n.Gd;if(q()[n.wd+13>>>0]==0){pr.push(n);var c=1;q()[n.wd+13>>>0]=c,c=0,q()[n.wd+12>>>0]=c}throw $t=u};function Bf(n,u,c){var h=new Xr(n>>>=0);throw u>>>=0,c>>>=0,de()[h.wd+16>>>2>>>0]=0,de()[h.wd+4>>>2>>>0]=u,de()[h.wd+8>>>2>>>0]=c,$t=n}function dn(n,u,c,h){return f?$e(2,1,n,u,c,h):pn(n,u,c,h)}function pn(n,u,c,h){if(n>>>=0,c>>>=0,h>>>=0,g===void 0)return 6;var m=[];return f&&m.length===0?dn(n,u>>>=0,c,h):(n={ce:c,xd:n,Fd:h,Ld:m},f?(n.yd="spawnThread",postMessage(n,m),0):rn(n))}var cn=typeof TextDecoder<"u"?new TextDecoder:void 0,hn=(n,u=0,c=NaN)=>{var h=(u>>>=0)+c;for(c=u;n[c]&&!(c>=h);)++c;if(16<c-u&&n.buffer&&cn)return cn.decode(n.buffer instanceof ArrayBuffer?n.subarray(u,c):n.slice(u,c));for(h="";u<c;){var m=n[u++];if(128&m){var x=63&n[u++];if((224&m)==192)h+=String.fromCharCode((31&m)<<6|x);else{var C=63&n[u++];65536>(m=(240&m)==224?(15&m)<<12|x<<6|C:(7&m)<<18|x<<12|C<<6|63&n[u++])?h+=String.fromCharCode(m):(m-=65536,h+=String.fromCharCode(55296|m>>10,56320|1023&m))}}else h+=String.fromCharCode(m)}return h},ke=(n,u)=>(n>>>=0)?hn(re(),n,u):"";function fn(n,u,c){return f?$e(3,1,n,u,c):0}function mn(n,u){if(f)return $e(4,1,n,u)}var gn=n=>{for(var u=0,c=0;c<n.length;++c){var h=n.charCodeAt(c);127>=h?u++:2047>=h?u+=2:55296<=h&&57343>=h?(u+=4,++c):u+=3}return u},Rt=(n,u,c)=>{var h=re();if(u>>>=0,0<c){var m=u;c=u+c-1;for(var x=0;x<n.length;++x){var C=n.charCodeAt(x);if(55296<=C&&57343>=C&&(C=65536+((1023&C)<<10)|1023&n.charCodeAt(++x)),127>=C){if(u>=c)break;h[u++>>>0]=C}else{if(2047>=C){if(u+1>=c)break;h[u++>>>0]=192|C>>6}else{if(65535>=C){if(u+2>=c)break;h[u++>>>0]=224|C>>12}else{if(u+3>=c)break;h[u++>>>0]=240|C>>18,h[u++>>>0]=128|C>>12&63}h[u++>>>0]=128|C>>6&63}h[u++>>>0]=128|63&C}}h[u>>>0]=0,n=u-m}else n=0;return n};function yn(n,u){if(f)return $e(5,1,n,u)}function _n(n,u,c){if(f)return $e(6,1,n,u,c)}function wn(n,u,c){return f?$e(7,1,n,u,c):0}function $n(n,u){if(f)return $e(8,1,n,u)}function bn(n,u,c){if(f)return $e(9,1,n,u,c)}function vn(n,u,c,h){if(f)return $e(10,1,n,u,c,h)}function xn(n,u,c,h){if(f)return $e(11,1,n,u,c,h)}function Sn(n,u,c,h){if(f)return $e(12,1,n,u,c,h)}function kn(n){if(f)return $e(13,1,n)}function Tn(n,u){if(f)return $e(14,1,n,u)}function Cn(n,u,c){if(f)return $e(15,1,n,u,c)}var En,pt,Rf=()=>at(""),Ye=n=>{for(var u="";re()[n>>>0];)u+=En[re()[n++>>>0]];return u},Jr={},ei={};function nt(n,u,c={}){return(function(h,m,x={}){var C=m.name;if(!h)throw new pt(`type "${C}" must have a positive integer typeid pointer`);if(ei.hasOwnProperty(h)){if(x.Pd)return;throw new pt(`Cannot register type '${C}' twice`)}ei[h]=m,Jr.hasOwnProperty(h)&&(m=Jr[h],delete Jr[h],m.forEach(A=>A()))})(n,u,c)}var In=(n,u,c)=>{switch(u){case 1:return c?h=>q()[h>>>0]:h=>re()[h>>>0];case 2:return c?h=>_e()[h>>>1>>>0]:h=>Ae()[h>>>1>>>0];case 4:return c?h=>U()[h>>>2>>>0]:h=>de()[h>>>2>>>0];case 8:return c?h=>G[h>>>3]:h=>pe[h>>>3];default:throw new TypeError(`invalid integer width (${u}): ${n}`)}};function Nf(n,u,c){c>>>=0,nt(n>>>=0,{name:u=Ye(u>>>0),fromWireType:h=>h,toWireType:function(h,m){if(typeof m!="bigint"&&typeof m!="number")throw m=m===null?"null":(h=typeof m)=="object"||h==="array"||h==="function"?m.toString():""+m,new TypeError(`Cannot convert "${m}" to ${this.name}`);return typeof m=="number"&&(m=BigInt(m)),m},zd:ct,readValueFromPointer:In(u,c,u.indexOf("u")==-1),Ad:null})}var ct=8;function Df(n,u,c,h){nt(n>>>=0,{name:u=Ye(u>>>0),fromWireType:function(m){return!!m},toWireType:function(m,x){return x?c:h},zd:ct,readValueFromPointer:function(m){return this.fromWireType(re()[m>>>0])},Ad:null})}var ti=[],st=[];function ri(n){9<(n>>>=0)&&--st[n+1]==0&&(st[n]=void 0,ti.push(n))}var Ne=n=>{if(!n)throw new pt("Cannot use deleted val. handle = "+n);return st[n]},qe=n=>{switch(n){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let u=ti.pop()||st.length;return st[u]=n,st[u+1]=1,u}};function ii(n){return this.fromWireType(de()[n>>>2>>>0])}var Mf={name:"emscripten::val",fromWireType:n=>{var u=Ne(n);return ri(n),u},toWireType:(n,u)=>qe(u),zd:ct,readValueFromPointer:ii,Ad:null};function Pf(n){return nt(n>>>0,Mf)}var Uf=(n,u)=>{switch(u){case 4:return function(c){return this.fromWireType(We()[c>>>2>>>0])};case 8:return function(c){return this.fromWireType(Ve()[c>>>3>>>0])};default:throw new TypeError(`invalid float width (${u}): ${n}`)}};function Wf(n,u,c){c>>>=0,nt(n>>>=0,{name:u=Ye(u>>>0),fromWireType:h=>h,toWireType:(h,m)=>m,zd:ct,readValueFromPointer:Uf(u,c),Ad:null})}function qf(n,u,c,h,m){if(n>>>=0,c>>>=0,u=Ye(u>>>0),m===-1&&(m=4294967295),m=A=>A,h===0){var x=32-8*c;m=A=>A<<x>>>x}var C=u.includes("unsigned")?function(A,B){return B>>>0}:function(A,B){return B};nt(n,{name:u,fromWireType:m,toWireType:C,zd:ct,readValueFromPointer:In(u,c,h!==0),Ad:null})}function Lf(n,u,c){function h(x){var C=de()[x>>>2>>>0];return x=de()[x+4>>>2>>>0],new m(q().buffer,x,C)}var m=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][u];nt(n>>>=0,{name:c=Ye(c>>>0),fromWireType:h,zd:ct,readValueFromPointer:h},{Pd:!0})}function Gf(n,u){nt(n>>>=0,{name:u=Ye(u>>>0),fromWireType:function(c){for(var h,m=de()[c>>>2>>>0],x=c+4,C=x,A=0;A<=m;++A){var B=x+A;A!=m&&re()[B>>>0]!=0||(C=ke(C,B-C),h===void 0?h=C:(h+="\0",h+=C),C=B+1)}return et(c),h},toWireType:function(c,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var m=typeof h=="string";if(!(m||h instanceof Uint8Array||h instanceof Uint8ClampedArray||h instanceof Int8Array))throw new pt("Cannot pass non-string to std::string");var x=m?gn(h):h.length,C=br(4+x+1),A=C+4;if(de()[C>>>2>>>0]=x,m)Rt(h,A,x+1);else if(m)for(m=0;m<x;++m){var B=h.charCodeAt(m);if(255<B)throw et(C),new pt("String has UTF-16 code units that do not fit in 8 bits");re()[A+m>>>0]=B}else for(m=0;m<x;++m)re()[A+m>>>0]=h[m];return c!==null&&c.push(et,C),C},zd:ct,readValueFromPointer:ii,Ad(c){et(c)}})}var zn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Vf=(n,u)=>{for(var c=n>>1,h=c+u/2;!(c>=h)&&Ae()[c>>>0];)++c;if(32<(c<<=1)-n&&zn)return zn.decode(re().slice(n,c));for(c="",h=0;!(h>=u/2);++h){var m=_e()[n+2*h>>>1>>>0];if(m==0)break;c+=String.fromCharCode(m)}return c},Hf=(n,u,c)=>{if(c??(c=2147483647),2>c)return 0;var h=u;c=(c-=2)<2*n.length?c/2:n.length;for(var m=0;m<c;++m){var x=n.charCodeAt(m);_e()[u>>>1>>>0]=x,u+=2}return _e()[u>>>1>>>0]=0,u-h},Ff=n=>2*n.length,jf=(n,u)=>{for(var c=0,h="";!(c>=u/4);){var m=U()[n+4*c>>>2>>>0];if(m==0)break;++c,65536<=m?(m-=65536,h+=String.fromCharCode(55296|m>>10,56320|1023&m)):h+=String.fromCharCode(m)}return h},Kf=(n,u,c)=>{if(u>>>=0,c??(c=2147483647),4>c)return 0;var h=u;c=h+c-4;for(var m=0;m<n.length;++m){var x=n.charCodeAt(m);if(55296<=x&&57343>=x&&(x=65536+((1023&x)<<10)|1023&n.charCodeAt(++m)),U()[u>>>2>>>0]=x,(u+=4)+4>c)break}return U()[u>>>2>>>0]=0,u-h},Zf=n=>{for(var u=0,c=0;c<n.length;++c){var h=n.charCodeAt(c);55296<=h&&57343>=h&&++c,u+=4}return u};function Qf(n,u,c){if(n>>>=0,u>>>=0,c=Ye(c>>>=0),u===2)var h=Vf,m=Hf,x=Ff,C=A=>Ae()[A>>>1>>>0];else u===4&&(h=jf,m=Kf,x=Zf,C=A=>de()[A>>>2>>>0]);nt(n,{name:c,fromWireType:A=>{for(var B,W=de()[A>>>2>>>0],H=A+4,X=0;X<=W;++X){var se=A+4+X*u;X!=W&&C(se)!=0||(H=h(H,se-H),B===void 0?B=H:(B+="\0",B+=H),H=se+u)}return et(A),B},toWireType:(A,B)=>{if(typeof B!="string")throw new pt(`Cannot pass non-string to C++ string type ${c}`);var W=x(B),H=br(4+W+u);return de()[H>>>2>>>0]=W/u,m(B,H+4,W+u),A!==null&&A.push(et,H),H},zd:ct,readValueFromPointer:ii,Ad(A){et(A)}})}function Xf(n,u){nt(n>>>=0,{Qd:!0,name:u=Ye(u>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function Yf(n){pi(n>>>0,!d,1,!p,131072,!1),on()}var ai=n=>{if(!ce)try{if(n(),!(0<lt))try{f?ci(R):Qr(R)}catch(u){u instanceof jr||u=="unwind"||S(0,u)}}catch(u){u instanceof jr||u=="unwind"||S(0,u)}};function ni(n){n>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(U(),n>>>2,n).value.then(cr),n+=128,Atomics.store(U(),n>>>2,1))}var cr=()=>{var n=$r();n&&(ni(n),ai(ss))};function Jf(n,u){(n>>>=0)==u>>>0?setTimeout(cr):f?postMessage({Ed:n,yd:"checkMailbox"}):(n=wt[n])&&n.postMessage({yd:"checkMailbox"})}var si=[];function em(n,u,c,h,m){for(u>>>=0,h/=2,si.length=h,c=m>>>0>>>3,m=0;m<h;m++)si[m]=G[c+2*m]?G[c+2*m+1]:Ve()[c+2*m+1>>>0];return(u?Fr[u]:Fm[n])(...si)}var tm=()=>{lt=0};function rm(n){n>>>=0,f?postMessage({yd:"cleanupThread",ee:n}):sn(wt[n])}function im(n){}var hr=(n,u)=>{var c=ei[n];if(c===void 0)throw n=es(n),c=Ye(n),et(n),new pt(`${u} has unknown type ${c}`);return c},An=(n,u,c)=>{var h=[];return n=n.toWireType(h,c),h.length&&(de()[u>>>2>>>0]=qe(h)),n};function am(n,u,c){return u>>>=0,c>>>=0,n=Ne(n>>>0),u=hr(u,"emval::as"),An(u,c,n)}function nm(n,u){return u>>>=0,n=Ne(n>>>0),(u=hr(u,"emval::as")).toWireType(null,n)}var fr=n=>{try{n()}catch(u){at(u)}},ht=0,Je=null,On=0,mr=[],Bn={},Rn={},sm=0,oi=null,om=[];function Nn(n){return(function(u){if(!ce){if(ht===0){var c=!1,h=!1;u((m=0)=>{if(!ce&&(On=m,c=!0,h)){ht=2,fr(()=>ao(Je)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),m=!1;try{var x=(function(){var B=U()[Je+8>>>2>>>0];return B=M[Rn[B]],--lt,B()})()}catch(B){x=B,m=!0}var C=!1;if(!Je){var A=oi;A&&(oi=null,(m?A.reject:A.resolve)(x),C=!0)}if(m&&!C)throw x}}),h=!0,c||(ht=1,Je=(function(){var m=br(65548),x=m+12;de()[m>>>2>>>0]=x,de()[m+4>>>2>>>0]=x+65536,x=mr[0];var C=Bn[x];return C===void 0&&(C=sm++,Bn[x]=C,Rn[C]=x),x=C,U()[m+8>>>2>>>0]=x,m})(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),fr(()=>ro(Je)))}else ht===2?(ht=0,fr(no),et(Je),Je=null,om.forEach(ai)):at(`invalid state: ${ht}`);return On}})(u=>{n().then(u)})}function um(n){return n>>>=0,Nn(async()=>{var u=await Ne(n);return qe(u)})}var gr=[];function lm(n,u,c,h){return c>>>=0,h>>>=0,(n=gr[n>>>0])(null,u=Ne(u>>>0),c,h)}var dm={},yr=n=>{var u=dm[n];return u===void 0?Ye(n):u};function pm(n,u,c,h,m){return c>>>=0,h>>>=0,m>>>=0,(n=gr[n>>>0])(u=Ne(u>>>0),u[c=yr(c)],h,m)}var Dn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function cm(n){return(n>>>=0)==0?qe(Dn()):(n=yr(n),qe(Dn()[n]))}var hm=n=>{var u=gr.length;return gr.push(n),u},fm=(n,u)=>{for(var c=Array(n),h=0;h<n;++h)c[h]=hr(de()[u+4*h>>>2>>>0],"parameter "+h);return c},Mn=(n,u)=>Object.defineProperty(u,"name",{value:n});function mm(n,u,c){var h=(u=fm(n,u>>>0)).shift();n--;var m=`return function (obj, func, destructorsRef, args) {
`,x=0,C=[];c===0&&C.push("obj");for(var A=["retType"],B=[h],W=0;W<n;++W)C.push("arg"+W),A.push("argType"+W),B.push(u[W]),m+=`  var arg${W} = argType${W}.readValueFromPointer(args${x?"+"+x:""});
`,x+=u[W].zd;return m+=`  var rv = ${c===1?"new func":"func.call"}(${C.join(", ")});
`,h.Qd||(A.push("emval_returnValue"),B.push(An),m+=`  return emval_returnValue(retType, destructorsRef, rv);
`),A.push(m+`};
`),n=(function(H){var X=Function;if(!(X instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof X} which is not a function`);var se=Mn(X.name||"unknownFunctionName",function(){});return se.prototype=X.prototype,se=new se,(H=X.apply(se,H))instanceof Object?H:se})(A)(...B),c=`methodCaller<(${u.map(H=>H.name).join(", ")}) => ${h.name}>`,hm(Mn(c,n))}function gm(n){return n=yr(n>>>0),qe(i[n])}function ym(n,u){return u>>>=0,n=Ne(n>>>0),u=Ne(u),qe(n[u])}function _m(n){9<(n>>>=0)&&(st[n+1]+=1)}function wm(){return qe([])}function $m(n){n=Ne(n>>>0);for(var u=Array(n.length),c=0;c<n.length;c++)u[c]=n[c];return qe(u)}function bm(n){return qe(yr(n>>>0))}function vm(){return qe({})}function xm(n){for(var u=Ne(n>>>=0);u.length;){var c=u.pop();u.pop()(c)}ri(n)}function Sm(n,u,c){u>>>=0,c>>>=0,n=Ne(n>>>0),u=Ne(u),c=Ne(c),n[u]=c}function km(n,u){return u>>>=0,n=(n=hr(n>>>0,"_emval_take_value")).readValueFromPointer(u),qe(n)}function Tm(n,u){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),u>>>=0,n=new Date(1e3*n),U()[u>>>2>>>0]=n.getUTCSeconds(),U()[u+4>>>2>>>0]=n.getUTCMinutes(),U()[u+8>>>2>>>0]=n.getUTCHours(),U()[u+12>>>2>>>0]=n.getUTCDate(),U()[u+16>>>2>>>0]=n.getUTCMonth(),U()[u+20>>>2>>>0]=n.getUTCFullYear()-1900,U()[u+24>>>2>>>0]=n.getUTCDay(),n=(n.getTime()-Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,U()[u+28>>>2>>>0]=n}var Pn=n=>n%4==0&&(n%100!=0||n%400==0),Un=[0,31,60,91,121,152,182,213,244,274,305,335],Wn=[0,31,59,90,120,151,181,212,243,273,304,334];function Cm(n,u){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),u>>>=0,n=new Date(1e3*n),U()[u>>>2>>>0]=n.getSeconds(),U()[u+4>>>2>>>0]=n.getMinutes(),U()[u+8>>>2>>>0]=n.getHours(),U()[u+12>>>2>>>0]=n.getDate(),U()[u+16>>>2>>>0]=n.getMonth(),U()[u+20>>>2>>>0]=n.getFullYear()-1900,U()[u+24>>>2>>>0]=n.getDay();var c=(Pn(n.getFullYear())?Un:Wn)[n.getMonth()]+n.getDate()-1|0;U()[u+28>>>2>>>0]=c,U()[u+36>>>2>>>0]=-60*n.getTimezoneOffset(),c=new Date(n.getFullYear(),6,1).getTimezoneOffset();var h=new Date(n.getFullYear(),0,1).getTimezoneOffset();n=0|(c!=h&&n.getTimezoneOffset()==Math.min(h,c)),U()[u+32>>>2>>>0]=n}function Em(n){n>>>=0;var u=new Date(U()[n+20>>>2>>>0]+1900,U()[n+16>>>2>>>0],U()[n+12>>>2>>>0],U()[n+8>>>2>>>0],U()[n+4>>>2>>>0],U()[n>>>2>>>0],0),c=U()[n+32>>>2>>>0],h=u.getTimezoneOffset(),m=new Date(u.getFullYear(),6,1).getTimezoneOffset(),x=new Date(u.getFullYear(),0,1).getTimezoneOffset(),C=Math.min(x,m);return 0>c?U()[n+32>>>2>>>0]=+(m!=x&&C==h):0<c!=(C==h)&&(m=Math.max(x,m),u.setTime(u.getTime()+6e4*((0<c?C:m)-h))),U()[n+24>>>2>>>0]=u.getDay(),c=(Pn(u.getFullYear())?Un:Wn)[u.getMonth()]+u.getDate()-1|0,U()[n+28>>>2>>>0]=c,U()[n>>>2>>>0]=u.getSeconds(),U()[n+4>>>2>>>0]=u.getMinutes(),U()[n+8>>>2>>>0]=u.getHours(),U()[n+12>>>2>>>0]=u.getDate(),U()[n+16>>>2>>>0]=u.getMonth(),U()[n+20>>>2>>>0]=u.getYear(),n=u.getTime(),BigInt(isNaN(n)?-1:n/1e3)}function qn(n,u,c,h,m,x,C){return f?$e(16,1,n,u,c,h,m,x,C):-52}function Ln(n,u,c,h,m,x){if(f)return $e(17,1,n,u,c,h,m,x)}var Vt={},Im=()=>performance.timeOrigin+performance.now();function Gn(n,u){if(f)return $e(18,1,n,u);if(Vt[n]&&(clearTimeout(Vt[n].id),delete Vt[n]),!u)return 0;var c=setTimeout(()=>{delete Vt[n],ai(()=>ns(n,performance.timeOrigin+performance.now()))},u);return Vt[n]={id:c,ke:u},0}function zm(n,u,c,h){n>>>=0,u>>>=0,c>>>=0,h>>>=0;var m=new Date().getFullYear(),x=new Date(m,0,1).getTimezoneOffset();m=new Date(m,6,1).getTimezoneOffset();var C=Math.max(x,m);de()[n>>>2>>>0]=60*C,U()[u>>>2>>>0]=+(x!=m),n=(u=A=>{var B=Math.abs(A);return`UTC${0<=A?"-":"+"}${String(Math.floor(B/60)).padStart(2,"0")}${String(B%60).padStart(2,"0")}`})(x),u=u(m),m<x?(Rt(n,c,17),Rt(u,h,17)):(Rt(n,h,17),Rt(u,c,17))}var Am=()=>Date.now();function Om(n,u,c){return 0<=n&&3>=n?(n===0?n=Date.now():n=performance.timeOrigin+performance.now(),G[c>>>0>>>3]=BigInt(Math.round(1e6*n)),0):28}var ui=[],Vn=(n,u)=>{ui.length=0;for(var c;c=re()[n++>>>0];){var h=c!=105;u+=(h&=c!=112)&&u%8?4:0,ui.push(c==112?de()[u>>>2>>>0]:c==106?G[u>>>3]:c==105?U()[u>>>2>>>0]:Ve()[u>>>3>>>0]),u+=h?8:4}return ui};function Bm(n,u,c){return n>>>=0,u=Vn(u>>>0,c>>>0),Fr[n](...u)}function Rm(n,u,c){return n>>>=0,u=Vn(u>>>0,c>>>0),Fr[n](...u)}var Nm=()=>{};function Dm(n,u){return E(ke(n>>>0,u>>>0))}var Mm=()=>{throw lt+=1,"unwind"};function Pm(){return 4294901760}var Um=()=>navigator.hardwareConcurrency;function Wm(){return at("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function qm(n){n>>>=0;var u=re().length;if(n<=u||4294901760<n)return!1;for(var c=1;4>=c;c*=2){var h=u*(1+.2/c);h=Math.min(h,n+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(n,h)/65536))-I.buffer.byteLength+65535)/65536|0;try{I.grow(h),Ie();var m=1;break e}catch{}m=void 0}if(m)return!0}return!1}var _r=()=>(at("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ht={},Hn=n=>{n.forEach(u=>{_r()})};function Lm(){var n=Error().stack.toString().split(`
`);return n[0]=="Error"&&n.shift(),Hn(n),Ht.Kd=_r(),Ht.ae=n,Ht.Kd}function Gm(n,u,c){if(n>>>=0,u>>>=0,Ht.Kd==n)var h=Ht.ae;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),Hn(h);for(var m=3;h[m]&&_r()!=n;)++m;for(n=0;n<c&&h[n+m];++n)U()[u+4*n>>>2>>>0]=_r();return n}var li,di={},Fn=()=>{if(!li){var n,u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(n in di)di[n]===void 0?delete u[n]:u[n]=di[n];var c=[];for(n in u)c.push(`${n}=${u[n]}`);li=c}return li};function jn(n,u){if(f)return $e(19,1,n,u);n>>>=0,u>>>=0;var c=0;return Fn().forEach((h,m)=>{var x=u+c;for(m=de()[n+4*m>>>2>>>0]=x,x=0;x<h.length;++x)q()[m++>>>0]=h.charCodeAt(x);q()[m>>>0]=0,c+=h.length+1}),0}function Kn(n,u){if(f)return $e(20,1,n,u);n>>>=0,u>>>=0;var c=Fn();de()[n>>>2>>>0]=c.length;var h=0;return c.forEach(m=>h+=m.length+1),de()[u>>>2>>>0]=h,0}function Zn(n){return f?$e(21,1,n):52}function Qn(n,u,c,h){return f?$e(22,1,n,u,c,h):52}function Xn(n,u,c,h){return f?$e(23,1,n,u,c,h):70}var Vm=[null,[],[]];function Yn(n,u,c,h){if(f)return $e(24,1,n,u,c,h);u>>>=0,c>>>=0,h>>>=0;for(var m=0,x=0;x<c;x++){var C=de()[u>>>2>>>0],A=de()[u+4>>>2>>>0];u+=8;for(var B=0;B<A;B++){var W=re()[C+B>>>0],H=Vm[n];W===0||W===10?((n===1?T:E)(hn(H)),H.length=0):H.push(W)}m+=A}return de()[h>>>2>>>0]=m,0}function Hm(n){return n>>>0}f||(function(){for(var n=i.numThreads-1;n--;)ln();Kr.unshift(()=>{qt++,(function(u){f?u():Promise.all(dt.map(un)).then(u)})(()=>Ja())})})();for(var Jn=Array(256),wr=0;256>wr;++wr)Jn[wr]=String.fromCharCode(wr);En=Jn,pt=i.BindingError=class extends Error{constructor(n){super(n),this.name="BindingError"}},i.InternalError=class extends Error{constructor(n){super(n),this.name="InternalError"}},st.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>st.length/2-5-ti.length;var M,Fm=[Zr,an,dn,fn,mn,yn,_n,wn,$n,bn,vn,xn,Sn,kn,Tn,Cn,qn,Ln,Gn,jn,Kn,Zn,Qn,Xn,Yn];(async function(){function n(h,m){return M=h.exports,M=(function(){var x=M,C={};for(let[A,B]of Object.entries(x))C[A]=typeof B=="function"?(...W)=>{mr.push(A);try{return B(...W)}finally{ce||(mr.pop(),Je&&ht===1&&mr.length===0&&(ht=0,lt+=1,fr(io),typeof Fibers<"u"&&Fibers.le()))}}:B;return C})(),M=(function(){var x=M,C=B=>W=>B(W)>>>0,A=B=>()=>B()>>>0;return(x=Object.assign({},x)).Cb=C(x.Cb),x.fc=A(x.fc),x.ic=C(x.ic),x.vc=C(x.vc),x.wc=A(x.wc),x.Ac=C(x.Ac),x})(),nn.push(M.jc),z=m,Ja(),M}qt++;var u=en();if(i.instantiateWasm)return new Promise(h=>{i.instantiateWasm(u,(m,x)=>{n(m,x),h(m.exports)})});if(f)return new Promise(h=>{Te=m=>{var x=new WebAssembly.Instance(m,en());h(n(x,m))}});Bt??(Bt=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",v):v+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t-D5Jk56-t.wasm",import.meta.url).href);try{var c=await(async function(h){var m=Bt;if(!F&&typeof WebAssembly.instantiateStreaming=="function"&&!D(m))try{var x=fetch(m,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(x,h)}catch(C){E(`wasm streaming compile failed: ${C}`),E("falling back to ArrayBuffer instantiation")}return(async function(C,A){try{var B=await(async function(W){if(!F)try{var H=await _(W);return new Uint8Array(H)}catch{}if(W==Bt&&F)W=new Uint8Array(F);else{if(!w)throw"both async and sync fetching of the wasm failed";W=w(W)}return W})(C);return await WebAssembly.instantiate(B,A)}catch(W){E(`failed to asynchronously prepare wasm: ${W}`),at(W)}})(m,h)})(u);return n(c.instance,c.module)}catch(h){return o(h),Promise.reject(h)}})();var es=n=>(es=M.Cb)(n),ts=()=>(ts=M.Db)();i._OrtInit=(n,u)=>(i._OrtInit=M.Eb)(n,u),i._OrtGetLastError=(n,u)=>(i._OrtGetLastError=M.Fb)(n,u),i._OrtCreateSessionOptions=(n,u,c,h,m,x,C,A,B,W)=>(i._OrtCreateSessionOptions=M.Gb)(n,u,c,h,m,x,C,A,B,W),i._OrtAppendExecutionProvider=(n,u)=>(i._OrtAppendExecutionProvider=M.Hb)(n,u),i._OrtAddFreeDimensionOverride=(n,u,c)=>(i._OrtAddFreeDimensionOverride=M.Ib)(n,u,c),i._OrtAddSessionConfigEntry=(n,u,c)=>(i._OrtAddSessionConfigEntry=M.Jb)(n,u,c),i._OrtReleaseSessionOptions=n=>(i._OrtReleaseSessionOptions=M.Kb)(n),i._OrtCreateSession=(n,u,c)=>(i._OrtCreateSession=M.Lb)(n,u,c),i._OrtReleaseSession=n=>(i._OrtReleaseSession=M.Mb)(n),i._OrtGetInputOutputCount=(n,u,c)=>(i._OrtGetInputOutputCount=M.Nb)(n,u,c),i._OrtGetInputName=(n,u)=>(i._OrtGetInputName=M.Ob)(n,u),i._OrtGetOutputName=(n,u)=>(i._OrtGetOutputName=M.Pb)(n,u),i._OrtFree=n=>(i._OrtFree=M.Qb)(n),i._OrtCreateTensor=(n,u,c,h,m,x)=>(i._OrtCreateTensor=M.Rb)(n,u,c,h,m,x),i._OrtGetTensorData=(n,u,c,h,m)=>(i._OrtGetTensorData=M.Sb)(n,u,c,h,m),i._OrtReleaseTensor=n=>(i._OrtReleaseTensor=M.Tb)(n),i._OrtCreateRunOptions=(n,u,c,h)=>(i._OrtCreateRunOptions=M.Ub)(n,u,c,h),i._OrtAddRunConfigEntry=(n,u,c)=>(i._OrtAddRunConfigEntry=M.Vb)(n,u,c),i._OrtReleaseRunOptions=n=>(i._OrtReleaseRunOptions=M.Wb)(n),i._OrtCreateBinding=n=>(i._OrtCreateBinding=M.Xb)(n),i._OrtBindInput=(n,u,c)=>(i._OrtBindInput=M.Yb)(n,u,c),i._OrtBindOutput=(n,u,c,h)=>(i._OrtBindOutput=M.Zb)(n,u,c,h),i._OrtClearBoundOutputs=n=>(i._OrtClearBoundOutputs=M._b)(n),i._OrtReleaseBinding=n=>(i._OrtReleaseBinding=M.$b)(n),i._OrtRunWithBinding=(n,u,c,h,m)=>(i._OrtRunWithBinding=M.ac)(n,u,c,h,m),i._OrtRun=(n,u,c,h,m,x,C,A)=>(i._OrtRun=M.bc)(n,u,c,h,m,x,C,A),i._OrtEndProfiling=n=>(i._OrtEndProfiling=M.cc)(n),i._JsepOutput=(n,u,c)=>(i._JsepOutput=M.dc)(n,u,c),i._JsepGetNodeName=n=>(i._JsepGetNodeName=M.ec)(n);var $r=()=>($r=M.fc)(),et=i._free=n=>(et=i._free=M.gc)(n),br=i._malloc=n=>(br=i._malloc=M.ic)(n),pi=(n,u,c,h,m,x)=>(pi=M.kc)(n,u,c,h,m,x),rs=()=>(rs=M.lc)(),is=(n,u,c,h,m)=>(is=M.mc)(n,u,c,h,m),as=n=>(as=M.nc)(n),ci=n=>(ci=M.oc)(n),ns=(n,u)=>(ns=M.pc)(n,u),ss=()=>(ss=M.qc)(),ne=(n,u)=>(ne=M.rc)(n,u),Ft=n=>(Ft=M.sc)(n),os=(n,u)=>(os=M.tc)(n,u),ie=n=>(ie=M.uc)(n),hi=n=>(hi=M.vc)(n),ae=()=>(ae=M.wc)(),us=n=>(us=M.xc)(n),ls=n=>(ls=M.yc)(n),ds=(n,u,c)=>(ds=M.zc)(n,u,c),ps=n=>(ps=M.Ac)(n),cs=i.dynCall_iii=(n,u,c)=>(cs=i.dynCall_iii=M.Bc)(n,u,c),hs=i.dynCall_vi=(n,u)=>(hs=i.dynCall_vi=M.Cc)(n,u),fi=i.dynCall_ii=(n,u)=>(fi=i.dynCall_ii=M.Dc)(n,u),fs=i.dynCall_vii=(n,u,c)=>(fs=i.dynCall_vii=M.Ec)(n,u,c),ms=i.dynCall_iiii=(n,u,c,h)=>(ms=i.dynCall_iiii=M.Fc)(n,u,c,h),gs=i.dynCall_viii=(n,u,c,h)=>(gs=i.dynCall_viii=M.Gc)(n,u,c,h),ys=i.dynCall_iiiii=(n,u,c,h,m)=>(ys=i.dynCall_iiiii=M.Hc)(n,u,c,h,m),_s=i.dynCall_viiii=(n,u,c,h,m)=>(_s=i.dynCall_viiii=M.Ic)(n,u,c,h,m),ws=i.dynCall_viiiiii=(n,u,c,h,m,x,C)=>(ws=i.dynCall_viiiiii=M.Jc)(n,u,c,h,m,x,C),$s=i.dynCall_viiiiiii=(n,u,c,h,m,x,C,A)=>($s=i.dynCall_viiiiiii=M.Kc)(n,u,c,h,m,x,C,A),bs=i.dynCall_ji=(n,u)=>(bs=i.dynCall_ji=M.Lc)(n,u),vs=i.dynCall_v=n=>(vs=i.dynCall_v=M.Mc)(n),xs=i.dynCall_viiiii=(n,u,c,h,m,x)=>(xs=i.dynCall_viiiii=M.Nc)(n,u,c,h,m,x),Ss=i.dynCall_i=n=>(Ss=i.dynCall_i=M.Oc)(n),ks=i.dynCall_fii=(n,u,c)=>(ks=i.dynCall_fii=M.Pc)(n,u,c),Ts=i.dynCall_viiiiiiii=(n,u,c,h,m,x,C,A,B)=>(Ts=i.dynCall_viiiiiiii=M.Qc)(n,u,c,h,m,x,C,A,B),Cs=i.dynCall_viiiiiiiiii=(n,u,c,h,m,x,C,A,B,W,H)=>(Cs=i.dynCall_viiiiiiiiii=M.Rc)(n,u,c,h,m,x,C,A,B,W,H),Es=i.dynCall_jiii=(n,u,c,h)=>(Es=i.dynCall_jiii=M.Sc)(n,u,c,h),Is=i.dynCall_dii=(n,u,c)=>(Is=i.dynCall_dii=M.Tc)(n,u,c),zs=i.dynCall_viiiiiiiii=(n,u,c,h,m,x,C,A,B,W)=>(zs=i.dynCall_viiiiiiiii=M.Uc)(n,u,c,h,m,x,C,A,B,W),As=i.dynCall_viiiiiiiiiii=(n,u,c,h,m,x,C,A,B,W,H,X)=>(As=i.dynCall_viiiiiiiiiii=M.Vc)(n,u,c,h,m,x,C,A,B,W,H,X),Os=i.dynCall_iiiiii=(n,u,c,h,m,x)=>(Os=i.dynCall_iiiiii=M.Wc)(n,u,c,h,m,x),Bs=i.dynCall_iij=(n,u,c)=>(Bs=i.dynCall_iij=M.Xc)(n,u,c),Rs=i.dynCall_iiiiiiiiii=(n,u,c,h,m,x,C,A,B,W)=>(Rs=i.dynCall_iiiiiiiiii=M.Yc)(n,u,c,h,m,x,C,A,B,W),Ns=i.dynCall_iiiiiiiiiii=(n,u,c,h,m,x,C,A,B,W,H)=>(Ns=i.dynCall_iiiiiiiiiii=M.Zc)(n,u,c,h,m,x,C,A,B,W,H),Ds=i.dynCall_vij=(n,u,c)=>(Ds=i.dynCall_vij=M._c)(n,u,c),Ms=i.dynCall_iiif=(n,u,c,h)=>(Ms=i.dynCall_iiif=M.$c)(n,u,c,h),Ps=i.dynCall_iiij=(n,u,c,h)=>(Ps=i.dynCall_iiij=M.ad)(n,u,c,h),Us=i.dynCall_fiii=(n,u,c,h)=>(Us=i.dynCall_fiii=M.bd)(n,u,c,h),Ws=i.dynCall_viiiiiiiiiiiii=(n,u,c,h,m,x,C,A,B,W,H,X,se,we)=>(Ws=i.dynCall_viiiiiiiiiiiii=M.cd)(n,u,c,h,m,x,C,A,B,W,H,X,se,we),qs=i.dynCall_vjiii=(n,u,c,h,m)=>(qs=i.dynCall_vjiii=M.dd)(n,u,c,h,m),Ls=i.dynCall_vif=(n,u,c)=>(Ls=i.dynCall_vif=M.ed)(n,u,c),Gs=i.dynCall_iiiiiii=(n,u,c,h,m,x,C)=>(Gs=i.dynCall_iiiiiii=M.fd)(n,u,c,h,m,x,C),Vs=i.dynCall_iiiij=(n,u,c,h,m)=>(Vs=i.dynCall_iiiij=M.gd)(n,u,c,h,m),Hs=i.dynCall_iiiiiiii=(n,u,c,h,m,x,C,A)=>(Hs=i.dynCall_iiiiiiii=M.hd)(n,u,c,h,m,x,C,A),Fs=i.dynCall_viiiiiiiiiiii=(n,u,c,h,m,x,C,A,B,W,H,X,se)=>(Fs=i.dynCall_viiiiiiiiiiii=M.id)(n,u,c,h,m,x,C,A,B,W,H,X,se),js=i.dynCall_diii=(n,u,c,h)=>(js=i.dynCall_diii=M.jd)(n,u,c,h),Ks=i.dynCall_jiiii=(n,u,c,h,m)=>(Ks=i.dynCall_jiiii=M.kd)(n,u,c,h,m),Zs=i.dynCall_viiij=(n,u,c,h,m)=>(Zs=i.dynCall_viiij=M.ld)(n,u,c,h,m),Qs=i.dynCall_fiiii=(n,u,c,h,m)=>(Qs=i.dynCall_fiiii=M.md)(n,u,c,h,m),Xs=i.dynCall_viiif=(n,u,c,h,m)=>(Xs=i.dynCall_viiif=M.nd)(n,u,c,h,m),Ys=i.dynCall_diiii=(n,u,c,h,m)=>(Ys=i.dynCall_diiii=M.od)(n,u,c,h,m),Js=i.dynCall_viiid=(n,u,c,h,m)=>(Js=i.dynCall_viiid=M.pd)(n,u,c,h,m),eo=i.dynCall_iiiijii=(n,u,c,h,m,x,C)=>(eo=i.dynCall_iiiijii=M.qd)(n,u,c,h,m,x,C),to=i.dynCall_iiiiiij=(n,u,c,h,m,x,C)=>(to=i.dynCall_iiiiiij=M.rd)(n,u,c,h,m,x,C),ro=n=>(ro=M.sd)(n),io=()=>(io=M.td)(),ao=n=>(ao=M.ud)(n),no=()=>(no=M.vd)();function jm(n,u,c){var h=ae();try{fs(n,u,c)}catch(m){if(ie(h),m!==m+0)throw m;ne(1,0)}}function Km(n,u,c){var h=ae();try{return cs(n,u,c)}catch(m){if(ie(h),m!==m+0)throw m;ne(1,0)}}function Zm(n,u){var c=ae();try{hs(n,u)}catch(h){if(ie(c),h!==h+0)throw h;ne(1,0)}}function Qm(n,u){var c=ae();try{return fi(n,u)}catch(h){if(ie(c),h!==h+0)throw h;ne(1,0)}}function Xm(n,u,c,h){var m=ae();try{return ms(n,u,c,h)}catch(x){if(ie(m),x!==x+0)throw x;ne(1,0)}}function Ym(n,u,c,h,m){var x=ae();try{_s(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function Jm(n,u,c,h,m){var x=ae();try{return ys(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function eg(n,u,c,h){var m=ae();try{gs(n,u,c,h)}catch(x){if(ie(m),x!==x+0)throw x;ne(1,0)}}function tg(n,u,c,h,m,x,C){var A=ae();try{return Gs(n,u,c,h,m,x,C)}catch(B){if(ie(A),B!==B+0)throw B;ne(1,0)}}function rg(n){var u=ae();try{vs(n)}catch(c){if(ie(u),c!==c+0)throw c;ne(1,0)}}function ig(n,u,c){var h=ae();try{return Bs(n,u,c)}catch(m){if(ie(h),m!==m+0)throw m;ne(1,0)}}function ag(n,u,c,h,m,x){var C=ae();try{xs(n,u,c,h,m,x)}catch(A){if(ie(C),A!==A+0)throw A;ne(1,0)}}function ng(n,u,c){var h=ae();try{Ds(n,u,c)}catch(m){if(ie(h),m!==m+0)throw m;ne(1,0)}}function sg(n,u,c,h,m,x,C){var A=ae();try{ws(n,u,c,h,m,x,C)}catch(B){if(ie(A),B!==B+0)throw B;ne(1,0)}}function og(n,u,c,h,m,x,C,A){var B=ae();try{$s(n,u,c,h,m,x,C,A)}catch(W){if(ie(B),W!==W+0)throw W;ne(1,0)}}function ug(n,u,c,h,m,x){var C=ae();try{return Os(n,u,c,h,m,x)}catch(A){if(ie(C),A!==A+0)throw A;ne(1,0)}}function lg(n,u,c,h,m,x,C,A){var B=ae();try{return Hs(n,u,c,h,m,x,C,A)}catch(W){if(ie(B),W!==W+0)throw W;ne(1,0)}}function dg(n,u,c,h,m,x,C,A,B,W){var H=ae();try{zs(n,u,c,h,m,x,C,A,B,W)}catch(X){if(ie(H),X!==X+0)throw X;ne(1,0)}}function pg(n,u,c,h,m,x,C,A,B){var W=ae();try{Ts(n,u,c,h,m,x,C,A,B)}catch(H){if(ie(W),H!==H+0)throw H;ne(1,0)}}function cg(n){var u=ae();try{return Ss(n)}catch(c){if(ie(u),c!==c+0)throw c;ne(1,0)}}function hg(n,u,c,h,m,x,C,A,B,W){var H=ae();try{return Rs(n,u,c,h,m,x,C,A,B,W)}catch(X){if(ie(H),X!==X+0)throw X;ne(1,0)}}function fg(n,u,c){var h=ae();try{return ks(n,u,c)}catch(m){if(ie(h),m!==m+0)throw m;ne(1,0)}}function mg(n,u,c,h){var m=ae();try{return Es(n,u,c,h)}catch(x){if(ie(m),x!==x+0)throw x;return ne(1,0),0n}}function gg(n,u,c){var h=ae();try{return Is(n,u,c)}catch(m){if(ie(h),m!==m+0)throw m;ne(1,0)}}function yg(n,u,c,h,m,x,C,A,B,W,H,X){var se=ae();try{As(n,u,c,h,m,x,C,A,B,W,H,X)}catch(we){if(ie(se),we!==we+0)throw we;ne(1,0)}}function _g(n,u,c,h,m,x,C,A,B,W,H){var X=ae();try{Cs(n,u,c,h,m,x,C,A,B,W,H)}catch(se){if(ie(X),se!==se+0)throw se;ne(1,0)}}function wg(n,u,c,h,m,x,C,A,B,W,H){var X=ae();try{return Ns(n,u,c,h,m,x,C,A,B,W,H)}catch(se){if(ie(X),se!==se+0)throw se;ne(1,0)}}function $g(n,u,c,h){var m=ae();try{return Ms(n,u,c,h)}catch(x){if(ie(m),x!==x+0)throw x;ne(1,0)}}function bg(n,u,c,h){var m=ae();try{return Ps(n,u,c,h)}catch(x){if(ie(m),x!==x+0)throw x;ne(1,0)}}function vg(n,u,c,h){var m=ae();try{return Us(n,u,c,h)}catch(x){if(ie(m),x!==x+0)throw x;ne(1,0)}}function xg(n,u,c,h,m,x,C,A,B,W,H,X,se,we){var Le=ae();try{Ws(n,u,c,h,m,x,C,A,B,W,H,X,se,we)}catch(jt){if(ie(Le),jt!==jt+0)throw jt;ne(1,0)}}function Sg(n,u,c,h,m){var x=ae();try{qs(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function kg(n,u,c){var h=ae();try{Ls(n,u,c)}catch(m){if(ie(h),m!==m+0)throw m;ne(1,0)}}function Tg(n,u){var c=ae();try{return bs(n,u)}catch(h){if(ie(c),h!==h+0)throw h;return ne(1,0),0n}}function Cg(n,u,c,h,m){var x=ae();try{return Vs(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function Eg(n,u,c,h,m,x,C,A,B,W,H,X,se){var we=ae();try{Fs(n,u,c,h,m,x,C,A,B,W,H,X,se)}catch(Le){if(ie(we),Le!==Le+0)throw Le;ne(1,0)}}function Ig(n,u,c,h){var m=ae();try{return js(n,u,c,h)}catch(x){if(ie(m),x!==x+0)throw x;ne(1,0)}}function zg(n,u,c,h,m){var x=ae();try{return Ks(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;return ne(1,0),0n}}function Ag(n,u,c,h,m){var x=ae();try{Zs(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function Og(n,u,c,h,m){var x=ae();try{return Qs(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function Bg(n,u,c,h,m){var x=ae();try{Xs(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function Rg(n,u,c,h,m){var x=ae();try{return Ys(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function Ng(n,u,c,h,m){var x=ae();try{Js(n,u,c,h,m)}catch(C){if(ie(x),C!==C+0)throw C;ne(1,0)}}function Dg(n,u,c,h,m,x,C){var A=ae();try{return eo(n,u,c,h,m,x,C)}catch(B){if(ie(A),B!==B+0)throw B;ne(1,0)}}function Mg(n,u,c,h,m,x,C){var A=ae();try{return to(n,u,c,h,m,x,C)}catch(B){if(ie(A),B!==B+0)throw B;ne(1,0)}}return i.stackSave=()=>ae(),i.stackRestore=n=>ie(n),i.stackAlloc=n=>hi(n),i.setValue=function(n,u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":q()[n>>>0]=u;break;case"i16":_e()[n>>>1>>>0]=u;break;case"i32":U()[n>>>2>>>0]=u;break;case"i64":G[n>>>3]=BigInt(u);break;case"float":We()[n>>>2>>>0]=u;break;case"double":Ve()[n>>>3>>>0]=u;break;case"*":de()[n>>>2>>>0]=u;break;default:at(`invalid type for setValue: ${c}`)}},i.getValue=function(n,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":case"i8":return q()[n>>>0];case"i16":return _e()[n>>>1>>>0];case"i32":return U()[n>>>2>>>0];case"i64":return G[n>>>3];case"float":return We()[n>>>2>>>0];case"double":return Ve()[n>>>3>>>0];case"*":return de()[n>>>2>>>0];default:at(`invalid type for getValue: ${u}`)}},i.UTF8ToString=ke,i.stringToUTF8=Rt,i.lengthBytesUTF8=gn,(function n(){if(0<qt)Lt=n;else if(f)s(i),dr();else{for(;0<Kr.length;)Kr.shift()(i);0<qt?Lt=n:(i.calledRun=!0,ce||(dr(),s(i)))}})(),i.PTR_SIZE=4,l}),up=bi,oo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),oo&&bi()}),vi,uo,Me,lp,xr,lo,po,xi,co,Si,dp,ki,pp,Ca=L(()=>{Ta(),vi=typeof location>"u"?void 0:location.origin,uo=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL("/assets/ort.bundle.min-OfoG_cy9-CCEEaD6t.mjs",import.meta.url).href,vi).href:import.meta.url},Me=uo(),lp=()=>{if(Me&&!Me.startsWith("blob:"))return Me.substring(0,Me.lastIndexOf("/")+1)},xr=(e,t)=>{try{let r=t??Me;return(r?new URL(e,r):new URL(e)).origin===vi}catch{return!1}},lo=(e,t)=>{let r=t??Me;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},po=(e,t)=>`${t??"./"}${e}`,xi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},co=async e=>(await import(e)).default,Si=(ny(),Pr(np)).default,dp=async()=>{if(!Me)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(xr(Me))return[void 0,Si()];let e=await xi(Me);return[e,Si(e)]},ki=(sy(),Pr(op)).default,pp=async(e,t,r)=>{if(!e&&!t&&ki&&Me&&xr(Me))return[void 0,ki];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??lo(a,t),o=r&&s&&!xr(s,t),i=o?await xi(s):s??po(a,t);return[o?i:void 0,await co(i)]}}}),Ti,Sr,Zt,Ci,ho,fo,Ea,Ce,At=L(()=>{Ca(),Sr=!1,Zt=!1,Ci=!1,ho=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},fo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ea=async e=>{if(Sr)return Promise.resolve();if(Zt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ci)throw new Error("previous call to 'initializeWebAssembly()' failed.");Zt=!0;let t=e.initTimeout,r=e.numThreads;if(!fo())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=ho();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let s=e.wasmPaths,o=typeof s=="string"?s:void 0,i=s==null?void 0:s.mjs,l=(i==null?void 0:i.href)??i,p=s==null?void 0:s.wasm,d=(p==null?void 0:p.href)??p,f=e.wasmBinary,[g,y]=await pp(l,o,r>1),_=!1,w=[];if(t>0&&w.push(new Promise($=>{setTimeout(()=>{_=!0,$()},t)})),w.push(new Promise(($,S)=>{let v={numThreads:r};if(f)v.wasmBinary=f;else if(d||o)v.locateFile=b=>d??o+b;else if(l&&l.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,l).href;else if(g){let b=lp();b&&(v.locateFile=k=>b+k)}y(v).then(b=>{Zt=!1,Sr=!0,Ti=b,$(),g&&URL.revokeObjectURL(g)},b=>{Zt=!1,Ci=!0,S(b)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ce=()=>{if(Sr&&Ti)return Ti;throw new Error("WebAssembly is not initialized yet.")}}),ze,Wr,me,Ia=L(()=>{At(),ze=(e,t)=>{let r=Ce(),a=r.lengthBytesUTF8(e)+1,s=r._malloc(a);return r.stringToUTF8(e,s,a),t.push(s),s},Wr=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([s,o])=>{let i=t?t+s:s;if(typeof o=="object")Wr(o,i+".",r,a);else if(typeof o=="string"||typeof o=="number")a(i,o.toString());else if(typeof o=="boolean")a(i,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},me=e=>{let t=Ce(),r=t.stackSave();try{let a=t.PTR_SIZE,s=t.stackAlloc(2*a);t._OrtGetLastError(s,s+a);let o=Number(t.getValue(s,a===4?"i32":"i64")),i=t.getValue(s+a,"*"),l=i?t.UTF8ToString(i):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),cp,oy=L(()=>{At(),Ia(),cp=e=>{let t=Ce(),r=0,a=[],s=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(s.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=ze(e.tag,a)),r=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,o),r===0&&me("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Wr(e.extra,"",new WeakSet,(i,l)=>{let p=ze(i,a),d=ze(l,a);t._OrtAddRunConfigEntry(r,p,d)!==0&&me(`Can't set a run config entry: ${i} - ${l}.`)}),[r,a]}catch(o){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(i=>t._free(i)),o}}}),mo,go,yo,_o,hp,uy=L(()=>{At(),Ia(),mo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},go=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},yo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},_o=(e,t,r)=>{for(let a of t){let s=typeof a=="string"?a:a.name;switch(s){case"webnn":if(s="WEBNN",typeof a!="string"){let i=a==null?void 0:a.deviceType;if(i){let l=ze("deviceType",r),p=ze(i,r);Ce()._OrtAddSessionConfigEntry(e,l,p)!==0&&me(`Can't set a session config entry: 'deviceType' - ${i}.`)}}break;case"webgpu":if(s="JS",typeof a!="string"){let i=a;if(i!=null&&i.preferredLayout){if(i.preferredLayout!=="NCHW"&&i.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${i.preferredLayout}`);let l=ze("preferredLayout",r),p=ze(i.preferredLayout,r);Ce()._OrtAddSessionConfigEntry(e,l,p)!==0&&me(`Can't set a session config entry: 'preferredLayout' - ${i.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=ze(s,r);Ce()._OrtAppendExecutionProvider(e,o)!==0&&me(`Can't append execution provider: ${s}.`)}},hp=e=>{let t=Ce(),r=0,a=[],s=e||{};yo(s);try{let o=mo(s.graphOptimizationLevel??"all"),i=go(s.executionMode??"sequential"),l=typeof s.logId=="string"?ze(s.logId,a):0,p=s.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log serverity level is not valid: ${p}`);let d=s.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof s.optimizedModelFilePath=="string"?ze(s.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(o,!!s.enableCpuMemArena,!!s.enableMemPattern,i,!!s.enableProfiling,0,l,p,d,f),r===0&&me("Can't create session options."),s.executionProviders&&_o(r,s.executionProviders,a),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);let g=ze("enableGraphCapture",a),y=ze(s.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,g,y)!==0&&me(`Can't set a session config entry: 'enableGraphCapture' - ${s.enableGraphCapture}.`)}if(s.freeDimensionOverrides)for(let[g,y]of Object.entries(s.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(`free dimension override value must be a non-negative integer: ${y}`);let _=ze(g,a);t._OrtAddFreeDimensionOverride(r,_,y)!==0&&me(`Can't set a free dimension override: ${g} - ${y}.`)}return s.extra!==void 0&&Wr(s.extra,"",new WeakSet,(g,y)=>{let _=ze(g,a),w=ze(y,a);t._OrtAddSessionConfigEntry(r,_,w)!==0&&me(`Can't set a session config entry: ${g} - ${y}.`)}),[r,a]}catch(o){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&me("Can't release session options."),a.forEach(i=>t._free(i)),o}}}),Dt,Tt,Ct,za,qr,Aa,Oa,da,Y=L(()=>{Dt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Tt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ct=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((s,o)=>s*o,1);return r>0?Math.ceil(a*r):void 0},za=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},qr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Aa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Oa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",da=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ba,fp=L(()=>{Ta(),Ba=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),o;try{o=new ArrayBuffer(a)}catch(l){if(l instanceof RangeError){let p=Math.ceil(a/65536);o=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw l}let i=0;for(;;){let{done:l,value:p}=await s.read();if(l)break;let d=p.byteLength;new Uint8Array(o,i,d).set(p),i+=d}return new Uint8Array(o,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),wo,$o,bo,vo,Ra,xo,he,ut=L(()=>{Y(),wo=["V","I","W","E","F"],$o=(e,t)=>{console.log(`[${wo[e]},${new Date().toISOString()}]${t}`)},Ra=(e,t)=>{bo=e,vo=t},xo=(e,t)=>{let r=qr(e),a=qr(bo);r>=a&&$o(r,typeof t=="function"?t():t)},he=(...e)=>{vo&&xo(...e)}}),Na,mp=L(()=>{Y(),Na=(e,t)=>new(za(t))(e)}),Da=L(()=>{}),Ei,kr,Tr,So,ko,Ii,pa,To,gp,ly=L(()=>{ut(),Da(),Ei=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),kr=[],Tr=e=>Math.ceil(Number(e)/16)*16,So=e=>{for(let t=0;t<kr.length;t++){let r=kr[t];if(e<=r)return r}return Math.ceil(e/16)*16},ko=1,Ii=()=>ko++,pa=async(e,t,r,a)=>{let s=Tr(r),o=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let i=e.getCommandEncoder();e.endComputePass(),i.copyBufferToBuffer(t,0,o,0,s),e.flush(),await o.mapAsync(GPUMapMode.READ);let l=o.getMappedRange();if(a){let p=a();return p.set(new Uint8Array(l,0,r)),p}else return new Uint8Array(l.slice(0,r))}finally{o.destroy()}},To=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ei)kr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,s=t.byteLength,o=Tr(s),i=this.storageCache.get(e);if(!i)throw new Error("gpu data for uploading does not exist");if(Number(i.originalSize)!==s)throw new Error(`inconsistent data size. gpu data size=${i.originalSize}, data size=${s}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),p=l.getMappedRange();new Uint8Array(p).set(new Uint8Array(r,a,s)),l.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(l,0,i.gpuData.buffer,0,o),this.backend.device.queue.submit([d.finish()]),l.destroy(),he("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let s=Tr(r.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,s)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Ii();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),he("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=So(e),a,s=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||o){let l=(s?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?a=l.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let i={id:Ii(),type:0,buffer:a};return this.storageCache.set(i.id,{gpuData:i,originalSize:Number(e)}),he("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${i.id}`),i}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return he("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await pa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ei.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(he("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},gp=(...e)=>new To(...e)}),Co,ge,xe=L(()=>{Co=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ge=e=>new Co(e)}),Eo,Ut,O,Lr,yp,_p,wp,oe=L(()=>{Eo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ut=class{static calcShape(e,t,r=!1){let a=e.length,s=t.length;if(a===0)return t;if(s===0)return e;let o=Math.max(e.length,t.length),i=new Array(o);if(r){if(a<2||s<2)return;let l=Eo.calcMatMulShape([e[a-2],e[a-1]],[t[s-2],t[s-1]]);if(l===void 0)return;[i[o-2],i[o-1]]=l}for(let l=r?3:1;l<=o;l++){let p=a-l<0?1:e[a-l],d=s-l<0?1:t[s-l];if(p!==d&&p>1&&d>1)return;let f=Math.max(p,d);if(p&&d)i[o-l]=Math.max(p,d);else{if(f>1)return;i[o-l]=0}}return i}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let s=1;s<=r;s++)if(e[r-s]!==1&&e[r-s]!==t[a-s])return!1;return!0}},O=class Dr{static size(t){return Dr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let s=new Array(a),o=a-1;for(;o>=0;){if(t[o]%r===0){s[o]=t[o]/r;break}if(r%t[o]!==0)throw new Error("cannot convert shape");s[o]=1,r/=t[o],o--}for(o--;o>=0;o--)s[o]=t[o];return s}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Dr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Dr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let s=1;for(let o=r;o<a;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(t[o])}return s}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let s=r-3;s>=0;--s)a[s]=a[s+1]*t[s+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((s,o)=>s+r[o]+r[o+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,s)=>a===r[s])}},Lr=class ar{static adjustPoolAttributes(t,r,a,s,o,i){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=a.length?a.push(r[l+2]):a[l]=r[l+2];for(let l=0;l<a.length;l++)if(l<s.length){if(s[l]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let l=0;l<a.length;l++)if(l<o.length){if(o[l]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let l=0;l<a.length*2;l++)if(l<i.length){if(i[l]<0)throw new Error("pad should be greater than or equal to 1")}else i.push(0);for(let l=0;l<a.length;l++){if(a[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(i[l]>=a[l]||i[l+a.length]>=a[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,s,o,i,l){if(l){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let p=0;p<t.length-2;p++)ar.adjustPadAndReturnShape(t[p+(i?1:2)],r[p],a[p],s[p],o,p,p+t.length-2,l)}}static computePoolOutputShape(t,r,a,s,o,i,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return ar.computeShapeHelper(t,r,p,a,s,o,i,l),p}static computeConvOutputShape(t,r,a,s,o,i,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],r[0]];return ar.computeShapeHelper(!1,t,p,a,s,o,i,l),p}static computeShapeHelper(t,r,a,s,o,i,l,p){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(ar.adjustPadAndReturnShape(r[d+2],s[d],o[d],i[d],l,d,d+r.length-2,p))}static adjustPadAndReturnShape(t,r,a,s,o,i,l,p){let d=a*(s-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return o[i]=0,o[l]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+s-t;return o[i]=Math.floor(p==="SAME_LOWER"?(f+1)/2:f/2),o[l]=f-o[i],Math.floor((t+f-s)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[i]+o[l]-d)/r+1)}},yp=class{static getShapeOfGemmResult(e,t,r,a,s){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let o,i,l;t?(o=e[1],i=e[0]):(o=e[0],i=e[1]);let p=-1;if(a?(l=r[0],p=1):(l=r[1],p=0),r[p]!==i)throw new Error("dimension mismatch");if(o<=0||l<=0||i<=0)throw new Error("invalid shape specified");if(s&&!Ut.isValidBroadcast(s,[o,l]))throw new Error("gemm: invalid bias shape for broadcast");return[o,l,i]}},_p=-34028234663852886e22,wp=34028234663852886e22}),Wt,Cr,Ee,Oe,Z,ve,ca,Pt,yt,K,Qt,N,j,$p,Ma,Io,bp,ue=L(()=>{Y(),oe(),Wt=64,Cr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ee=(e,t=1)=>{let r=Cr(e,t);return typeof r=="string"?r:r[0]},Oe=(e,t=1)=>{let r=Cr(e,t);return typeof r=="string"?r:r[1]},Z=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},ve=e=>e%4===0?4:e%2===0?2:1,ca=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Pt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,yt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,K=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Qt=(e,t,r,a,s)=>{let o=typeof r=="number",i=o?r:r.length,l=[...new Array(i).keys()],p=i<2?"u32":i<=4?`vec${i}<u32>`:`array<u32, ${i}>`,d=Cr(t,s),f=typeof d=="string"?d:d[1],g=typeof d=="string"?d:d[0],y={indices:p,value:f,storage:g,tensor:t},_=D=>typeof D=="string"?D:`${D}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=o?"uniforms.":"",S=`${$}${e}_shape`,v=`${$}${e}_strides`,b="";for(let D=0;D<i-1;D++)b+=`
    let dim${D} = current / ${K(v,D,i)};
    let rest${D} = current % ${K(v,D,i)};
    indices[${D}] = dim${D};
    current = rest${D};
    `;b+=`indices[${i-1}] = current;`;let k=i<2?"":`
  fn o2i_${e}(offset: u32) -> ${y.indices} {
    var indices: ${y.indices};
    var current = offset;
    ${b}
    return indices;
  }`,T=D=>(w.offsetToIndices=!0,i<2?D:`o2i_${e}(${D})`),E=[];if(i>=2)for(let D=i-1;D>=0;D--)E.push(`${K(v,D,i)} * (indices[${D}])`);let I=i<2?"":`
  fn i2o_${e}(indices: ${y.indices}) -> u32 {
    return ${E.join("+")};
  }`,z=D=>(w.indicesToOffset=!0,i<2?D:`i2o_${e}(${D})`),R=(...D)=>i===0?"0u":`${y.indices}(${D.map(_).join(",")})`,P=(D,q)=>i<2?`${D}`:`${K(D,q,i)}`,V=(D,q,re)=>i<2?`${D}=${re};`:`${K(D,q,i)}=${re};`,J={},ee=(D,q)=>{w.broadcastedIndicesToOffset=!0;let re=`${q.name}broadcastedIndicesTo${e}Offset`;if(re in J)return`${re}(${D})`;let _e=[];for(let Ae=i-1;Ae>=0;Ae--){let U=q.indicesGet("outputIndices",Ae+q.rank-i);_e.push(`${P(v,Ae)} * (${U} % ${P(S,Ae)})`)}return J[re]=`fn ${re}(outputIndices: ${q.type.indices}) -> u32 {
             return ${_e.length>0?_e.join("+"):"0u"};
           }`,`${re}(${D})`},Q=(D,q)=>(()=>{if(y.storage===y.value)return`${e}[${D}]=${q};`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`${e}[${D}]=vec2<u32>(u32(${q}), select(0u, 0xFFFFFFFFu, ${q} < 0));`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`${e}[${D}]=vec2<u32>(u32(${q}), 0u);`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`${e}[${D}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${q}));`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),te=D=>(()=>{if(y.storage===y.value)return`${e}[${D}]`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`i32(${e}[${D}].x)`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`u32(${e}[${D}].x)`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${D}] & 0xFFu), bool(${e}[${D}] & 0xFF00u), bool(${e}[${D}] & 0xFF0000u), bool(${e}[${D}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),le=i<2?"":`
  fn get_${e}ByIndices(indices: ${y.indices}) -> ${f} {
    return ${te(`i2o_${e}(indices)`)};
  }`,G=i<2?"":(()=>{let D=l.map(re=>`d${re}: u32`).join(", "),q=l.map(re=>`d${re}`).join(", ");return`
  fn get_${e}(${D}) -> ${f} {
    return get_${e}ByIndices(${R(q)});
  }`})(),pe=(...D)=>{if(D.length!==i)throw new Error(`indices length must be ${i}`);let q=D.map(_).join(",");return i===0?te("0u"):i===1?te(q[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${q})`)},ye=D=>i<2?te(D):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${D})`),F=i<2?"":`
  fn set_${e}ByIndices(indices: ${y.indices}, value: ${f}) {
    ${Q(`i2o_${e}(indices)`,"value")}
  }`,ce=i<2?"":(()=>{let D=l.map(re=>`d${re}: u32`).join(", "),q=l.map(re=>`d${re}`).join(", ");return`
  fn set_${e}(${D}, value: ${f}) {
    set_${e}ByIndices(${R(q)}, value);
  }`})();return{impl:()=>{let D=[],q=!1;return w.offsetToIndices&&(D.push(k),q=!0),w.indicesToOffset&&(D.push(I),q=!0),w.broadcastedIndicesToOffset&&(Object.values(J).forEach(re=>D.push(re)),q=!0),w.set&&(D.push(ce),q=!0),w.setByIndices&&(D.push(F),q=!0),w.get&&(D.push(G),q=!0),w.getByIndices&&(D.push(le),q=!0),!o&&q&&D.unshift(`const ${S} = ${y.indices}(${r.join(",")});`,`const ${v} = ${y.indices}(${O.computeStrides(r).join(",")});`),D.join(`
`)},type:y,offsetToIndices:T,indicesToOffset:z,broadcastedIndicesToOffset:ee,indices:R,indicesGet:P,indicesSet:V,set:(...D)=>{if(D.length!==i+1)throw new Error(`indices length must be ${i}`);let q=D[i];if(typeof q!="string")throw new Error("value must be string");let re=D.slice(0,i).map(_).join(",");return i===0?Q("0u",q):i===1?Q(re[0],q):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${re}, ${q})`)},setByOffset:Q,setByIndices:(D,q)=>i<2?Q(D,q):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${q});`),get:pe,getByOffset:te,getByIndices:ye,usage:a,name:e,strides:v,shape:S,rank:i}},N=(e,t,r,a=1)=>Qt(e,t,r,"input",a),j=(e,t,r,a=1)=>Qt(e,t,r,"output",a),$p=(e,t,r)=>Qt(e,t,r,"atomicOutput",1),Ma=(e,t,r,a=1)=>Qt(e,t,r,"internal",a),Io=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Wt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,i=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${o}) {
    ${i}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let s=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${s}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},bp=(e,t)=>new Io(e,t)}),zo,zi,Ao,Oo,Bo,Ro,Ue,vp,xp,_t=L(()=>{Y(),oe(),xe(),ue(),zo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},zi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ao=(e,t)=>O.sortBasedOnPerm(e,zi(e.length,t)),Oo=(e,t,r,a)=>{let s=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let o=0;o<t;++o)s+=`a[${e[o]}]=i[${o}];`;return s+="return a;}"},Bo=(e,t)=>{let r=[],a=[];for(let s=0;s<e.length;++s)e[s]!==1&&r.push(e[s]),e[t[s]]!==1&&a.push(t[s]);return{newShape:r,newPerm:a}},Ro=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Ue=(e,t)=>{let r=e.dataType,a=e.dims.length,s=zi(a,t),o=Ao(e.dims,s),i=e.dims,l=o,p=a<2||Ro(s,e.dims),d;if(p)return d=w=>{let $=N("input",r,i,4),S=j("output",r,l,4);return`
  ${w.registerUniform("output_size","u32").declareVariables($,S)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:d};let{newShape:f,newPerm:g}=Bo(e.dims,s),y=O.areEqual(g,[2,3,1]),_=O.areEqual(g,[3,1,2]);if(f.length===2||y||_){i=y?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,l=[i[1],i[0]];let w=16;return d=$=>{let S=N("a",r,i.length),v=j("output",r,l.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${w+1}>, ${w}>;
  ${$.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/w),y:Math.ceil(l[0]/w)},programUniforms:[{type:12,data:$},...Z(i,l)]}},getShaderSource:d}}return d=w=>{let $=N("a",r,i.length),S=j("output",r,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables($,S)}

  ${Oo(s,a,$,S)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...Z(i,l)]}},getShaderSource:d}},vp=(e,t)=>{zo(e.inputs,t.perm),e.compute(Ue(e.inputs[0],t.perm))},xp=e=>ge({perm:e.perm})}),No,Do,Mo,Po,Uo,Wo,qo,Lo,Go,Vo,He,Sp,kp,Tp,Cp,Ep,Ip,zp,Ap,Op,Bp,dy=L(()=>{Y(),oe(),ue(),Pa(),_t(),No={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Do={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Mo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Po={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Uo=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Wo=(e,t)=>{let r=[],a=e.length;for(let o=0;o<a;o++)t.indexOf(o)===-1&&r.push(e[o]);let s=t.map(o=>e[o]);return[r,s]},qo=(e,t)=>{let r=e.length+t.length,a=[],s=0;for(let o=0;o<r;o++)t.indexOf(o)===-1?a.push(e[s++]):a.push(1);return a},Lo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Go=(e,t)=>{let r=[];if(!Lo(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Vo=(e,t,r,a,s,o,i)=>{let l=r[0].dims,p=O.size(o),d=O.size(i),f=N("_A",r[0].dataType,l),g=j("output",s,o),y=64;p===1&&(y=256);let _=`
          var<workgroup> aBestValues : array<f32, ${y}>;
       `,w=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(f,g)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(y)}

          let outputIndex = global_idx / ${y};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Mo[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${y}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${No[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${y}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Do[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${a==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${Po[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${y}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:o,dataType:s}],dispatchGroup:{x:p},programUniforms:[{type:12,data:d}]})}},He=(e,t,r,a)=>{let s=e.inputs.length===1?r:ha(e.inputs,r),o=s.axes;o.length===0&&!s.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((_,w)=>w));let i=O.normalizeAxes(o,e.inputs[0].dims.length),l=i,p=e.inputs[0],d=Go(l,e.inputs[0].dims.length);d.length>0&&(p=e.compute(Ue(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],l=Uo(l.length,p.dims.length));let[f,g]=Wo(p.dims,l),y=f;s.keepDims&&(y=qo(f,i)),e.compute(Vo(t,s.cacheKey,[p],a,e.inputs[0].dataType,y,g),{inputs:[p]})},Sp=(e,t)=>{He(e,"ReduceMeanShared",t,"mean")},kp=(e,t)=>{He(e,"ReduceL1Shared",t,"l1")},Tp=(e,t)=>{He(e,"ReduceL2Shared",t,"l2")},Cp=(e,t)=>{He(e,"ReduceLogSumExpShared",t,"logSumExp")},Ep=(e,t)=>{He(e,"ReduceMaxShared",t,"max")},Ip=(e,t)=>{He(e,"ReduceMinShared",t,"min")},zp=(e,t)=>{He(e,"ReduceProdShared",t,"prod")},Ap=(e,t)=>{He(e,"ReduceSumShared",t,"sum")},Op=(e,t)=>{He(e,"ReduceSumSquareShared",t,"sumSquare")},Bp=(e,t)=>{He(e,"ReduceLogSumShared",t,"logSum")}}),Fe,Ho,Gr,ha,je,Fo,jo,Ko,Zo,Qo,Xo,Yo,Jo,eu,tu,Ke,Rp,Np,Dp,Mp,Pp,Up,Wp,qp,Lp,Gp,Pa=L(()=>{Y(),oe(),xe(),ue(),dy(),Fe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ho=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Gr=(e,t,r,a,s,o,i=!1,l=!1)=>{let p=[],d=r[0].dims,f=d.length,g=O.normalizeAxes(s,f),y=!l&&g.length===0;d.forEach(($,S)=>{y||g.indexOf(S)>=0?i&&p.push(1):p.push($)});let _=p.length,w=O.size(p);return{name:e,shaderCache:t,getShaderSource:$=>{let S=[],v=N("_A",r[0].dataType,f),b=j("output",o,_),k=a(v,b,g),T=k[2];for(let E=0,I=0;E<f;E++)y||g.indexOf(E)>=0?(i&&I++,T=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${k[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${T}
                }`):(S.push(`${v.indicesSet("input_indices",E,b.indicesGet("output_indices",I))};`),I++);return`

        ${$.registerUniform("output_size","u32").declareVariables(v,b)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${T}
          ${k[3]}
          ${k.length===4?b.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:p,dataType:o}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...Z(d,p)]})}},ha=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),ge({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},je=(e,t,r,a)=>{let s=e.inputs,o=s.length===1?r:ha(s,r);e.compute(Gr(t,{hint:o.cacheKey,inputDependencies:["rank"]},[s[0]],o.noopWithEmptyAxes&&o.axes.length===0?Ho:a,o.axes,s[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},Fo=(e,t)=>{Fe(e.inputs),je(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},jo=(e,t)=>{Fe(e.inputs),je(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ko=(e,t)=>{Fe(e.inputs),je(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Zo=(e,t)=>{Fe(e.inputs),je(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Qo=(e,t)=>{Fe(e.inputs),je(e,"ReduceMax",t,(r,a,s)=>{let o=[];for(let i=0;i<r.rank;i++)(s.indexOf(i)>=0||s.length===0)&&o.push(r.indicesSet("input_indices",i,0));return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Xo=(e,t)=>{Fe(e.inputs),je(e,"ReduceMean",t,(r,a,s)=>{let o=1;for(let i=0;i<r.rank;i++)(s.indexOf(i)>=0||s.length===0)&&(o*=e.inputs[0].dims[i]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${o});`]})},Yo=(e,t)=>{Fe(e.inputs),je(e,"ReduceMin",t,(r,a,s)=>{let o=[];for(let i=0;i<r.rank;i++)(s.indexOf(i)>=0||s.length===0)&&o.push(`input_indices[${i}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Jo=(e,t)=>{Fe(e.inputs),je(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},eu=(e,t)=>{Fe(e.inputs),je(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},tu=(e,t)=>{Fe(e.inputs),je(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ke=(e,t,r)=>{if(t.length===0)return r;let a=1,s=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?a*=e[o]:s*=e[o];return s<32&&a>1024},Rp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xo(e,t):Sp(e,t)},Np=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jo(e,t):kp(e,t)},Dp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ko(e,t):Tp(e,t)},Mp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zo(e,t):Cp(e,t)},Pp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qo(e,t):Ep(e,t)},Up=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yo(e,t):Ip(e,t)},Wp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jo(e,t):zp(e,t)},qp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eu(e,t):Ap(e,t)},Lp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tu(e,t):Op(e,t)},Gp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fo(e,t):Bp(e,t)}}),Ai,Vp,Hp,fa,py=L(()=>{Y(),xe(),Pa(),Ai=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Vp=(e,t)=>{Ai(e.inputs);let r=(a,s,o)=>{let i=[];for(let l=0;l<a.rank;l++)(o.indexOf(l)>=0||o.length===0)&&i.push(`input_indices[${l}] = 0;`);return[`${i.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Gr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Hp=(e,t)=>{Ai(e.inputs);let r=(a,s,o)=>{let i=[];for(let l=0;l<a.rank;l++)(o.indexOf(l)>=0||o.length===0)&&i.push(`input_indices[${l}] = 0;`);return[`${i.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Gr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},fa=e=>ge(e)}),ru,Er,iu,au,nu,ur,su,Fp,Ua=L(()=>{Y(),oe(),Da(),ue(),ru=(e,t)=>{let r=e[0],a=e[1],s=e[2],o=e[3],i=e[4],l=e[5];if(i&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let p=r.dims[0],d=r.dims[1],f=r.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=s.dims[0]/3,y=g,_=y;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=t.qkvHiddenSizes[0],y=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=d;if(g!==y)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==g+y+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(i){if(y!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(i.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(i.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(i.dims[1]!==p)throw new Error('Input "past" second dimension must be batch_size');if(i.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(i.dims[4]!==y/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=i.dims[3])}let S=w+$,v=-1,b=0;if(o)throw new Error("Mask not supported");if(i)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[2]!==d||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:f,hiddenSize:g,vHiddenSize:_,headSize:Math.floor(g/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Er=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,iu=(e,t,r,a,s,o,i,l)=>{let p=ve(i?1:o),d=64,f=o/p;f<d&&(d=32);let g=Math.ceil(o/p/d),y=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:s},{type:12,data:f},{type:12,data:g}],_=Ee(e.dataType,p),w=Oe(1,p),$=["type"];i&&$.push("type"),l&&$.push("type");let S=v=>{let b=j("x",e.dataType,e.dims,p),k=[b],T=i?N("seq_lens",i.dataType,i.dims):void 0;T&&k.push(T);let E=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;E&&k.push(E);let I=Oe(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(z).declareVariables(...k)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Er(T,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${i?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(p){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(p){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${i?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${p}`,inputDependencies:$},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(o/d),y:s,z:t*r},programUniforms:y})}},au=(e,t,r,a,s,o,i,l,p)=>{let d=i+o.kvSequenceLength,f=[o.batchSize,o.numHeads,o.sequenceLength,d],g=e>1&&a,y=o.kvNumHeads?o.kvNumHeads:o.numHeads,_=g?[o.batchSize,y,d,o.headSize]:void 0,w=o.nReps?o.nReps:1,$=o.scale===0?1/Math.sqrt(o.headSize):o.scale,S=ve(o.headSize),v=o.headSize/S,b=12,k={x:Math.ceil(d/b),y:Math.ceil(o.sequenceLength/b),z:o.batchSize*o.numHeads},T=[{type:12,data:o.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:$},{type:12,data:i},{type:12,data:o.kvSequenceLength},{type:12,data:w}],E=g&&a&&O.size(a.dims)>0,I=["type","type"];E&&I.push("type"),s&&I.push("type"),l&&I.push("type"),p&&I.push("type");let z=[{dims:f,dataType:t.dataType,gpuDataType:0}];g&&z.push({dims:_,dataType:t.dataType,gpuDataType:0});let R=P=>{let V=N("q",t.dataType,t.dims,S),J=N("key",r.dataType,r.dims,S),ee=[V,J];if(E){let F=N("past_key",a.dataType,a.dims,S);ee.push(F)}s&&ee.push(N("attention_bias",s.dataType,s.dims));let Q=l?N("seq_lens",l.dataType,l.dims):void 0;Q&&ee.push(Q);let te=p?N("total_sequence_length_input",p.dataType,p.dims):void 0;te&&ee.push(te);let le=j("output",t.dataType,f),G=[le];g&&G.push(j("present_key",t.dataType,_,S));let pe=Oe(1,S),ye=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${V.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${V.type.storage}, ${b*b}>;
  ${P.registerUniforms(ye).declareVariables(...ee,...G)}
  ${P.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Er(Q,te,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&g?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${g?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${pe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&g?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${g?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${pe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${le.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${s!==void 0};${a!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:z,dispatchGroup:k,programUniforms:T}),getShaderSource:R}},nu=(e,t,r,a,s,o,i=void 0,l=void 0)=>{let p=o+s.kvSequenceLength,d=s.nReps?s.nReps:1,f=s.vHiddenSize*d,g=e>1&&a,y=s.kvNumHeads?s.kvNumHeads:s.numHeads,_=g?[s.batchSize,y,p,s.headSize]:void 0,w=[s.batchSize,s.sequenceLength,f],$=12,S={x:Math.ceil(s.vHeadSize/$),y:Math.ceil(s.sequenceLength/$),z:s.batchSize*s.numHeads},v=[{type:12,data:s.sequenceLength},{type:12,data:p},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:f},{type:12,data:o},{type:12,data:s.kvSequenceLength},{type:12,data:d}],b=g&&a&&O.size(a.dims)>0,k=["type","type"];b&&k.push("type"),i&&k.push("type"),l&&k.push("type");let T=[{dims:w,dataType:t.dataType,gpuDataType:0}];g&&T.push({dims:_,dataType:t.dataType,gpuDataType:0});let E=I=>{let z=N("probs",t.dataType,t.dims),R=N("v",r.dataType,r.dims),P=[z,R];b&&P.push(N("past_value",a.dataType,a.dims));let V=i?N("seq_lens",i.dataType,i.dims):void 0;i&&P.push(V);let J=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;l&&P.push(J);let ee=[j("output",t.dataType,w)];g&&ee.push(j("present_value",t.dataType,_));let Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${z.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${z.type.value}, ${$*$}>;
  ${I.registerUniforms(Q).declareVariables(...P,...ee)}
  ${I.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Er(V,J,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&g?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${g?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&g?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${g?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:v}),getShaderSource:E}},ur=(e,t,r,a,s,o,i,l,p,d,f=void 0,g=void 0)=>{let y=Math.min(e.outputCount,1+(i?1:0)+(l?1:0)),_=y>1?d.pastSequenceLength:0,w=_+d.kvSequenceLength,$=p&&O.size(p.dims)>0?p:void 0,S=[t,r];y>1&&i&&O.size(i.dims)>0&&S.push(i),$&&S.push($),f&&S.push(f),g&&S.push(g);let v=e.compute(au(y,t,r,i,$,d,_,f,g),{inputs:S,outputs:y>1?[-1,1]:[-1]})[0];e.compute(iu(v,d.batchSize,d.numHeads,_,d.sequenceLength,w,f,g),{inputs:f&&g?[v,f,g]:[v],outputs:[]});let b=[v,a];y>1&&l&&O.size(l.dims)>0&&b.push(l),f&&b.push(f),g&&b.push(g),e.compute(nu(y,v,a,l,d,_,f,g),{inputs:b,outputs:y>1?[0,2]:[0]})},su=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,s=t.inputHiddenSize,o=t.headSize,i=12,l={x:Math.ceil(t.headSize/i),y:Math.ceil(t.sequenceLength/i),z:t.batchSize*t.numHeads},p=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:s},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=g=>{let y=j("output_q",p[0].dataType,r),_=j("output_k",p[0].dataType,r),w=j("output_v",p[0].dataType,r),$=N("input",p[0].dataType,p[0].dims),S=N("weight",p[1].dataType,p[1].dims),v=N("bias",p[2].dataType,p[2].dims),b=$.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${i}u;
  var<workgroup> tileInput: array<${b}, ${i*i}>;
  var<workgroup> tileWeightQ: array<${b}, ${i*i}>;
  var<workgroup> tileWeightK: array<${b}, ${i*i}>;
  var<workgroup> tileWeightV: array<${b}, ${i*i}>;
  ${g.registerUniforms(k).declareVariables($,S,v,y,_,w)}
  ${g.mainStart([i,i,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:d}),getShaderSource:f},{inputs:p,outputs:[-1,-1,-1]})},Fp=(e,t)=>{let r=ru(e.inputs,t),[a,s,o]=su(e,r);return ur(e,a,s,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),ou,uu,lu,jp,cy=L(()=>{Xe(),Y(),oe(),xe(),ue(),ou=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,s,o)=>{let i=s.length;if(i!==a.length)throw new Error(`${o}: num dimensions != ${i}`);s.forEach((l,p)=>{if(l!==a[p])throw new Error(`${o}: dim[${p}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},uu=(e,t)=>{let{epsilon:r,spatial:a,format:s}=t,o=e[0].dims,i=a?ve(o[o.length-1]):1,l=s==="NHWC"&&o.length>1?i:1,p=O.size(o)/i,d=a,f=d?o.length:o,g=N("x",e[0].dataType,e[0].dims,i),y=N("scale",e[1].dataType,e[1].dims,l),_=N("bias",e[2].dataType,e[2].dims,l),w=N("inputMean",e[3].dataType,e[3].dims,l),$=N("inputVar",e[4].dataType,e[4].dims,l),S=j("y",e[0].dataType,f,i),v=()=>{let k="";if(a)k=`let cOffset = ${o.length===1?"0u":s==="NHWC"?`outputIndices[${o.length-1}] / ${i}`:"outputIndices[1]"};`;else if(s==="NCHW")k=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${y.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let T=1;T<y.rank;T++)k+=`cIndices[${T}] = outputIndices[${T}];`;k+=`let cOffset = ${y.indicesToOffset("cIndices")};`}return k},b=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(g,y,_,w,$,S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${i}`)};
    ${v()}
    let scale = ${y.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${i}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:d?[{type:12,data:p},...Z(o)]:[{type:12,data:p}]})}},lu=e=>ge(e),jp=(e,t)=>{let{inputs:r,outputCount:a}=e,s=lu({...t,outputCount:a});if(be.webgpu.validateInputContent&&ou(r,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(uu(r,s))}}),du,pu,Kp,hy=L(()=>{oe(),ue(),du=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},pu=e=>{let t=e[0].dims,r=e[0].dims[2],a=O.size(t)/4,s=e[0].dataType,o=N("input",s,t,4),i=N("bias",s,[r],4),l=N("residual",s,t,4),p=j("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(o,i,l,p)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${o.getByOffset("global_idx")}
      + ${i.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${p.setByOffset("global_idx","value")}
  }`}},Kp=e=>{du(e.inputs),e.compute(pu(e.inputs))}}),cu,fe,Zp,Qp,Xp,Yp,Jp,ec,tc,rc,ic,hu,ac,nc,sc,oc,nr,uc,Mr,lc,dc,pc,cc,hc,fc,mc,gc,yc,_c,wc,$c,bc,vc,xc,Sc,Oi,kc,ma,ga,Tc,Cc,Ec,fu,mu,Ic,Wa=L(()=>{Y(),oe(),xe(),ue(),cu=(e,t,r,a,s,o,i)=>{let l=Math.ceil(t/4),p="";typeof s=="string"?p=`${s}(a)`:p=s("a");let d=N("inputData",r,[l],4),f=j("outputData",a,[l],4),g=[{name:"vec_size",type:"u32"}];return i&&g.push(...i),`
      ${e.registerUniforms(g).declareVariables(d,f)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",p)}
  }`},fe=(e,t,r,a,s,o=e.dataType,i,l)=>{let p=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return i&&p.push(...i),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:d=>cu(d,O.size(e.dims),e.dataType,o,r,a,l),getRunData:d=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:p})}},Zp=e=>{e.compute(fe(e.inputs[0],"Abs","abs"))},Qp=e=>{e.compute(fe(e.inputs[0],"Acos","acos"))},Xp=e=>{e.compute(fe(e.inputs[0],"Acosh","acosh"))},Yp=e=>{e.compute(fe(e.inputs[0],"Asin","asin"))},Jp=e=>{e.compute(fe(e.inputs[0],"Asinh","asinh"))},ec=e=>{e.compute(fe(e.inputs[0],"Atan","atan"))},tc=e=>{e.compute(fe(e.inputs[0],"Atanh","atanh"))},rc=e=>ge(e),ic=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(fe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},hu=e=>{let t,r,a=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ge({min:t,max:r})},ac=(e,t)=>{let r=t||hu(e.inputs),a=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},nc=e=>{e.compute(fe(e.inputs[0],"Ceil","ceil"))},sc=e=>{e.compute(fe(e.inputs[0],"Cos","cos"))},oc=e=>{e.compute(fe(e.inputs[0],"Cosh","cosh"))},nr=e=>ge(e),uc=(e,t)=>{let r=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Mr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,lc=e=>{let t=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Mr(t)))},dc=e=>{e.compute(fe(e.inputs[0],"Exp","exp"))},pc=e=>{e.compute(fe(e.inputs[0],"Floor","floor"))},cc=e=>{let t=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Mr(t)))},hc=(e,t)=>{let r=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},fc=e=>{e.compute(fe(e.inputs[0],"Not",t=>`!${t}`))},mc=e=>{e.compute(fe(e.inputs[0],"Neg",t=>`-${t}`))},gc=e=>{e.compute(fe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},yc=e=>{let t=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},_c=e=>{e.compute(fe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},wc=e=>ge(e),$c=(e,t)=>{let r=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},bc=e=>{e.compute(fe(e.inputs[0],"Sin","sin"))},vc=e=>{e.compute(fe(e.inputs[0],"Sinh","sinh"))},xc=e=>{e.compute(fe(e.inputs[0],"Sqrt","sqrt"))},Sc=e=>{e.compute(fe(e.inputs[0],"Tan","tan"))},Oi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,kc=e=>{e.compute(fe(e.inputs[0],"Tanh",Oi))},ma=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Oi("v")};
}
`,ga=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Tc=e=>{let t=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"FastGelu",ga,ma(t),void 0,e.inputs[0].dataType))},Cc=(e,t)=>{let r=Oe(e.inputs[0].dataType);return e.compute(fe(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Ec=e=>{e.compute(fe(e.inputs[0],"Log","log"))},fu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,mu=e=>`quick_gelu_impl(${e})`,Ic=(e,t)=>{let r=Oe(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"QuickGelu",mu,fu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),gu,yu,zc,fy=L(()=>{oe(),ue(),Wa(),gu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},yu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=N("input",e[0].dataType,e[0].dims,4),a=N("bias",e[0].dataType,[e[0].dims[2]],4),s=j("output",e[0].dataType,t,4),o=O.size(t)/4,i=Ee(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,a,s)}

  ${Mr(i)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},zc=e=>{gu(e.inputs),e.compute(yu(e.inputs))}}),_u,wu,Ze,Ac,Oc,Bc,Rc,Nc,Dc,Mc,Pc,Uc,Wc,my=L(()=>{Y(),oe(),ue(),_u=(e,t,r,a,s,o,i,l,p,d,f,g)=>{let y,_;typeof l=="string"?y=_=(b,k)=>`${l}((${b}),(${k}))`:typeof l=="function"?y=_=l:(y=l.scalar,_=l.vector);let w=j("outputData",f,a.length,4),$=N("aData",p,t.length,4),S=N("bData",d,r.length,4),v;if(s)if(o){let b=O.size(t)===1,k=O.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;b||k?v=w.setByOffset("global_idx",_(b?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),k?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(i||T?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,i||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=w.setByOffset("global_idx",_($.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(k,T,E="")=>{let I=`aData[indexA${T}][componentA${T}]`,z=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${w.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${$.broadcastedIndicesToOffset(`outputIndices${T}`,w)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,w)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${k}[${T}] = ${E}(${y(I,z)});
          `};f===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,S,w)}

        ${g??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},wu=(e,t,r,a,s,o,i=r.dataType)=>{let l=r.dims.map($=>Number($)??1),p=a.dims.map($=>Number($)??1),d=!O.areEqual(l,p),f=l,g=O.size(l),y=!1,_=!1,w=[d];if(d){let $=Ut.calcShape(l,p,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");f=$.slice(),g=O.size(f);let S=O.size(l)===1,v=O.size(p)===1,b=l.length>0&&l[l.length-1]%4===0,k=p.length>0&&p[p.length-1]%4===0;w.push(S),w.push(v),w.push(b),w.push(k);let T=1;for(let E=1;E<f.length;E++){let I=l[l.length-E],z=p[p.length-E];if(I===z)T*=I;else break}T%4===0?(_=!0,y=!0):(S||v||b||k)&&(y=!0)}else y=!0;return w.push(y),{name:e,shaderCache:{hint:t+w.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>_u($,l,p,f,y,d,_,s,r.dataType,a.dataType,i,o),getRunData:()=>({outputs:[{dims:f,dataType:i}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(f)/4)},...Z(l,p,f)]})}},Ze=(e,t,r,a,s,o)=>{e.compute(wu(t,s??"",e.inputs[0],e.inputs[1],r,a,o))},Ac=e=>{Ze(e,"Add",(t,r)=>`${t}+${r}`)},Oc=e=>{Ze(e,"Div",(t,r)=>`${t}/${r}`)},Bc=e=>{Ze(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Rc=e=>{Ze(e,"Mul",(t,r)=>`${t}*${r}`)},Nc=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ze(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Dc=e=>{Ze(e,"Sub",(t,r)=>`${t}-${r}`)},Mc=e=>{Ze(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Pc=e=>{Ze(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Uc=e=>{Ze(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Wc=e=>{Ze(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),$u,bu,vu,xu,qc,Lc,gy=L(()=>{Y(),oe(),xe(),ue(),$u=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],s=a.dataType,o=a.dims.length;e.forEach((i,l)=>{if(l!==r){if(i.dataType!==s)throw new Error("input tensors should be one type");if(i.dims.length!==o)throw new Error("input tensors should have the same shape");i.dims.forEach((p,d)=>{if(d!==t&&p!==a.dims[d])throw new Error("non concat dimensions must match")})}})},bu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,vu=(e,t)=>{let r=e.length,a=[];for(let s=0;s<r;++s){let o=t.setByOffset("global_idx",e[s].getByIndices("indices"));r===1?a.push(o):s===0?a.push(`if (inputIndex == ${s}u) { ${o} }`):s===r-1?a.push(`else { ${o} }`):a.push(`else if (inputIndex == ${s}) { ${o} }`)}return a.join(`
`)},xu=(e,t,r,a)=>{let s=O.size(r),o=new Array(e.length),i=new Array(e.length),l=0,p=[],d=[],f=[{type:12,data:s}];for(let $=0;$<e.length;++$)l+=e[$].dims[t],o[$]=l,d.push(e[$].dims.length),i[$]=N(`input${$}`,a,d[$]),p.push("rank"),f.push({type:12,data:o[$]});for(let $=0;$<e.length;++$)f.push(...Z(e[$].dims));f.push(...Z(r));let g=j("output",a,r.length),y=g.indicesGet("indices",t),_=Array.from(Array(o.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),w=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)$.registerUniform(`sizeInConcatAxis${S}`,"u32");return $.declareVariables(...i,g)})()}

  ${bu(o.length,_)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${y});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${_});
      ${y} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${vu(i,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}),getShaderSource:w}},qc=(e,t)=>{let r=e.inputs,a=r[0].dims,s=O.normalizeAxis(t.axis,a.length);$u(r,s);let o=a.slice();o[s]=r.reduce((l,p)=>l+(p.dims.length>s?p.dims[s]:0),0);let i=r.filter(l=>O.size(l.dims)>0);e.compute(xu(i,s,o,r[0].dataType),{inputs:i})},Lc=e=>ge({axis:e.axis})}),Et,It,zt,qa,Ot=L(()=>{Y(),oe(),Et=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},It=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},zt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},qa=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[_p,wp];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Be,Gc,La=L(()=>{Be=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Gc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Vc,yy=L(()=>{Vc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),or,Ga,Va=L(()=>{Y(),oe(),ue(),Ot(),or=(e,t,r,a,s)=>{let o=a-r;return`
      ${Array.from({length:r}).map((i,l)=>`
      if (${K(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,K(s,l+o,a))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Ga=(e,t,r,a,s=!1,o)=>{let i=e[0].dims,l=e[1].dims,p=i[i.length-2],d=l[l.length-1],f=i[i.length-1],g=ve(d),y=ve(f),_=ve(p),w=O.size(r)/g/_,$=e.length>2,S=a?a.slice(0,-2):r.slice(0,-2),v=[O.size(S),p,d],b=[{type:12,data:w},{type:12,data:p},{type:12,data:d},{type:12,data:f}];It(t,b),b.push(...Z(S,i,l)),$&&b.push(...Z(e[2].dims)),b.push(...Z(v));let k=T=>{let E=Ma("batch_dims",e[0].dataType,S.length),I=N("a",e[0].dataType,i.length,y),z=N("b",e[1].dataType,l.length,g),R=j("output",e[0].dataType,v.length,g),P=Ee(R.type.tensor),V=Et(t,R.type.value,P),J=[I,z],ee="";if($){let le=s?g:1;J.push(N("bias",e[2].dataType,e[2].dims.length,le)),ee=`${s?`value += bias[col / ${le}];`:`value += ${R.type.value}(bias[row + i]);`}`}let Q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];zt(t,Q);let te=()=>{let le=`var a_data: ${I.type.value};`;for(let G=0;G<y;G++)le+=`
              let b_data${G} = b[(b_offset + (k + ${G}) * uniforms.N + col) / ${g}];`;for(let G=0;G<_;G++){le+=`a_data = a[(a_offset + (row + ${G}) * uniforms.K + k) / ${y}];`;for(let pe=0;pe<y;pe++)le+=`
            values[${G}] = fma(${z.type.value}(a_data${y===1?"":`[${pe}]`}), b_data${pe}, values[${G}]);
`}return le};return`
  ${T.registerUniforms(Q).registerInternalVariables(E).declareVariables(...J,R)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${or("a_indices",I,I.rank-2,E.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${or("b_indices",z,z.rank-2,E.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${R.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${y}) {
      ${te()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ee}
      ${V}
      let cur_indices = ${R.type.indices}(batch, row + i, col);
      let offset = ${R.indicesToOffset("cur_indices")};
      ${R.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${g};${y};${_};${s}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:b}),getShaderSource:k}}}),Su,ku,ya,Bi,Tu,_a,Cu,Vr,Ha=L(()=>{Y(),oe(),ue(),Ot(),Va(),La(),Su=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,ku=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ya=(e,t,r="f32",a,s=!1,o=32,i=!1,l=32)=>{let p=t[1]*e[1],d=t[0]*e[0],f=s?p:o,g=s?o:p,y=f/t[0],_=o/t[1];if(!((s&&y===4&&e[1]===4||!s&&(y===3||y===4))&&f%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${y} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${y} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${y}<${r}>, ${f/y}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${y};
const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${i?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${p};

  let num_tiles = ${i?`${Math.ceil(l/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${i?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Su(s,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${y===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${ku(s,y)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Bi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Tu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",_a=(e,t,r="f32",a,s=!1,o=32,i=!1,l=32,p=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],g=s?d:o,y=s?o:d;if(!(y%t[1]===0&&g%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${y} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let _=y/t[1],w=g/t[0],$=o/t[1],S=p?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${y}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          ${Bi(s,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Bi(s,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Tu(s)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${g}>, ${y}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${i?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${i?`${Math.ceil(l/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${i?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Cu=(e,t,r,a,s=!1)=>{let[o,i,l,p]=a,d=Ee(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Be(e,d)} {
      var value = ${Be(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${i.type.indices};
        ${or("aIndices",i,i.rank-2,o.rank,"batchIndices")}
        ${i.indicesSet("aIndices",i.rank-2,"u32(row)")}
        ${i.indicesSet("aIndices",i.rank-1,"u32(colIn)")}
        value = ${i.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Be(e,d)} {
      var value = ${Be(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${or("bIndices",l,l.rank-2,o.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Be(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${Be(e,d)}(bias[row])`};`:""}
        ${r}
        ${p.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Vr=(e,t,r,a,s=!1,o)=>{let i=e[0].dims,l=e[1].dims,p=i.slice(0,-2),d=l.slice(0,-2),f=a?a.slice(0,-2):r.slice(0,-2),g=O.size(f),y=i[i.length-2],_=i[i.length-1],w=l[l.length-1],$=_%4===0&&w%4===0,S=y<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(w/v[0]/S[0]),Math.ceil(y/v[1]/S[1]),Math.ceil(g/v[2]/S[2])],k=$?4:1,T=[...p,y,_/k],E=T.length,I=[...d,_,w/k],z=I.length,R=[g,y,w/k],P=[{type:6,data:y},{type:6,data:w},{type:6,data:_}];It(t,P),P.push(...Z(f,T,I));let V=["rank","rank"],J=e.length>2;J&&(P.push(...Z(e[2].dims)),V.push("rank")),P.push(...Z(R));let ee=Q=>{let te=f.length,le=Ma("batchDims",e[0].dataType,te,1),G=Ee(e[0].dataType),pe=N("a",e[0].dataType,E,k),ye=N("b",e[1].dataType,z,k),F=j("result",e[0].dataType,R.length,k),ce=[pe,ye];if(J){let Ae=s?k:1;ce.push(N("bias",e[2].dataType,e[2].dims.length,Ae))}let D=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];zt(t,D);let q=Ee(F.type.tensor),re=Et(t,F.type.value,q),_e=Cu(k,J,re,[le,pe,ye,F],s);return`
  ${Q.registerUniforms(D).registerInternalVariables(le).declareVariables(...ce,F)}
  ${_e}
  ${$?ya(S,v,G,le):_a(S,v,G,le)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${$};${s}`,inputDependencies:V},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:P}),getShaderSource:ee}}}),Eu,Hc,_y=L(()=>{Y(),ut(),ue(),Ot(),La(),yy(),Ha(),Eu=(e,t,r,a,s=!1,o,i=4,l=4,p=4,d="f32")=>{let f=P=>{switch(P){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},g=P=>{switch(P){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},y=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Be(i,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${$}) {
      ${y}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(i)}
    }
    return resData;`,k=e?t&&a?`
    let col = colIn * ${i};
    ${b}`:`
    let col = colIn * ${i};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Be(i,d)}(0.0);`:a&&r?`
    let col = colIn * ${i};
    ${b}`:`
    let col = colIn * ${i};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Be(i,d)}(0.0);`,T=e?a&&r?g(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g(l)}
    }
    return ${Be(l,d)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${g(l)}
    }
    return ${Be(l,d)}(0.0);`,E=Be(p,d),I=Be(e?i:l,d),z=Be(e?l:i,d),R=Et(o,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?k:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${p};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Gc(s)}
      ${R}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Hc=(e,t,r,a,s,o,i,l,p)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],g=r[0],y=d?r[2]:r[3],_=d?r[1]:r[2],w=d?r[3]:r[1],$=d&&(f%4===0||f%3===0)&&w%4===0,S=d?w:y*_,v=d?y*_:w,b=[8,8,1],k=a<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/b[0]/k[0]),Math.ceil(v/b[1]/k[1]),Math.ceil(g/b[2]/k[2])];he("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let E=$?d&&f%4!==0?3:4:1,I=b[1]*k[1],z=b[0]*k[0],R=Math.max(b[0]*E,b[1]),P=a%I===0,V=s%z===0,J=o%R===0,ee=$?[E,4,4]:[1,1,1],Q=[{type:6,data:a},{type:6,data:s},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];It(t,Q),Q.push(...Z(e[0].dims,e[1].dims));let te=["rank","rank"];i&&(Q.push(...Z(e[2].dims)),te.push("rank")),Q.push(...Z(r));let le=G=>{let pe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];zt(t,pe);let ye=$?4:1,F=Ee(e[0].dataType),ce=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${F}>`:F}) {
        result[flatIndex] = ${$?`vec4<${F}>`:F}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${F}>`:F}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,D=N("x",e[0].dataType,e[0].dims.length,E===3?1:E),q=N("w",e[1].dataType,e[1].dims.length,ye),re=[D,q],_e=j("result",e[0].dataType,r.length,ye);if(i){let Ae=N("bias",e[2].dataType,e[2].dims.length,ye);re.push(Ae),ce+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${F}>`:F} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${Vc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${G.registerUniforms(pe).declareVariables(...re,_e)}
        ${ce}
        ${Eu(d,P,V,J,i,t,ee[0],ee[1],ee[2],F)}
        ${$?ya(k,b,F,void 0,!d,R):_a(k,b,F,void 0,!d,R,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${$};${P};${V};${J};${I};${z};${R}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:p?p(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:Q}),getShaderSource:le}}}),Iu,Ri,Xt,zu,Ni,Au,Fc,jc,wy=L(()=>{Y(),ut(),oe(),ue(),Ot(),La(),Iu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ri=e=>typeof e=="number"?[e,e,e]:e,Xt=(e,t)=>t<=1?e:e+(e-1)*(t-1),zu=(e,t,r,a=1)=>{let s=Xt(t,a);return Math.floor((e[0]*(r-1)-r+s)/2)},Ni=(e,t,r,a,s)=>{s==null&&(s=zu(e,t[0],a[0]));let o=[0,0,0,r];for(let i=0;i<3;i++)e[i]+2*s>=t[i]&&(o[i]=Math.trunc((e[i]-t[i]+2*s)/a[i]+1));return o},Au=(e,t,r,a,s,o,i,l,p,d)=>{let f,g,y,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Ni([t,r,a,1],[l,p,d],1,[s,o,i],e);g=w[0],y=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every(($,S,v)=>$===v[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Ni([t,r,a,1],[l,p,d],1,[s,o,i],e[0]);g=w[0],y=w[1],_=w[2]}else if(e==="SAME_UPPER"){g=Math.ceil(t/s),y=Math.ceil(r/o),_=Math.ceil(a/i);let w=(g-1)*s+l-t,$=(y-1)*o+p-r,S=(_-1)*i+d-a,v=Math.floor(w/2),b=w-v,k=Math.floor($/2),T=$-k,E=Math.floor(S/2),I=S-E;f={top:k,bottom:T,left:E,right:I,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:g,outHeight:y,outWidth:_}},Fc=(e,t,r,a,s,o=!1,i="channelsLast")=>{let l,p,d,f,g;if(i==="channelsLast")[l,p,d,f,g]=e;else if(i==="channelsFirst")[l,g,p,d,f]=e;else throw new Error(`Unknown dataFormat ${i}`);let[y,,_,w,$]=t,[S,v,b]=Ri(r),[k,T,E]=Ri(a),I=Xt(_,k),z=Xt(w,T),R=Xt($,E),{padInfo:P,outDepth:V,outHeight:J,outWidth:ee}=Au(s,p,d,f,S,v,b,I,z,R),Q=o?y*g:y,te=[0,0,0,0,0];return i==="channelsFirst"?te=[l,Q,V,J,ee]:i==="channelsLast"&&(te=[l,V,J,ee,Q]),{batchSize:l,dataFormat:i,inDepth:p,inHeight:d,inWidth:f,inChannels:g,outDepth:V,outHeight:J,outWidth:ee,outChannels:Q,padInfo:P,strideDepth:S,strideHeight:v,strideWidth:b,filterDepth:_,filterHeight:w,filterWidth:$,effectiveFilterDepth:I,effectiveFilterHeight:z,effectiveFilterWidth:R,dilationDepth:k,dilationHeight:T,dilationWidth:E,inShape:e,outShape:te,filterShape:t}},jc=(e,t,r,a,s,o)=>{let i=o==="channelsLast";i?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],p={x:r.map((S,v)=>v)},d=[Math.ceil(Iu(p.x.map(S=>r[S]))/l[0]),1,1];he("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let f=1,g=O.size(r),y=[{type:12,data:g},{type:12,data:a},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];It(t,y),y.push(...Z(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(y.push(...Z(e[2].dims)),_.push("rank")),y.push(...Z(r));let $=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];zt(t,v);let b=1,k=Ee(e[0].dataType),T=N("x",e[0].dataType,e[0].dims.length,f),E=N("W",e[1].dataType,e[1].dims.length,b),I=[T,E],z=j("result",e[0].dataType,r.length,b),R="";if(w){let J=N("bias",e[2].dataType,e[2].dims.length,b);I.push(J),R+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${i?K("coords",4,5):K("coords",1,5)}];
        }`}let P=Be(f,k),V=Et(t,P,k);return`
            ${R}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...I,z)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${K("coords",0,T.rank)};
              let d2 = ${i?K("coords",T.rank-1,T.rank):K("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${i?K("coords",1,T.rank):K("coords",2,T.rank)},
              ${i?K("coords",2,T.rank):K("coords",3,T.rank)},
              ${i?K("coords",3,T.rank):K("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${i?K("uniforms.x_shape",1,T.rank):K("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${i?K("uniforms.x_shape",2,T.rank):K("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${i?K("uniforms.x_shape",3,T.rank):K("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${i?K("uniforms.x_shape",4,T.rank):K("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${i?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${i?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${i?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${i?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${V}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${i};${f};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:y}),getShaderSource:$}}}),Kc,Zc,$y=L(()=>{Y(),oe(),ue(),Ot(),Kc=(e,t,r,a)=>{let s=e.length>2,o=s?"value += b[output_channel];":"",i=e[0].dims,l=e[1].dims,p=t.format==="NHWC",d=p?r[3]:r[1],f=d/t.group,g=p&&f>=4?ve(d):1,y=O.size(r)/g,_=[{type:12,data:y},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];It(t,_),_.push(...Z(i,[l[0],l[1],l[2],l[3]/g]));let w=s?["rank","rank","rank"]:["rank","rank"];_.push(...Z([r[0],r[1],r[2],r[3]/g]));let $=S=>{let v=j("output",e[0].dataType,r.length,g),b=Ee(v.type.tensor),k=Et(t,v.type.value,b),T=N("x",e[0].dataType,i.length),E=N("w",e[1].dataType,l.length,g),I=[T,E];s&&I.push(N("b",e[2].dataType,e[2].dims,g));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];zt(t,z);let R=p?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...I,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${p?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${p?1:2}], outputIndices[${p?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${p?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${R}
    ${o}
    ${k}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:$}},Zc=(e,t,r,a)=>{let s=e.length>2,o=ve(r[3]),i=ve(r[2]),l=O.size(r)/o/i,p=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],f=[r[0],r[1],r[2],r[3]/o],g=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];It(t,g),g.push(...Z(p,d,f));let y=(i-1)*t.strides[1]+d[1],_=w=>{let $=j("output",e[0].dataType,f.length,o),S=Ee($.type.tensor),v=Et(t,$.type.value,S),b=N("x",e[0].dataType,p.length,o),k=N("w",e[1].dataType,d.length,o),T=[b,k];s&&T.push(N("b",e[2].dataType,e[2].dims,o));let E=s?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return zt(t,I),`
  ${w.registerUniforms(I).declareVariables(...T,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${i}u;
    let col = (index1 % width1) * ${i}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${y}>;
    var values: array<${$.type.value}, ${i}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${y}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${i}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${i}u; i++) {
      var value = values[i];
      ${E}
      ${v}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${i};${y};${d[0]};${d[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:_}}}),Ou,Ir,Bu,zr,wa,Di,Ru,Nu,$a,by=L(()=>{oe(),_y(),wy(),Ha(),$y(),Ot(),Va(),_t(),Ou=(e,t,r,a,s,o)=>{let i=e[0],l=e.slice(o?1:2,o?3:4),p=l.length,d=t[0],f=t.slice(2).map((y,_)=>y+(y-1)*(r[_]-1)),g=l.map((y,_)=>y+a[_]+a[_+p]).map((y,_)=>Math.floor((y-f[_]+s[_])/s[_]));return g.splice(0,0,i),g.splice(o?3:1,0,d),g},Ir=[2,3,1,0],Bu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},zr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let o=2;o<t[1].dims.length;++o)r[o-2]===0&&(r[o-2]=t[1].dims[o]);let a=e.pads.slice();Lr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:r,pads:a}),s},wa=e=>{let t=qa(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,o=e.group,i=e.kernel_shape,l=e.pads,p=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:s,group:o,kernelShape:i,pads:l,strides:p,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Di=(e,t,r,a)=>{let s=r.format==="NHWC",o=Ou(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,s);if(r.group!==1){let I=[t[0]];if(s){let z=e.kernelCustomData.wT??e.compute(Ue(t[1],Ir),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),I.push(z)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Zc(I,r,o,a),{inputs:I}):e.compute(Kc(I,r,o,a),{inputs:I});return}let i=t.length===3,l=t[0].dims[s?1:2],p=t[0].dims[s?2:3],d=t[0].dims[s?3:1],f=t[1].dims[2],g=t[1].dims[3],y=o[s?1:2],_=o[s?2:3],w=o[s?3:1],$=s&&f===l&&g===p&&r.pads[0]===0&&r.pads[1]===0;if($||f===1&&g===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=o[0],z,R,P,V=[];if(s){let Q=e.kernelCustomData.wT??e.compute(Ue(t[1],Ir),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Q),$){let te=l*p*d;z=t[0].reshape([1,I,te]),R=Q.reshape([1,te,w]),P=[1,I,w]}else z=t[0].reshape([I,l*p,d]),R=Q.reshape([1,d,w]),P=[I,y*_,w];V.push(z),V.push(R)}else z=t[0].reshape([I,d,l*p]),R=t[1].reshape([1,w,d]),P=[I,w,y*_],V.push(R),V.push(z);i&&V.push(t[2]);let J=P[2],ee=V[0].dims[V[0].dims.length-1];J<8&&ee<8?e.compute(Ga(V,r,o,P,s,a),{inputs:V}):e.compute(Vr(V,r,o,P,s,a),{inputs:V});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Ue(t[1],Ir),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];i&&b.push(t[2]);let k=s?y*_:w,T=s?w:y*_,E=f*g*d;e.compute(Hc(b,r,o,k,T,E,i,S,a),{inputs:b})},Ru=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),i=[1].concat(t.dilations),l=[1].concat(t.kernelShape),p=zr({...t,pads:s,strides:o,dilations:i,kernelShape:l},a);Di(e,a,p,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Nu=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",s=zr(r,t),o=r.autoPad==="NOTSET"?r.pads:r.autoPad,i=Fc(t[0].dims,t[1].dims,r.strides,r.dilations,o,!1,a);e.compute(jc(t,s,i.outShape,[i.filterDepth,i.filterHeight,i.filterWidth],[i.padInfo.front,i.padInfo.top,i.padInfo.left],a))},$a=(e,t)=>{if(Bu(e.inputs,t),e.inputs[0].dims.length===3)Ru(e,t);else if(e.inputs[0].dims.length===5)Nu(e,e.inputs,t);else{let r=zr(t,e.inputs);Di(e,e.inputs,r)}}}),Qc,vy=L(()=>{Y(),ut(),oe(),ue(),Qc=(e,t,r)=>{let a=e.length>2,s=t.outputShape,o=t.format==="NHWC",i=t.group,l=e[1].dims,p=l[2]/i,d=l[3],f=o?ve(p):1,g=o?ve(d):1,y=o?d===1?f:g:1,_=O.size(s)/g,w=[Math.ceil(_/64),1,1];he("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${w}`);let $=["rank","rank"],S=[t.strides[0],t.strides[1]],v=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],b=[t.dilations[0],t.dilations[1]],k=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],T=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],E=[{type:12,data:_},{type:12,data:S},{type:12,data:v},{type:12,data:b},{type:12,data:k},{type:6,data:T},{type:12,data:p},{type:12,data:d},...Z(e[0].dims,e[1].dims)];a&&(E.push(...Z(e[2].dims)),$.push("rank")),E.push(...Z(s));let I=z=>{let R=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=Ee(e[0].dataType),V=o?1:2,J=o?2:3,ee=o?3:1,Q=N("W",e[1].dataType,e[1].dims.length,y),te=N("Dy",e[0].dataType,e[0].dims.length,f),le=[te,Q];a&&le.push(N("bias",e[2].dataType,[s[ee]].length,g));let G=j("result",e[0].dataType,s.length,g),pe=()=>{let F="";if(f===1)F+=`
        let w_offset = ${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${Q.getByOffset(`w_offset / ${y}`)};
        dotProd = dotProd + xValue * wValue;`;else if(d===1)F+=`
          let wValue = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${y}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ce=0;ce<f;ce++)F+=`
            let wValue${ce} = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ce}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${ce}] * wValue${ce};`;return F},ye=`
            let outputIndices = ${G.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${G.indicesGet("outputIndices",0)};
            let d1 = ${G.indicesGet("outputIndices",ee)};
            let r = ${G.indicesGet("outputIndices",V)};
            let c = ${G.indicesGet("outputIndices",J)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${G.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${P}(dyRCorner) + ${P}(wR)) / ${P}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${P}(dyCCorner) + ${P}(wC)) / ${P}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${P}(uniforms.Dy_shape[${J}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${f}) {
                  let xValue = ${o?te.getByOffset(`${te.indicesToOffset(`${te.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):te.get("batch","inputChannel","idyR","idyC")};
                  ${pe()}
                  inputChannel = inputChannel + ${f};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${g}]`:""};
            ${G.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(R).declareVariables(...le,G)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ye}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${y}${g}${d===1}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:w[0],y:w[1],z:w[2]},outputs:[{dims:r?r(s):s,dataType:e[0].dataType}],programUniforms:E}),getShaderSource:I}}}),Du,Mu,Pu,Mi,Xc,Uu,Pi,Wu,Yc,xy=L(()=>{vy(),Ot(),_t(),Du=(e,t,r,a,s,o)=>(e-1)*t+r+(a-1)*s+1-o,Mu=(e,t,r,a,s)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=o,r[s]=e-o):t==="SAME_LOWER"&&(r[a]=e-o,r[s]=o)},Pu=(e,t,r,a,s,o,i,l,p,d)=>{let f=e.length-2,g=d.length===0;p.length<f&&p.push(...Array(f-p.length).fill(0));let y=e[0],_=t[l?3:1]*s;for(let w=0,$=e.length-f-(l?1:0);w<f;++w,++$){let S=e[$],v=g?S*i[w]:d[w],b=Du(S,i[w],o[w],t[$],r[w],v);Mu(b,a,o,w,w+f),g&&d.push(i[w]*(S-1)+p[w]+(t[$]-1)*r[w]+1-o[w]-o[w+f])}d.splice(0,0,y),d.splice(l?3:1,0,_)},Mi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((g,y)=>g*y,1)===0){r.length=0;for(let g=2;g<t[1].dims.length;++g)r.push(t[1].dims[g])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let s=e.pads.slice(),o=e.outputShape.slice(),i=e.outputPadding.slice(),l=t[0].dims,p=e.dilations.slice();if(p.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;p=new Array(g).fill(1)}let d=e.strides.slice();if(d.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;d=new Array(g).fill(1)}Pu(l,r,p,e.autoPad,e.group,s,d,a,i,o);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:s,outputPadding:i,outputShape:o,dilations:p,strides:d}),f},Xc=e=>{let t=qa(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,o=e.group,i=e.kernelShape,l=e.pads,p=e.strides,d=e.wIsConst(),f=e.outputPadding,g=e.outputShape;return{autoPad:a,format:r,dilations:s,group:o,kernelShape:i,outputPadding:f,outputShape:g,pads:l,strides:p,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Uu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((i,l)=>i+l,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((i,l)=>i+l,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((i,l)=>i+l,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((i,l)=>i+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Pi=(e,t,r,a)=>{let s=e.kernelCustomData.wT??e.compute(Ue(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=s);let o=[t[0],s];t.length===3&&o.push(t[2]),e.compute(Qc(o,r,a),{inputs:o})},Wu=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let i=t.strides;(i.length===0||i[0]===0)&&(i=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],i=[1].concat(i),o=[1].concat(o),s=[1].concat(s);let p=t.outputPadding;p=[0].concat(p);let d=Mi({...t,pads:l,strides:i,dilations:o,kernelShape:s,outputPadding:p},a);Pi(e,a,d,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},Yc=(e,t)=>{if(Uu(e.inputs,t),e.inputs[0].dims.length===3)Wu(e,t);else{let r=Mi(t,e.inputs);Pi(e,e.inputs,r)}}}),qu,Jc,eh,Sy=L(()=>{Y(),oe(),xe(),ue(),qu=(e,t,r,a)=>{let s=O.size(t),o=t.length,i=N("input",e,o),l=j("output",e,o),p=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(p,o),f=g=>{let y=` i32(${i.indicesGet("inputIndices","uniforms.axis")}) `,_=K("uniforms.input_shape","uniforms.axis",o),w=a.reverse?y+(a.exclusive?" + 1":""):"0",$=a.reverse?_:y+(a.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(i,l)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${i.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${i.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:d},...Z(t,t)]}),getShaderSource:f}},Jc=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,s=e.inputs[1];e.compute(qu(a,r,s,t),{inputs:[0]})},eh=e=>{let t=e.exclusive===1,r=e.reverse===1;return ge({exclusive:t,reverse:r})}}),Lu,Gu,Vu,th,rh,ky=L(()=>{Y(),oe(),xe(),ue(),Lu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Gu=(e,t,r,a)=>{let s=[];s.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let o=0;o<t;++o)s.push(r.indicesSet("a",e[o],`i[${o}]`));return s.push("return a;}"),s.join(`
`)},Vu=(e,t)=>{let r,a,s,o,i,l,p=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";p?([r,a,s,o]=e.dims,i=f?[r,a,s,d,d,o/d**2]:[r,a,s,o/d**2,d,d],l=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,s,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],i=f?[r,d,d,o/d**2,a,s]:[r,o/d**2,d,d,a,s],l=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=e.reshape(i),y=g.dims.length,_=e.dataType,w=N("a",_,y),$=j("output",_,y),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(w,$)}

  ${Gu(l,y,w,$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=p?[r,a*d,s*d,o/d**2]:[r,o/d**2,a*d,s*d],k=O.size(b),T=g.dims,E=O.sortBasedOnPerm(T,l);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...Z(T,E)]}},getShaderSource:S}},th=(e,t)=>{Lu(e.inputs),e.compute(Vu(e.inputs[0],t))},rh=e=>ge({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ar,Yt,Ui,Hu,Fu,ju,Ku,Wi,Zu,ih,ah,Ty=L(()=>{Y(),oe(),xe(),ue(),Ar="[a-zA-Z]|\\.\\.\\.",Yt="("+Ar+")+",Ui="^"+Yt+"$",Hu="("+Yt+",)*"+Yt,Fu="^"+Hu+"$",ju=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Ku=class{constructor(e,t){var r;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[a,s]=t.includes("->")?t.split("->",2):[t,""];if(!a.match(RegExp(Fu)))throw new Error("Invalid LHS term");if(a.split(",").forEach((o,i)=>{let l=e[i].dims.slice();if(!o.match(RegExp(Ui)))throw new Error("Invalid LHS term");let p=this.processTerm(o,!0,l,i);this.lhs.push(p)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([o,i])=>i.count===1||o==="...").map(([o])=>o).join("");else if(!s.match(RegExp(Yt)))throw new Error("Invalid RHS");(r=s.match(RegExp(Ar,"g")))==null||r.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let i=this.symbolToInfo.get(o);if(i===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(i.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let s=r.length,o=!1,i=[],l=0;if(!e.match(RegExp(Ui))&&!t&&e!=="")throw new Error("Invalid LHS term");let p=e.match(RegExp(Ar,"g")),d=new ju(a);return p==null||p.forEach((f,g)=>{if(f==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let y=s-p.length+1;if(y<0)throw new Error("Ellipsis out of bounds");if(i=r.slice(l,l+y),this.hasEllipsis){if(this.ellipsisDims.length!==i.length||this.ellipsisDims.toString()!==i.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=i;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<i.length;_++){let w=String.fromCharCode(48+_);d.addSymbol(w,g+_),this.addSymbol(w,r[l++],a)}}else d.addSymbol(f,g+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[l++],a)}),d}},Wi=e=>e+"_max",Zu=(e,t,r,a)=>{let s=e.map(d=>d.length).map((d,f)=>N(`input${f}`,t,d)),o=O.size(a),i=j("output",t,a.length),l=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),p=d=>{let f=[],g="var prod = 1.0;",y="var sum = 0.0;",_="sum += prod;",w=[],$=[],S=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,E)=>{var I;if(r.rhs.symbolToIndices.has(E)){let z=(I=r.rhs.symbolToIndices.get(E))==null?void 0:I[0];z!==void 0&&r.lhs.forEach((R,P)=>{if(T.inputIndices.includes(P)){let V=R.symbolToIndices.get(E);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(J=>{f.push(`${s[P].indicesSet(`input${P}Indices`,J,i.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,R)=>{if(T.inputIndices.includes(R)){let P=z.symbolToIndices.get(E);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(V=>{w.push(`${s[R].indicesSet(`input${R}Indices`,V,`${E}`)}`)}),v.push(`prod *= ${s[R].getByIndices(`input${R}Indices`)};`)}}),$.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Wi(E)}; ${E}++) {`),S.push("}")});let k=b?[...f,`let sum = ${s.map((T,E)=>T.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...f,y,...$,...w,g,...v,_,...S];return`
            ${d.registerUniforms(l.map(T=>({name:`${Wi(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...s,i)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${i.offsetToIndices("global_idx")};
            ${s.map((T,E)=>`var input${E}Indices: ${s[E].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${i.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=l.filter(g=>r.symbolToInfo.has(g)).map(g=>{var y;return{type:12,data:((y=r.symbolToInfo.get(g))==null?void 0:y.dimValue)||0}});d.push({type:12,data:o});let f=e.map((g,y)=>[...Z(g)]).reduce((g,y)=>g.concat(y),d);return f.push(...Z(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}},getShaderSource:p}},ih=(e,t)=>{let r=new Ku(e.inputs,t.equation),a=r.outputDims,s=e.inputs.map((o,i)=>o.dims);e.compute(Zu(s,e.inputs[0].dataType,r,a))},ah=e=>{let t=e.equation.replace(/\s+/g,"");return ge({equation:t})}}),Qu,qi,Xu,Yu,nh,Cy=L(()=>{Y(),oe(),ue(),Qu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,s=t.length<r.length?0:t.length-r.length;for(;a<r.length&&s<t.length;++a,++s)if(r[a]!==t[s]&&r[a]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},qi=(e,t)=>{let r=e.length-t.length,a=[];for(let s=0;s<r;++s)a.push(e[s]);for(let s=0;s<t.length;++s)a.push(t[s]===1?e[s+r]:t[s]);return a},Xu=(e,t)=>e.length>t.length?qi(e,t):qi(t,e),Yu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=Xu(t,r),s=e[0].dataType,o=s===9||O.size(t)===1,i=s===9||t.length>0&&t[t.length-1]%4===0?4:1,l=o||a.length>0&&a[a.length-1]%4===0?4:1,p=Math.ceil(O.size(a)/l),d=g=>{let y=N("input",s,t.length,i),_=j("output",s,a.length,l),w;if(s===9){let $=(S,v,b="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${b}(${y.getByOffset(`index${v}`)}[component${v}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${y.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${y.getByOffset(`inputOffset / ${i}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(y,_)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},f=[{type:12,data:p},...Z(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${i}${l}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f})}},nh=e=>{Qu(e.inputs),e.compute(Yu(e.inputs),{inputs:[0]})}}),Ju,sh,Ey=L(()=>{Y(),oe(),ue(),Wa(),Ju=e=>{let t=e[0].dataType,r=O.size(e[0].dims),a=O.size(e[1].dims),s=a%4===0,o=i=>{let l=N("x",t,[1],4),p=N("bias",t,[1],4),d=j("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${p.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,y=s?`
      let bias = ${p.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${i.registerUniforms(f).declareVariables(l,p,d)}

    ${ma(Oe(t))}

    ${i.mainStart(Wt)}
      ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${y}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ga("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:i=>({outputs:[{dims:i[0].dims,dataType:i[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Wt/4)}})}},sh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Tc(e):e.compute(Ju(e.inputs))}}),el,tl,oh,uh,Iy=L(()=>{Y(),oe(),xe(),ue(),el=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},tl=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r.length,o=O.normalizeAxis(t.axis,s),i=r.slice(0);i.splice(o,1,...a);let l=r[o],p=e[0].dataType===9?4:1,d=Math.ceil(O.size(i)/p),f=[{type:12,data:d},{type:6,data:l},{type:12,data:o},...Z(e[0].dims,e[1].dims,i)],g=y=>{let _=N("data",e[0].dataType,e[0].dims.length,p),w=N("inputIndices",e[1].dataType,e[1].dims.length),$=j("output",e[0].dataType,i.length,p),S=b=>{let k=a.length,T=`var indicesIndices${b}  = ${w.type.indices}(0);`;for(let E=0;E<k;E++)T+=`${k>1?`indicesIndices${b}[${E}]`:`indicesIndices${b}`} = ${i.length>1?`outputIndices${b}[uniforms.axis + ${E}]`:`outputIndices${b}`};`;T+=`
          var idx${b} = ${w.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let E=0,I=0;E<s;E++)E===o?(T+=`${s>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = u32(idx${b});`,I+=k):(T+=`${s>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = ${i.length>1?`outputIndices${b}[${I}]`:`outputIndices${b}`};`,I++);return T},v;if(e[0].dataType===9){let b=(k,T,E="")=>`
          let outputIndices${T} = ${$.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${_.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${k}[${T}] = ${E}(${_.getByOffset(`index${T}`)}[component${T}]);
        `;v=`
        let outputOffset = global_idx * ${p};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,$)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:g}},oh=e=>ge({axis:e.axis}),uh=(e,t)=>{let r=e.inputs;el(r),e.compute(tl(e.inputs,t))}}),rl,lh,dh,zy=L(()=>{Y(),oe(),ue(),rl=(e,t,r,a,s,o,i,l,p)=>{let d=[{type:12,data:o},{type:12,data:a},{type:12,data:s},{type:12,data:r},{type:12,data:i},{type:12,data:l},{type:12,data:p}],f=[o];d.push(...Z(t.dims,f));let g=y=>{let _=N("indices_data",t.dataType,t.dims.length),w=j("input_slice_offsets_data",12,1,1),$=[_,w],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${y.registerUniforms(S).declareVariables(...$)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${s.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:g},{inputs:[t],outputs:[-1]})[0]},lh=(e,t)=>{let r=e.inputs,a=r[0].dims,s=r[0].dataType,o=r[1].dims,i=o[o.length-1],l=O.sizeToDimension(o,o.length-1),p=O.sizeFromDimension(a,t.batchDims+i),d=O.sizeToDimension(a,t.batchDims),f=O.sizeFromDimension(a,t.batchDims),g=l/d,y=new Array(i),_=p;for(let T=0;T<i;++T)y[i-1-T]=_,_*=a[t.batchDims+i-1-T];let w=rl(e,r[1],y,t.batchDims,a,l,g,f,i),$=t.batchDims+i;if($>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=o.slice(0,-1).concat(a.slice($)),v=O.size(S),b=[{type:12,data:v},{type:12,data:p},...Z(r[0].dims,w.dims,S)],k=T=>{let E=N("data",r[0].dataType,r[0].dims.length),I=N("slice_offsets",12,w.dims.length),z=j("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,I,z)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:s}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:k},{inputs:[r[0],w]})},dh=e=>({batchDims:e.batch_dims,cacheKey:""})}),il,al,ph,ch,Ay=L(()=>{Y(),oe(),xe(),ue(),il=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,s=e[0],o=e[2],i=e.length===4?e[3]:void 0;if(o.dims.length!==s.dims.length||!s.dims.map((l,p)=>p===r?Math.ceil(l/a)===o.dims[p]:l===o.dims[p]).reduce((l,p)=>l&&p,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(i){if(i.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(i.dims.length!==o.dims.length||!i.dims.map((l,p)=>l===o.dims[p]).reduce((l,p)=>l&&p,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},al=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r.length,o=O.normalizeAxis(t.gatherAxis,s),i=O.normalizeAxis(t.quantizeAxis,s),l=r.slice(0);l.splice(o,1,...a);let p=O.size(l),d=e[2].dataType,f=e[0].dataType===22,g=[{type:12,data:p},{type:12,data:i},{type:12,data:o},{type:12,data:t.blockSize},...Z(...e.map((_,w)=>_.dims),l)],y=_=>{let w=N("data",e[0].dataType,e[0].dims.length),$=N("inputIndices",e[1].dataType,e[1].dims.length),S=N("scales",e[2].dataType,e[2].dims.length),v=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=j("output",d,l.length),k=[w,$,S];v&&k.push(v);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(T).declareVariables(...k,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[o]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Oe(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:d}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:g}),getShaderSource:y}},ph=(e,t)=>{let r=e.inputs;il(r,t),e.compute(al(e.inputs,t))},ch=e=>ge({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),nl,sl,hh,fh,Oy=L(()=>{Y(),oe(),xe(),ue(),nl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},sl=(e,t)=>{let r=e[0].dims,a=e[0].dataType,s=r.length,o=e[1].dims,i=e[1].dataType,l=O.normalizeAxis(t.axis,s),p=r[l],d=o.slice(0),f=O.size(d),g=N("input",a,s),y=N("indicesInput",i,o.length),_=j("output",a,d.length),w=[{type:12,data:f},{type:6,data:p},{type:12,data:l}];return w.push(...Z(r,o,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,_)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${y.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},hh=e=>ge({axis:e.axis}),fh=(e,t)=>{let r=e.inputs;nl(r),e.compute(sl(e.inputs,t))}}),ol,ul,mh,gh,By=L(()=>{Y(),oe(),ue(),ol=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ul=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[s,o,i]=yp.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),l=[s,o];if(!l)throw new Error("Can't use gemm on the given tensors");let p=16,d=Math.ceil(o/p),f=Math.ceil(s/p),g=!0,y=O.size(l),_=[{type:12,data:g?d:y},{type:12,data:s},{type:12,data:o},{type:12,data:i},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...Z(e[2].dims)),w.push("rank")),_.push(...Z(l));let $=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",T=N("a",e[0].dataType,e[0].dims),E=N("b",e[1].dataType,e[1].dims),I=T.type.value,z=null,R=[T,E];e.length===3&&(z=N("c",e[2].dataType,e[2].dims.length),R.push(z));let P=j("output",e[0].dataType,l.length);R.push(P);let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(V).declareVariables(...R)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${k}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${I}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let b=N("a",e[0].dataType,e[0].dims),k=N("b",e[1].dataType,e[1].dims),T=null,E=[b,k];e.length===3&&(T=N("c",e[2].dataType,e[2].dims.length),E.push(T));let I=j("output",e[0].dataType,l.length);E.push(I);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],R="",P="";t.transA&&t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let V=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${p}>, ${p}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${p}>, ${p}>;
  ${v.mainStart([p,p,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${p};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${p};
    let num_tiles = (uniforms.K - 1) / ${p} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${P}
      k_start = k_start + ${p};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${p}; k++) {
        ${R}
      }
      workgroupBarrier();
    }

    ${V}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return g?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:$}},mh=e=>{let t=e.transA,r=e.transB,a=e.alpha,s=e.beta;return{transA:t,transB:r,alpha:a,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},gh=(e,t)=>{ol(e.inputs),e.compute(ul(e.inputs,t))}}),tt,ot,bt,vt,ll,dl,pl,cl,hl,fl,ml,gl,yh,_h,Ry=L(()=>{Y(),oe(),xe(),ue(),[tt,ot,bt,vt]=[0,1,2,3],ll=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},dl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,pl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,cl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,hl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,fl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${tt}] = batch;
     indices[${ot}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${bt}] = u32(r);
            indices[${vt}] = u32(c);
          }
        `;case"border":return`
          indices[${bt}] = u32(clamp(r, 0, H - 1));
          indices[${vt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${bt}] = gs_reflect(r, border[1], border[3]);
          indices[${vt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,ml=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tt}], indices[${ot}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tt}], indices[${ot}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tt}], indices[${ot}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tt}], indices[${ot}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tt}], indices[${ot}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tt}], indices[${ot}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,gl=(e,t)=>{let r=N("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],s=N("grid",e[1].dataType,a.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tt,ot,bt,vt]=[0,3,1,2]);let i=j("output",e[0].dataType,o.length),l=r.type.value,p=O.size(o),d=[{type:12,data:p},...Z(e[0].dims,a,o)],f=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(r,s,i)}
  ${dl}
  ${pl(l)}
  ${cl(t)}
  ${hl(t)}
  ${fl(r,l,t)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${bt}]);
      let W_in = i32(uniforms.x_shape[${vt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${i.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${tt}], indices[${bt}], indices[${vt}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ml(i,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:g=>{let y=O.size(o);return{outputs:[{dims:o,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:d}},getShaderSource:f}},yh=(e,t)=>{ll(e.inputs),e.compute(gl(e.inputs,t))},_h=e=>ge({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Re,yl,wh,Li,_l,sr,$h,bh=L(()=>{Y(),oe(),xe(),Da(),Ua(),ue(),_t(),Re=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,yl=(e,t)=>{let r=e[0],a=Re(e,1),s=Re(e,2),o=Re(e,3),i=Re(e,4),l=Re(e,5),p=Re(e,6),d=Re(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],g=r.dims[1],y=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=g,w=0,$=0,S=Math.floor(y/t.numHeads);if(p&&d&&O.size(p.dims)&&O.size(d.dims)){if(p.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(p.dims[0]!==f||p.dims[1]!==t.numHeads||p.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=p.dims[2],$=p.dims[2]}else if(p&&O.size(p.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(a&&O.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(o&&O.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=w+_,k=0;if(i&&O.size(i.dims)>0){k=8;let z=i.dims;throw z.length===1?z[0]===f?k=1:z[0]===3*f+2&&(k=3):z.length===2&&z[0]===f&&z[1]===b&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,E=y;if(s&&O.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(_!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=s.dims[2]}else{if(_!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=s.dims[1]*s.dims[3],T=!0}}let I=!1;if(i&&O.size(i.dims)>0)throw new Error("Key padding mask is not supported");if(l&&O.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[2]!==g||l.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:g,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:y,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:I,passPastInKv:T,qkvFormat:v}},wh=e=>ge({...e}),Li=ge({perm:[0,2,1,3]}),_l=(e,t,r,a,s,o,i)=>{let l=[a,s,o],p=O.size(l),d=[{type:12,data:p},{type:12,data:i},{type:12,data:o}],f=g=>{let y=j("qkv_with_bias",t.dataType,l),_=N("qkv",t.dataType,l),w=N("bias",r.dataType,l),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms($).declareVariables(_,w,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},sr=(e,t,r,a,s,o,i,l)=>{let p=o;if(i&&O.size(i.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return p=_l(e,o,i,t,a,r*s,l),p=p.reshape([t,a,r,s]),r===1||a===1?p:e.compute(Ue(p,Li.perm),{inputs:[p],outputs:[-1]})[0]}else return o.dims.length===3&&(p=o.reshape([t,a,r,s])),r===1||a===1?p:e.compute(Ue(p,Li.perm),{inputs:[p],outputs:[-1]})[0]},$h=(e,t)=>{let r=yl(e.inputs,t),a=e.inputs[0],s=Re(e.inputs,1),o=Re(e.inputs,2),i=Re(e.inputs,3),l=Re(e.inputs,4),p=Re(e.inputs,5),d=Re(e.inputs,6),f=Re(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((s==null?void 0:s.dims.length)===5)throw new Error("Packed KV is not implemented");let g=s&&o&&s.dims.length===4&&o.dims.length===4,y=sr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,i,0);if(g)return ur(e,y,s,o,l,void 0,d,f,p,r);if(!s||!o)throw new Error("key and value must be provided");let _=sr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,s,i,r.hiddenSize),w=sr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,o,i,2*r.hiddenSize);ur(e,y,_,w,l,void 0,d,f,p,r)}}),wl,$l,bl,vl,ba,vh,xh,Sh=L(()=>{Y(),oe(),xe(),ue(),wl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},$l=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>r.push(Number(s))),a=r.length),ge({numOutputs:a,axis:t.axis,splitSizes:r})},bl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${K("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,vl=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let s=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(s):a===0?r.push(`if (output_number == ${a}u) { ${s} }`):a===t-1?r.push(`else { ${s} }`):r.push(`else if (output_number == ${a}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ba=(e,t)=>{let r=e[0].dims,a=O.size(r),s=e[0].dataType,o=O.normalizeAxis(t.axis,r.length),i=new Array(t.numOutputs),l=N("input",s,r.length),p=new Array(t.numOutputs),d=[],f=[],g=0,y=[{type:12,data:a}];for(let w=0;w<t.numOutputs;w++){g+=t.splitSizes[w],p[w]=g;let $=r.slice();$[o]=t.splitSizes[w],f.push($),i[w]=j(`output${w}`,s,$.length),d.push({dims:f[w],dataType:e[0].dataType})}y.push({type:12,data:p},...Z(r,...f));let _=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",p.length).declareVariables(l,...i)}
  ${bl(p.length)}
  ${vl(i)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${K("uniforms.size_in_split_axis","output_number - 1u",p.length)};
      ${l.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:y})}},vh=(e,t)=>{wl(e.inputs);let r=e.inputs.length===1?t:$l(e.inputs,t);e.compute(ba(e.inputs,r),{inputs:[0]})},xh=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ge({axis:t,numOutputs:a,splitSizes:r})}}),xl,Sl,Gi,kh,Ny=L(()=>{xe(),Ua(),bh(),Sh(),_t(),xl=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],s=e[2],o=e[3],i=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,p=r.dims[0],d=r.dims[1],f=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],g=d,y=0,_=!a||a.dims.length===0,w=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=w*t.numHeads);let $=o&&o.dims.length!==0,S=i&&i.dims.length!==0;if($&&o.dims.length===4&&o.dims[0]===p&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if($&&S){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(i.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=o.dims[2]}else if($||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');g=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,k=!1,T=t.kvNumHeads?w*t.kvNumHeads:f;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(g!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=s.dims[2]}else{if(g!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=s.dims[1]*s.dims[3],k=!0}}let E=e.length>4?e[5]:void 0;if(E&&E.dims.length!==1&&E.dims[0]!==p)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:p,sequenceLength:d,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:T,headSize:w,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:v}},Sl=ge({perm:[0,2,1,3]}),Gi=(e,t,r)=>{let a=t,s=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,s,r.headSize]),a=e.compute(Ue(a,Sl.perm),{inputs:[a],outputs:[-1]})[0]),a},kh=(e,t)=>{var r;let a=xl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((r=e.inputs[1])==null?void 0:r.dims.length)===5)throw new Error("Packed KV is not implemented");let s=e.inputs[0],o=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,l=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,p=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,f=e.inputs.length>5?e.inputs[6]:void 0,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=ge({axis:2,numOutputs:3,splitSizes:[a.numHeads*a.headSize,g*a.headSize,g*a.headSize]}),[_,w,$]=!o&&!i?e.compute(ba([s],y),{inputs:[s],outputs:[-1,-1,-1]}):[s,o,i],S=sr(e,a.batchSize,a.numHeads,a.sequenceLength,a.headSize,_,void 0,0);ur(e,S,Gi(e,w,a),Gi(e,$,a),void 0,void 0,l,p,void 0,a,d,f)}}),Vi,kl,Tl,Th,Dy=L(()=>{Y(),oe(),_t(),ue(),Vi=(e,t,r,a,s,o,i,l)=>{let p=ve(o),d=p===1?"f32":`vec${p}f`,f=p===1?"vec2f":`mat2x${p}f`,g=s*i,y=64;g===1&&(y=256);let _=[s,i,o/p],w=[s,i,2],$=["rank","type","type"],S=[];S.push(...Z(_,w));let v=b=>{let k=N("x",t.dataType,3,p),T=N("scale",r.dataType,r.dims),E=N("bias",a.dataType,a.dims),I=j("output",1,3,2),z=[k,T,E,I];return`
  var<workgroup> workgroup_shared : array<${f}, ${y}>;
  const workgroup_size = ${y}u;
  ${b.declareVariables(...z)}
  ${b.mainStart(y)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${yt("workgroup_shared[0][0]",p)} / f32(hight * ${p});
      let squared_sum_final = ${yt("workgroup_shared[0][1]",p)} / f32(hight * ${p});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${p};${l};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:g},programUniforms:S}),getShaderSource:v},{inputs:[t,r,a],outputs:[-1]})[0]},kl=(e,t,r)=>{let a=t[0].dims,s=a,o=2,i=a[0],l=a[1],p=O.sizeFromDimension(a,o),d=ve(p),f=O.size(s)/d,g=Vi(e,t[0],t[1],t[2],i,p,l,r.epsilon),y=[i,l,p/d],_=[i,l],w=["type","none"],$=S=>{let v=N("x",t[0].dataType,y.length,d),b=N("scale_shift",1,_.length,2),k=j("output",t[0].dataType,y.length,d),T=[v,b,k];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...Z(y,_,y)]}),getShaderSource:$},{inputs:[t[0],g]})},Tl=(e,t,r)=>{let a=t[0].dims,s=a,o=a[0],i=a[a.length-1],l=O.sizeFromDimension(a,1)/i,p=ve(i),d=O.size(s)/p,f=[{type:12,data:l},{type:12,data:Math.floor(i/p)}],g=["type","type"],y=!1,_=[0,a.length-1];for(let v=0;v<a.length-2;v++)y=y||a[v+1]!==1,_.push(v+1);y=y&&a[a.length-1]!==1;let w=y?e.compute(Ue(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(v,b)=>a[_[b]])),$=Vi(e,w,t[1],t[2],o,l,i,r.epsilon),S=v=>{let b=Ee(t[0].dataType),k=p===1?"vec2f":`mat${p}x2f`,T=z=>{let R=z===0?"x":"y",P=p===1?"f32":`vec${p}f`;switch(p){case 1:return`${b}(${P}(scale.${R}))`;case 2:return`vec2<${b}>(${P}(scale[0].${R}, scale[1].${R}))`;case 4:return`vec4<${b}>(${P}(scale[0].${R}, scale[1].${R}, scale[2].${R}, scale[3].${R}))`;default:throw new Error(`Not supported compoents ${p}`)}},E=N("input",t[0].dataType,t[0].dims,p),I=j("output",t[0].dataType,s,p);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:S},{inputs:[t[0],$]})},Th=(e,t)=>{t.format==="NHWC"?Tl(e,e.inputs,t):kl(e,e.inputs,t)}}),Cl,El,Ch,My=L(()=>{Y(),oe(),ue(),Cl=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},El=(e,t,r)=>{let a=t.simplified,s=e[0].dims,o=e[1],i=!a&&e[2],l=s,p=O.normalizeAxis(t.axis,s.length),d=O.sizeToDimension(s,p),f=O.sizeFromDimension(s,p),g=O.size(o.dims),y=i?O.size(i.dims):0;if(g!==f||i&&y!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${y}`);let _=[];for(let E=0;E<s.length;++E)E<p?_.push(s[E]):_.push(1);let w=ve(f),$=["type","type"],S=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/w)},{type:1,data:t.epsilon}];i&&$.push("type");let v=r>1,b=r>2,k=E=>{let I=Ee(e[0].dataType),z=[N("x",e[0].dataType,e[0].dims,w),N("scale",o.dataType,o.dims,w)];i&&z.push(N("bias",i.dataType,i.dims,w)),z.push(j("output",e[0].dataType,l,w)),v&&z.push(j("mean_data_output",1,_)),b&&z.push(j("inv_std_output",1,_));let R=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(R).declareVariables(...z)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ca("f32",w)};
    var mean_square_vector = ${ca("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Pt(I,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${yt("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${yt("mean_square_vector",w)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Pt(I,w,"x[j + offset]")};
      let f32scale = ${Pt(I,w,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${i?`+ ${Pt(I,w,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:l,dataType:e[0].dataType}];return v&&T.push({dims:_,dataType:1}),b&&T.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${r};${a}`,inputDependencies:$},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:k}},Ch=(e,t)=>{Cl(e.inputs),e.compute(El(e.inputs,t,e.outputCount))}}),Il,Eh,Py=L(()=>{oe(),Va(),Ha(),Il=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Eh=e=>{Il(e.inputs);let t=Ut.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Ga(e.inputs,{activation:""},t));else{let s=t[t.length-2],o=O.size(e.inputs[0].dims.slice(0,-2)),i=O.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&s===1&&i===1){let l=e.inputs[0].reshape([1,o,a]),p=e.inputs[1].reshape([1,a,r]),d=[1,o,r],f=[l,p];e.compute(Vr(f,{activation:""},t,d),{inputs:f})}else e.compute(Vr(e.inputs,{activation:""},t))}}}),zl,Al,Ol,Ih,zh,Uy=L(()=>{Y(),oe(),xe(),ue(),zl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,i=e[1];if(!O.areEqual(i.dims,[t.n,s,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(O.size(l)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let p=e[3].dims,d=t.bits>4?t.n*s:t.n*Math.floor((s+1)/2);if(O.size(p)!==d)throw new Error("zeroPoints input size error.")}},Al=(e,t)=>{let r=e[0].dims,a=r.length,s=r[a-2],o=t.k,i=t.n,l=r.slice(0,a-2),p=O.size(l),d=e[1].dims[2]/4,f=e[0].dataType,g=ve(t.k),y=ve(d),_=ve(i),w=l.concat([s,i]),$=s>1&&i/_%2===0?2:1,S=O.size(w)/_/$,v=64,b=[],k=[p,s,o/g],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,d/y),b.push(...Z(k)),b.push(...Z(T)),b.push(...Z(e[2].dims)),e.length===4&&b.push(...Z(O.convertShape(e[3].dims)));let E=[p,s,i/_];b.push(...Z(E));let I=z=>{let R=k.length,P=N("a",e[0].dataType,R,g),V=N("b",12,T.length,y),J=N("scales",e[2].dataType,e[2].dims.length),ee=[P,V,J],Q=e.length===4?N("zero_points",12,e[3].dims.length):void 0;Q&&ee.push(Q);let te=E.length,le=j("output",e[0].dataType,te,_),G=Ee(e[0].dataType),pe=(()=>{switch(g){case 1:return`array<${G}, 8>`;case 2:return`mat4x2<${G}>`;case 4:return`mat2x4<${G}>`;default:throw new Error(`${g}-component is not supported.`)}})(),ye=()=>{let D=`
          // reuse a data
            var input_offset = ${P.indicesToOffset(`${P.type.indices}(batch, row, word_offset)`)};
            var a_data: ${pe};
            for (var j: u32 = 0; j < ${8/g}; j++) {
              a_data[j] = ${P.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let q=0;q<_*$;q++)D+=`
            b_value = ${y===1?`b${q}_data`:`b${q}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${pe}(${Array.from({length:4},(re,_e)=>`${G}(b_value_lower[${_e}]), ${G}(b_value_upper[${_e}])`).join(", ")});
            b_dequantized_values = ${g===1?`${pe}(${Array.from({length:8},(re,_e)=>`(b_quantized_values[${_e}] - ${Q?`zero_point${q}`:"zero_point"}) * scale${q}`).join(", ")});`:`(b_quantized_values - ${pe}(${Array(8).fill(`${Q?`zero_point${q}`:"zero_point"}`).join(",")})) * scale${q};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(q/_)}]${_>1?`[${q%_}]`:""} += ${Array.from({length:8/g},(re,_e)=>`${g===1?`a_data[${_e}] * b_dequantized_values[${_e}]`:`dot(a_data[${_e}], b_dequantized_values[${_e}])`}`).join(" + ")};
          `;return D},F=()=>{let D=`
            var col_index = col * ${_};
            ${Q?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            `;for(let q=0;q<_*$;q++)D+=`
            let scale${q} = ${J.getByOffset("col_index * nBlocksPerCol + block")};
            ${Q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${G}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return D},ce=()=>{let D=`col_index = col * ${_};`;for(let q=0;q<_*$;q++)D+=`
            let b${q}_data = ${V.getByIndices(`${V.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${pe};
            var b_dequantized_values: ${pe};`,D};return`
        var<workgroup> workgroup_shared: array<${le.type.value}, ${$*v}>;
        ${z.declareVariables(...ee,le)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${le.offsetToIndices(`(global_idx / ${v}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/g};
            ${F()}
            for (var word: u32 = 0; word < ${d}; word += ${y}) {
              ${ce()}
              for (var i: u32 = 0; i < ${y}; i++) {
                ${ye()}
                word_offset += ${8/g};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${le.type.value} = ${le.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${le.setByIndices(`${le.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${g};${y};${_};${$};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:f}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:I}},Ol=(e,t)=>{let r=e[0].dims,a=r.length,s=r[a-2],o=t.k,i=t.n,l=r.slice(0,a-2),p=O.size(l),d=e[1].dims[2]/4,f=e[0].dataType,g=ve(t.k),y=ve(d),_=l.concat([s,i]),w=128,$=i%8===0?8:i%4===0?4:1,S=w/$,v=S*y*8,b=v/g,k=v/t.blockSize,T=O.size(_)/$,E=[],I=[p,s,o/g],z=O.convertShape(e[1].dims).slice();z.splice(-1,1,d/y),E.push(...Z(I)),E.push(...Z(z)),E.push(...Z(e[2].dims)),e.length===4&&E.push(...Z(O.convertShape(e[3].dims)));let R=[p,s,i];E.push(...Z(R));let P=V=>{let J=I.length,ee=N("a",e[0].dataType,J,g),Q=N("b",12,z.length,y),te=N("scales",e[2].dataType,e[2].dims.length),le=[ee,Q,te],G=e.length===4?N("zero_points",12,e[3].dims.length):void 0;G&&le.push(G);let pe=R.length,ye=j("output",e[0].dataType,pe),F=Ee(e[0].dataType),ce=()=>{switch(g){case 1:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${g}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${ye.type.value}, ${S}>, ${$}>;
        ${V.declareVariables(...le,ye)}
        ${V.mainStart([S,$,1])}
          let output_indices = ${ye.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ee.getByIndices(`${ee.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ee.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${G?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${F}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            let scale = ${te.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Q.getByIndices(`${Q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/g};
            for (var i: u32 = 0; i < ${y}; i++) {
              ${ce()}
              let b_value = ${y===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${F}>(${Array.from({length:4},(D,q)=>`${F}(b_value_lower[${q}]), ${F}(b_value_upper[${q}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${F}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(D,q)=>`${`dot(a_data${q}, b_dequantized_values[${q}])`}`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${ye.type.value} = ${ye.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ye.setByIndices(`${ye.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${g};${y};${S};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:T},programUniforms:E}),getShaderSource:P}},Ih=(e,t)=>{zl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Ol(e.inputs,t)):e.compute(Al(e.inputs,t))},zh=e=>ge(e)}),Bl,Rl,Nl,Dl,Ml,Pl,Ul,Wl,Ah,Wy=L(()=>{Y(),oe(),ue(),Bl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Rl=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
            k = i32(${e.indicesGet("indices",s)}) - ${K("uniforms.pads",s,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${K("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${K("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Nl=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${K("uniforms.pads",s,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${K("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${K("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${K("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Dl=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${K("uniforms.pads",s,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${K("uniforms.x_shape",s,t)})) {
                  k = i32(${K("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${K("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Ml=(e,t,r)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${K("uniforms.pads",s,r)};
                if (k < 0)  {
                  k += i32(${K("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${K("uniforms.x_shape",s,t)})) {
                  k -= i32(${K("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${K("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Pl=(e,t,r)=>{switch(r.mode){case 0:return Rl(e,t,r.pads.length);case 1:return Nl(e,t,r.pads.length);case 2:return Dl(e,t,r.pads.length);case 3:return Ml(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Ul=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,s=O.size(r),o=[{type:12,data:s},{type:6,data:t.pads}],i=e.length>=3&&e[2].data;t.mode===0&&o.push({type:i?e[2].dataType:1,data:t.value}),o.push(...Z(e[0].dims,r));let l=["rank"],p=d=>{let f=j("output",e[0].dataType,r.length),g=N("x",e[0].dataType,a.length),y=g.type.value,_=Pl(f,a.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:i?y:"f32"}),`
            ${d.registerUniforms(w).declareVariables(g,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${y}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${i}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:o}),getShaderSource:p}},Wl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,o=new Int32Array(2*s).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let p=0;p<l.length;p++)o[Number(l[p])]=Number(r[p]),o[Number(l[p])+s]=Number(r[p+l.length])}else r.forEach((l,p)=>o[Number(p)]=Number(l));let i=[];return o.forEach(l=>i.push(l)),{mode:t.mode,value:a,pads:i}}else return t},Ah=(e,t)=>{Bl(e.inputs);let r=Wl(e.inputs,t);e.compute(Ul(e.inputs,r),{inputs:[0]})}}),Jt,Hi,Fi,ji,Ki,ql,Ll,Zi,Qi,Oh,Bh,Xi,Rh,Nh,Yi,Dh,Mh,Ph,Uh,qy=L(()=>{Xe(),Y(),oe(),ue(),Jt=e=>{if(be.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Hi=(e,t,r)=>{let a=t.format==="NHWC",s=e.dims.slice();a&&s.splice(1,0,s.pop());let o=Object.hasOwnProperty.call(t,"dilations"),i=t.kernelShape.slice(),l=t.strides.slice(),p=o?t.dilations.slice():[],d=t.pads.slice();Lr.adjustPoolAttributes(r,s,i,l,p,d);let f=Lr.computePoolOutputShape(r,s,l,p,i,d,t.autoPad),g=Object.assign({},t);o?Object.assign(g,{kernelShape:i,strides:l,pads:d,dilations:p,cacheKey:t.cacheKey}):Object.assign(g,{kernelShape:i,strides:l,pads:d,cacheKey:t.cacheKey});let y=f.slice();return y.push(y.splice(1,1)[0]),[g,a?y:f]},Fi=(e,t)=>{let r=t.format==="NHWC",a=O.size(e),s=O.size(t.kernelShape),o=[{type:12,data:a},{type:12,data:s}],i=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],p=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],g=!!(d+f);o.push({type:12,data:l},{type:12,data:p},{type:12,data:d},{type:12,data:f}),i.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let y=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];y=!!($+S),o.push({type:12,data:_},{type:12,data:w},{type:12,data:$},{type:12,data:S}),i.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,i,!0,g,y]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=O.computeStrides(t.kernelShape);o.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),i.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let p=t.pads.reduce((d,f)=>d+f);return[o,i,!!p,!1,!1]}},ji=(e,t,r,a,s,o,i,l,p,d,f,g)=>{let y=s.format==="NHWC",_=t.type.value,w=j("output",t.type.tensor,a);if(s.kernelShape.length<=2){let $="",S="",v="",b=r-(y?2:1);if(f?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`,s.kernelShape.length===2){let k=r-(y?3:2);g?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(p).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${S}
              ${$}
              ${v}
              ${i}

              output[global_idx] = value;
            }`}else{if(y)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=s.kernelShape.length,S=s.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${o}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${o}
            `,`
            ${e.registerUniforms(p).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${K("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${K("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${K("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${K("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${i}

              output[global_idx] = value;
            }`}},Ki=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,ql=e=>`${Ki(e)};${e.countIncludePad}`,Ll=e=>`${Ki(e)};${e.storageOrder};${e.dilations}`,Zi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Qi=(e,t,r,a)=>{let[s,o]=Hi(t,a,r),i=N("x",t.dataType,t.dims.length),l=i.type.value,p="value += x_val;",d="";s.countIncludePad?d+=`value /= ${l}(uniforms.kernelSize);`:d+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[f,g,y,_,w]=Fi(o,s);f.push(...Z(t.dims,o));let $=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${y};${_};${w}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(o)/64)},programUniforms:f}),getShaderSource:S=>ji(S,i,t.dims.length,o.length,s,p,d,0,g,y,_,w)}},Oh=e=>{let t=e.count_include_pad!==0,r=Zi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:ql(a)}},Bh=(e,t)=>{Jt(e.inputs),e.compute(Qi("AveragePool",e.inputs[0],!1,t))},Xi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Rh=e=>{let t=e.format;return{format:t,...Xi,cacheKey:t}},Nh=(e,t)=>{Jt(e.inputs),e.compute(Qi("GlobalAveragePool",e.inputs[0],!0,t))},Yi=(e,t,r,a)=>{let[s,o]=Hi(t,a,r),i=`
      value = max(x_val, value);
    `,l="",p=N("x",t.dataType,t.dims.length),d=["rank"],[f,g,y,_,w]=Fi(o,s);return f.push(...Z(t.dims,o)),{name:e,shaderCache:{hint:`${a.cacheKey};${y};${_};${w}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(o)/64)},programUniforms:f}),getShaderSource:$=>ji($,p,t.dims.length,o.length,s,i,l,t.dataType===10?-65504:-1e5,g,y,_,w)}},Dh=(e,t)=>{Jt(e.inputs),e.compute(Yi("MaxPool",e.inputs[0],!1,t))},Mh=e=>{let t=e.storage_order,r=e.dilations,a=Zi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:r,...a,cacheKey:""};return{...s,cacheKey:Ll(s)}},Ph=e=>{let t=e.format;return{format:t,...Xi,cacheKey:t}},Uh=(e,t)=>{Jt(e.inputs),e.compute(Yi("GlobalMaxPool",e.inputs[0],!0,t))}}),Gl,Vl,Wh,qh,Ly=L(()=>{Y(),oe(),xe(),ue(),Gl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,o)=>o===t.axis||s===e[0].dims[o]).reduce((s,o)=>s&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Vl=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,s=a===3,o=e[0].dims,i=e[1].dataType,l=O.size(o),p=a===3||a===2,d=p?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,g=e.length>2?e[2]:void 0,y=g?p?[Math.ceil(O.size(g.dims)/4)]:g.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,w=_===!1&&f.length===1,$=ve(l),S=_&&(!p||$===4),v=S?$:1,b=S&&!p?$:1,k=N("input",p?12:a,d.length,b),T=N("scale",i,f.length),E=g?N("zero_point",p?12:a,y.length):void 0,I=j("output",i,o.length,v),z=[k,T];E&&z.push(E);let R=[d,f];g&&R.push(y);let P=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...Z(...R,o)],V=J=>{let ee=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${J.registerUniforms(ee).declareVariables(...z,I)}
      ${J.mainStart()}
          ${J.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${p?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${T.getByOffset("0")}`:w?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?_?p?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:w?p?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:p?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${p?s?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:V,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:P})}},Wh=(e,t)=>{Gl(e.inputs,t),e.compute(Vl(e.inputs,t))},qh=e=>ge({axis:e.axis,blockSize:e.blockSize})}),Hl,Fl,Lh,Gy=L(()=>{Xe(),Y(),ue(),Hl=(e,t,r)=>{let a=e===t,s=e<t&&r<0,o=e>t&&r>0;if(a||s||o)throw new Error("Range these inputs' contents are invalid.")},Fl=(e,t,r,a)=>{let s=Math.abs(Math.ceil((t-e)/r)),o=[s],i=s,l=[{type:12,data:i},{type:a,data:e},{type:a,data:r},...Z(o)],p=d=>{let f=j("output",a,o.length),g=f.type.value,y=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${d.registerUniforms(y).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:p,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:l})}},Lh=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),be.webgpu.validateInputContent&&Hl(t,r,a),e.compute(Fl(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),jl,Kl,Gh,Vh,Vy=L(()=>{Y(),oe(),xe(),ue(),jl=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let s=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${s}bitcast<${a}>(oldValue) + (${r})${o}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${s}max(bitcast<f32>(oldValue), (${r}))${o}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${s}min(bitcast<${a}>(oldValue), (${r}))${o}`;case"mul":return`${s}(bitcast<${a}>(oldValue) * (${r}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Kl=(e,t)=>{let r=e[0].dims,a=e[1].dims,s=r,o=1,i=Math.ceil(O.size(a)/o),l=a[a.length-1],p=O.sizeFromDimension(r,l),d=[{type:12,data:i},{type:12,data:l},{type:12,data:p},...Z(e[1].dims,e[2].dims,s)],f=g=>{let y=N("indices",e[1].dataType,e[1].dims.length),_=N("updates",e[2].dataType,e[2].dims.length,o),w=t.reduction!=="none"&&t.reduction!==""?$p("output",e[0].dataType,s.length):j("output",e[0].dataType,s.length,o);return`
      ${g.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,_,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${O.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${jl(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:f}},Gh=e=>ge({reduction:e.reduction}),Vh=(e,t)=>{e.compute(Kl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Zl,Ql,Xl,Ji,Yl,Jl,ed,td,rd,id,ad,nd,ea,sd,od,ud,ld,dd,Hh,Fh,Hy=L(()=>{Y(),oe(),xe(),ue(),Zl=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ql=(e,t,r)=>{t.every(s=>s>=0&&s<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((s,o)=>a[s]=e[o]),a},Xl=(e,t,r,a,s,o)=>{let[i,l,p]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(i>0&&e.length>i&&e[i].dims.length>0)e[i].getFloat32Array().forEach(f=>o.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(f=>a.push(f)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Zl(a,t),t.axes.length>0&&Ql(a,t.axes,d).forEach((f,g)=>a[g]=f)}if(p>0&&e.length>p&&e[p].dims.length===1&&e[p].dims[0]>0&&(e[p].getBigInt64Array().forEach(f=>s.push(Number(f))),s.length!==0&&s.length!==d&&r>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof s<"u"&&a.length>0&&s.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Ji=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,Yl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ji("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ji("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Jl=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ed=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),s=e.length===0?a:e.slice();return t.length>0?(t.forEach((o,i)=>{a[o]=s[i],a[i+r]=s[t.length+i]}),a):s},td=(e,t,r,a)=>{let s=[];if(r.length>0)if(a.length>0){if(e.forEach(o=>s.push(o)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((o,i)=>s[o]=r[i])}else r.forEach(o=>s.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((o,i)=>Math.round(o*t[i]))}return s},rd=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return r.axes.length>0?(r.axes.forEach(o=>t[o]=a),r.axes.forEach(o=>s[o]=Math.round(e[o]*t[o]))):(t.fill(a,0,t.length),s.forEach((o,i)=>s[i]=Math.round(o*t[i]))),s},id=(e,t,r,a,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${K("uniforms.scales","i",a)};
        var roi_low = ${K("uniforms.roi","i",s)};
        var roi_hi = ${K("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${K("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${K("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,ad=(e,t,r,a,s,o,i)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${K("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${K("uniforms.roi","i",o)};
          var roi_hi = ${K("uniforms.roi",`i + ${r.length}`,o)};
          var input_shape_i = ${K("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${K("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${i} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,nd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${K("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ea=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",sd=(e,t,r,a,s)=>{let[o,i,l,p]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",i,`max(0, min(row, ${r[i]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${ea(e,p,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${i}];
      var col:${d} = originalIndices[${l}];
      ${a?`if (row < 0 || row > (${r[i]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${r[i]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${o}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},od=(e,t,r,a,s,o,i,l,p,d)=>{let f=r.length===2,[g,y]=f?[0,1]:[2,3],_=e.type.value,w=$=>{let S=$===g?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[$]},
        ${a[$]}, ${r[$]}, ${o[$]}, ${o[$]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[$]} - 1))) {
          return ${p};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[$]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${p};`:`${S} = max(0, min(${S}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${S})`)};
          data[i + 1] = ${$===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(g)};
    ${w(y)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${i} * onePlusAbsS - 5 * ${i}) * onePlusAbsS + 8 * ${i}) * onePlusAbsS - 4 * ${i};
    coeffs[1] = ((${i} + 2) * absS - (${i} + 3)) * absS * absS + 1;
    coeffs[2] = ((${i} + 2) * oneMinusAbsS - (${i} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${i} * twoMinusAbsS - 5 * ${i}) * twoMinusAbsS + 8 * ${i}) * twoMinusAbsS - 4 * ${i};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},ud=(e,t,r,a,s)=>{let[o,i,l,p,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",i,`max(0, min(depth, ${r[i]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(width, ${r[p]} - 1))`)};
      ${ea(e,d,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${i}];
      var height:${f} = originalIndices[${l}];
      var width:${f} = originalIndices[${p}];
      ${a?`if (depth < 0 || depth > (${r[i]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[p]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${r[i]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[p]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${o}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},ld=(e,t,r,a,s,o)=>{let i=e.dims,l=ed(o,t.axes,i.length),p=td(i,a,s,t.axes),d=a.slice();a.length===0&&(d=i.map((b,k)=>b===0?1:p[k]/b),t.keepAspectRatioPolicy!=="stretch"&&(p=rd(i,d,t)));let f=j("output",e.dataType,p.length),g=N("input",e.dataType,i.length),y=O.size(p),_=i.length===p.length&&i.every((b,k)=>b===p[k]),w=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,S=g.type.value,v=b=>`
      ${_?"":`
      ${Yl(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${nd(g,i)};
              ${Jl(t.nearestMode,r,S)};
              ${ad(g,f,i,p,d.length,l.length,w)};
              `;case"linear":return`
              ${id(f,i,p,d.length,l.length)};
              ${(()=>{if(i.length===2||i.length===4)return`${sd(g,f,i,w,$)}`;if(i.length===3||i.length===5)return`${ud(g,f,i,w,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(i.length===2||i.length===4)return`${od(g,f,i,p,d,l,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",l.length).declareVariables(g,f)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${i.length===2||i.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${s.length>0?s:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?i.length:i}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:p,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},{type:1,data:d},{type:1,data:l},...Z(i,p)]})}},dd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Hh=(e,t)=>{let r=[],a=[],s=[],o=dd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Xl(e.inputs,t,o,r,a,s),e.compute(ld(e.inputs[0],t,o,r,a,s),{inputs:[0]})},Fh=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,s=e.cubicCoeffA,o=e.excludeOutside!==0,i=e.extrapolationValue,l=e.keepAspectRatioPolicy,p=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ge({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:s,excludeOutside:o,extrapolationValue:i,keepAspectRatioPolicy:l,mode:p,nearestMode:d})}}),pd,cd,jh,Fy=L(()=>{Y(),oe(),xe(),ue(),pd=(e,t)=>{let[r,a,s,o]=e,{numHeads:i,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(a.dims,[])&&!O.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!O.areEqual(s.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&i===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let p=r.dims[0],d=r.dims[r.dims.length-2],f=s.dims[0],g=O.sizeFromDimension(r.dims,1)/d,y=l===0?s.dims[1]*2:g/i;if(l>y)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(p!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(y/2!==s.dims[1]&&l/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},cd=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:s,scale:o}=t,i=e[0].dims[0],l=O.sizeFromDimension(e[0].dims,1),p=e[0].dims[e[0].dims.length-2],d=l/p,f=e[2].dims[1],g=s===0?f*2:d/a,y=new Array(i,p,d/g,g-f),_=O.computeStrides(y),w=[{type:1,data:o},{type:12,data:y},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,d,g,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,g,p*g,1]}):[],...Z(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=S=>{let v=N("input",e[0].dataType,e[0].dims.length),b=N("position_ids",e[1].dataType,e[1].dims.length),k=N("cos_cache",e[2].dataType,e[2].dims.length),T=N("sin_cache",e[3].dataType,e[3].dims.length),E=j("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:y.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(v,b,k,T,E)}

        ${S.mainStart(Wt)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",j("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ge({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(y)/Wt)},programUniforms:w})}},jh=(e,t)=>{pd(e.inputs,t),e.compute(cd(e.inputs,t))}}),hd,fd,Kh,jy=L(()=>{Y(),oe(),ue(),hd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let i=e[3];if(i.dims.length!==1)throw new Error("Beta must be 1D");if(i.dims[i.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let i=e[4];if(i.dims.length!==1)throw new Error("Bias must be 1D");if(i.dims[i.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},fd=(e,t,r,a)=>{let s=t.simplified,o=e[0].dims,i=O.size(o),l=o,p=i,d=o.slice(-1)[0],f=a?o.slice(0,-1).concat(1):[],g=!s&&e.length>3,y=e.length>4,_=a&&r>1,w=a&&r>2,$=r>3,S=64,v=ve(d),b=[{type:12,data:p},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],k=E=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[N("x",e[0].dataType,e[0].dims,v),N("skip",e[1].dataType,e[1].dims,v),N("gamma",e[2].dataType,e[2].dims,v)];g&&z.push(N("beta",e[3].dataType,e[3].dims,v)),y&&z.push(N("bias",e[4].dataType,e[4].dims,v)),z.push(j("output",e[0].dataType,l,v)),_&&z.push(j("mean_output",1,f)),w&&z.push(j("inv_std_output",1,f)),$&&z.push(j("input_skip_bias_sum",e[0].dataType,l,v));let R=Ee(e[0].dataType),P=Ee(1,v);return`

      ${E.registerUniforms(I).declareVariables(...z)}
      var<workgroup> sum_shared : array<${P}, ${S}>;
      var<workgroup> sum_squared_shared : array<${P}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${y?"bias[offset1d + i]":R+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Pt(R,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${yt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${yt("square_sum",v)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${R}(mean)`}) *
            ${R}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:l,dataType:e[0].dataType}];return r>1&&T.push({dims:f,dataType:1}),r>2&&T.push({dims:f,dataType:1}),r>3&&T.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${w};${$}`,inputDependencies:e.map((E,I)=>"type")},getShaderSource:k,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(p/d)},programUniforms:b})}},Kh=(e,t)=>{hd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(fd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),md,er,gd,ta,yd,_d,Zh,Qh,Ky=L(()=>{Y(),oe(),xe(),ue(),md=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},er=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},gd=(e,t)=>{if(e.length>1){let r=er(e,1),a=er(e,2),s=er(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),ge({starts:r,ends:a,axes:s})}else return t},ta=(e,t,r,a,s)=>{let o=e;return e<0&&(o+=r[a[t]]),s[t]<0?Math.max(0,Math.min(o,r[a[t]]-1)):Math.max(0,Math.min(o,r[a[t]]))},yd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${K("uniforms.input_shape","i",r.length)};
            let steps_i = ${K("uniforms.steps","i",r.length)};
            let signs_i = ${K("uniforms.signs","i",r.length)};
            let starts_i = ${K("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,_d=(e,t)=>{let r=e[0].dims,a=O.size(r),s=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],o=er(e,4);o.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(s.length).fill(1));let i=t.starts.map((v,b)=>ta(v,b,r,s,o)),l=t.ends.map((v,b)=>ta(v,b,r,s,o));if(s.length!==i.length||s.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==r.length)for(let v=0;v<r.length;++v)s.includes(v)||(i.splice(v,0,0),l.splice(v,0,r[v]),o.splice(v,0,1));let p=o.map(v=>Math.sign(v));o.forEach((v,b,k)=>{if(v<0){let T=(l[b]-i[b])/v,E=i[b],I=E+T*o[b];i[b]=I,l[b]=E,k[b]=-v}});let d=r.slice(0);s.forEach((v,b)=>{d[v]=Math.ceil((l[v]-i[v])/o[v])});let f={dims:d,dataType:e[0].dataType},g=j("output",e[0].dataType,d.length),y=N("input",e[0].dataType,e[0].dims.length),_=O.size(d),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:i.length},{name:"signs",type:"i32",length:p.length},{name:"steps",type:"u32",length:o.length}],$=[{type:12,data:_},{type:12,data:i},{type:6,data:p},{type:12,data:o},...Z(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(w).declareVariables(y,g)}
        ${yd(y,g,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",y.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${p.length}_${i.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:$})}},Zh=(e,t)=>{md(e.inputs,t);let r=gd(e.inputs,t);e.compute(_d(e.inputs,r),{inputs:[0]})},Qh=e=>{let t=e.starts,r=e.ends,a=e.axes;return ge({starts:t,ends:r,axes:a})}}),wd,$d,Xh,Yh,Zy=L(()=>{Y(),oe(),xe(),_t(),ue(),wd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},$d=(e,t)=>{let r=e.inputs[0],a=r.dims,s=O.size(a),o=a.length,i=O.normalizeAxis(t.axis,o),l=i<a.length-1,p,d=[];l?(d=Array.from({length:o},(z,R)=>R),d[i]=o-1,d[o-1]=i,p=e.compute(Ue(r,d),{inputs:[r],outputs:[-1]})[0]):p=r;let f=p.dims,g=f[o-1],y=s/g,_=ve(g),w=g/_,$=64;y===1&&($=256);let S=(z,R)=>R===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:R===2?`max(${z}.x, ${z}.y)`:R===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=N("x",p.dataType,p.dims,_),b=j("result",p.dataType,p.dims,_),k=v.type.value,T=Ee(p.dataType)==="f32"?`var threadMax = ${k}(-3.402823e+38f);`:`var threadMax = ${k}(-65504.0h);`,E=z=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${z.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${yt("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${_};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:p.dataType}],dispatchGroup:{x:y},programUniforms:[{type:6,data:w}]}),getShaderSource:E},{inputs:[p],outputs:[l?-1:0]})[0];l&&e.compute(Ue(I,d),{inputs:[I]})},Xh=(e,t)=>{wd(e.inputs),$d(e,t)},Yh=e=>ge({axis:e.axis})}),ra,bd,vd,xd,Jh,Qy=L(()=>{Y(),oe(),ue(),ra=e=>Array.from(e.getBigInt64Array(),Number),bd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ra(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},vd=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},xd=(e,t)=>{let r=e[0].dims,a=t??ra(e[1]),s=vd(r,a),o=O.size(s),i=e[0].dataType,l=N("input",i,r.length),p=j("output",i,s.length),d=f=>`
      const inputShape = ${l.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(l,p)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${p.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${p.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${p.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...Z(e[0].dims,s)]}),getShaderSource:d}},Jh=e=>{bd(e.inputs),e.compute(xd(e.inputs),{inputs:[0]})}}),Sd,kd,ef,Xy=L(()=>{Y(),oe(),ue(),Sd=(e,t,r,a,s)=>{let o=j("output_data",s,r.length,4),i=N("a_data",t[1].dataType,t[1].dims.length,4),l=N("b_data",t[2].dataType,t[2].dims.length,4),p=N("c_data",t[0].dataType,t[0].dims.length,4),d,f=(g,y,_)=>`select(${y}, ${g}, ${_})`;if(!a)d=o.setByOffset("global_idx",f(i.getByOffset("global_idx"),l.getByOffset("global_idx"),p.getByOffset("global_idx")));else{let g=(y,_,w="")=>{let $=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${o.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${i.broadcastedIndicesToOffset(`output_indices${_}`,o)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,o)};
            let offset_c${_} = ${p.broadcastedIndicesToOffset(`output_indices${_}`,o)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${y}[${_}] = ${w}(${f($,S,v)});
          `};s===9?d=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(p,i,l,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},kd=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,s=e[1].dataType,o=!(O.areEqual(t,r)&&O.areEqual(r,a)),i=t,l=O.size(t);if(o){let d=Ut.calcShape(Ut.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");i=d,l=O.size(i)}let p=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Sd(d,e,i,o,s),getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:p},...Z(a,t,r,i)]})}},ef=e=>{e.compute(kd(e.inputs))}}),tf,Yy=L(()=>{py(),Ua(),cy(),hy(),fy(),my(),gy(),by(),xy(),Sy(),ky(),Ty(),Cy(),Ey(),Iy(),zy(),Ay(),Oy(),By(),Ry(),Ny(),Dy(),My(),Py(),Uy(),bh(),Wy(),qy(),Ly(),Gy(),Vy(),Pa(),Hy(),Fy(),jy(),Ky(),Zy(),Sh(),Qy(),_t(),Wa(),Xy(),tf=new Map([["Abs",[Zp]],["Acos",[Qp]],["Acosh",[Xp]],["Add",[Ac]],["ArgMax",[Hp,fa]],["ArgMin",[Vp,fa]],["Asin",[Yp]],["Asinh",[Jp]],["Atan",[ec]],["Atanh",[tc]],["Attention",[Fp]],["AveragePool",[Bh,Oh]],["BatchNormalization",[jp]],["BiasAdd",[Kp]],["BiasSplitGelu",[zc]],["Cast",[ic,rc]],["Ceil",[nc]],["Clip",[ac]],["Concat",[qc,Lc]],["Conv",[$a,wa]],["ConvTranspose",[Yc,Xc]],["Cos",[sc]],["Cosh",[oc]],["CumSum",[Jc,eh]],["DepthToSpace",[th,rh]],["DequantizeLinear",[Wh,qh]],["Div",[Oc]],["Einsum",[ih,ah]],["Elu",[uc,nr]],["Equal",[Bc]],["Erf",[lc]],["Exp",[dc]],["Expand",[nh]],["FastGelu",[sh]],["Floor",[pc]],["FusedConv",[$a,wa]],["Gather",[uh,oh]],["GatherElements",[fh,hh]],["GatherBlockQuantized",[ph,ch]],["GatherND",[lh,dh]],["Gelu",[cc]],["Gemm",[gh,mh]],["GlobalAveragePool",[Nh,Rh]],["GlobalMaxPool",[Uh,Ph]],["Greater",[Mc]],["GreaterOrEqual",[Uc]],["GridSample",[yh,_h]],["GroupQueryAttention",[kh]],["HardSigmoid",[$c,wc]],["InstanceNormalization",[Th]],["LayerNormalization",[Ch]],["LeakyRelu",[hc,nr]],["Less",[Pc]],["LessOrEqual",[Wc]],["Log",[Ec]],["MatMul",[Eh]],["MatMulNBits",[Ih,zh]],["MaxPool",[Dh,Mh]],["Mul",[Rc]],["MultiHeadAttention",[$h,wh]],["Neg",[mc]],["Not",[fc]],["Pad",[Ah]],["Pow",[Nc]],["QuickGelu",[Ic,nr]],["Range",[Lh]],["Reciprocal",[gc]],["ReduceMin",[Up]],["ReduceMean",[Rp]],["ReduceMax",[Pp]],["ReduceSum",[qp]],["ReduceProd",[Wp]],["ReduceL1",[Np]],["ReduceL2",[Dp]],["ReduceLogSum",[Gp]],["ReduceLogSumExp",[Mp]],["ReduceSumSquare",[Lp]],["Relu",[yc]],["Resize",[Hh,Fh]],["RotaryEmbedding",[jh]],["ScatterND",[Vh,Gh]],["Sigmoid",[_c]],["Sin",[bc]],["Sinh",[vc]],["Slice",[Zh,Qh]],["SkipLayerNormalization",[Kh]],["Split",[vh,xh]],["Sqrt",[xc]],["Softmax",[Xh,Yh]],["Sub",[Dc]],["Tan",[Sc]],["Tanh",[kc]],["ThresholdedRelu",[Cc,nr]],["Tile",[Jh]],["Transpose",[vp,xp]],["Where",[ef]]])}),rf,Jy=L(()=>{Xe(),ut(),ue(),rf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,s){it(e.programInfo.name);let o=this.backend.device,i=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let d of t)l.push({binding:l.length,resource:{buffer:d.buffer}});for(let d of r)l.push({binding:l.length,resource:{buffer:d.buffer}});s&&l.push({binding:l.length,resource:s});let p=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:p,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}i.setPipeline(e.computePipeline),i.setBindGroup(0,p),i.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Qe(e.programInfo.name)}dispose(){}build(e,t){it(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let s=bp(t,this.backend.device.limits),o=e.getShaderSource(s),i=`${a.join(`
`)}
${s.additionalImplementations}
${o}`,l=r.createShaderModule({code:i,label:e.name});he("verbose",()=>`[WebGPU] ${e.name} shader code: ${i}`);let p=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Qe(e.name),{programInfo:e,computePipeline:p,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=s&&r<=s&&a<=s)return[t,r,a];let o=t*r*a,i=Math.ceil(Math.sqrt(o));if(i>s){if(i=Math.ceil(Math.cbrt(o)),i>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[i,i,i]}else return[i,i,1]}}}),Td,Cd,Ed,Id,af,e0=L(()=>{Xe(),Y(),ut(),mp(),ly(),Yy(),Jy(),Td=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let s=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${s}`);break}case"rank":{let o=e[a].dims.length;r.push(`${s};${o}`);break}case"dims":{let o=e[a].dims.join(",");r.push(`${s};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Cd=(e,t,r)=>{var a,s;let o=e.name;return(a=e.shaderCache)!=null&&a.hint&&(o+="["+e.shaderCache.hint+"]"),o+=":"+r+`:${Td(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,o},Ed=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Id=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},af=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},s=o=>t.features.has(o)&&r.push(o)&&!0;s("chromium-experimental-timestamp-query-inside-passes")||s("timestamp-query"),s("shader-f16"),s("subgroups")&&s("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new Id(this.device),this.adapterInfo=new Ed(t.info||await t.requestAdapterInfo()),this.gpuDataManager=gp(this),this.programManager=new rf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ra(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;it(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var t;let r=new BigUint64Array(e.getMappedRange()),a=this.pendingQueries.get(e);for(let s=0;s<r.length/2;s++){let o=a[s],i=o.kernelId,l=this.kernels.get(i),p=l.kernelType,d=l.kernelName,f=o.programName,g=o.inputTensorViews,y=o.outputTensorViews,_=r[s*2],w=r[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let $=Number(_-this.queryTimeBase),S=Number(w-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((t=this.env.webgpu.profiling)!=null&&t.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:g.map(v=>({dims:v.dims,dataType:Tt(v.dataType)})),outputsMetadata:y.map(v=>({dims:v.dims,dataType:Tt(v.dataType)})),kernelId:i,kernelType:p,kernelName:d,programName:f,startTime:$,endTime:S});else{let v="";g.forEach((k,T)=>{v+=`input[${T}]: [${k.dims}] | ${Tt(k.dataType)}, `});let b="";y.forEach((k,T)=>{b+=`output[${T}]: [${k.dims}] | ${Tt(k.dataType)}, `}),console.log(`[profiling] kernel "${i}|${p}|${d}|${f}" ${v}${b}execution time: ${S-$} ns`)}Ur("GPU",`${f}::${_}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),Qe()}run(e,t,r,a,s,o){it(e.name);let i=[];for(let b=0;b<t.length;++b){let k=t[b].data;if(k===0)continue;let T=this.gpuDataManager.get(k);if(!T)throw new Error(`no GPU data for input: ${k}`);i.push(T)}let{outputs:l,dispatchGroup:p,programUniforms:d}=e.getRunData(t),f=r.length===0?l.map((b,k)=>k):r;if(f.length!==l.length)throw new Error(`Output size ${f.length} must be equal to ${l.length}.`);let g=[],y=[];for(let b=0;b<l.length;++b){if(!Number.isInteger(f[b])||f[b]<-3||f[b]>=o)throw new Error(`Invalid output index: ${f[b]}`);if(f[b]===-3)continue;let k=f[b]===-1,T=f[b]===-2,E=k||T?s(l[b].dataType,l[b].dims):a(f[b],l[b].dataType,l[b].dims);if(g.push(E),E.data===0)continue;let I=this.gpuDataManager.get(E.data);if(!I)throw new Error(`no GPU data for output: ${E.data}`);if(k&&this.temporaryData.push(I),T){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(I)}y.push(I)}if(i.length!==t.length||y.length!==g.length){if(y.length===0)return Qe(e.name),g;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let b=0,k=[];d.forEach(z=>{let R=typeof z.data=="number"?[z.data]:z.data;if(R.length===0)return;let P=z.type===10?2:4,V,J;z.type===10?(J=R.length>4?16:R.length>2?8:R.length*P,V=R.length>4?16:P*R.length):(J=R.length<=2?R.length*P:16,V=16),b=Math.ceil(b/J)*J,k.push(b);let ee=z.type===10?8:4;b+=R.length>4?Math.ceil(R.length/ee)*V:R.length*P});let T=16;b=Math.ceil(b/T)*T;let E=new ArrayBuffer(b);d.forEach((z,R)=>{let P=k[R],V=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(E,P,V.length).set(V);else if(z.type===12)new Uint32Array(E,P,V.length).set(V);else if(z.type===10)new Uint16Array(E,P,V.length).set(V);else if(z.type===1)new Float32Array(E,P,V.length).set(V);else throw new Error(`Unsupported uniform type: ${Tt(z.type)}`)});let I=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,E,0,b),this.gpuDataManager.release(I.id),_={offset:0,size:b,buffer:I.buffer}}let w=this.programManager.normalizeDispatchGroupSize(p),$=w[1]===1&&w[2]===1,S=Cd(e,t,$),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,w),this.programManager.setArtifact(S,v),he("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let b=0;b<d.length;b++){let k=d[b],T=k.type,E=typeof k.data=="number"?1:k.data.length,[I,z]=v.uniformVariablesInfo[b];if(T!==I||E!==z)throw new Error(`Uniform variable ${b} mismatch: expect type ${I} with size ${z}, got type ${T} with size ${E} in program "${v.programInfo.name}".`)}}if(he("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:g};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,i,y,w,_),Qe(e.name),g}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let s=tf.get(e);if(!s)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:a,kernelEntry:s[0],attributes:[s[1],r]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let s=a.kernelType,o=a.kernelName,i=a.kernelEntry,l=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),he("info",()=>`[WebGPU] Start to run kernel "[${s}] ${o}"...`);let p=this.env.debug;this.temporaryData=[];try{return p&&this.device.pushErrorScope("validation"),i(t,l[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${o}" failed. ${d}`)),1}finally{p&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${s}] ${o}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let s=this.sessionExternalDataMapping.get(e);s||(s=new Map,this.sessionExternalDataMapping.set(e,s));let o=s.get(t),i=this.gpuDataManager.registerExternalBuffer(r,a,o);return s.set(t,[i,r]),i}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await pa(this,e,t);return Na(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){he("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){he("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){he("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let s=this.getComputePassEncoder(),o=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(o.computePipeline),s.setBindGroup(0,o.bindGroup),s.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),zd,ia,Ad,aa,na,sa,Od,nf,t0=L(()=>{ut(),zd=1,ia=()=>zd++,Ad=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),aa=(e,t)=>{let r=Ad.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,s)=>a*s)*r/8):0},na=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return aa(this.dataType,this.tensorShape)}destroy(){he("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,s)=>a===r[s])}},sa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let s=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(s,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==aa(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else he("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Od=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=ia();return this.tensorTrackersById.set(e,new sa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,s){he("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${s}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,r,a,s)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){he("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let s=this.getMLContext(e),o=ia(),i=new na({sessionId:e,context:s,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(o,new sa(this,i)),this.externalTensors.add(i),o}async getCachedTensor(e,t,r,a,s,o){let i=this.getMLContext(e);for(let[p,d]of this.freeTensors.entries())if(d.canReuseTensor(i,t,r)){he("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let f=this.freeTensors.splice(p,1)[0];return f.sessionId=e,f}he("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await i.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:s,readable:o});return new na({sessionId:e,context:i,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},nf=(...e)=>new Od(...e)}),Or,Bd,sf,r0=L(()=>{Y(),At(),mp(),t0(),ut(),Or=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Bd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((s,o)=>s===a[o]&&e[s]===t[s])},sf=class{constructor(e){this.tensorManager=nf(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Ra(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){he("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){he("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)he("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Bd(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(s=>s.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){he("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,s){let o=Or.get(r);if(!o)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,a,s)}async createTemporaryTensor(e,t,r){he("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Or.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let s=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,s,a,r,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(s):this.temporarySessionTensorIds.set(e,[s]),s}uploadTensor(e,t){if(!Ce().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");he("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Na(r,t)}}registerMLTensor(e,t,r,a){let s=Or.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.registerTensor(e,t,s,a);return he("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${s}, dimensions: ${a}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,r,a,s,o){if(!o)throw new Error("External mounted files are not available.");let i=e;e.startsWith("./")&&(i=e.substring(2));let l=o.get(i);if(!l)throw new Error(`File with name ${i} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let p=l.slice(t,t+r).buffer,d;switch(s.dataType){case"float32":d=new Float32Array(p);break;case"float16":d=new Uint16Array(p);break;case"int32":d=new Int32Array(p);break;case"uint32":d=new Uint32Array(p);break;case"int64":d=new BigInt64Array(p);break;case"uint64":d=new BigUint64Array(p);break;case"int8":d=new Int8Array(p);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(p);break;default:throw new Error(`Unsupported data type: ${s.dataType} in creating WebNN Constant from external data.`)}return he("verbose",()=>`[WebNN] registerMLConstant {dataType: ${s.dataType}, shape: ${s.shape}}}`),a.constant(s,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),of={};lr(of,{init:()=>uf});var Br,Rd,uf,i0=L(()=>{Y(),e0(),ut(),oe(),r0(),Br=class lf{constructor(t,r,a,s){this.module=t,this.dataType=r,this.data=a,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new lf(this.module,this.dataType,this.data,t)}},Rd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,s=r/e.PTR_SIZE,o=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*s++,o));let i=Number(e.getValue(a*s++,o));this.outputCount=Number(e.getValue(a*s++,o)),this.customDataOffset=Number(e.getValue(a*s++,"*")),this.customDataSize=Number(e.getValue(a*s++,o));let l=[];for(let p=0;p<i;p++){let d=Number(e.getValue(a*s++,o)),f=Number(e.getValue(a*s++,"*")),g=Number(e.getValue(a*s++,o)),y=[];for(let _=0;_<g;_++)y.push(Number(e.getValue(a*s++,o)));l.push(new Br(e,d,f,y))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var r;let a=((r=t==null?void 0:t.inputs)==null?void 0:r.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,s=(t==null?void 0:t.outputs)??[],o=(l,p,d)=>new Br(this.module,p,this.output(l,d),d),i=(l,p)=>{let d=Ct(l,p);if(!d)throw new Error(`Unsupported data type: ${l}`);let f=d>0?this.backend.gpuDataManager.create(d).id:0;return new Br(this.module,l,f,p)};return this.backend.run(e,a,s,o,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,s=a===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*a);this.module.setValue(o,t.length,s);for(let i=0;i<t.length;i++)this.module.setValue(o+a*(i+1),t[i],s);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},uf=async(e,t,r,a)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=new af;await o.initialize(r,a),s("webgpu",[o,i=>o.alloc(Number(i)),i=>o.free(i),(i,l,p,d=!1)=>{if(d)he("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(i)}, dst=${Number(l)}, size=${Number(p)}`),o.memcpy(Number(i),Number(l));else{he("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(i)}, gpuDataId=${Number(l)}, size=${Number(p)}`);let f=t.HEAPU8.subarray(Number(i>>>0),Number(i>>>0)+Number(p));o.upload(Number(l),f)}},async(i,l,p)=>{he("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${i}, dataOffset=${l}, size=${p}`),await o.download(Number(i),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+p)>>>0))},(i,l,p)=>o.createKernel(i,Number(l),p,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),i=>o.releaseKernel(i),(i,l,p,d)=>{he("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${i}, contextDataOffset=${l}`);let f=new Rd(t,o,Number(l));return o.computeKernel(Number(i),f,d)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let o=new sf(r);s("webnn",[o,()=>o.reserveTensorId(),i=>o.releaseTensorId(i),async(i,l,p,d,f)=>o.ensureTensor(i,l,p,d,f),(i,l)=>{o.uploadTensor(i,l)},async(i,l)=>o.downloadTensor(i,l)])}}}),Nd,Fa,ja,mt,Dd,Hr,Ka,Za,oa,Qa,Xa,Ya,df=L(()=>{oy(),uy(),Y(),At(),Ia(),fp(),Nd=(e,t)=>{Ce()._OrtInit(e,t)!==0&&me("Can't initialize onnxruntime.")},Fa=async e=>{Nd(e.wasm.numThreads,qr(e.logLevel))},ja=async(e,t)=>{{let r=(i0(),Pr(of)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:o}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Ce(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Ce(),e)}}},mt=new Map,Dd=e=>{let t=Ce(),r=t.stackSave();try{let a=t.PTR_SIZE,s=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,s,s+a)!==0&&me("Can't get session input/output count.");let o=a===4?"i32":"i64";return[Number(t.getValue(s,o)),Number(t.getValue(s+a,o))]}finally{t.stackRestore(r)}},Hr=e=>{let t=Ce(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ka=async(e,t)=>{var r,a,s;let o,i,l=Ce();Array.isArray(e)?[o,i]=e:e.buffer===l.HEAPU8.buffer?[o,i]=[e.byteOffset,e.byteLength]:[o,i]=Hr(e);let p=0,d=0,f=0,g=[],y=[],_=[];try{if([d,g]=hp(t),(t==null?void 0:t.externalData)&&l.mountExternalData){let E=[];for(let I of t.externalData){let z=typeof I=="string"?I:I.path;E.push(Ba(typeof I=="string"?I:I.data).then(R=>{l.mountExternalData(z,R)}))}await Promise.all(E)}for(let E of(t==null?void 0:t.executionProviders)??[])if((typeof E=="string"?E:E.name)==="webnn"){if(l.shouldTransferToMLTensor=!1,typeof E!="string"){let I=E,z=I==null?void 0:I.context,R=I==null?void 0:I.gpuDevice,P=I==null?void 0:I.deviceType,V=I==null?void 0:I.powerPreference;z?l.currentContext=z:R?l.currentContext=await l.jsepCreateMLContext(R):l.currentContext=await l.jsepCreateMLContext({deviceType:P,powerPreference:V})}else l.currentContext=await l.jsepCreateMLContext();break}p=await l._OrtCreateSession(o,i,d),p===0&&me("Can't create a session."),(r=l.jsepOnCreateSession)==null||r.call(l),l.currentContext&&(l.jsepRegisterMLContext(p,l.currentContext),l.currentContext=void 0,l.shouldTransferToMLTensor=!0);let[w,$]=Dd(p),S=!!(t!=null&&t.enableGraphCapture),v=[],b=[],k=[];for(let E=0;E<w;E++){let I=l._OrtGetInputName(p,E);I===0&&me("Can't get an input name."),y.push(I),v.push(l.UTF8ToString(I))}for(let E=0;E<$;E++){let I=l._OrtGetOutputName(p,E);I===0&&me("Can't get an output name."),_.push(I);let z=l.UTF8ToString(I);b.push(z);{if(S&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let R=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((a=t==null?void 0:t.preferredOutputLocation)==null?void 0:a[z])??"cpu";if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(S&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(R)}}let T=null;return k.some(E=>E==="gpu-buffer"||E==="ml-tensor")&&(f=l._OrtCreateBinding(p),f===0&&me("Can't create IO binding."),T={handle:f,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(E=>da(E))}),mt.set(p,[p,y,_,T,S,!1]),[p,v,b]}catch(w){throw y.forEach($=>l._OrtFree($)),_.forEach($=>l._OrtFree($)),f!==0&&l._OrtReleaseBinding(f)!==0&&me("Can't release IO binding."),p!==0&&l._OrtReleaseSession(p)!==0&&me("Can't release session."),w}finally{l._free(o),d!==0&&l._OrtReleaseSessionOptions(d)!==0&&me("Can't release session options."),g.forEach(w=>l._free(w)),(s=l.unmountExternalData)==null||s.call(l)}},Za=e=>{var t;let r=Ce(),a=mt.get(e);if(!a)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,o,i,l,p]=a;l&&(p&&r._OrtClearBoundOutputs(l.handle)!==0&&me("Can't clear bound outputs."),r._OrtReleaseBinding(l.handle)!==0&&me("Can't release IO binding.")),(t=r.jsepOnReleaseSession)==null||t.call(r,e),o.forEach(d=>r._OrtFree(d)),i.forEach(d=>r._OrtFree(d)),r._OrtReleaseSession(s)!==0&&me("Can't release session."),mt.delete(e)},oa=async(e,t,r,a,s,o=!1)=>{if(!e){t.push(0);return}let i=Ce(),l=i.PTR_SIZE,p=e[0],d=e[1],f=e[3],g=f,y,_;if(p==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let S=e[2].gpuBuffer;_=Ct(Dt(p),d);let v=i.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=v(a,s,S,_)}else if(f==="ml-tensor"){let S=e[2].mlTensor;_=Ct(Dt(p),d);let v=i.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=v(a,S,Dt(p),d)}else{let S=e[2];if(Array.isArray(S)){_=l*S.length,y=i._malloc(_),r.push(y);for(let v=0;v<S.length;v++){if(typeof S[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);i.setValue(y+v*l,ze(S[v],r),"*")}}else{let v=i.jsepIsGraphInput;if(p!=="string"&&v){let b=i._OrtGetInputName(a,s),k=i.UTF8ToString(b);if(v(a,k)){let T=Dt(p);_=Ct(T,d),g="ml-tensor";let E=i.jsepCreateTemporaryTensor,I=i.jsepUploadTensor;if(!E||!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await E(a,T,d);I(z,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),y=z}else _=S.byteLength,y=i._malloc(_),r.push(y),i.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),y)}else _=S.byteLength,y=i._malloc(_),r.push(y),i.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),y)}}let w=i.stackSave(),$=i.stackAlloc(4*d.length);try{d.forEach((v,b)=>i.setValue($+b*l,v,l===4?"i32":"i64"));let S=i._OrtCreateTensor(Dt(p),y,_,$,d.length,da(g));S===0&&me(`Can't create tensor for input/output. session=${a}, index=${s}.`),t.push(S)}finally{i.stackRestore(w)}},Qa=async(e,t,r,a,s,o)=>{var i,l,p;let d=Ce(),f=d.PTR_SIZE,g=mt.get(e);if(!g)throw new Error(`cannot run inference. invalid session id: ${e}`);let y=g[0],_=g[1],w=g[2],$=g[3],S=g[4],v=g[5],b=t.length,k=a.length,T=0,E=[],I=[],z=[],R=[],P=d.stackSave(),V=d.stackAlloc(b*f),J=d.stackAlloc(b*f),ee=d.stackAlloc(k*f),Q=d.stackAlloc(k*f);try{[T,E]=cp(o);for(let G=0;G<b;G++)await oa(r[G],I,R,e,t[G],S);for(let G=0;G<k;G++)await oa(s[G],z,R,e,b+a[G],S);for(let G=0;G<b;G++)d.setValue(V+G*f,I[G],"*"),d.setValue(J+G*f,_[t[G]],"*");for(let G=0;G<k;G++)d.setValue(ee+G*f,z[G],"*"),d.setValue(Q+G*f,w[a[G]],"*");if($&&!v){let{handle:G,outputPreferredLocations:pe,outputPreferredLocationsEncoded:ye}=$;if(_.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${_.length}).`);for(let F=0;F<b;F++){let ce=t[F];await d._OrtBindInput(G,_[ce],I[F])!==0&&me(`Can't bind input[${F}] for session=${e}.`)}for(let F=0;F<k;F++){let ce=a[F];(i=s[F])!=null&&i[3]?d._OrtBindOutput(G,w[ce],z[F],0)!==0&&me(`Can't bind pre-allocated output[${F}] for session=${e}.`):d._OrtBindOutput(G,w[ce],0,ye[ce])!==0&&me(`Can't bind output[${F}] to ${pe[F]} for session=${e}.`)}mt.set(e,[y,_,w,$,S,!0])}(l=d.jsepOnRunStart)==null||l.call(d,y);let te;$?te=await d._OrtRunWithBinding(y,$.handle,k,ee,T):te=await d._OrtRun(y,J,V,b,Q,k,ee,T),te!==0&&me("failed to call OrtRun().");let le=[];for(let G=0;G<k;G++){let pe=Number(d.getValue(ee+G*f,"*"));if(pe===z[G]){le.push(s[G]);continue}let ye=d.stackSave(),F=d.stackAlloc(4*f),ce=!1,D,q=0;try{d._OrtGetTensorData(pe,F,F+f,F+2*f,F+3*f)!==0&&me(`Can't access output tensor data on index ${G}.`);let re=f===4?"i32":"i64",_e=Number(d.getValue(F,re));q=d.getValue(F+f,"*");let Ae=d.getValue(F+f*2,"*"),U=Number(d.getValue(F+f*3,re)),de=[];for(let Te=0;Te<U;Te++)de.push(Number(d.getValue(Ae+Te*f,re)));d._OrtFree(Ae)!==0&&me("Can't free memory for tensor dims.");let We=de.reduce((Te,Se)=>Te*Se,1);D=Tt(_e);let Ve=$==null?void 0:$.outputPreferredLocations[a[G]];if(D==="string"){if(Ve==="gpu-buffer"||Ve==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Te=[];for(let Se=0;Se<We;Se++){let Ie=d.getValue(q+Se*f,"*"),dr=d.getValue(q+(Se+1)*f,"*"),Bt=Se===We-1?void 0:dr-Ie;Te.push(d.UTF8ToString(Ie,Bt))}le.push([D,de,Te,"cpu"])}else if(Ve==="gpu-buffer"&&We>0){let Te=d.jsepGetBuffer;if(!Te)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Se=Te(q),Ie=Ct(_e,We);if(Ie===void 0||!Aa(D))throw new Error(`Unsupported data type: ${D}`);ce=!0,le.push([D,de,{gpuBuffer:Se,download:d.jsepCreateDownloader(Se,Ie,D),dispose:()=>{d._OrtReleaseTensor(pe)!==0&&me("Can't release tensor.")}},"gpu-buffer"])}else if(Ve==="ml-tensor"&&We>0){let Te=d.jsepEnsureTensor;if(!Te)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ct(_e,We)===void 0||!Oa(D))throw new Error(`Unsupported data type: ${D}`);let Se=await Te(e,q,_e,de,!1);ce=!0,le.push([D,de,{mlTensor:Se,download:d.jsepCreateMLTensorDownloader(q,D),dispose:()=>{d.jsepReleaseTensorId(q),d._OrtReleaseTensor(pe)}},"ml-tensor"])}else{let Te=za(D),Se=new Te(We);new Uint8Array(Se.buffer,Se.byteOffset,Se.byteLength).set(d.HEAPU8.subarray(q,q+Se.byteLength)),le.push([D,de,Se,"cpu"])}}finally{d.stackRestore(ye),D==="string"&&q&&d._free(q),ce||d._OrtReleaseTensor(pe),(p=d.jsepOnRunEnd)==null||p.call(d,y)}}return $&&!S&&(d._OrtClearBoundOutputs($.handle)!==0&&me("Can't clear bound outputs."),mt.set(e,[y,_,w,$,S,!1])),le}finally{d.stackRestore(P),I.forEach(te=>d._OrtReleaseTensor(te)),z.forEach(te=>d._OrtReleaseTensor(te)),R.forEach(te=>d._free(te)),T!==0&&d._OrtReleaseRunOptions(T),E.forEach(te=>d._free(te))}},Xa=e=>{let t=Ce(),r=mt.get(e);if(!r)throw new Error("invalid session id");let a=r[0],s=t._OrtEndProfiling(a);s===0&&me("Can't get an profile file name."),t._OrtFree(s)},Ya=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),gt,De,Nt,tr,rr,Rr,ua,Nr,xt,St,Md,pf,cf,hf,ff,mf,gf,yf,_f=L(()=>{Xe(),df(),At(),Ca(),gt=()=>!!be.wasm.proxy&&typeof document<"u",Nt=!1,tr=!1,rr=!1,Nr=new Map,xt=(e,t)=>{let r=Nr.get(e);r?r.push(t):Nr.set(e,[t])},St=()=>{if(Nt||!tr||rr||!De)throw new Error("worker not ready")},Md=e=>{switch(e.data.type){case"init-wasm":Nt=!1,e.data.err?(rr=!0,ua[1](e.data.err)):(tr=!0,ua[0]()),Rr&&(URL.revokeObjectURL(Rr),Rr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Nr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},pf=async()=>{if(!tr){if(Nt)throw new Error("multiple calls to 'initWasm()' detected.");if(rr)throw new Error("previous call to 'initWasm()' failed.");if(Nt=!0,gt())return new Promise((e,t)=>{De==null||De.terminate(),dp().then(([r,a])=>{var s;try{De=a,De.onerror=i=>t(i),De.onmessage=Md,ua=[e,t];let o={type:"init-wasm",in:be};!o.in.wasm.wasmPaths&&(r||(s=import.meta.url)!=null&&s.startsWith("file:"))&&(o.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t-D5Jk56-t.wasm",import.meta.url).href}),De.postMessage(o),Rr=r}catch(o){t(o)}},t)});try{await Ea(be.wasm),await Fa(be),tr=!0}catch(e){throw rr=!0,e}finally{Nt=!1}}},cf=async e=>{if(gt())return St(),new Promise((t,r)=>{xt("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:be}};De.postMessage(a)});await ja(be,e)},hf=async e=>gt()?(St(),new Promise((t,r)=>{xt("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};De.postMessage(a,[e.buffer])})):Hr(e),ff=async(e,t)=>{if(gt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return St(),new Promise((r,a)=>{xt("create",[r,a]);let s={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),De.postMessage(s,o)})}else return Ka(e,t)},mf=async e=>{if(gt())return St(),new Promise((t,r)=>{xt("release",[t,r]);let a={type:"release",in:e};De.postMessage(a)});Za(e)},gf=async(e,t,r,a,s,o)=>{if(gt()){if(r.some(i=>i[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(i=>i))throw new Error("pre-allocated output tensor is not supported for proxy.");return St(),new Promise((i,l)=>{xt("run",[i,l]);let p=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:a,options:o}};De.postMessage(d,Ya(p))})}else return Qa(e,t,r,a,s,o)},yf=async e=>{if(gt())return St(),new Promise((t,r)=>{xt("end-profiling",[t,r]);let a={type:"end-profiling",in:e};De.postMessage(a)});Xa(e)}}),la,Pd,wf,a0=L(()=>{Xe(),_f(),Y(),Ta(),fp(),la=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Pd=e=>{switch(e[3]){case"cpu":return new rt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Aa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:s}=e[2];return rt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:s})}case"ml-tensor":{let t=e[0];if(!Oa(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:s}=e[2];return rt.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},wf=class{async fetchModelAndCopyToWasmMemory(e){return hf(await Ba(e))}async loadModel(e,t){it();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await ff(r,t),Qe()}async dispose(){return mf(this.sessionId)}async run(e,t,r){it();let a=[],s=[];Object.entries(e).forEach(g=>{let y=g[0],_=g[1],w=this.inputNames.indexOf(y);if(w===-1)throw new Error(`invalid input '${y}'`);a.push(_),s.push(w)});let o=[],i=[];Object.entries(t).forEach(g=>{let y=g[0],_=g[1],w=this.outputNames.indexOf(y);if(w===-1)throw new Error(`invalid output '${y}'`);o.push(_),i.push(w)});let l=a.map((g,y)=>la(g,()=>`input "${this.inputNames[s[y]]}"`)),p=o.map((g,y)=>g?la(g,()=>`output "${this.outputNames[i[y]]}"`):null),d=await gf(this.sessionId,s,l,i,p,r),f={};for(let g=0;g<d.length;g++)f[this.outputNames[i[g]]]=o[g]??Pd(d[g]);return Qe(),f}startProfiling(){}endProfiling(){yf(this.sessionId)}}}),$f={};lr($f,{OnnxruntimeWebAssemblyBackend:()=>xa,initializeFlags:()=>va,wasmBackend:()=>bf});var va,xa,bf,n0=L(()=>{Xe(),_f(),a0(),va=()=>{if((typeof be.wasm.initTimeout!="number"||be.wasm.initTimeout<0)&&(be.wasm.initTimeout=0),be.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof be.wasm.proxy!="boolean"&&(be.wasm.proxy=!1),typeof be.wasm.trace!="boolean"&&(be.wasm.trace=!1),typeof be.wasm.numThreads!="number"||!Number.isInteger(be.wasm.numThreads)||be.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)be.wasm.numThreads=1;else{let e=typeof navigator>"u"?Vg("node:os").cpus().length:navigator.hardwareConcurrency;be.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},xa=class{async init(e){va(),await pf(),await cf(e)}async createInferenceSessionHandler(e,t){let r=new wf;return await r.loadModel(e,t),Promise.resolve(r)}},bf=new xa});Xe();Xe();Xe();var s0="1.21.0",o0=ap;{let e=(n0(),Pr($f)).wasmBackend;Mt("webgpu",e,5),Mt("webnn",e,5),Mt("cpu",e,10),Mt("wasm",e,10)}Object.defineProperty(be.versions,"web",{value:s0,enumerable:!0});export{ip as InferenceSession,Ur as TRACE,it as TRACE_FUNC_BEGIN,Qe as TRACE_FUNC_END,rt as Tensor,o0 as default,be as env,Mt as registerBackend};
