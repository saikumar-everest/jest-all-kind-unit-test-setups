import {Anonymous} from './anonymous';
import {Caller} from './caller';

jest.mock('./anonymous');

describe('Test for creating anonymous class instance and expect a method call on it', () => {
  it('should do anonymous call', () => {
    const key = '1111';
    const caller = new Caller();

    caller.doAnonymous(key);

    expect(Anonymous).toHaveBeenCalledWith('1111');
    const mockAnonymousClassInstance = (Anonymous as jest.Mock).mock.instances[0];
    expect(mockAnonymousClassInstance.call).toBeCalledWith({key: '1111'});
  });
});
