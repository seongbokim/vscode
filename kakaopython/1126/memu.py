def makeMenu(filename):
    f = open(filename, "a")
    while True:
        menu = input("메뉴 : ")
        if not menu: break
        price = int(input("가격 : "))
        f.write(menu + ", ")
        if price:
            f.write(str(price) + "\n")
        else:
            f.write(str(price))
    f.close()

def addMenu(filename):
    f = open(filename, "a")
    while True:
        menu = input("새메뉴 : ")
        if not menu: break
        price = int(input("가격 : "))
        f.write(menu + ", ")
        if price:
            f.write(str(price) + "\n")
        else:
            f.write(str(price))
    f.close()

def readMenu(filename):
    a = []
    f = open(filename, "r")
    lines = f.readlines()
    for i in lines:
        line = i.strip()
        if not line:
            continue
        manu, price = i.strip().split(",")
        price = int(price)
        a.append((manu, price))
        print(f'메뉴 : {manu}, 가격 : {price}')
    f.close()
    return a

def updateMenu(filename):
    f = open(filename, "r")
    lines = f.readlines()
    a = []
    for i in lines:
        i = i.strip()
        if not i:
            continue
        manu, price = i.strip().split(",")
        price = int(price)
        a.append([manu, price])
    print("현재 메뉴")
    for idx, (manu, price) in enumerate(a):
        print(f"{idx}, 메뉴: {manu}, 가격: {price}")
    idx = int(input("수정할 번호를 선택해주세요: "))
    if idx < 0 or idx >= len(a):
        return
    updateManu = input("변경할 메뉴 이름: ")
    updatePrice = input("변경할 가격: ")
    if updateManu:
        a[idx][0] = updateManu
    if updatePrice:
        a[idx][1] = int(updatePrice)
    f = open(filename, "w")
    for manu, price in a:
        f.write(f"{manu}, {price} \n")
    f.close()
    print("수정완료")

def deleteMenu(filename):
    f = open(filename, "r")
    lines = f.readlines()
    a = []
    for i in lines:
        i = i.strip()
        if not i:
            continue
        manu, price = i.strip().split(",")
        price = int(price)
        a.append([manu, price])
    print("현재 메뉴")
    for idx, (manu, price) in enumerate(a):
        print(f"{idx}, 메뉴: {manu}, 가격: {price}")
    idx = int(input("삭제할 번호를 선택해주세요: "))
    if idx < 0 or idx >= len(a):
        return
    a.pop(idx)
    f = open(filename, "w")
    for manu, price in a:
        f.write(f"{manu}, {price} \n")
    f.close()
    print("삭제완료")

def orderMenu(filename):
    f = open(filename, "r")
    lines = f.readlines()
    a = []
    for i in lines:
        i = i.strip()
        if not i:
            continue
        manu, price = i.strip().split(",")
        price = int(price)
        a.append([manu, price])
    print("현재 메뉴")
    for idx, (manu, price) in enumerate(a):
        print(f"{idx}, 메뉴: {manu}, 가격: {price}")
    idx = int(input("주문하실 번호를 선택해주세요: "))
    if idx < 0 or idx >= len(a):
        return
    manu, price = a[idx]
    print(f"주문하신 {idx}번 메뉴는 {manu}, 가격은 {price} 입니다.")

