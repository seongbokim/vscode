from memu import *
from menu import *

call = Menu()
while True:
    a = input("작업을 선택하세요(M:메뉴 관리, O:주문관리, S:메뉴조회, X: 프로그램종료) : ")
    if a == "M":
        while True:
            b = input("메뉴 작업을 선택하세요(C: 메뉴추가, R: 메뉴표시, U: 메뉴수정, D, 메뉴삭제, X: 메뉴관리종료) : ")
            if b == "C":
                call.add()
            elif b == "R":
                call.display()
            elif b == "U":
                call.update()
            elif b == "D":
                call.delete()
            elif b == "X":
                print("메뉴관리종료")
                break
    elif a == "O":
        call.order()
    elif a == "S":
        print("메뉴조회")
    elif a == "X":
        print("프로그램 종료")
        break
