def foo(c):
    a = 2
    def bar():
        print( a + c )
    return bar


baz = foo(8)
baz() #10 -- Whoa, closure was just observed in python!!