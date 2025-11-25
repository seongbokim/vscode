for a in range(2, 10001):
    b = 2
    while b < a:
        if a % b == 0:
            break
        b += 1

    if b == a:
        print(f'{a}는 소수 입니다')
    a += 1