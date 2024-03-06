#include <stdio.h>
#define N 9

int main() {
    int entity[N];
    int i, j;
    char *mapping[] = {"L1", "T1", "L2", "T2", "L3", "T3", "L4", "T4", "L5"};

    i = 0;
    entity[i] = 0;

    while (i >= 0) {
        while (entity[i] < N) {
            entity[i]++;
            for (j = 0; j < i; j++) {
                if (
                    entity[j] == entity[i] ||
                    (
                        entity[j] % 2 == 0 && 
                        entity[j + 1] % 2 == 0
                    )
                ) {
                    break;
                }
            }

            if (i == j) {
                if (i == N - 1) {
                    for (j = 0 ; j < N - 1; j++) {
                        printf("%s ", mapping[entity[j] - 1]);
                    }
                    printf ("%s\n", mapping[entity[N - 1] - 1]);
                }
                else {
                    i++;
                    entity[i] = 0;
                }
            }
        }
        
        i--;
    }
    
    return 0;
}
