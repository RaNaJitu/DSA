

# KEY point to make Double ENDED QUEUE
# (In insertion and deletion we can perform operation from both front and rear side)

# -------------------------------------------------------------------------------------------------

# 1. If array is empty it means front and rear both are -1 location front = rear = -1
# 2. if i insert first element both front and rear will be 0 location front = rear = 0

# 3. if i insert next element rear will be increased by 1 location rear = rear + 1  check one conditon is rear should not overflow the size of the array (ckeck memory is not full)
# 4. if i delete an element front will be increased by 1 location front = front + 1 check  one condition is  front should not underflow the size of the array (check memory is not empty)
# 5. if after deletion of elements front and rear both are equal means array is empty
# 6. if i insert an element at front side front will be decreased by 1 location front = front - 1 check one condition is front should not underflow the size of the array (check memory is not full)
# 7. if i delete an element at rear side rear will be decreased by 1 location rear = rear - 1 check one condition is rear should not underflow the size of the array (check memory is not empty)




class Deque:
  def __init__(self):
    self.item = []

  def isEmpty(self):
    return len(self.item) == 0

  def insertAtEnd(self, value):
    self.item.append(value)

  def deleteAtFront(self):
    if self.isEmpty():
      raise Exception("Deque is empty")
    else:
      return self.item.pop(0)
    
  def insertAtFront(self, value):
    self.item.insert(0, value)

  def deleteAtEnd(self):
    if self.isEmpty():
      raise Exception("Deque is empty")
    else:
      return self.item.pop()
    
  def display(self):
    return self.item

q = Deque()
q.insertAtEnd(10) 
q.insertAtEnd(20)
q.insertAtEnd(30)
q.insertAtFront(5)
q.insertAtFront(0)
print("Queue elements are:", q.display())

print("Deleted element is:", q.deleteAtFront())
print("Deleted element is:", q.deleteAtEnd())
print("Queue elements are:", q.display())