---
title: NGC281 - Pacman Nebula
date: 2020-02-01
---

{% raw %}
<div id="openseadragon1" style="width:800px; height:510px; background-color:#0C0B0C"></div>
<script src="/DZI/openseadragon/openseadragon.min.js"></script>
<script type="text/javascript">
    var viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "/openseadragon/images/",
        showNavigationControl:false
    });
    viewer.addTiledImage({
        tileSource: '/DZI/eigenVector.Pacman.xml',
        index:0
    });
</script>
{% endraw %}

The Pacman Nebula is a bright emission nebula in the constellation Cassiopeia. This image was taken in narrowband SHO using the hubble pallet and consists of over 16 hours of exposure time.

[Click for Full Details](/Deep-Sky/Pacman/SHO/)