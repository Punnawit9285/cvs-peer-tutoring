const fs=require('fs'),vm=require('vm');
const ctx={window:{}};ctx.window=ctx;vm.createContext(ctx);
['lib','reg','heart','bp','micro','pe','dog'].forEach(f=>vm.runInContext(fs.readFileSync('data/'+f+'.js','utf8'),ctx,{filename:f}));
const S=ctx.CVS.sections;const ids=new Set();let errs=[];let tot={c:0,q:0,tf:0,open:0,core:0};
S.forEach(s=>{let n={c:0,q:0,tf:0,open:0,core:0};s.items.forEach(it=>{
 if(ids.has(it.id))errs.push('dup '+it.id);ids.add(it.id);n[it.t]++;tot[it.t]++;if(it.core){n.core++;tot.core++;}
 if(it.t==='q'){const A=Array.isArray(it.a)?it.a:[it.a];A.forEach(a=>{if(!(a>=0&&a<it.o.length))errs.push('bad ans '+it.id)});}
 if(it.t==='tf'&&typeof it.a!=='boolean')errs.push('tf ans '+it.id);
 ['q','ex','html','ans'].forEach(k=>{if(it[k]&&/\$\{|`/.test(it[k]))errs.push('tpl '+it.id)});
});console.log(s.id.padEnd(2),s.short.padEnd(22),JSON.stringify(n));});
console.log('TOTAL',JSON.stringify(tot),'errors:',errs.length?errs:'none');
