export class BaseDatamodel {
  reset() {
    Object.keys(this).forEach(key => {
      let prop = this[key];
      prop.reset && prop.reset();
    });
  }
}
