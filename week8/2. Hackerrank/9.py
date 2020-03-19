a = int(input())
arr = [int(i) for i in input().split()]
arr.sort()
max = arr[a - 1]
for i in range(a):
    if arr[a - i - 1] < max:
        max = arr[i]
        break

print(max)
