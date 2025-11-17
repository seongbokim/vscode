def solution(record):
    user_dict = {}  # 유저 아이디와 닉네임을 저장할 딕셔너리
    actions = []  # 최종 메시지 출력을 위한 리스트

    # 첫 번째 패스: 유저 아이디에 대한 닉네임 정보를 저장
    for entry in record:
        split_entry = entry.split()
        command = split_entry[0]
        user_id = split_entry[1]

        if command == "Enter" or command == "Change":
            nickname = split_entry[2]
            user_dict[user_id] = nickname

    # 두 번째 패스: 메시지 출력 리스트를 구성
    for entry in record:
        split_entry = entry.split()
        command = split_entry[0]
        user_id = split_entry[1]

        if command == "Enter":
            actions.append((user_id, "님이 들어왔습니다."))
        elif command == "Leave":
            actions.append((user_id, "님이 나갔습니다."))

    # 결과 메시지 생성
    result = [user_dict[user_id] + action for user_id, action in actions]

    return result