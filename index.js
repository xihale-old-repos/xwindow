class xwindow {
	constructor(title="xwindow") {
		this.xwindow=document.createElement("xwindow");
		this.xtitle=document.createElement("xtitle");
		this.xclose=document.createElement("xclose");
		this.xbody=document.createElement("xbody");
		this.xclose.innerHTML='<svg t="1626064796224" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1195" width="200" height="200"><path d="M753.792 821.696L538.88 606.72 323.904 821.76 256 753.856l214.976-215.04L256 323.904 323.84 256l215.04 214.976L753.728 256l67.84 67.84L606.72 538.88l214.976 214.912-67.84 67.84z" fill="#d81e06" p-id="1196"></path></svg>';
		this.xtitle.innerText=title;
		document.body.append(this.xwindow);
		this.xwindow.append(this.xtitle);
		this.xwindow.append(this.xclose);
		this.xwindow.append(this.xbody);
		
		this.xtitle.onmousedown=()=>{
			let mousepos=event||window.event;
			this.xtitle.onmousemove=(m)=>{
				this.xwindow.style.top=parseFloat(getComputedStyle(this.xwindow,null)['top'])+(m.clientY-mousepos.clientY)+"px";
				this.xwindow.style.left=parseFloat(getComputedStyle(this.xwindow,null)['left'])+(m.clientX-mousepos.clientX)+"px";
				mousepos=m;
			};
		};
		this.xtitle.onmouseup=()=>{
			this.xtitle.onmousemove=null;
		};
		this.xclose.onclick=()=>{
			this.xwindow.remove();
		};
	}
}
a=new xwindow();