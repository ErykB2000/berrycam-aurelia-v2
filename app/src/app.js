export class App {
  configureRouter(config, router) {
    this.router = router;
    config.map([
      {route: ['', 'camera'], moduleId: 'src/sections/camera/camera', nav: true, title: 'Camera'}
    ]);
  }
}
