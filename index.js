let mousepos=event||window.event,xwindowmove=null;
window.addEventListener("mousemove",(m)=>{
	if(xwindowmove==null)return;
	xwindowmove.xwindow.style.top=parseFloat(getComputedStyle(xwindowmove.xwindow,null)['top'])+(m.clientY-mousepos.clientY)+"px";
	xwindowmove.xwindow.style.left=parseFloat(getComputedStyle(xwindowmove.xwindow,null)['left'])+(m.clientX-mousepos.clientX)+"px";
	mousepos=m;
});
window.addEventListener("mouseup",()=>{
	xwindowmove=null;
});
//窗口移动事件
class xwindow {
	constructor(title="xwindow") {
		this.xwindow=document.createElement("xwindow");
		this.xtitle=document.createElement("xtitle");
		this.xclose=document.createElement("xclose");
		this.xbody=document.createElement("xbody");
		this.xclose.innerHTML='<div class="xsmaller"><svg viewBox="0 0 1024 1024"><path d="M807.6288 550.8096H224.2048c-17.5104 0-30.72-16.7936-30.72-38.7072s13.3632-38.7072 30.72-38.7072h583.424c17.5104 0 30.72 16.7936 30.72 38.7072s-14.0288 38.7072-30.72 38.7072z" p-id="4625" fill="#1296db"></path><path d="M807.5776 554.0352H224.2048c-19.456 0-34.0992-18.0224-34.0992-41.9328s14.6432-41.9328 34.0992-41.9328h583.3728c19.456 0 34.0992 18.0224 34.0992 41.9328 0 23.1424-15.2576 41.9328-34.0992 41.9328zM224.2048 476.6208c-15.7696 0-27.648 15.36-27.648 35.4816s11.8784 35.4816 27.648 35.4816h583.3728c15.36 0 27.648-15.9232 27.648-35.4816s-11.8784-35.4816-27.648-35.4816z" fill="#1296db"></path></svg></div><div class="xcloser"><svg viewBox="0 0 1024 1024"><path d="M753.792 821.696L538.88 606.72 323.904 821.76 256 753.856l214.976-215.04L256 323.904 323.84 256l215.04 214.976L753.728 256l67.84 67.84L606.72 538.88l214.976 214.912-67.84 67.84z" fill="#d81e06"></path></svg></div>';
		this.xtitle.innerText=title;
		document.body.append(this.xwindow);
		this.xwindow.append(this.xtitle);
		this.xwindow.append(this.xclose);
		this.xwindow.append(this.xbody);
		
		this.xtitle.onmousedown=()=>{
			mousepos=event||window.event;
			xwindowmove=this;
		};
		var div=this.xclose.getElementsByTagName("div");
		div[0].onclick=()=>{this.smaller();};
		div[1].addEventListener("click",()=>{this.close();});
		this.xwindow.addEventListener("mousedown",()=>{
			var list=document.getElementsByTagName("xwindow");
			var zIndex=this.xwindow.style.zIndex,max=0;
			for(let index=0;index<list.length;++index){
				if(list[index].style.zIndex>zIndex)
					--list[index].style.zIndex;
				if(list[index].style.zIndex>max)
					max=list[index].style.zIndex;
			}
			if(this.xwindow.style.zIndex!=max||this.xwindow.style.zIndex==0)
				this.xwindow.style.zIndex=max+1;
			console.log(max);
		});
	}
	close(){
		this.xwindow.remove();
		delete this.xwindow;
		delete this.xtitle;
		delete this.xclose;
		delete this.xbody;
	}
	smaller(){
		// <svg t="1626225943236" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5671" width="200" height="200"><path d="M512 0a51.2 51.2 0 0 1 50.8416 45.2096L563.2 51.2v386.56h409.6a51.2 51.2 0 0 1 5.9904 102.0416L972.8 540.16h-409.6V972.8a51.2 51.2 0 0 1-102.0416 5.9904L460.8 972.8v-432.64H51.2a51.2 51.2 0 0 1-5.9904-102.0416L51.2 437.76h409.6V51.2a51.2 51.2 0 0 1 51.2-51.2z" p-id="5672" fill="#1296db"></path></svg>
		var div=this.xclose.getElementsByTagName("div")[0];
		div.innerHTML='<svg viewBox="0 0 1024 1024"><path d="M469.333333 469.333333V234.666667a21.333333 21.333333 0 0 1 21.333334-21.333334h42.666666a21.333333 21.333333 0 0 1 21.333334 21.333334V469.333333h234.666666a21.333333 21.333333 0 0 1 21.333334 21.333334v42.666666a21.333333 21.333333 0 0 1-21.333334 21.333334H554.666667v234.666666a21.333333 21.333333 0 0 1-21.333334 21.333334h-42.666666a21.333333 21.333333 0 0 1-21.333334-21.333334V554.666667H234.666667a21.333333 21.333333 0 0 1-21.333334-21.333334v-42.666666a21.333333 21.333333 0 0 1 21.333334-21.333334H469.333333z" p-id="2194" fill="#1296db"></path></svg>';
		div.onclick=()=>{this.bigger();};
		this.xbody.style.display="none";
		this.xwindow.style.height=getComputedStyle(this.xtitle,null)['height'];
		this.xtitle.style.height="100%";
		this.xclose.style.height="100%";
		this.xclose.style.borderRadius="0px 15px 15px 0px";
		this.xtitle.style.borderRadius="15px 0px 0px 15px";
	}
	bigger(){
		var div=this.xclose.getElementsByTagName("div")[0];
		div.innerHTML='<svg viewBox="0 0 1024 1024"><path d="M807.6288 550.8096H224.2048c-17.5104 0-30.72-16.7936-30.72-38.7072s13.3632-38.7072 30.72-38.7072h583.424c17.5104 0 30.72 16.7936 30.72 38.7072s-14.0288 38.7072-30.72 38.7072z" p-id="4625" fill="#1296db"></path><path d="M807.5776 554.0352H224.2048c-19.456 0-34.0992-18.0224-34.0992-41.9328s14.6432-41.9328 34.0992-41.9328h583.3728c19.456 0 34.0992 18.0224 34.0992 41.9328 0 23.1424-15.2576 41.9328-34.0992 41.9328zM224.2048 476.6208c-15.7696 0-27.648 15.36-27.648 35.4816s11.8784 35.4816 27.648 35.4816h583.3728c15.36 0 27.648-15.9232 27.648-35.4816s-11.8784-35.4816-27.648-35.4816z" fill="#1296db"></path></svg>';
		div.onclick=()=>{this.smaller();};
		this.xwindow.style.height=100/7.0*parseFloat(getComputedStyle(this.xtitle,null)['height'])+"px";
		this.xtitle.style.height="7%";
		this.xclose.style.height="7%";
		this.xbody.style.display="inline";
		this.xclose.style.borderRadius="0px 15px 0px 0px";
		this.xtitle.style.borderRadius="15px 0px 0px 0px";
	}
}
a=new xwindow();
b=new xwindow();
c=new xwindow();
