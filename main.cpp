#include <iostream>

using namespace std;

int findNearestVolume (int c1, int c2, int v2) {

    while (v2 % c1 != 0) {
        v2 -= 1;
    }
    cout << v2;
    return v2;

}

int main () {

    // C1*V1 = C2*V2
    int c1;

    cout << "Source concentration (1 if undiluted): ";
    cin >> c1;
    cin.ignore();

    // create function to solve for vol needed (vol 1)
    int v1;

    int c2;
    cout << "Desired concentration: ";
    cin >> c2;
    cin.ignore();

    // create function to solve for nearest volume
    int v2;
    cout << "Total volume: ";
    cin >> v2;
    cout << endl;

    v1 = findNearestVolume(c1, c2, v2);
}