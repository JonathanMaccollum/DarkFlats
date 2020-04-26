---
title: C/2019 Y4 Atlas near NGC2403
date: 2020-04-09
---

{% raw %}
<div id="osdNGC2403at135mm" style="width:800px; height:510px; background-color:#0C0B0C"></div>
<script src="/openseadragon/openseadragon.min.js"></script>
<script type="text/javascript">
   (function(){
      var viewer = OpenSeadragon({
         id: "osdNGC2403at135mm",
         prefixUrl: "/openseadragon/images/",
         showNavigationControl:false
      });

      var uiElements = {
         viewer:document.getElementById('osdNGC2403at135mm')
      }
      function source(author, name, x=0, y=0, width=1,rotation=0,opacity=1 ){
         return { author, name, x, y, width, rotation, opacity }
      }
      var rotateIntervalMs=10000;
      var sources = [
         source('JonathanMacCollum','NGC2403_135mm_r3'),
         source('JonathanMacCollum','NGC2403_135mm_r3_WithComet'),
         source('JonathanMacCollum','NGC2403_135mm_r3_CometOnly',0,0,1,0,0.3),
         source('JonathanMacCollum','NGC2403_1000mm',0.1787,0.451,0.0671,101.4,1),
         source('JonathanMacCollum','NGC2403_135mm_Annotations',0,0,1,0,0.5),
         ];
      function refreshAt(index,replace=false){
         var src=sources[index];
         viewer.addTiledImage({
                  tileSource:'/'+src.author+'.'+src.name+'.xml',
                  index:index,
                  replace:replace,
                  x:src.x,
                  y:src.y,
                  width:src.width,
                  degrees:src.rotation,
                  opacity: src.opacity
               })
      }
      function startImageLoad(){
         var delay = 250;
         sources.forEach(
               (src,i)=>{
                  setTimeout(()=>{
                     refreshAt(i, false);
                  },i*delay);            
         });
      }

      function update(i, x, y, w, r, o) {
         sources[i].x=x;
         sources[i].y=y;
         sources[i].width=w;
         sources[i].rotation=r;
         sources[i].opacity=o;
         refreshAt(i, true)
      }
      function swap3(i1, i2, i3){
         var val=sources[i1];
         sources[i1]=sources[i2];
         sources[i2]=sources[i3];
         sources[i3]=val;
         refreshAt(i1, true);
         refreshAt(i2, true);
         refreshAt(i3, true);
      }
      
      function swapTargets(){
         swap3(0,1,2);
      }
      
      function onKeyUp(key,x){
         uiElements.viewer.addEventListener('keyup',(event)=>{
               const keyName = event.key;
               if(keyName===key){
                  x();
               }
         });
      }
      var swapInterval = window.setInterval(swapTargets,rotateIntervalMs);
         onKeyUp("n",()=>{
               swapTargets();
                  window.clearInterval(swapInterval);
                  swapInterval = window.setInterval(swapTargets,rotateIntervalMs);
         });
      startImageLoad();



   })();
</script>
{% endraw %}

NGC2403 and C2019 Y4 Atlas  Widefield in Camelopardalis.

*Work in Progress*

The project is a composite mosaic of the comet C/2019 Y4 Atlas as it passes through the Widefield region of Camelopardalis between the dates of 2020-04-02 and 2020-04-15.  The background image was taken across 3 nights in December 2019 before the comet arrived into the field of view and consists of 6 hours of integration time. Then the same FOV was shot again on 2019-04-01 and 2020-04-09 (to process) with the Comet in frame. The comet image was stacked independently, and the two data sets were combined. The data was captured using a Rokinon 135mm f2.0 lens at f2.0, and an asi071mc camera cooled to -10C.

Additional data is being acquired for each night between 2019-04-03 and 2020-04-15 using my 1000mm f4.9 newt as I've been able to shoot through some partially cloudy nights with some success so far. That data has yet to be processed, but hope to add them to this image as time permits me to process.

The comet is moving from the mid-upper left corner of this field of view, and will be passing through the view of the dusty nebula (HSVMT 25) 2020-04-11 through 2020-04-13.  I encourage anyone with dark skies and a fast scope to give it a shot before the moon comes up this weekend. It should make for a very interesting composition!

![C2019 Y4 Atlas Early April](/NGC2403_Comet2019Y4Atlas_Planning.png "C2019 Y4 Atlas Early April")


Follow Me on [Instagram](
https://www.instagram.com/jonathanmaccollum/) | [Astrobin](https://www.astrobin.com/users/eigenVector/)

