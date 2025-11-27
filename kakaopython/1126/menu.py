class Menu:
  def __init__(self):
    self.fname = "menu.txt"
    self.items = []
    f = open(self.fname, 'r')
    menulist = f.readlines()
    f.close()
    for line in menulist:
      ar = line.split(",")
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
    updateManu = input("변경할 메뉴 이름: ")
    updatePrice = input("변경할 가격: ")
    if updateManu:
        self.items[idx][0] = updateManu
    if updatePrice:
        self.items[idx][1] = int(updatePrice)
    self.save()
    print("수정완료")
    self.display()

  def save(self):
    f = open(self.fname, 'w')
    for x in self.items:
      f.write(f"{x[0]},{x[1]}\n")
    f.close()

  def order(self):
    self.display()
    idx = int(input("주문하실 번호를 선택해주세요: "))
    manu, price = self.items[idx]
    print(f"주문하신 {idx}번 메뉴는 {manu}, 가격은 {price} 입니다.")