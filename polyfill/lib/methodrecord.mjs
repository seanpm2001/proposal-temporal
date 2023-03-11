import GetMethod from 'es-abstract/2022/GetMethod.js';

export class MethodRecord {
  constructor(receiver, methods = []) {
    this.receiver = receiver;

    const nMethods = methods.length;
    for (let ix = 0; ix < nMethods; ix++) {
      this.lookup(methods[ix]);
    }
  }

  lookup(method) {
    this[method] = GetMethod(this.receiver, method);
  }
}
