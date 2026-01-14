// What is Singly Linked List?
// A singly linked list is a linear data structure where each node
// contains data and a reference to the next node.
// The last node points to null.

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    Node head;

    // Insert at end
    void insertAtEnd(int value) {
        Node temp = new Node(value);

        if (head == null) {
            head = temp;
        } else {
            Node t1 = head;
            while (t1.next != null) {
                t1 = t1.next;
            }
            t1.next = temp;
        }
    }

    // Insert at beginning
    void insertAtBeginning(int value) {
        Node temp = new Node(value);
        temp.next = head;
        head = temp;
    }

    // Insert after a given value
    void insertAtPosition(int value, int afterValue) {
        Node t1 = head;

        while (t1 != null) {
            if (t1.data == afterValue) {
                Node temp = new Node(value);
                temp.next = t1.next;
                t1.next = temp;
                return;
            }
            t1 = t1.next;
        }
    }

    // Delete a node by value
    void deleteNode(int value) {
        if (head == null) return;

        // If first node is to be deleted
        if (head.data == value) {
            head = head.next;
            return;
        }

        Node prev = head;
        Node curr = head.next;

        while (curr != null) {
            if (curr.data == value) {
                prev.next = curr.next;
                return;
            }
            prev = curr;
            curr = curr.next;
        }
    }

    // Display list
    void display() {
        Node t1 = head;
        while (t1 != null) {
            System.out.print(t1.data + " -> ");
            t1 = t1.next;
        }
        System.out.println("null");
    }
}

public class Main {
    public static void main(String[] args) {
        SinglyLinkedList obj = new SinglyLinkedList();

        obj.insertAtEnd(10);
        obj.insertAtEnd(20);
        obj.insertAtEnd(30);
        obj.insertAtBeginning(5);
        obj.insertAtPosition(40, 20);
        // obj.deleteNode(30);

        obj.display();
    }
}
