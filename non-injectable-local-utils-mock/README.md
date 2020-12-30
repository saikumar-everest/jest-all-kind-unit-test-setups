#### Non-injectable local util methods mocking ####

 - Code under test will use few util methods in it, where they do complex work and return a simple result that will be used as input to process further. Here we assume that, these complex util methods are already tested, we don't want to test them here.