---
title: Cocoon Nebula (IC 5146), LDN 1042 and vdB147 in Cygnus
date: 2020-10-24 07:00:00 PM
permalink: /Deep-Sky/Cocoon/index.html
---

![Cocoon Nebula (IC 5146), LDN 1042 and vdB147 in Cygnus](/Deep-Sky/Cocoon/Cocoon%20OSC.L3.60x240s.Solved.DBE.BN.CC.NR.HSVR.ArcSin.MS.LHE.DeconStars.LSLHE.MMTNR.MTStars.NR.Draft2.Web.jpg "Cocoon Nebula (IC 5146), LDN 1042 and vdB147 in Cygnus")

This photo was taken this past new moon in October 2020, and comprises of four hours worth of exposures. The cocoon nebula is the red emissions nebula and contains a small star cluster that's forming in the middle. Surrounding the nebula is a dense molecular cloud of dust some of which reflects the blue glowing light of a bright nearby star.

8in f4.9 Newtonian Cooled Color Camera Bortle 4 skies 60x4min

[Full Resolution](/Deep-Sky/Cocoon/Cocoon%20OSC.L3.60x240s.Solved.DBE.BN.CC.NR.HSVR.ArcSin.MS.LHE.DeconStars.LSLHE.MMTNR.MTStars.NR.Draft2.png)

![Cropped](/Deep-Sky/Cocoon/Crop.PNG "Cropped view of Cocoon Nebula")

In this crop one can get a closer look at the emission nebula, the young star cluster that has formed within as well as the blue reflection nebula to the left.

![Annotated](/Deep-Sky/Cocoon/Crop.Annotated.PNG "Annotated view of Cocoon")

Follow Me on [Instagram](
https://www.instagram.com/jonathanmaccollum/) | [Astrobin](https://www.astrobin.com/users/eigenVector/) | [DarkFlats](https://darkflats.com)


Equipment: 

* Orion 8in F4.9 1000mm Newtonian Reflector

   * Flocked / Primary mirror replaced due to turned-down-edge

* Sky-Watcher F4 Aplanatic Coma Corrector

* Astronomik's L3 UV/IR Luminance Filter

* Orion Atlas Pro

* ASI071mc Pro cooled to -15C

* ZWO OAG + ZWO EFW

* Data Acquired using [N.I.N.A](https://nighttime-imaging.eu) and Guided with [PHD2](https://openphdguiding.org/)

Total integration time: 4hr 00min

All pre-processing and post-processing was done in PixInsight. Full details below.

The resulting image is a combination of the following steps:

* Inspected all subs for bad images with Blink, discarding subs containing clouds

* Calibrated all subs with their corresponding master flat and master dark and then debayered

* Used sub-frame selector to weight all images based on the following weighting

```C

    -ApprovalExpression "FWHM<4.5 && Eccentricity<0.65"

    -WeightingExpression "(5*(1-(FWHM-FWHMMin)/(FWHMMax-FWHMMin))

    + 15*(1-(Eccentricity-EccentricityMin)/(EccentricityMax-EccentricityMin))
    
    + 15*(SNRWeight-SNRWeightMin)/(SNRWeightMax-SNRWeightMin)
    
    + 20*(Stars-StarsMin)/(StarsMax-StarsMin))
    
    + 30" 

```

* Selected the best sub from sub-frame selector and blink to use as a reference frame for aligning and integration

* Integrated with Adaptive Normalization using Generalized ESD Pixel Rejection

    ![Image Integration](/Deep-Sky/Cocoon/00.ImageIntegration.JPG)

[RGB Processing]

* Remove unwanted background gradients caused by light pollution

    ![Background Extraction](/Deep-Sky/Cocoon/01.DBE.JPG)

* Background Neutralization

    ![Background Neutralization](/Deep-Sky/Cocoon/02.BN.JPG)

* Color Calibration

    ![Color Calibration](/Deep-Sky/Cocoon/03.CC.JPG)

* Additional Background Extraction

    ![Additional Background Extraction](/Deep-Sky/Cocoon/04.DBE.JPG)

* Even Working Space for all channels

    ![RGB Workingspace ](/Deep-Sky/Cocoon/05.RGBWS.JPG)

* Noise Reduction using TGV

    ![TGV Noise Reduction](/Deep-Sky/Cocoon/06.TGVNR.JPG)

* Restore Color of saturated stars

    ![Restore Saturated Star Color](/Deep-Sky/Cocoon/07.HSVRS.JPG)

    ![Restore Saturated Star Color](/Deep-Sky/Cocoon/08.HSVComb.JPG)

* ArcSinh Stretch

    ![ArcSinh Stretch](/Deep-Sky/Cocoon/09.ArcSinh.JPG)

* Masked Stretch

    ![Masked Stretch](/Deep-Sky/Cocoon/10.MS.JPG)

* Clip the Tail of the RGB histogram

    ![Clip Tail](/Deep-Sky/Cocoon/11.HT.JPG)

* Reduce stars with a contours based star mask

    ![Star Reduction](/Deep-Sky/Cocoon/12.MTContours.JPG)


![Final RGB Before Processing Luminance](/Deep-Sky/Cocoon/13.RGBBeforeLCombination.JPG)


[Luminance Processing]

* A synthetic Luminance was created after the previous color calibration and setting the RGB Working Space previously mentioned

    ![Extract Luminance](/Deep-Sky/Cocoon/L.01.Baseline.JPG)

* Sharpen the Details using MMT and a mask

    ![Sharpen Details with MMT](/Deep-Sky/Cocoon/L.02.MMTSharpen.JPG)

* Noise Reduction was done using TGVDenoise with a low contrast mask and an auto-stretched local support, SCNR to remove the green overcast and MMT with a very protective luminance mask as documented by [Jon Rista](https://jonrista.com/the-astrophotographers-guide/pixinsights/effective-noise-reduction-part-2/) 

    ![TGV Noise Reduction](/Deep-Sky/Cocoon/L.03.TGVNR.JPG)

    ![MMT Noise Reduction](/Deep-Sky/Cocoon/L.04.MMTNR.JPG)

* Initial Stretch using Masked Stretch

    ![Masked Stretch](/Deep-Sky/Cocoon/L.05.MS.JPG)

* Bring the tail of the black point

    ![Bring in the Tail of the Histogram](/Deep-Sky/Cocoon/L.06.HT.JPG)

* Additional Stretch using Masked Stretch

    ![Masked Stretch](/Deep-Sky/Cocoon/L.07.MS.JPG)

* Local Histogram Equalization

    ![Local Histogram Equalization](/Deep-Sky/Cocoon/L.08.LHE.JPG)

* Reduce stars with a contours based star mask

    ![Star Reduction](/Deep-Sky/Cocoon/L.09.MTContours.JPG)


![Final Luminance before Combination](/Deep-Sky/Cocoon/L.10.Final.JPG)

[Combination and Final Adjustments]

* Luminance was combined with RGB using LRGBCombination
    ![](/Deep-Sky/Cocoon/LRGB.00.LRGBCombination.JPG)

* Enhance the blue reflection nebulas using a blue chrominance mask and curves, re-applying luminance after adjusting

    ![](/Deep-Sky/Cocoon/LRGB.01.BlueChromMask.JPG)
    ![](/Deep-Sky/Cocoon/LRGB.02.CurvesBlue.JPG)

* Enhance the Red Emission nebula using a red chrominance mask and Local Histogram Equalization

    ![](/Deep-Sky/Cocoon/LRGB.03.RedChromMask.JPG)
    ![](/Deep-Sky/Cocoon/LRGB.04.LHERed.JPG)

* Further reduce stars using a new contours based mask and morphological transformation
    ![](/Deep-Sky/Cocoon/LRGB.05.MTContours.JPG)

* Sharpen star cores using deconvolution and a star mask
    ![](/Deep-Sky/Cocoon/LRGB.06.DeconStarCores.JPG)

* Curves to adjust the overall color tones
    ![](/Deep-Sky/Cocoon/LRGB.07.Curves.JPG)

* Additional noise reduction in the dark nebula regions
    ![](/Deep-Sky/Cocoon/LRGB.08.NR.JPG)

* Further Sharpen star cores using Unsharp Mask and a star mask
    ![](/Deep-Sky/Cocoon/LRGB.09.USMStarCores.JPG)

* Additional Local Histogram Equalization on the Red emission nebula
    ![](/Deep-Sky/Cocoon/LRGB.10.LHERed.JPG)

* Final Curves adjustment to adjust tones
    ![](/Deep-Sky/Cocoon/LRGB.11.Curves.JPG)

* An ICC Profile was applied to enable Black Point Compensation

{% commento %}