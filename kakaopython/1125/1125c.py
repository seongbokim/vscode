a = int(input("a의 값 :"))
b = int(input("b의 값 :"))

if a < b:
    x = a
else:
    x = b

if a > b:
    y = a
else:
    y = b

for i in range(1, x + 1):
    if a % i == 0 and b % i == 0:
        s1 = i

for i in range(y, a * b + 1):
    if i % a == 0 and i % b == 0:
        s2 = i
        break

print(f'최대공약수는 {s1}')
print(f'최소공배수는 {s2}')
