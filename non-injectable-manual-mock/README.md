#### Non-injectable dependencies present. Used manual mocks. ####

 - Code under test is making some 3rd party calls. If you think you will use a common setup across code for a lib mock, then we will use manual mocks by moving all the mock data setup to a single place(`__mocks__ /` which is to the same level of `node_modules/`).