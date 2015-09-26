export class AppConfig {

  DEFAULT_IMAGE_DIMENSIONS = {
    width: 2592,
    height: 1944
  };

  BERRYCAM_SERVER_URL = window.location.origin;

  BERRYCAM_URL = this.BERRYCAM_SERVER_URL + '/berrycam';

  EXIF = 'IFD1.Software=BerryCam -x EXIF.MakerNote=BerryCam -x EXIF.UserComment=BerryCam';

  IMAGE_SCALES = {
    Thumbnail: 12,
    Tiny: 4,
    Small: 2,
    Medium: 1.333,
    Large: 1
  };

  FAILURE_IMAGE = '/images/failed.jpg';
}
