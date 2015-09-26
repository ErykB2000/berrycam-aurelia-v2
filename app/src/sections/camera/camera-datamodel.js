import {CameraSetting} from './camera-setting';
import {inject} from 'aurelia-framework';
import {BaseDatamodel} from 'src/datamodels/base-datamodel';

export class CameraDatamodel extends BaseDatamodel {

    buildArray(lowEnd, highEnd, inc) {
        let incr = inc || 1;
        let list = [];
        for (let i = lowEnd; i <= highEnd; i += incr) {
            list.push(i);
        }
        return list;
    }

    metering = new CameraSetting('Metering', ['Matrix', 'Average', 'Spot', 'Backlit']);

    whiteBalance = new CameraSetting('WB', ['Auto', 'Sun',
        'Cloud', 'Shade', 'Tungsten',
        'Fluorescent', 'Incandescent', 'Flash',
        'Horizon'], 'Auto');

    ev = new CameraSetting('EV', this.buildArray(-10, 10), '0');

    exposure = new CameraSetting('Exposure', ['Auto', 'Night', 'Nightpreview', 'Backlight',
        'Spotlight', 'Sports', 'Snow',
        'Beach', 'Verylong', 'Fixedfps', 'Antishake', 'Fireworks'], 'Auto');

    sharpness = new CameraSetting('Sharpness', this.buildArray(-100, 100, 5), '10');

    brightness = new CameraSetting('Brightness', this.buildArray(0, 100, 5), '60');

    contrast = new CameraSetting('Contrast', this.buildArray(-100, 100, 5), '5');

    saturation = new CameraSetting('Saturation', this.buildArray(-100, 100, 5), '5');

    size = new CameraSetting('Size', ['Thumbnail', 'Tiny', 'Small', 'Medium', 'Large']);

    iso = new CameraSetting('ISO', ['100', '200', '400']);

    compression = new CameraSetting('Compression', this.buildArray(10, 100, 10), '25');

    fx = new CameraSetting('FX', ['None', 'Negative', 'Solarise',
        'Posterise', 'Film', 'Blur', 'Saturation',
        'Sketch', 'Denoise', 'Emboss',
        'Oilpaint', 'Hatch', 'Gpen',
        'Pastel', 'Watercolour', 'Colourswap',
        'Washedout', 'Colourpoint', 'Colourbalance', 'Cartoon']);

    vflip = new CameraSetting('VFlip', ['true', 'false'], 'false');

    hflip = new CameraSetting('HFlip', ['true', 'false'], 'false');

    cameraSettings = [
        this.whiteBalance,
        this.metering,
        this.ev,
        this.exposure,
        this.iso
    ];

    imageAdjustments = [
        this.sharpness,
        this.brightness,
        this.contrast,
        this.saturation
    ];

    imageSettings = [
        this.size,
        this.compression,
        this.vflip,
        this.hflip
    ];

    flips = [
        this.vflip,
        this.hflip
    ];
}
