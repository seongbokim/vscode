a = [
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
]
N = 5

x, y = 4, N//2

for num in range(1, 26):
    if a[x][y] != 0:
        x = (x + 1) % N

    a[x][y] = num

    tx = (x + 1) % N
    ty = (y - 1) % N

    if a[tx][ty] != 0:
        x = (x - 1) % N
        y = y
    else:
        x, y = tx, ty

for row in a:
    print(row)