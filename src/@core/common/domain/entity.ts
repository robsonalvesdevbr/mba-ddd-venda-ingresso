export abstract class Entity {
  readonly id: any;

  abstract toJSON(): any;
  equals(obj: this) {
    if (obj === null || obj === undefined) {
      return false;
    }
    if (this === obj) {
      return true;
    }

    if (this.constructor !== obj.constructor) {
      return false;
    }

    if (obj.id === undefined) {
      return false;
    }

    if (obj.constructor.name !== this.constructor.name) {
      return false;
    }

    return obj.id.equals(this.id);
  }
}
