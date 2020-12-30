#### Mock only part of the module. ####

 - Sometimes, we want to mock only part of exported methods or classes from a lib. We should use jest.requireActual() for the imports that we don't want to mock.

