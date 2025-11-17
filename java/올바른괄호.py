def solution(s):
    counter = 0
    for char in s:
        if char == '(':
            counter += 1
        else:  # char == ')'
            counter -= 1
        
        # 닫는 괄호가 여는 괄호보다 많은 경우
        if counter < 0:
            return False
    
    # 모든 괄호가 짝지어진 경우 counter가 0이어야 함
    return counter == 0