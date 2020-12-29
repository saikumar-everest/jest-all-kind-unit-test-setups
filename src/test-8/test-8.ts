import {Anonymous} from './anonymous';

export class Caller {
  doAnonymous(key: string) {
    const anonymous = new Anonymous(key);
    return anonymous.call({key});
  }
}
