---
title: NGC281 - Pacman Nebula
date: 2020-02-01
permalink: /Deep-Sky/Pacman/SHO/index.html
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

Follow Me on [Instagram](
https://www.instagram.com/jonathanmaccollum/) | [Astrobin](https://www.astrobin.com/users/eigenVector/)

The Pacman Nebula is a bright emission nebula in the constellation Cassiopeia. 

Equipment:

* Orion 8in F4.9 1000mm Newtonian Reflector

   * Flocked / Primary mirror replaced due to turned-down-edge

* Skywatcher F4 Aplanatic Coma Corrector

* Astrodon I Series 5nm Ha, 3nm Oiii, 5nm Sii narrowband filters

* ASI183mm Pro cooled to -15C

* Celestron CGEM Mount

   * Self tuned / hacks to get guiding stable include:

      * Intentional offset polar alignment so dec always pulses in one direction

      * Balance "west" heavy (rather than the recommended east) so that the ota "falls" onto the gear teeth rather than get "lifted"

      * Factor Reset hand-controller daily (to prevent cgem from being possessed and forgetting where the meridian is on subsequent night)

      * Dither in RA only

* Data Acquired using [N.I.N.A](https://nighttime-imaging.eu) and Guided with PHD2


Acquisition Details (excluding rejected frames):

* Ha:   Best 36 of 40x10min (6 hours 00 minutes)

* Oiii: Best 27 of 44x10min (4 hours 30 minutes)

* Sii:  Best 34 of 51x10min (5 hours 40 minutes)

* Total: Bests 16 hours 10 minutes of 22 hours 30 minutes

The resulting image is a combination of the following steps:


* Inspected all subs for bad images with Blink, discarding 40 subs due to clouds or otherwise poor guiding

* Calibrated all subs with their corresponding master flat and master dark

* Used subframe selector to weight Ha, Oiii, Sii separately for integrating each

```C

(20*(1-(FWHM-FWHMMin)/(FWHMMax-FWHMMin))

+ 10*(1-(Eccentricity-EccentricityMin)/(EccentricityMax-EccentricityMin))

+ 30*(SNRWeight-SNRWeightMin)/(SNRWeightMax-SNRWeightMin)

+ 20*(Stars-StarsMin)/(StarsMax-StarsMin))

+ 30

```

* Selected the best sub from subframe and blink to use as a reference frame which stacking each set

* Created a *SNR Optimized Synthetic Luminance* by integrating the three resulting stacks [documented](https://pixinsight.com/forum/index.php?topic=6042.15) by Juan Conejero of the PixInsight Development team.

* Cropped the stacking edges of the integrated masters

* Linear fit the Ha and Sii images to Oiii for the initinal color balance

* Combined the Sii as Red, Ha as Green and Oiii as the Blue channel to create a color RGB image


Luminance Processing:

* Dynamic Background Extraction

   * 6 large points (Radius: 75 and 50)

   * Subtraction/Normalized

* Automatic Background Extractor

   * Function degree 1 with normalization

* Deconvolution was done on a separate copy of the luminance with

    * No deringing

    * wavelet regularization with 5 layers and strong but reducing amounts/thresholds

    * A starmask was created from a separate unmodified copy to replace the stars with the origional superluminance, eliminating the ringing artifacts from deconvolution as similarly [documented](https://www.youtube.com/watch?v=R4bK_InTGWI)  by [/u/OkeWoke](https://www.reddit.com/user/OkeWoke/)

* Noise Reduction was done using TGV Denoise with a low contrast mask and an autostretched local support and MMT with a very protective luminance mask

* Combination of Histogram Transformation and Masked Stretch

* Deconvolution with a star mask and Parametric PSF to tighten star cores

* Morphological Transformation with a contours based star to shrink the overall intensity stars

* Local Histogram Equalization - Two rounds at high scale with low amounts

* S-Curve for overall contrast

* HDR Multiscale Transformation - 6 Layers with a mask protecting the stars





SHO Processing:

* Dynamic Background Extraction

   * 19 large points using Subtraction/Normalized

* RGB Workingspace set to 1,1,1

* Remove Magenta from SHO Stars (Invert+SCNR Green+Invert)

* Noise Reduction using TGV Denoise with a low contrast mask and an autostretched local support

* Noise Reduction using MMT with a very protective luminance mask

* Morphological Transformation with a contours based star to shrink the overall intensity stars

* Histogram Transformation to stretch to non-linear

* Channel Combination in ``CIE L*A*B`` mode to add the Synthetic Luminance to the SHO color image

* Additional Star Shaping with Morphological Transformation with Star Masks and Contours based star masks

* Additional sharpening and noise reduction using ATrousWaveletTransform

* Dark Structure Enhance script to bring out dark gobules throughout the nebula

* Various curves to bring the Ha background to Brown, Soften the Green Overcast, and enhance contrast

{% commento %}