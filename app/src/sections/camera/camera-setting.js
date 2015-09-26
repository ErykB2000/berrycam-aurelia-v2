import {inject} from 'aurelia-framework';
import {Storage} from 'src/utils/storage';

@inject(Storage)
export class CameraSetting {

  constructor(label, values, defaultValue, storage) {
    this.storage = storage || new Storage();
    this.label = label;
    this.values = values || [];
    this.defaultValue = defaultValue || this.values[0];
    this.selectedValue = this.storage.getItem(this.label) || this.defaultValue;
  }

  get selected() {
    return this.selectedValue;
  }

  set selected(val) {
    this.selectedValue = val;
    this.storage.setItem(this.label, val);
  }

  reset() {
    this.selected = this.defaultValue;
  }
}
