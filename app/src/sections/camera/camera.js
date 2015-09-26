import {CameraDatamodel} from './camera-datamodel';
import {CameraPayloadBuilder} from './camera-payload-builder';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Dataservice} from 'src/services/dataservice';
import {AppConfig} from 'src/app-config';

@inject(AppConfig, CameraDatamodel, EventAggregator, Dataservice, CameraPayloadBuilder)
export class Camera {

  constructor(appConfig, data, eventAggregator, dataservice, payloadBuilder) {
    this.appConfig = appConfig;
    this.data = data;
    this.payloadBuilder = payloadBuilder;
    this.dataservice = dataservice;
    this.eventAggregator = eventAggregator;
    this.cameraSettings = data.cameraSettings;
    this.imageSettings = data.imageSettings;
    this.imageAdjustments = data.imageAdjustments;
    this.fx = data.fx;
    this.isBusy = false;
    this.currentImageFullPath = null;
    this.message = '';
  }

  resetCameraSettings() {
    this.data.reset();
  }

  clearPhoto() {
    this.currentImageFullPath = null;
    this.message = '';
  }

  doShutterPress() {
    this.clearPhoto();
    this.eventAggregator.publish('ACTIVITY:RUNNING', true);
    this.isBusy = true;

    this.dataservice.doShutterPress(this.payloadBuilder.buildPayload())
      .then(result => {
        this.currentImageFullPath = this.appConfig.BERRYCAM_SERVER_URL + '/' + JSON.parse(result.response).filename;
        console.log('Image file full path is', this.currentImageFullPath);
        this.eventAggregator.publish('ACTIVITY:RUNNING', false);
        this.isBusy = false;
        this.message = 'Your photo was successful';
      })
      .catch((err) => {
        this.currentImageFullPath = this.appConfig.FAILURE_IMAGE;
        this.eventAggregator.publish('ERRORS', 'Photo FAILED');
        this.eventAggregator.publish('ACTIVITY:RUNNING', false);
        this.isBusy = false;
        this.message = 'Your photo was unsuccessful - here\'s a nice car picture instead';
      });
  }
}
