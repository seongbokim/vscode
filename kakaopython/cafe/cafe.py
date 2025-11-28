from menu import *

m = Menu()
o = Order()
s = Sale()
while True:
    a = input("작업을 선택하세요(M: 메뉴관리, O: 주문관리, S: 매출조회, X: 프로그램종료) : ")
    if a == "M":
        while True:
            b = input("메뉴 작업을 선택하세요(C: 메뉴추가, R: 메뉴표시, U: 메뉴수정, D, 메뉴삭제, X: 메뉴관리종료) : ")
            if b == "C":
                m.add()
            elif b == "R":
                m.display()
            elif b == "U":
                m.update()
            elif b == "D":
                m.delete()
            elif b == "X":
                print("메뉴관리종료")
                break
    elif a == "O":
      while True:
        c = input("주문 작업을 선택하세요(C: 주문, R: 주문내역, D: 주문취소, X: 종료): ")
        if c == "C":
          o.order()
        elif c == "R":
          o.displays()
        elif c == "D":
          o.deletes()
        elif c == "X":
          print("주문작업종료")
          break
    elif a == "S":
      s.loada()
      while True:
        d = input("관리자 전용 프로그램 입니다. 관리자가 비밀번호를 입력해주세요: ")
        if not d:
          print("관리자가 아닙니다.")
          break
        if d == "@":
          f= input("관리자님 어서오세요. 매출을 조회하시겠습니까?(Y/N): ")
          if f == "Y":
            s.displaya()
            break

    elif a == "X":
        print("프로그램 종료")
        break

