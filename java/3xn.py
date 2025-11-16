MOD = 1_000_000_007

def solution(n):
    if n % 2 != 0:
        return 0  
    
    dp = [0] * (n + 1)
    dp[0] = 1  
    dp[2] = 3  

    for i in range(4, n + 1, 2):
        dp[i] = (3 * dp[i - 2]) % MOD
        for j in range(i - 4, -1, -2):
            dp[i] = (dp[i] + 2 * dp[j]) % MOD

    return dp[n]

print(solution(4))