const container=document.querySelector(".container");

const bodyEl=document.querySelector("body");

const arr=["crash","kick","snare","tom"];

arr.forEach(kit=>{
  const btn=document.createElement("button");
  image=kit+".png";

  btn.classList.add("btn");
  btn.innerText=kit;
  btn.style.backgroundImage="url("+kit+".png)";
  container.appendChild(btn);

  const audio=document.createElement("audio");
  audio.src=kit+".mp3";

  container.appendChild(audio);

  btn.addEventListener("click",()=>{
    audio.play();
  });

  window.addEventListener("keydown",(event)=>{
    if(event.key===kit.slice(0,1)){
      audio.play();

      btn.style.transform="scale(.9)";
      setTimeout(()=>{
        btn.style.transform="scale(1)";
      },0)
    }
  });
});