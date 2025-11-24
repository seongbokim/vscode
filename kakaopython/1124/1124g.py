s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])
# 교집합
print(s1 & s2)
print(s1.intersection(s2))
# 합집합
print(s1|s2)
print(s1.union(s2))
# 차집합
print(s1-s2)
print(s1.difference(s2))
# 값 1개 추가
s3 = set([1, 2, 3])
s3.add(4)
print(s3)
# 값 여러개 추가
s3.update([4, 5, 6])
print(s3)
# 값 제거
s3.remove(2)
print(s3)