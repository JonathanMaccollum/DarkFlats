---
title: Smaug - The Dragon of Northwestern Cygnus in SHO
date: 2020-05-04 01:00:00
permalink: /Widefield/Cygnus/NorthWestern/index.html
---


![Smaug - The Dragon of Northwestern Cygnus](/Widefield/DWB111/DWB111.BHS_OIII.34x300s.BHS_Sii.55x300s.Ha.2x300s.Ha.36x600s.Oiii.37x600s.Draft5.Edit2.web.jpg "Smaug - The Dragon of Northwestern Cygnus")

[Full Resolution](/Widefield/DWB111/DWB111.BHS_OIII.34x300s.BHS_Sii.55x300s.Ha.2x300s.Ha.36x600s.Oiii.37x600s.Draft5.Edit2.png)



Follow Me on [Instagram](
https://www.instagram.com/jonathanmaccollum/) | [Astrobin](https://www.astrobin.com/users/eigenVector/) 

Equipment: 

* Celestron CGEM Mount | Orion Atlas Pro

* Rokinon 135mm f2 at f2

* asi183mm PRO at -15 C

* Astrondon 5nm Ha | Astrodon 3nm Oiii | Baader High Speed Oiii | Baader High Speed Sii

* Widefield Rig + AF3 by Deep Sky Dad

Acquisition:

* Half-Unity Gain (53 offset 10)

* Ha

    * Astrodon 5nm: 37x10min

* Oiii

    * Astrodon 3nm Oiii: 37x10min

    * BHS Oiii: 34x5min

* Sii

    * BHS Sii: 55x5min

* Totals

    * Ha: 6hr 10min

    * Oiii: 9hr

    * Sii: 4hr 35min

    * Total: 19hr 45 min


Session sequenced using Nighttime Imaging in Astronomy: [N.I.N.A](https://nighttime-imaging.eu/)

All pre-processing and post-processing was done in PixInsight. 

Processing Details:

* The data corresponding to each filter was calibrated with a master flat and master dark based on each session and camera settings used, cosmetically corrected for hot-pixels, star-aligned and then integrated to produce a master light.

* A synthetic luminance was created by integrating each master using the master Ha image as the reference image

    * Combination: Average

    * Normalization: Additive with Scaling

    * Weights: Noise evaluation

    * Scale Estimator: Median absolute deviation from the median (MAD)

    * Rejection: None

* All masters (Ha, Oiii, Sii and the synthetic L) were cropped using Dynamic Crop, and gradients were removed using Dynamic Background Extraction

Color Image Processing

* A color image was created by applying Linear Fit to the Ha and Sii masters using the Oiii master as a reference

* The stars were removed from each master by Stretching using histogram transformation, applying Starnet to each, reverse-stretching to the same mid-point/black-point documented by [thecoldestnights.com](https://thecoldestnights.com/2020/06/pixinsight-deconvolution-on-starless-images/). The stars themselves were captured by subtracting the original from the starless version for processing separately

* The large halos prominent in Oiii were reduced using Multiscale Median Transformation targeting the large scale layers with a clone-stamp based mask of large circles covering the halos. This technique was also applied to the Sii master.

* Noise reduction was applied to the Oiii data targeting the darker regions of the image

* The three masters were combined using Channel Combination with the following map:

    * Sii->Red

    * Ha->Green

    * Oiii->Blue

* A slight curves adjustment was applied using the Halos mask to minimize the impact of the Oiii halos in the resulting color image




* An ICC Profile was applied to enable Black Point Compensation

{% commento %}