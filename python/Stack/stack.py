# STACK: LIFO (Last In First Out)
# QUEUE: FIFO (First In First Out)

# RESTRICT THE ARRAY AND LINKED LIST FUNCTIONALITYS
# STACK: push(), pop(), peek(), isEmpty()


class Stack:
  def __init__(self):
    self.s = []

  def length(self):
    return len(self.s)

  def push(self, value):
    self.s.insert(0,value)


  def peek(self):
    if self.length() == 0:
      raise Exception("Stack is empty")
      # print("Stack is empty")
      # return
    else:
      return self.s[0]
    
  def pop(self):
    if self.length() == 0:
      raise Exception("Stack is empty")
    else:
      return self.s.pop(0)
    
stk = Stack()
# stk.pop()

stk.push(10)
stk.push(20)
stk.push(30)
print("Top element is:", stk.peek())
stk.pop()
stk.pop()
# stk.pop()
print("Top element is:", stk.peek())