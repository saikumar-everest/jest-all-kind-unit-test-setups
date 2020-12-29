# jest-all-kind-unit-test-setups

Purpose of this project is to act as reference for all kind of unit test setups written in [Jest](https://jestjs.io/) test framework

We encourage [AAA(Arrange - Act - Assert) format](http://wiki.c2.com/?ArrangeActAssert) for structuring any unit(actually any!) test.

> Note: These setups are just some of the possible to write. I agree that, for the same test, one can write with many different setups also.

### List of different test setups for scenarios

Test-1: No dependencies present.

- A simple test setup that expects a simple calculation without any mocks or external dependencies in it.

Test-2: Non-injectable dependencies present. Used automatic mocks.

- Code under test is making some calls to 3rd party lib methods(ex, moment.format()), which we usually believe(it works as expected) and won't try to include them in our test. But if in case those lib methods
  1. need to contact database or OS or internet(ex, s3.listBuckets()) OR
  2. the final result is depending on the return value of lib methods
     
  then we need to mock them to write a proper unit test.
  
  // TODO: Failed to add another test with in same describe by making changes to the test setup, that's specific to that particular test. Ex, I want to reject promise for S3.listBuckets()

Test-3: Similar to Test-2, but with different mock setup. Used manual mocks.
 - Similar to Test-2, code under test is making some 3rd party calls. If you think you will use a common setup across code for a lib mock, then we will use manual mocks by moving all the mock data setup to a single place(`__mocks__ /` which is to the same level of `node_modules/`).

Test-4: Non-injectable dependencies with a defaultly exported lib(ex, axios)

Test-5: Same as Test-4, but done with different test setup.

Test-5: Injectable dependency. Avoid mocking all the dependencies that are needed to instantiate an object.

Test-5.1: Promise rejection assertion

Test-5.2: Thrown error assertion

Test-6: Non-injectable local util methods mocking
 - Code under test will use few util methods in it, where they do complex work and return a simple result that will be used as input to process further. Here we assume that, these complex util methods are already tested, we don't want to test them here.

Test-7: Expect static method to be called
 - Code under test is making call to a static method, and we want to expect it to be called.

Test-8: Expect a method to be called upon anonymous instance of a class
 - Code under test is creating an instance of a class and calls a method on it. We will expect that method to be called.
