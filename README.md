# jest-all-kind-unit-test-setups

Purpose of this project is to act as reference for all kind of unit test setups written in jest test framework

We encourage [AAA(Arrange - Act - Assert) format](http://wiki.c2.com/?ArrangeActAssert) for structuring any unit(actually any!) test.

### List of different test setups for scenarios

Test-1: No dependencies present.

- A simple test setup that expects a simple calculation without any mocks or external dependencies in it.

Test-2: Non-injectable dependencies present.

- Code under test is making some calls to 3rd party lib methods(ex, moment.format()), which we usually believe(it works as expected) and won't try to include them in our test. But if in case those lib methods
  1. need to contact database or OS or internet(ex, s3.listBuckets()) OR
  2. the final result is depending on the return value of lib methods
     then we need to mock them to write a proper unit test.
