class Menu:
  def __init__(self):
    self.f = "menu.txt"
    self.items = []
    try:
      with open(self.f, 'r') as f:
        menulist = f.readlines()
    except FileNotFoundError:
      print("파일경로가 틀립니다")
    for line in menulist:
      if not line:
        continue
      menu, price = line.split(",")
      self.items.append([menu, int(price)])

  def display(self):
    for idx, (menu, price) in enumerate(self.items):
      print(f"{idx}번 메뉴: {menu}, 가격: {price}")

  def add(self):
    while True:
      menu = input("새메뉴: ")
      if not menu:
        break
      price = int(input("가격: "))
      self.items.append([menu, price])
      self.save()
      print("추가완료")
      self.display()

  def delete(self):
    self.display()
    idx = int(input("삭제할 번호를 선택해주세요: "))
    self.items.pop(idx)
    self.save()
    print("삭제완료")
    self.display()

  def update(self):
    self.display()
    idx = int(input("수정할 번호를 선택하세요: "))
    if idx < 0 or idx >= len(self.items):
        return
    menu = input("변경할 메뉴 이름: ")
    price = input("변경할 가격: ")
    if menu:
        self.items[idx][0] = menu
    if price:
        self.items[idx][1] = int(price)
    self.save()
    print("수정완료")
    self.display()

  def save(self):
    try:
      with open(self.f, 'w') as f:
        for x in self.items:
          f.write(f"{x[0]},{x[1]}\n")
    except FileNotFoundError:
      print("파일경로가 틀립니다")

class Order:
  def __init__(self):
    self.fs = "order.txt"
    self.orders = []
    self.menu = Menu()
    try:
      with open(self.fs, 'r') as f:
        orderlist = f.readlines()
    except FileNotFoundError:
      print("파일경로가 틀립니다")

    for line in orderlist:
      if not line.strip():
        continue
      menu, price, n = line.strip().split(",")
      self.orders.append([menu, int(price), int(n)])

  def order(self):
    self.menu.display()
    while True:
      idx = input("주문하실 번호를 선택해주세요: ")
      if not idx:
        break
      idx = int(idx)
      if idx < 0 or idx >= len(self.menu.items):
        print("잘못된 번호입니다.")
        continue
      n = int(input("주문하실 수량을 적어주세요: "))
      menu, price = self.menu.items[idx]
      print(f"주문하신 {idx}번 메뉴는 {menu}, 수량은 {n}개, 가격은 {price * n} 입니다.")
      self.adds(menu, price, n)
      self.saves()

  def adds(self, menu, price, n):
    self.orders.append([menu, price, n])
    self.saves()

  def displays(self):
    print("주문내역\n")
    for idx, (menu, price, n) in enumerate(self.orders):
      print(f"{idx}번 메뉴: {menu}, 수량: {n} 가격: {price * n}")

  def deletes(self):
    self.displays()
    while True:
      idx = input("취소할 주문번호를 선택해주세요: ")
      if not idx:
        break
      idx = int(idx)
      self.orders.pop(idx)
      self.saves()
      print("취소완료")
      self.displays()

  def saves(self):
    try:
      with open(self.fs, 'w') as f:
        for x in self.orders:
          f.write(f"{x[0]},{x[1]},{x[2]}\n")
    except FileNotFoundError:
      print("파일경로가 틀립니다")

class Sale:
  def __init__(self):
    self.fa = "sale.txt"
    self.sales = {}

  def loada(self):
    self.sales = {}
    try:
      with open("order.txt", 'r') as f:
        salelist = f.readlines()
    except FileNotFoundError:
      print("파일경로가 틀립니다")
    for line in salelist:
      if not line:
        continue
      menu, price, n = line.strip().split(",")
      price = int(price)
      n = int(n)
      if menu not in self.sales:
        self.sales[menu] = [price, n]
      else:
        self.sales[menu][1] += n
    self.savea()

  def savea(self):
    try:
      with open(self.fa, 'w') as f:
        for menu, (price, n) in self.sales.items():
          f.write(f"{menu},{price},{n}\n")
    except FileNotFoundError:
      print("파일경로가 틀립니다")

  def displaya(self):
    print("매출금액\n")
    total = 0
    for menu, (price, n) in self.sales.items():
      s = price * n
      total += s
      print(f"메뉴: {menu}는 {n}개 판매하였습니다. 금액은 {s}원 입니다.")

    print(f"\n 총 매출은 {total}원")