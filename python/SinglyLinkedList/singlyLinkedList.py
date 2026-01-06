# what is singly linked list?
# A singly linked list is a type of data structure that consists of nodes, where each node contains data and a reference (or pointer) to the next node in the sequence. The first node is called the head, and the last node points to null, indicating the end of the list. Singly linked lists allow for efficient insertion and deletion of elements, as they do not require contiguous memory allocation like arrays. However, they do not support backward traversal since each node only points to the next node.

class Node:
    def __init__(self, info,next=None):
        self.data = info
        self.next = next

class SinglyLinkedList:
    def __init__(self, head=None):
        self.head = head

    def insertAtEnd(self, value):
        temp = Node(value)
        if(self.head != None):
          t1 = self.head
          while(t1.next != None):
            t1 = t1.next
          t1.next = temp
        else:
          self.head = temp


    def insertAtBeginning(self, value):
        temp = Node(value)
        if(self.head != None):
          temp.next = self.head
        self.head = temp

    def insertAtPosition(self, position, value):
        temp = Node(position)
        t1 = self.head

        while(t1.next != None):
            if(t1.data == value):
                temp.next = t1.next
                t1.next = temp
            t1 = t1.next

    def deleteNode(self, value):
       t1 = self.head
       prev = t1
       if(t1.data == value): #Here we are checking first node is to be deleted
           self.head = t1.next
       while(t1.next != None):  #Traversing through the linked list
            if(t1.data == value):
                prev.next = t1.next
                break
            else:
              prev = t1
              t1 = t1.next
            if(t1.data == value): #Here we are checking last node is to be deleted
                prev.next = None

    def display(self):
        t1 = self.head
        while(t1.next != None):
            print(t1.data, end=" -> ")
            t1 = t1.next
        print(t1.data) 

obj = SinglyLinkedList()
obj.insertAtEnd(10)
obj.insertAtEnd(20)
obj.insertAtEnd(30) 
obj.insertAtBeginning(5) 
obj.insertAtPosition(40,20)
obj.deleteNode(30)

obj.display()