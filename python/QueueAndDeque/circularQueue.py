
# 1. If array is empty it means front and rear both are -1 location front = rear = -1
# 2. if i insert first element both front and rear will be 0 location front = rear = 0
# 3. EMPTY condition: front == -1 and rear == -1
# 4. FULL condition: (rear + 1) % size of queue == front
# 5. INSERTION: rear = FRONT  same location repsent it menas  there has only one element


class CircularQueue:
  def __init__(self, size):
    self.size = size
    self.item = [None] * size   # this code is represent the empty array of size n
    self.front = self.rear = -1 #it means queue is empty

  def insert(self, value):
    if (self.rear + 1) % self.size == self.front: # it means queue is full
      # raise Exception("Circular Queue is full")
      print("Circular Queue is full")
    elif self.front == -1 and self.rear == -1: # it means queue is empty we are inserting first element
      self.front = self.rear = 0
      self.item[self.rear] = value
    else:
      self.rear = (self.rear + 1) % self.size # we are inserting next element
      self.item[self.rear] = value


  def delete(self):
    if self.front == -1 and self.rear == -1: # it means queue is empty
      print("Circular Queue is empty")
    elif self.front == self.rear: # it means only one element is present in the queue
      print("Only one element is present in the Circular Queue", self.item[self.front])
      # deleted_value = self.item[self.front]
      self.front = self.rear = -1
      # return deleted_value
    else:
      print("Deleted element is:", self.item[self.front])
      # deleted_value =  self.item[self.front]
      self.front = (self.front + 1) % self.size
      # return deleted_value

  def display(self):
    if self.front == -1 and self.rear == -1:
      print("Circular Queue is empty")
    else:
      i = self.front
      elements = []
      while True:
        elements.append(self.item[i])
        if i == self.rear:
          break
        i = (i + 1) % self.size
      print("Circular Queue elements are:", elements)


cq = CircularQueue(5)
cq.insert(10)
cq.insert(20)
cq.insert(30)
cq.insert(40)
cq.insert(50)
cq.display()
cq.insert(60)  # Circular Queue is full
cq.delete()
cq.insert(60)
cq.display()
cq.insert(70)  # Circular Queue is full
cq.delete()
cq.display()
cq.delete()
cq.delete()
cq.delete()
cq.delete()
cq.delete()