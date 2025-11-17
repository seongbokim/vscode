def solution(N, A, B):
    round_count = 0
    
    # 반복문을 통해 A와 B가 같은 번호가 될 때까지 진행
    while A != B:
        # 다음 라운드의 번호 계산
        A = (A + 1) // 2
        B = (B + 1) // 2
        round_count += 1
    
    return round_count