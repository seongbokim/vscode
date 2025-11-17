def solution(n, s):
    if s < n:
        return [-1]  # 합 s를 n개의 자연수로 만들 수 없는 경우

    # 기본 분배 몫과 나머지를 계산
    base = s // n
    remainder = s % n

    # n개의 기본 값을 base로 설정
    answer = [base] * n

    # 나머지를 분배하여 각 원소에 1씩 추가
    for i in range(remainder):
        answer[i] += 1

    # 결과를 오름차순으로 반환
    return sorted(answer)

# 예제 테스트
print(solution(2, 9))  # 출력: [4, 5]
print(solution(2, 1))  # 출력: [-1]
print(solution(2, 8))  # 출력: [4, 4]