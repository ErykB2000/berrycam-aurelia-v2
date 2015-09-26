import {CameraDatamodel} from './camera-datamodel';
import {AppConfig} from 'src/app-config';
import {inject} from 'aurelia-framework';
import moment from 'moment';

@inject(AppConfig, CameraDatamodel)
export class CameraPayloadBuilder {

  constructor(appConfig, cameraData) {
    this.appConfig = appConfig;
    this.cameraData = cameraData;
  }

  createImageDimension(imageSize) {
    let scales = this.appConfig.IMAGE_SCALES;
    return {
      width: this.appConfig.DEFAULT_IMAGE_DIMENSIONS.width / scales[imageSize],
      height: this.appConfig.DEFAULT_IMAGE_DIMENSIONS.height / scales[imageSize]
    };
  }

  buildPayload() {
    let cameraData = this.cameraData,
      dimensions = this.createImageDimension(cameraData.size.selectedValue),
      opts = {
        w: dimensions.width,
        h: dimensions.height,
        exif: this.appConfig.EXIF,
        q: cameraData.compression.selectedValue,
        awb: cameraData.whiteBalance.selectedValue,
        mm: cameraData.metering.selectedValue,
        ev: cameraData.ev.selectedValue,
        ex: cameraData.exposure.selectedValue,
        sh: cameraData.sharpness.selectedValue,
        br: cameraData.brightness.selectedValue,
        co: cameraData.contrast.selectedValue,
        sa: cameraData.saturation.selectedValue,
        ifx: cameraData.fx.selectedValue,
        ISO: cameraData.iso.selectedValue,
        t: 1000,
        mode: 'photo'
      };

    if (cameraData.vflip.selectedValue === true || cameraData.vflip.selectedValue === 'true') {
      opts.vf = true;
    }

    if (cameraData.hflip.selectedValue === true || cameraData.hflip.selectedValue === 'true') {
      opts.hf = true;
    }

    return opts;
  }
}
