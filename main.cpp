#include <iostream>

using namespace std;

// TODO: make functions handle floats properly to 1 decimal point (tenths)

int findNearestVolume (int c1, int c2, int v2) {
    while (v2 % c1 != 0) {
        v2 -= 1;
    }
    return v2;
}

int createNeat (int c1, int c2, int v2) {
    int v1 = c2 * v2 / c1;
    return v1;
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

    cout << "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*" << endl;
    int newv2 = findNearestVolume(c1, c2, v2);
    cout << "Total volume of solution: " << newv2 << endl;
    c1 = createNeat (c1, c2, newv2);
    cout << "Volume of solute needed: " << c1 << endl;
    cout << "Volume of solvent needed: " << newv2 - c1;
}