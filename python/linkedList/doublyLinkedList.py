

class Node :
  def __init__(self, value=None):
    self.data = value
    self.prev = None
    self.next = None

class DoublyLinkedList:
  def __init__(self):
    self.head = None

  def insertAtEnd(self, value):
    temp = Node(value)
    if(self.head == None):
      self.head = temp
      return
    else:
      t = self.head
      while(t.next != None):
        t = t.next
      t.next = temp
      temp.prev = t

  def insertAtBeginning(self, value):
  # def insertAtPosition():
    temp = Node(value)
    if(self.head == None):
      self.head = temp
      return
    else:
      temp.next = self.head
      self.head.prev = temp
      self.head = temp
  
  def insertAtPosition(self, position, value):
    t = self.head
    
    while(t.next != None):
      if(t.data == value):
        break
      else:
        t = t.next
    temp = Node(position)
    temp.next = t.next
    temp.next.prev = temp
    t.next = temp
    temp.prev = t

  def deleteNode(self, value):
    if(self.head == None):
      print("List is empty")
      return
    
    t = self.head
    if(t.data == value): # Deleting first node
      self.head = t.next
      if(self.head != None):
        self.head.prev = None
      return
    
    while(t.next != None):
      if(t.data == value):
        t.prev.next = t.next
        t.next = t.prev
        return
      else:
        t = t.next
    if(t.data == value): # Deleting last node
      t.prev.next = None

  
  def display(self):
        t1 = self.head
        while(t1.next != None):
            print(t1.data, end=" <-> ")
            t1 = t1.next
        print(t1.data)

obj = DoublyLinkedList()
obj.insertAtEnd(10)
obj.insertAtEnd(20)
obj.insertAtEnd(30)
obj.insertAtEnd(40)
obj.insertAtBeginning(5)
obj.insertAtPosition(15,10)
obj.deleteNode(15)


obj.display()
