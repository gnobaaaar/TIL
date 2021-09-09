user_input = list(map(int, input().split()))

max_length = 8;

listA = []
listB = []

for i in range(max_length):
    listA.append(i+1)

for i in reversed(range(max_length)):
    listB.append(i+1)

if user_input == listA:
    print("ascending")
elif user_input == listB:
    print("descending")
else:
    print("mixed")