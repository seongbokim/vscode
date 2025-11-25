a = [
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
]
num = 1
for x in range(0, 5):
    if x % 2 == 0:
        for y in range(5):
            a[x][y] = num
            num += 1
    else:
        for y in range(4, -1, -1):
            a[x][y] = num
            num += 1
for row in a:
    print(row)