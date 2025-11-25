list = [
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
]
i = len(list) - 1
j = len(list[i])//2
for N in range(1, 26):
    if list[i][j] != 0:
        i = (i + 1)
    list[i][j] = N
    row = (i + 1)
    col = (j - 1)
    if row > len(list) - 1:
        row = 0
    if col < 0:
        col = len(list[row]) - 1
    if list[row][col] != 0:
        i = (i - 1)
    else:
        i, j = row, col
for x in list:
    print(x)
