// #include<stdio.h>
// int main()
// {
//     int a = 10 , b;
//     int *c;
//     b=a;
//     c=&a;
//     printf("\n value of a : %d" , a);
//     printf("\n value of c address of : %d",c);

//     return 0;
// }

// access array with pointer

#include<stdint.h>
int main()
{
    int arr[5]={1,2,3,4,5};
    int *ptr;
    ptr = arr;
    pritf("\n a[0] %d : ",ptr);
    for(int i=0;i<5;i++)
    {
        printf("a[%d] %d : ",ptr+i);
    }
}