import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {AppConfig} from 'src/app-config';

@inject(AppConfig, HttpClient)
export class Dataservice {

  constructor(appConfig, httpClient) {
    this.appConfig = appConfig;
    this.client = httpClient;
  }

  doShutterPress(payload) {
    return this.client.createRequest()
      .asGet()
      .withBaseUrl(this.appConfig.BERRYCAM_URL)
      .withParams(payload)
      .send();
  }
}
