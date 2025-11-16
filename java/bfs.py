from collections import deque

def solution(n, vertex):
    # 그래프 초기화 (인접 리스트)
    graph = [[] for _ in range(n + 1)]
    for a, b in vertex:
        graph[a].append(b)
        graph[b].append(a)

    # 거리 배열과 BFS 큐 초기화
    distances = [-1] * (n + 1)
    distances[1] = 0  # 시작 노드인 1의 거리는 0
    queue = deque([1])
    
    # BFS 탐색
    while queue:
        current = queue.popleft()
        for neighbor in graph[current]:
            if distances[neighbor] == -1:  # 방문하지 않은 경우
                distances[neighbor] = distances[current] + 1
                queue.append(neighbor)

    # 최장 거리 계산
    max_distance = max(distances)
    return distances.count(max_distance)