from array import *
val = array('i', [1,2,3,4,5,6])

# print(val)

copyArray = array(val.typecode, (a for a in val))
# for i in val:
#     print(i)
# print("After copying", end="\n")
# for i in copyArray:
#     print(i)

print("The length of the array is:", len(val))
val.reverse()
print("The reversed array is: ", val)

# Input taken from user and store it in an array and print it
arr = array('i', [])
n = int(input("Enter the number of elements: "))
for i in range(n):
    x = int(input("Enter the next value: "))
    arr.append(x)
print("The entered array is: ")
for i in arr: 
    print(i)