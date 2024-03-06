#include <stdio.h>

int counter;

int main()
{
    counter = 0;
    printf("Both dice throws add up to at least 8:\n");
    for (int i = 1; i < 7; i++) {
        for (int j = 1; j < 7; j++) {
            if (i + j >= 8) {
                counter++;
                printf("(%d, %d);", i, j);
            }
        }
    }
    printf("\nTotal possibilities: %d\n", counter);
    printf("====================================\n");

    counter = 0;
    printf("First dice throw is greater than the second:\n");
    for (int i = 1; i <= 6; i++) {
        for (int j = 1; j <= 6; j++) {
            if (i > j) {
                counter++;
                printf("(%d,%d);", i, j);
            }
        }
    }
    printf("\nToal possibilities: %d\n", counter);
    printf("====================================\n");

    return 0;
}
