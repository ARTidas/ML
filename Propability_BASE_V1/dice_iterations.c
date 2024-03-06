#include <stdio.h>

int main()
{
    int counter = 0;
    
    for (int i = 1; i < 7; i++) {
        for (int j = 1; j < 7; j++) {
            if (i + j >= 8) {
                counter++;
                printf("(%d, %d);", i, j);
            }
        }
    }
    
    printf("Total possibilities: %d", counter);

    return 0;
}
