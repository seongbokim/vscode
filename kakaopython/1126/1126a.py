f = open("student.txt", 'a')
for i in range(1, 11):
    data = "전주대학교\n"
    f.write(data)
f.close()