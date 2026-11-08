import{n as m,r as n,t as l}from"./chunk-Da4-SChG.js";function D(){let a=new Float32Array(16);return a[0]=1,a[5]=1,a[10]=1,a[15]=1,a}function ie(a,e,t,r,s){let n=1/Math.tan(e/2);return a.fill(0),a[0]=n/t,a[5]=n,a[10]=(s+r)/(r-s),a[11]=-1,a[14]=2*s*r/(r-s),a}function le(a,e,t,r){let s=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2],i=Math.hypot(s,n,o)||1;s/=i,n/=i,o/=i;let l=r[1]*o-r[2]*n,c=r[2]*s-r[0]*o,u=r[0]*n-r[1]*s,p=Math.hypot(l,c,u)||1;l/=p,c/=p,u/=p;let m=n*u-o*c,h=o*l-s*u,x=s*c-n*l;return a[0]=l,a[1]=m,a[2]=s,a[3]=0,a[4]=c,a[5]=h,a[6]=n,a[7]=0,a[8]=u,a[9]=x,a[10]=o,a[11]=0,a[12]=-(l*e[0]+c*e[1]+u*e[2]),a[13]=-(m*e[0]+h*e[1]+x*e[2]),a[14]=-(s*e[0]+n*e[1]+o*e[2]),a[15]=1,a}function ce(a,e,t){for(let r=0;r<4;r+=1){let s=r*4,n=t[s],o=t[s+1],i=t[s+2],l=t[s+3];a[s]=e[0]*n+e[4]*o+e[8]*i+e[12]*l,a[s+1]=e[1]*n+e[5]*o+e[9]*i+e[13]*l,a[s+2]=e[2]*n+e[6]*o+e[10]*i+e[14]*l,a[s+3]=e[3]*n+e[7]*o+e[11]*i+e[15]*l}return a}var V=class a{a;b;c;d;speed;spread;alongScale;constructor(e={}){this.a=X(e.a??[.5,.5,.5]),this.b=X(e.b??[.5,.5,.5]),this.c=X(e.c??[1,1,1]),this.d=X(e.d??[0,.33,.67]),this.speed=e.speed??.18,this.spread=e.spread??0,this.alongScale=e.alongScale??1}colorAt(e){let t=Math.PI*2;return[this.a[0]+this.b[0]*Math.cos(t*(this.c[0]*e+this.d[0])),this.a[1]+this.b[1]*Math.cos(t*(this.c[1]*e+this.d[1])),this.a[2]+this.b[2]*Math.cos(t*(this.c[2]*e+this.d[2]))]}clone(){return new a({a:this.a,b:this.b,c:this.c,d:this.d,speed:this.speed,spread:this.spread,alongScale:this.alongScale})}};function X(a){return[a[0],a[1],a[2]]}var G=class a{position;spread;radius;thickness;speed;lack;tint;color;constructor(e,t={}){this.position=[e[0],e[1],e[2]],this.spread=t.spread??1,this.radius=t.radius??1,this.thickness=t.thickness??1,this.speed=Math.max(0,t.speed??1),this.lack=Math.max(0,t.lack??0);let r=t.tint??[1,1,1];this.tint=[r[0],r[1],r[2]],this.color=t.color?[t.color[0],t.color[1],t.color[2]]:null}setPosition(e){return this.position[0]=e[0],this.position[1]=e[1],this.position[2]=e[2],this}setSpread(e){return this.spread=Math.max(0,e),this}setRadius(e){return this.radius=Math.max(0,e),this}setThickness(e){return this.thickness=Math.max(0,e),this}setSpeed(e){return this.speed=Math.max(0,e),this}setLack(e){return this.lack=Math.max(0,e),this}setTint(e){return this.tint[0]=e[0],this.tint[1]=e[1],this.tint[2]=e[2],this}setColor(e){return this.color=e?[e[0],e[1],e[2]]:null,this}clone(){return new a(this.position,{spread:this.spread,radius:this.radius,thickness:this.thickness,speed:this.speed,lack:this.lack,tint:this.tint,color:this.color??void 0})}};var q=class a{points;closed;id;rayCount;samples;thickness;spread;maxRadius;seed;palette;transform;reveal;frequencyScale;depthScale;constructor(e,t={}){let r=t.closed??!1,s=r?3:2;if(e.length<s)throw new Error(`RayCurve needs at least ${s} points${r?` when closed`:``}.`);this.points=e.map(n=>n.clone()),this.closed=r,this.id=t.id,this.rayCount=Math.max(1,Math.floor(t.rayCount??48)),this.samples=Math.max(16,Math.floor(t.samples??256)),this.thickness=Math.max(0,t.thickness??.012),this.spread=Math.max(0,t.spread??1),this.maxRadius=Math.max(0,t.maxRadius??.6),this.seed=t.seed??0,this.palette=t.palette??new V,this.transform=t.transform?new Float32Array(t.transform):D(),this.reveal=Math.min(1,Math.max(0,t.reveal??1)),this.frequencyScale=Math.max(.01,t.frequencyScale??1),this.depthScale=Math.min(1,Math.max(0,t.depthScale??1))}static circle(e,t,r=12,s={}){if(r<3)throw new Error(`A circle needs at least three points.`);let l$1=s,{pointOptions:n$1}=l$1,o=n(l$1,[`pointOptions`]),i=[];for(let c=0;c<r;c+=1){let u=c/r*Math.PI*2;i.push(new G([e[0]+Math.cos(u)*t,e[1]+Math.sin(u)*t,e[2]],n$1))}return new a(i,m(l({},o),{closed:!0}))}addPoint(e){return this.points.push(e.clone()),this}setRayCount(e){return this.rayCount=Math.max(1,Math.floor(e)),this}setSamples(e){return this.samples=Math.max(16,Math.floor(e)),this}setThickness(e){return this.thickness=Math.max(0,e),this}setSpread(e){return this.spread=Math.max(0,e),this}setMaxRadius(e){return this.maxRadius=Math.max(0,e),this}setSeed(e){return this.seed=e,this}setPalette(e){return this.palette=e,this}setTransform(e){return this.transform.set(e),this}setReveal(e){return this.reveal=Math.min(1,Math.max(0,e)),this}setTuning(e){return e.rayCount!==void 0&&this.setRayCount(e.rayCount),e.samples!==void 0&&this.setSamples(e.samples),e.thickness!==void 0&&this.setThickness(e.thickness),e.spread!==void 0&&this.setSpread(e.spread),e.maxRadius!==void 0&&this.setMaxRadius(e.maxRadius),e.seed!==void 0&&this.setSeed(e.seed),this}toCubics(){let e=pe(this.points,this.closed),t=e.length,r=[];if(!this.closed){for(let s=0;s<t-1;s+=1){let n=e[s].position,o=e[s+1].position,i=s===0?he(n,o):e[s-1].position,l=s+2>=t?he(o,n):e[s+2].position;r.push(de(i,n,o,l))}return r}for(let s=0;s<t;s+=1){let n=e[(s-1+t)%t].position,o=e[s].position,i=e[(s+1)%t].position,l=e[(s+2)%t].position;r.push(de(n,o,i,l))}return r}};function F(a,e){return[a[0]-e[0],a[1]-e[1],a[2]-e[2]]}function he(a,e){return[a[0]*2-e[0],a[1]*2-e[1],a[2]*2-e[2]]}var ue=.2;function pe(a,e){let t=a.length,r=e?3:2;if(t<=r)return a.slice();let s=(i,l)=>Math.hypot(i.position[0]-l.position[0],i.position[1]-l.position[1],i.position[2]-l.position[2]),n=[a[0]],o=i=>{let l=a[i],c=s(a[i===0?t-1:i-1],l),u=s(l,a[i+1===t?0:i+1]),p=Math.max(c,u),m=s(n[n.length-1],l);p>1e-6&&m<p*ue||n.push(l)};if(e){for(let i=1;i<t;i+=1)o(i);for(;n.length>3;){if(s(n[n.length-1],n[0])>=Math.max(s(n[n.length-2],n[n.length-1]),s(n[0],n[1]))*ue)break;n.pop()}}else{for(let i=1;i<t-1;i+=1)o(i);n.push(a[t-1])}return n.length>=r?n:a.slice()}function de(a,e,t,r){let n=Math.max(1e-4,Math.hypot(...F(e,a))**.5),o=Math.max(1e-4,Math.hypot(...F(t,e))**.5),i=Math.max(1e-4,Math.hypot(...F(r,t))**.5),l=F(e,a),c=F(t,e),u=F(r,t),p=F(r,e),m=F(t,a),h=[l[0]/n-m[0]/(n+o)+c[0]/o,l[1]/n-m[1]/(n+o)+c[1]/o,l[2]/n-m[2]/(n+o)+c[2]/o],x=[u[0]/i-p[0]/(o+i)+c[0]/o,u[1]/i-p[1]/(o+i)+c[1]/o,u[2]/i-p[2]/(o+i)+c[2]/o],v=o/3;return{p0:e,p1:[e[0]+h[0]*v,e[1]+h[1]*v,e[2]+h[2]*v],p2:[t[0]-x[0]*v,t[1]-x[1]*v,t[2]-x[2]*v],p3:t}}function me(a,e){let t=a.length,s=Math.min(1,Math.max(0,e))*t,n=Math.min(Math.floor(s),t-1),o=Math.min(1,Math.max(0,s-n));return we(a[n],o)}function fe(a,e){let t=a.length,s=Math.min(1,Math.max(0,e))*t,n=Math.min(Math.floor(s),t-1),o=Math.min(1,Math.max(0,s-n));return Te(a[n],o)}function be(a,e){let t=a.length,s=Math.min(1,Math.max(0,e))*t,n=Math.min(Math.floor(s),t-1),o=Math.min(1,Math.max(0,s-n));return Se(a[n],o)}function we(a,e){let t=1-e,r=t*t*t,s=3*t*t*e,n=3*t*e*e,o=e*e*e;return[a.p0[0]*r+a.p1[0]*s+a.p2[0]*n+a.p3[0]*o,a.p0[1]*r+a.p1[1]*s+a.p2[1]*n+a.p3[1]*o,a.p0[2]*r+a.p1[2]*s+a.p2[2]*n+a.p3[2]*o]}function Te(a,e){let t=1-e,r=3*t*t,s=6*t*e,n=3*e*e;return[(a.p1[0]-a.p0[0])*r+(a.p2[0]-a.p1[0])*s+(a.p3[0]-a.p2[0])*n,(a.p1[1]-a.p0[1])*r+(a.p2[1]-a.p1[1])*s+(a.p3[1]-a.p2[1])*n,(a.p1[2]-a.p0[2])*r+(a.p2[2]-a.p1[2])*s+(a.p3[2]-a.p2[2])*n]}function Se(a,e){let r=6*(1-e),s=6*e;return[(a.p0[0]-2*a.p1[0]+a.p2[0])*r+(a.p1[0]-2*a.p2[0]+a.p3[0])*s,(a.p0[1]-2*a.p1[1]+a.p2[1])*r+(a.p1[1]-2*a.p2[1]+a.p3[1])*s,(a.p0[2]-2*a.p1[2]+a.p2[2])*r+(a.p1[2]-2*a.p2[2]+a.p3[2])*s]}function ve(a,e){let t=pe(a.points,a.closed),r=a.closed?t.length:t.length-1,s=Math.min(1,Math.max(0,e))*r,n=Math.floor(s),o=s-n;n>=r&&(n=r-1,o=1);let i=t[n],l=t[(n+1)%t.length],c=o*o*(3-2*o),u=i.color,p=l.color,x=S(u?1:0,p?1:0,c),v=u??p,g=p??u,R=v&&g?[S(v[0],g[0],c),S(v[1],g[1],c),S(v[2],g[2],c)]:[1,1,1];return{spread:S(i.spread,l.spread,c),radius:S(i.radius,l.radius,c),thickness:S(i.thickness,l.thickness,c),speed:S(i.speed,l.speed,c),lack:S(i.lack,l.lack,c),tint:[S(i.tint[0],l.tint[0],c),S(i.tint[1],l.tint[1],c),S(i.tint[2],l.tint[2],c)],override:[R[0]*x,R[1]*x,R[2]*x],overrideWeight:x}}function S(a,e,t){return a+(e-a)*t}var Y=class{buffer;gl;constructor(e){let t=e.createBuffer();if(!t)throw new Error(`Unable to create WebGL buffer.`);this.gl=e,this.buffer=t}bind(e){this.gl.bindBuffer(e??this.gl.ARRAY_BUFFER,this.buffer)}upload(e,t,r){let s=this.gl,n=r??s.ARRAY_BUFFER;s.bindBuffer(n,this.buffer),s.bufferData(n,e,t??s.STATIC_DRAW)}update(e,t=0,r){let s=this.gl,n=r??s.ARRAY_BUFFER;s.bindBuffer(n,this.buffer),s.bufferSubData(n,t,e)}dispose(){this.gl.deleteBuffer(this.buffer)}};var j=class{vao;gl;constructor(e){let t=e.createVertexArray();if(!t)throw new Error(`Unable to create vertex array.`);this.gl=e,this.vao=t}bind(){this.gl.bindVertexArray(this.vao)}unbind(){this.gl.bindVertexArray(null)}attribute(e,t,r,s={}){let n=this.gl,o=s.type??n.FLOAT,i=s.stride??0,l=s.offset??0,c=s.divisor??0;n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,e.buffer),n.enableVertexAttribArray(t),n.vertexAttribPointer(t,r,o,s.normalized??!1,i,l),c>0&&n.vertexAttribDivisor(t,c),n.bindVertexArray(null)}integerAttribute(e,t,r,s={}){let n=this.gl,o=s.type??n.INT,i=s.stride??0,l=s.offset??0,c=s.divisor??0;n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,e.buffer),n.enableVertexAttribArray(t),n.vertexAttribIPointer(t,r,o,i,l),c>0&&n.vertexAttribDivisor(t,c),n.bindVertexArray(null)}dispose(){this.gl.deleteVertexArray(this.vao)}};var $=class{program;gl;uniforms=new Map;constructor(e,t,r,s=`program`){this.gl=e;let n=this.compile(e.VERTEX_SHADER,t,`${s} vertex`),o=this.compile(e.FRAGMENT_SHADER,r,`${s} fragment`),i=e.createProgram();if(!i)throw e.deleteShader(n),e.deleteShader(o),new Error(`Unable to create program: ${s}`);if(e.attachShader(i,n),e.attachShader(i,o),e.linkProgram(i),e.deleteShader(n),e.deleteShader(o),!e.getProgramParameter(i,e.LINK_STATUS)){let l=e.getProgramInfoLog(i)??`unknown link error`;throw e.deleteProgram(i),new Error(`Program link failed (${s}): ${l}`)}this.program=i}compile(e,t,r){let s=this.gl,n=s.createShader(e);if(!n)throw new Error(`Unable to create shader: ${r}`);if(s.shaderSource(n,t),s.compileShader(n),!s.getShaderParameter(n,s.COMPILE_STATUS)){let o=s.getShaderInfoLog(n)??`unknown compile error`;throw s.deleteShader(n),new Error(`Shader compile failed (${r}): ${o}`)}return n}use(){this.gl.useProgram(this.program)}uniform(e){let t=this.uniforms.get(e);return t===void 0&&(t=this.gl.getUniformLocation(this.program,e),this.uniforms.set(e,t)),t}setInt(e,t){let r=this.uniform(e);r&&this.gl.uniform1i(r,t)}setFloat(e,t){let r=this.uniform(e);r&&this.gl.uniform1f(r,t)}setVec2(e,t,r){let s=this.uniform(e);s&&this.gl.uniform2f(s,t,r)}setVec3(e,t,r,s){let n=this.uniform(e);n&&this.gl.uniform3f(n,t,r,s)}setVec4(e,t,r,s,n){let o=this.uniform(e);o&&this.gl.uniform4f(o,t,r,s,n)}setMat4(e,t){let r=this.uniform(e);r&&this.gl.uniformMatrix4fv(r,!1,t)}setFloatArray(e,t){let r=this.uniform(e);r&&this.gl.uniform1fv(r,t)}dispose(){this.gl.deleteProgram(this.program),this.uniforms.clear()}};var C=class{texture;width=1;height=1;gl;constructor(e,t={}){let r=e.createTexture();if(!r)throw new Error(`Unable to create texture.`);this.gl=e,this.texture=r,this.bind(0),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.filter??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t.filter??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrap??e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrap??e.CLAMP_TO_EDGE)}bind(e=0){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}setParams(e,t){let r=this.gl;this.bind(0),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,t),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,t)}upload(e,t,r,s,n,o){let i=this.gl;this.bind(0),i.texImage2D(i.TEXTURE_2D,0,s??i.RGBA8,t,r,0,n??i.RGBA,o??i.UNSIGNED_BYTE,e),this.width=t,this.height=r}subUpload(e,t,r,s,n,o,i){let l=this.gl;this.bind(0),l.texSubImage2D(l.TEXTURE_2D,0,t,r,s,n,o??l.RGBA,i??l.UNSIGNED_BYTE,e)}dispose(){this.gl.deleteTexture(this.texture)}};function ge(a,e){return[a[0]+e[0],a[1]+e[1],a[2]+e[2]]}function Ee(a,e){return[a[0]-e[0],a[1]-e[1],a[2]-e[2]]}function O(a,e){return[a[0]*e,a[1]*e,a[2]*e]}function U(a,e){return a[0]*e[0]+a[1]*e[1]+a[2]*e[2]}function W(a,e){return[a[1]*e[2]-a[2]*e[1],a[2]*e[0]-a[0]*e[2],a[0]*e[1]-a[1]*e[0]]}function K(a){return Math.hypot(a[0],a[1],a[2])}function ye(a){let e=K(a);return e>1e-8?O(a,1/e):[0,1,0]}function te(a,e,t){let r=Math.cos(t),s=Math.sin(t),n=O(e,U(e,a)*(1-r)),o=O(W(e,a),s);return ge(ge(O(a,r),o),n)}function ae(a){return ye(W(a,Math.abs(a[1])<.9?[0,1,0]:[1,0,0]))}function ee(a,e,t){let r=W(e,t),s=K(r),n=Math.min(1,Math.max(-1,U(e,t)));s>1e-7?a=te(a,O(r,1/s),Math.atan2(s,n)):n<0&&(a=te(a,ae(t),Math.PI));let o=U(a,t);return ye(Ee(a,O(t,o)))}function Ce(a){let e=a.toCubics(),t=a.closed,r=a.samples,s=r+1,n=new Float32Array(s*3),o=new Float32Array(s*3),i=new Float32Array(s),l=new Float32Array(s*4),c=new Float32Array(s),u=new Float32Array(s*3),p=new Float32Array(s*4),m=0,h=0,x=0,v=0,g=0;for(let d=0;d<s;d+=1){let y=d/r,w=me(e,y);n[d*3]=w[0],n[d*3+1]=w[1],n[d*3+2]=w[2];let E=fe(e,y);o[d*3]=E[0],o[d*3+1]=E[1],o[d*3+2]=E[2];let P=be(e,y),I=K(E);i[d]=I>1e-6?K(W(E,P))/(I*I*I):0;let f=ve(a,y),T=d*4;l[T]=f.spread,l[T+1]=f.radius,l[T+2]=f.thickness,l[T+3]=f.lack,c[d]=f.speed,u[d*3]=f.tint[0],u[d*3+1]=f.tint[1],u[d*3+2]=f.tint[2],p[T]=f.override[0],p[T+1]=f.override[1],p[T+2]=f.override[2],p[T+3]=f.overrideWeight;let ne=Math.max(f.spread*f.radius,.05);m=Math.max(m,ne),h=Math.max(h,f.thickness),x=Math.max(x,f.lack),v+=f.speed,g+=f.speed/Math.max(ne,.05)}let R=v/s,b=g/s;Pe(i,r,t),t&&(L(n,r),L(o,r),L(i,r),L(l,r),L(c,r),L(u,r),L(p,r));let _=0;for(let d=0;d<r;d+=1){let y=d*3,w=(d+1)*3;_+=Math.hypot(n[w]-n[y],n[w+1]-n[y+1],n[w+2]-n[y+2])}let A=new Array(s),k=[0,1,0];for(let d=0;d<s;d+=1){let y=o[d*3],w=o[d*3+1],E=o[d*3+2],P=Math.hypot(y,w,E);P>1e-7&&(k=[y/P,w/P,E/P]),A[d]=k,o[d*3]=k[0],o[d*3+1]=k[1],o[d*3+2]=k[2]}t&&(o[r*3]=o[0],o[r*3+1]=o[1],o[r*3+2]=o[2],A[r]=A[0]);let M=new Float32Array(s*3);if(t){let d=new Array(r),y=ae(A[0]);d[0]=y;for(let f=1;f<r;f+=1)y=ee(y,A[f-1],A[f]),d[f]=y;let w=ee(y,A[r-1],A[0]),E=Math.min(1,Math.max(-1,U(d[0],w))),P=U(W(d[0],w),A[0]),I=Math.atan2(P,E);for(let f=0;f<r;f+=1){let T=te(d[f],A[f],-I*f/r);M[f*3]=T[0],M[f*3+1]=T[1],M[f*3+2]=T[2]}M[r*3]=M[0],M[r*3+1]=M[1],M[r*3+2]=M[2]}else{let d=ae(A[0]);for(let y=0;y<s;y+=1)y>0&&(d=ee(d,A[y-1],A[y])),M[y*3]=d[0],M[y*3+1]=d[1],M[y*3+2]=d[2]}return{closed:t,samples:r,positions:n,normals:M,tangents:o,curvatures:i,attributes:l,speeds:c,tints:u,overrides:p,maxSpreadRadius:Math.max(m,1),maxThickness:Math.max(h,1),maxLack:x,length:_,motionRatePerSpread:b,averageSpeed:R}}function Pe(a,e,t){let r=t?e:e+1,s=new Float32Array(r);for(let o=0;o<r;o+=1)s[o]=a[o];let n=Math.max(2,Math.round(e*.04));for(let o=0;o<r;o+=1){let i=0,l=0;for(let c=-n;c<=n;c+=1){let u=o+c;t?u=(u%r+r)%r:u=Math.min(r-1,Math.max(0,u));let p=n+1-Math.abs(c);i+=s[u]*p,l+=p}a[o]=i/l}}function L(a,e){let t=a.length/(e+1);for(let r=0;r<t;r+=1)a[e*t+r]=a[r]}function xe(a){return a.map(e=>Ce(e))}var _e=`#version 300 es
layout(location = 0) in vec2 a_corner;

uniform mat4 u_viewProjection;
uniform mat4 u_model;
uniform vec3 u_cameraPos;

uniform sampler2D u_positions;
uniform sampler2D u_normals;
uniform sampler2D u_tangents;
uniform sampler2D u_attributes;
uniform sampler2D u_speeds;
uniform sampler2D u_tints;
uniform sampler2D u_overrides;
uniform float u_samples;
uniform float u_pathClosed;
uniform int u_pathIndex;

uniform float u_time;
uniform float u_thickness;
uniform float u_spread;
uniform float u_maxRadius;
uniform float u_motionRate;
uniform float u_frequencyScale;
uniform float u_depthScale;
uniform float u_averageSpeed;
uniform float u_energy;
uniform float u_pulse;
uniform float u_reveal;
uniform float u_seed;

uniform int u_pathRayCount;
uniform int u_segmentStart;

uniform vec3 u_paletteA;
uniform vec3 u_paletteB;
uniform vec3 u_paletteC;
uniform vec3 u_paletteD;
uniform float u_paletteSpeed;
uniform float u_paletteSpread;
uniform float u_paletteAlong;

uniform vec3 u_pointerOrigin;
uniform vec3 u_pointerDir;
uniform float u_pointerActive;
uniform float u_pointerStrength;

out vec3 v_color;
out float v_side;
out float v_fade;

const float PI = 3.14159265;
const float TAU = 6.2831853;

float hash(float n) {
  return fract(sin(n * 127.1 + 311.7) * 43758.5453);
}

// Resolve the two baked samples around u. Closed paths wrap the last segment
// back onto the first one.
void pathIndices(float u, out int i0, out int i1, out float blend) {
  float scaled;

  if (u_pathClosed > 0.5) {
    scaled = fract(u) * u_samples;
  } else {
    scaled = clamp(u, 0.0, 1.0) * u_samples;
  }

  int count = int(u_samples);
  i0 = int(floor(scaled));
  blend = scaled - float(i0);
  i1 = u_pathClosed > 0.5 ? (i0 + 1) % count : min(i0 + 1, count);
}

void pathSample(
  float u,
  out vec3 position,
  out vec3 normal,
  out vec3 tangent,
  out float curvature
) {
  int i0;
  int i1;
  float blend;
  pathIndices(u, i0, i1, blend);

  vec3 p0 = texelFetch(u_positions, ivec2(i0, u_pathIndex), 0).xyz;
  vec3 p1 = texelFetch(u_positions, ivec2(i1, u_pathIndex), 0).xyz;
  position = mix(p0, p1, blend);

  vec3 n0 = texelFetch(u_normals, ivec2(i0, u_pathIndex), 0).xyz;
  vec3 n1 = texelFetch(u_normals, ivec2(i1, u_pathIndex), 0).xyz;
  normal = normalize(mix(n0, n1, blend));

  vec3 t0 = texelFetch(u_tangents, ivec2(i0, u_pathIndex), 0).xyz;
  vec3 t1 = texelFetch(u_tangents, ivec2(i1, u_pathIndex), 0).xyz;
  vec3 mixedTangent = mix(t0, t1, blend);
  float tangentLength = length(mixedTangent);
  tangent = tangentLength > 1e-5
    ? mixedTangent / tangentLength
    : vec3(1.0, 0.0, 0.0);

  curvature = mix(
    texelFetch(u_tangents, ivec2(i0, u_pathIndex), 0).a,
    texelFetch(u_tangents, ivec2(i1, u_pathIndex), 0).a,
    blend
  );
}

// Per-point spread / radius / thickness / lack / speed, color tint, and
// optional local color override, baked into the path textures.
void pathSurface(
  float u,
  out vec4 surface,
  out float speed,
  out vec3 tint,
  out vec4 override
) {
  int i0;
  int i1;
  float blend;
  pathIndices(u, i0, i1, blend);

  surface = mix(
    texelFetch(u_attributes, ivec2(i0, u_pathIndex), 0),
    texelFetch(u_attributes, ivec2(i1, u_pathIndex), 0),
    blend
  );
  speed = mix(
    texelFetch(u_speeds, ivec2(i0, u_pathIndex), 0).r,
    texelFetch(u_speeds, ivec2(i1, u_pathIndex), 0).r,
    blend
  );
  tint = mix(
    texelFetch(u_tints, ivec2(i0, u_pathIndex), 0).rgb,
    texelFetch(u_tints, ivec2(i1, u_pathIndex), 0).rgb,
    blend
  );
  override = mix(
    texelFetch(u_overrides, ivec2(i0, u_pathIndex), 0),
    texelFetch(u_overrides, ivec2(i1, u_pathIndex), 0),
    blend
  );
}

// Sample only the per-point lack at u. Used to size the moving reveal head.
float pathLack(float u) {
  int i0;
  int i1;
  float blend;
  pathIndices(u, i0, i1, blend);
  return mix(
    texelFetch(u_attributes, ivec2(i0, u_pathIndex), 0).a,
    texelFetch(u_attributes, ivec2(i1, u_pathIndex), 0).a,
    blend
  );
}

void main() {
  int localRay = gl_InstanceID % u_pathRayCount;
  int segment = u_segmentStart + gl_InstanceID / u_pathRayCount;
  float rayIndex = float(localRay);
  float rawAlong = (float(segment) + a_corner.x) / u_samples;

  float raySeed = fract(rayIndex * 0.61803398875 + u_seed * 0.137);
  float h = hash(rayIndex + u_seed * 53.0);
  float h2 = hash(rayIndex * 1.37 + u_seed * 17.0);

  vec4 surface;
  float speed;
  vec3 tint;
  vec4 override;
  pathSurface(rawAlong, surface, speed, tint, override);

  float closed = u_pathClosed;
  float turnUnit = mix(PI, TAU, closed);

  // The ray start is anchored: every strand samples the curve at its fixed
  // position. Only the reveal head (the moving end) is allowed to lead or
  // trail, so the beginning never slides along the curve.
  float along = rawAlong;

  // Smooth head profile: zero at both ends of the reveal, peak in the middle.
  // Squaring the sine makes the rate of change zero at both ends too, so the
  // head accelerates out of the start and decelerates into the finish instead
  // of snapping when the loop closes.
  float revealPhase = clamp(u_reveal, 0.0, 1.0);
  float headProfile = sin(PI * revealPhase);
  headProfile *= headProfile;

  // Per-ray head lag. The seed decides who leads and who trails, and the lack
  // at the moving head caps the band: offsets stay within +/- lack/2, so the
  // distance between the leading and trailing head never exceeds lack.
  float headLack = max(0.0, pathLack(u_reveal));
  float headShift = (raySeed - 0.5) * headLack * headProfile;

  vec3 point;
  vec3 normal;
  vec3 tangent;
  float curvature;
  pathSample(along, point, normal, tangent, curvature);

  normal = normalize(normal - tangent * dot(normal, tangent));
  vec3 binormal = normalize(cross(tangent, normal));

  float localSpread = max(0.0, surface.r);
  float localRadius = max(0.0, surface.g);
  float localThickness = max(0.0, surface.b);

  // The time-growing rotation uses one averaged rate for the whole curve.
  // Using the per-point rate here would make the phase gradient grow without
  // bound and eventually alias the strip into sawtooth geometry.
  float motionRate = u_motionRate;

  // Per-point speed instead adds a bounded local wobble. Its spatial gradient
  // depends only on how speed changes between points, never on elapsed time.
  float speedRatio = u_averageSpeed > 1e-5
    ? speed / u_averageSpeed
    : 1.0;
  float localWobble = (clamp(speedRatio, 0.0, 4.0) - 1.0) *
    0.22 *
    sin(u_time * 0.4 + raySeed * TAU);

  // Closed paths use integer wave/turn counts so every procedural offset,
  // color, and pulse matches exactly where the loop meets itself. Open curves
  // scale their frequencies with the page length so a page-wide curve still
  // curls about once per viewport instead of reading as a straight line.
  float frequencyScale = max(0.01, u_frequencyScale);
  float waveCount = closed > 0.5
    ? max(1.0, floor(float(1 + int(floor(h * 3.0))) * frequencyScale + 0.5))
    : (2.0 + 3.0 * h) * frequencyScale;
  float wavePhase = along * waveCount * turnUnit +
    raySeed * TAU +
    u_time * 0.15 * motionRate;
  float radiusScale = 0.82 + 0.18 * (0.5 + 0.5 * sin(wavePhase));
  float radius = (0.12 + 0.88 * h2) *
    u_maxRadius *
    u_spread *
    localSpread *
    localRadius *
    radiusScale;

  float spinTurns = closed > 0.5
    ? max(1.0, floor(float(1 + int(floor(h2 * 3.0))) * frequencyScale + 0.5))
    : (1.5 + 2.0 * h2) * frequencyScale;
  float angle = raySeed * TAU +
    along * spinTurns * turnUnit +
    u_time * (0.07 + 0.12 * h) * motionRate +
    localWobble;

  float weaveWaves = closed > 0.5
    ? max(1.0, floor(float(2 + int(floor(h * 4.0))) * frequencyScale + 0.5))
    : (3.0 + 3.0 * h) * frequencyScale;
  float weave = 0.08 *
    u_maxRadius *
    u_spread *
    localSpread *
    localRadius *
    sin(along * weaveWaves * turnUnit +
      raySeed * 11.0 -
      u_time * 0.34 * motionRate);

  // A large orbit around a tight turn folds over itself. Cap the offset to the
  // local radius of curvature so close waypoints stay clean. The cap is eased
  // over a small ratio band instead of a hard min, so the tube tapers into the
  // bend instead of kinking at the clamp threshold.
  float offsetRadius = radius + abs(weave);
  float curvatureLimit = 0.85 / max(curvature, 1e-4);
  float curvatureRatio = offsetRadius / max(curvatureLimit, 1e-5);
  float curvatureBlend = smoothstep(0.8, 1.2, curvatureRatio);
  float curvatureScale = offsetRadius > 1e-5
    ? curvatureLimit / offsetRadius
    : 1.0;
  float orbitScale = mix(1.0, curvatureScale, curvatureBlend);
  radius *= orbitScale;
  weave *= orbitScale;

  vec3 orbitOffset = normal * (cos(angle) * radius + weave) +
    binormal * (sin(angle) * radius + weave * 0.5);

  // Keep the fan near the page plane. The baked normal of a page-long vertical
  // curve points along Z, so a large orbit throws strands far toward the
  // camera; they then scroll at a different screen rate than the page. Only
  // the depth part is compressed, so the in-plane fan keeps its full reach.
  orbitOffset.z *= u_depthScale;

  vec3 localPoint = point + orbitOffset;

  // The gradient is a function of position along the curve. The time term is
  // subtracted so the color bands travel from the start (0) toward the end (1).
  // Closed paths quantize the along frequency to an integer, so the phase
  // leaving the seam matches the phase entering it and the rate stays constant
  // around the whole loop.
  float alongScale = closed > 0.5
    ? max(1.0, floor(u_paletteAlong + 0.5))
    : u_paletteAlong;
  float paletteT = along * alongScale -
    u_time * u_paletteSpeed +
    raySeed * u_paletteSpread;
  vec3 gradient = u_paletteA + u_paletteB * cos(TAU * (u_paletteC * paletteT + u_paletteD));
  gradient *= tint;

  // A point with an explicit color stores a premultiplied color + weight.
  // Dividing by the weight recovers the constant color while the weight
  // controls how strongly the gradient blends in and out around it.
  float overrideWeight = clamp(override.a, 0.0, 1.0);
  vec3 overrideColor = overrideWeight > 1e-4
    ? override.rgb / overrideWeight
    : gradient;
  vec3 color = mix(gradient, overrideColor, overrideWeight);

  float bright = pow(
    0.5 + 0.5 * sin(along * 1.5 * TAU - u_time * 0.22 + raySeed * TAU),
    6.0
  );
  color *= (0.86 + 0.14 * bright) *
    (0.94 + 0.1 * u_energy) *
    (1.0 + 0.12 * u_pulse);

  vec4 world = u_model * vec4(localPoint, 1.0);

  if (u_pointerActive > 0.001) {
    vec3 toRay = world.xyz - u_pointerOrigin;
    float rayT = max(dot(toRay, u_pointerDir), 0.0);
    vec3 closest = u_pointerOrigin + u_pointerDir * rayT;
    vec3 delta = closest - world.xyz;
    float distanceToRay = length(delta);
    float influence = 1.0 - smoothstep(0.25, 2.2, distanceToRay);
    vec3 pull = delta * influence * (0.2 + 0.3 * u_pointerStrength);
    float pullLength = length(pull);
    if (pullLength > 0.35) pull *= 0.35 / pullLength;
    world.xyz += pull * u_pointerActive;
  }

  vec3 worldTangent = (u_model * vec4(tangent, 0.0)).xyz;
  float worldTangentLength = length(worldTangent);
  worldTangent = worldTangentLength > 1e-5
    ? worldTangent / worldTangentLength
    : vec3(1.0, 0.0, 0.0);

  vec3 toCamera = u_cameraPos - world.xyz;
  float cameraDistance = length(toCamera);
  toCamera = cameraDistance > 1e-4 ? toCamera / cameraDistance : vec3(0.0, 0.0, 1.0);

  vec3 side = cross(worldTangent, toCamera);
  float sideLength = length(side);
  side = sideLength > 1e-5
    ? side / sideLength
    : normalize(cross(worldTangent, vec3(0.0, 0.0, 1.0)));

  world.xyz += side * a_corner.y * u_thickness * localThickness;

  // The moving end: extend it by one head length so the last vertex reaches
  // full opacity exactly when the reveal finishes, then offset it per ray so
  // the head fans out smoothly without the start ever moving.
  float headLength = 0.035;
  float revealHead = u_reveal * (1.0 + headLength) + headShift;
  float revealFade = clamp((revealHead - along) / headLength, 0.0, 1.0);
  float startFade = closed > 0.5 ? 1.0 : smoothstep(0.0, 0.03, along);
  float endFade = closed > 0.5 ? 1.0 : 1.0 - smoothstep(0.96, 1.0, along);

  v_color = color;
  v_side = a_corner.y;
  v_fade = revealFade * startFade * endFade;

  gl_Position = u_viewProjection * world;
}
`;var Re=`#version 300 es
precision highp float;

in vec3 v_color;
in float v_side;
in float v_fade;

out vec4 outColor;

void main() {
  float edge = max(1.0 - abs(v_side), 0.0);
  float body = pow(edge, 1.5);
  float core = pow(edge, 10.0);

  vec3 color = v_color * (0.9 + 0.45 * core);
  float alpha = body * v_fade * 0.24;

  outColor = vec4(color, alpha);
}
`;var Ve=.035;var Z=class{gl;program;vao;cornerBuffer;positionTexture;normalTexture;tangentTexture;attributeTexture;speedTexture;tintTexture;overrideTexture;curves=[];bakedPaths=[];worldPositions=[];frustum=new Float32Array(24);constructor(e,t){this.gl=e,this.cornerBuffer=new Y(e),this.cornerBuffer.upload(new Float32Array([0,-1,0,1,1,1,0,-1,1,1,1,-1])),this.vao=new j(e),this.vao.attribute(this.cornerBuffer,0,2),this.positionTexture=new C(e,{filter:e.NEAREST,wrap:e.CLAMP_TO_EDGE}),this.normalTexture=new C(e,{filter:e.NEAREST,wrap:e.CLAMP_TO_EDGE}),this.tangentTexture=new C(e,{filter:e.NEAREST,wrap:e.CLAMP_TO_EDGE}),this.attributeTexture=new C(e,{filter:e.NEAREST,wrap:e.CLAMP_TO_EDGE}),this.speedTexture=new C(e,{filter:e.NEAREST,wrap:e.CLAMP_TO_EDGE}),this.tintTexture=new C(e,{filter:e.NEAREST,wrap:e.CLAMP_TO_EDGE}),this.overrideTexture=new C(e,{filter:e.NEAREST,wrap:e.CLAMP_TO_EDGE}),this.setCurves(t.curves),this.program=new $(e,_e,Re,`rays`)}setCurves(e){this.curves=e,this.bakedPaths=xe(e),this.worldPositions=this.bakedPaths.map(t=>new Float32Array((t.samples+1)*3)),this.uploadPaths()}render(e,t,r,s,n,o){let i=this.gl;if(i.disable(i.DEPTH_TEST),i.disable(i.CULL_FACE),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE),this.program.use(),this.program.setMat4(`u_viewProjection`,e),this.program.setVec3(`u_cameraPos`,t[0],t[1],t[2]),this.positionTexture.bind(0),this.normalTexture.bind(1),this.tangentTexture.bind(2),this.attributeTexture.bind(3),this.speedTexture.bind(4),this.tintTexture.bind(5),this.overrideTexture.bind(6),this.program.setInt(`u_positions`,0),this.program.setInt(`u_normals`,1),this.program.setInt(`u_tangents`,2),this.program.setInt(`u_attributes`,3),this.program.setInt(`u_speeds`,4),this.program.setInt(`u_tints`,5),this.program.setInt(`u_overrides`,6),this.program.setFloat(`u_time`,s),this.program.setFloat(`u_energy`,n),this.program.setFloat(`u_pulse`,o),this.program.setVec3(`u_pointerOrigin`,r.origin[0],r.origin[1],r.origin[2]),this.program.setVec3(`u_pointerDir`,r.direction[0],r.direction[1],r.direction[2]),this.program.setFloat(`u_pointerActive`,r.active?1:0),this.program.setFloat(`u_pointerStrength`,r.strength),this.curves.length!==0){this.extractFrustum(e),this.vao.bind();for(let l=0;l<this.curves.length;l+=1){let c=this.curves[l],u=this.bakedPaths[l];if(!u||u.samples<=0)continue;let p=u.samples,m=Math.min(1,Math.max(0,c.reveal)),h=Math.sin(Math.PI*m),x=.5*u.maxLack*h*h,v=m*(1+Ve)+x,g=Math.min(p,Math.ceil(v*p));if(g<=0)continue;let R=this.visibleRanges(u,l,c,g);if(R.length===0)continue;let b=Math.max(1,Math.floor(c.rayCount)),_=c.palette;this.program.setMat4(`u_model`,c.transform),this.program.setFloat(`u_samples`,p),this.program.setFloat(`u_thickness`,c.thickness),this.program.setFloat(`u_spread`,c.spread),this.program.setFloat(`u_maxRadius`,c.maxRadius),this.program.setFloat(`u_motionRate`,u.motionRatePerSpread/Math.max(c.spread,.05)),this.program.setFloat(`u_frequencyScale`,c.frequencyScale),this.program.setFloat(`u_depthScale`,c.depthScale),this.program.setFloat(`u_averageSpeed`,u.averageSpeed),this.program.setFloat(`u_reveal`,m),this.program.setFloat(`u_seed`,c.seed),this.program.setInt(`u_pathIndex`,l),this.program.setFloat(`u_pathClosed`,u.closed?1:0),this.program.setInt(`u_pathRayCount`,b),this.program.setVec3(`u_paletteA`,_.a[0],_.a[1],_.a[2]),this.program.setVec3(`u_paletteB`,_.b[0],_.b[1],_.b[2]),this.program.setVec3(`u_paletteC`,_.c[0],_.c[1],_.c[2]),this.program.setVec3(`u_paletteD`,_.d[0],_.d[1],_.d[2]),this.program.setFloat(`u_paletteSpeed`,_.speed),this.program.setFloat(`u_paletteSpread`,_.spread),this.program.setFloat(`u_paletteAlong`,_.alongScale);for(let A of R)this.program.setInt(`u_segmentStart`,A.start),i.drawArraysInstanced(i.TRIANGLES,0,6,A.count*b)}this.vao.unbind()}}dispose(){this.program.dispose(),this.vao.dispose(),this.cornerBuffer.dispose(),this.positionTexture.dispose(),this.normalTexture.dispose(),this.tangentTexture.dispose(),this.attributeTexture.dispose(),this.speedTexture.dispose(),this.tintTexture.dispose(),this.overrideTexture.dispose()}uploadPaths(){let e=this.gl,t=this.bakedPaths.length;if(t===0)return;let r=this.bakedPaths.reduce((m,h)=>Math.max(m,h.samples+1),1),s=r*t,n=new Float32Array(s*4),o=new Float32Array(s*4),i=new Float32Array(s*4),l=new Float32Array(s*4),c=new Float32Array(s*4),u=new Float32Array(s*4),p=new Float32Array(s*4);for(let m=0;m<t;m+=1){let h=this.bakedPaths[m],x=m*r*4;for(let v=0;v<=h.samples;v+=1){let g=v*3,R=v*4,b=x+v*4;n[b]=h.positions[g],n[b+1]=h.positions[g+1],n[b+2]=h.positions[g+2],n[b+3]=1,o[b]=h.normals[g],o[b+1]=h.normals[g+1],o[b+2]=h.normals[g+2],o[b+3]=0,i[b]=h.tangents[g],i[b+1]=h.tangents[g+1],i[b+2]=h.tangents[g+2],i[b+3]=h.curvatures[v],l[b]=h.attributes[R],l[b+1]=h.attributes[R+1],l[b+2]=h.attributes[R+2],l[b+3]=h.attributes[R+3],c[b]=h.speeds[v],u[b]=h.tints[g],u[b+1]=h.tints[g+1],u[b+2]=h.tints[g+2],u[b+3]=1,p[b]=h.overrides[R],p[b+1]=h.overrides[R+1],p[b+2]=h.overrides[R+2],p[b+3]=h.overrides[R+3]}}this.positionTexture.upload(n,r,t,e.RGBA32F,e.RGBA,e.FLOAT),this.normalTexture.upload(o,r,t,e.RGBA32F,e.RGBA,e.FLOAT),this.tangentTexture.upload(i,r,t,e.RGBA32F,e.RGBA,e.FLOAT),this.attributeTexture.upload(l,r,t,e.RGBA32F,e.RGBA,e.FLOAT),this.speedTexture.upload(c,r,t,e.RGBA32F,e.RGBA,e.FLOAT),this.tintTexture.upload(u,r,t,e.RGBA32F,e.RGBA,e.FLOAT),this.overrideTexture.upload(p,r,t,e.RGBA32F,e.RGBA,e.FLOAT)}visibleRanges(e,t,r,s){let n=this.worldPositions[t],o=r.transform;for(let h=0;h<=e.samples;h+=1)Fe(o,e.positions,h*3,n,h*3);let i=e.samples,l=e.closed,c=Math.max(Math.hypot(o[0],o[1],o[2]),Math.hypot(o[4],o[5],o[6]),Math.hypot(o[8],o[9],o[10])),u=(r.maxRadius*r.spread*e.maxSpreadRadius*1.3+.5)*c+r.thickness*e.maxThickness+e.maxLack*e.length*.5*c+.05,p=[],m=-1;for(let h=0;h<s;h+=1){let x=l?(h+1)%i:h+1,v=h*3,g=x*3,R=n[g]-n[v],b=n[g+1]-n[v+1],_=n[g+2]-n[v+2],A=Math.hypot(R,b,_)*.5,k=(n[v]+n[g])*.5,M=(n[v+1]+n[g+1])*.5,d=(n[v+2]+n[g+2])*.5;this.sphereVisible(k,M,d,A+u)?m<0&&(m=h):m>=0&&(p.push({start:m,count:h-m}),m=-1)}return m>=0&&p.push({start:m,count:s-m}),p}extractFrustum(e){let t=e,r=this.frustum;B(r,0,t[3]+t[0],t[7]+t[4],t[11]+t[8],t[15]+t[12]),B(r,4,t[3]-t[0],t[7]-t[4],t[11]-t[8],t[15]-t[12]),B(r,8,t[3]+t[1],t[7]+t[5],t[11]+t[9],t[15]+t[13]),B(r,12,t[3]-t[1],t[7]-t[5],t[11]-t[9],t[15]-t[13]),B(r,16,t[3]+t[2],t[7]+t[6],t[11]+t[10],t[15]+t[14]),B(r,20,t[3]-t[2],t[7]-t[6],t[11]-t[10],t[15]-t[14])}sphereVisible(e,t,r,s){let n=this.frustum;for(let o=0;o<6;o+=1){let i=o*4;if(n[i]*e+n[i+1]*t+n[i+2]*r+n[i+3]<-s)return!1}return!0}};function Fe(a,e,t,r,s){let n=e[t],o=e[t+1],i=e[t+2];r[s]=a[0]*n+a[4]*o+a[8]*i+a[12],r[s+1]=a[1]*n+a[5]*o+a[9]*i+a[13],r[s+2]=a[2]*n+a[6]*o+a[10]*i+a[14]}function B(a,e,t,r,s,n){let o=Math.hypot(t,r,s)||1;a[e]=t/o,a[e+1]=r/o,a[e+2]=s/o,a[e+3]=n/o}var se=50*Math.PI/180;var Q=7.2;var ke=.1;var Le=60;var Ie=.55;var z=8;var De=.65;var Ge=.015;var Oe=.55;var Ae=.012;var Be=1.25;var re=2*Math.tan(se/2)*Q;var Ue=11/255;var We=11/255;var ze=15/255;var He=new V({a:[.5,.5,.5],b:[.5,.5,.5],c:[1,1,1],d:[.02,.34,.66],speed:.18,spread:0,alongScale:3});var Ne=new V({a:[.42,.48,.62],b:[.34,.3,.3],c:[1,1,1],d:[.18,.32,.52],speed:.12,spread:.02,alongScale:2});var Xe=new V({a:[.52,.42,.36],b:[.36,.28,.22],c:[1,1,1],d:[.03,.18,.42],speed:.1,spread:.01,alongScale:2});var qe=[{id:`primary`,points:[{x:.32,y:-.04,z:.15,spread:12,speed:.12,lack:.22},{x:.72,y:.3,z:.35,spread:26,speed:.26,lack:.5},{x:.27,y:.66,z:.1,spread:21,speed:.22,lack:.45},{x:.6,y:1.04,z:.3,spread:11,speed:.12,lack:.2}],options:{rayCount:3,samples:1024,thickness:.128,spread:2,maxRadius:.6,depthScale:0,palette:He}},{id:`counter`,points:[{x:.68,y:-.04,z:.3,spread:9,speed:.1,lack:.18},{x:.28,y:.32,z:.1,spread:20,speed:.24,lack:.42},{x:.73,y:.66,z:.4,spread:24,speed:.26,lack:.46},{x:.4,y:1.04,z:.2,spread:9,speed:.1,lack:.18}],options:{rayCount:3,samples:1024,thickness:.124,spread:2,maxRadius:.55,depthScale:0,palette:Ne}},{id:`accent`,points:[{x:.5,y:-.02,z:.5,spread:7,speed:.09,lack:.15},{x:.16,y:.28,z:.3,spread:17,speed:.22,lack:.36},{x:.6,y:.62,z:.5,spread:19,speed:.24,lack:.4},{x:.82,y:1.02,z:.3,spread:7,speed:.09,lack:.15}],options:{rayCount:3,samples:1024,thickness:.121,spread:2,maxRadius:.5,depthScale:0,palette:Xe}}];var Me=class{gl;system;curves;specs=qe;seeds;width;height;bakedWidth;bakedAspect;bakedPageViewports;pageMapped=!1;pageWorldHeight=re*z;pageViewports=z;pageHeightCss;viewportHeightCss;scrollY=0;cameraY=0;scrollReveal=1/z;revealHead=0;projection=D();view=D();viewProjection=D();eye=[0,0,Q];constructor(e,t,r){this.gl=e,this.width=Math.max(1,Math.round(t)),this.height=Math.max(1,Math.round(r)),this.bakedAspect=this.width/this.height,this.bakedWidth=this.width,this.bakedPageViewports=z,this.viewportHeightCss=Math.max(1,this.height),this.pageHeightCss=this.viewportHeightCss,this.seeds=this.specs.map(()=>Ye()),this.curves=this.buildCurves(),this.applyFrequencyScale(this.bakedPageViewports),this.system=new Z(this.gl,{curves:this.curves}),this.updateCamera()}setPage(e,t,r){let s=Math.max(1,t),n=Math.max(s,r),o=Math.max(z,n/s),i=!this.pageMapped||Math.abs(o-this.bakedPageViewports)>.5;this.viewportHeightCss=s,this.pageHeightCss=n,i&&(this.pageMapped=!0,this.bakedPageViewports=o,this.pageViewports=o,this.pageWorldHeight=re*o,this.applyFrequencyScale(o),this.repositionCurves(),this.system.setCurves(this.curves)),this.setScroll(e)}setScroll(e){let t=Math.max(0,this.pageHeightCss-this.viewportHeightCss);this.scrollY=Math.min(t,Math.max(0,e)),this.scrollReveal=J((this.scrollY+this.viewportHeightCss)/(this.pageViewports*this.viewportHeightCss)),this.updateCamera()}resize(e,t){let r=Math.max(1,Math.round(e)),s=Math.max(1,Math.round(t));if(r===this.width&&s===this.height)return;let n=r/s,o=Math.abs(n-this.bakedAspect)>.02||Math.abs(r-this.bakedWidth)>80;this.width=r,this.height=s,o&&(this.bakedWidth=r,this.bakedAspect=n,this.repositionCurves(),this.system.setCurves(this.curves)),this.updateCamera()}advanceReveal(e,t,r){let s=this.scrollReveal;if(r)return this.revealHead=J(t)*s,this.revealHead;if(s<=this.revealHead)return this.revealHead;let n=Math.max((s-this.revealHead)*(1-Math.exp(-Math.max(0,e)/De)),Ge*Math.max(0,e)),o=Oe/this.pageViewports;return this.revealHead=Math.min(s,Math.max(this.revealHead+n,s-o)),this.revealHead}snapReveal(){return this.revealHead=this.scrollReveal,this.revealHead}setReveal(e){let t=J(e),r=1-Ae*Math.max(0,this.curves.length-1);for(let s=0;s<this.curves.length;s+=1)this.curves[s].setReveal(J((t-s*Ae)/r))}render(e){let t=this.gl,r={active:!1,strength:0,origin:this.eye,direction:[0,0,-1]};t.viewport(0,0,this.width,this.height),t.clearColor(Ue,We,ze,1),t.clear(t.COLOR_BUFFER_BIT),this.system.render(this.viewProjection,this.eye,r,e,Ie,0)}dispose(){this.system.dispose()}buildCurves(){return this.specs.map((e,t)=>{return new q(e.points.map(s=>new G(this.toWorld(s),s)),m(l({},e.options),{id:e.id,seed:this.seeds[t]??0}))})}repositionCurves(){for(let e=0;e<this.curves.length;e+=1){let t=this.curves[e],r=this.specs[e];for(let s=0;s<t.points.length;s+=1)t.points[s].setPosition(this.toWorld(r.points[s]))}}applyFrequencyScale(e){let t=e/Be;for(let r of this.curves)r.frequencyScale=t}toWorld(e){let t=Math.tan(se/2)*(Q-e.z);return[(e.x-.5)*2*t*this.bakedAspect,this.pageWorldHeight/2-e.y*this.pageWorldHeight,0]}updateCamera(){let e=Math.max(1,this.viewportHeightCss);this.cameraY=this.pageWorldHeight/2-(this.scrollY+e/2)/e*re;let t=[0,this.cameraY,Q];this.eye=t,ie(this.projection,se,Math.max(.1,this.width/this.height),ke,Le),le(this.view,t,[0,this.cameraY,0],[0,1,0]),ce(this.viewProjection,this.projection,this.view)}};function J(a){return Math.min(1,Math.max(0,a))}function Ye(){try{let a=new Uint32Array(1);if(globalThis.crypto?.getRandomValues(a),a[0]!==0)return a[0]%1e5}catch{}return Math.floor(Math.random()*1e5)}export{Me as RaysBackgroundScene};