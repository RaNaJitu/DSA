# QUEUE/STACK is data structure which supports FIFO(First In First Out) order

# N QUEUE ==> 1, 2, 3, 4 if i inserted the next element 5 it will be added at the end(front)
# DEQUEUE ==> 1, 2, 3, 4 if i delete an element it will be removed from the front(rear)

# KEY point to make QUEUE
# 1. If array is empty it means front and rear both are -1 location front = rear = -1
# 2. if i insert first element both front and rear will be 0 location front = rear = 0
# 3. if i insert next element rear will be increased by 1 location rear = rear + 1  check one conditon is rear should not overflow the size of the array (ckeck memory is not full)
# 4. if i delete an element front will be increased by 1 location front = front + 1 check  one condition is  front should not underflow the size of the array (check memory is not empty)
# 5. if after deletion of elements front and rear both are equal means array is empty


class Queue:
  def __init__(self):
    self.item = []

  def isEmpty(self):
    return len(self.item) == 0

  def insert(self, value):
    self.item.append(value)

  def delete(self):
    if self.isEmpty():
      raise Exception("Queue is empty")
    else:
      return self.item.pop(0)
    
  def display(self):
    return self.item

q = Queue()
q.insert(10) 
q.insert(20)
q.insert(30)
print("Queue elements are:", q.display())

print("Deleted element is:", q.delete())
print("Queue elements are:", q.display())