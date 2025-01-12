#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>

using namespace std;

struct Player {
    int energy;
    int comfort;
    string location;
};

void displayStats(const Player &player) {
    cout << "\n[Stats]" << endl;
    cout << "Energy: " << player.energy << "/100" << endl;
    cout << "Comfort: " << player.comfort << "/100" << endl;
    cout << "Location: " << player.location << endl;
}

void displayHelp() {
    cout << "\n[Commands]" << endl;
    cout << "1. move <location> - Move to a different area (e.g., 'move quiet_corner')." << endl;
    cout << "2. action <type> - Perform an action (e.g., 'action observe')." << endl;
    cout << "3. stats - Display your current stats." << endl;
    cout << "4. help - Display the list of commands." << endl;
    cout << "5. exit - End the simulation.\n" << endl;
}

void performAction(Player &player, const string &action) {
    if (action == "observe") {
        cout << "You quietly observe the surroundings. It's calming." << endl;
        player.comfort += 10;
        player.energy -= 5;
    } else if (action == "speak") {
        cout << "You try to start a conversation. It's draining but rewarding." << endl;
        player.comfort += 5;
        player.energy -= 15;
    } else if (action == "recharge") {
        cout << "You find a quiet corner and recharge your energy." << endl;
        player.energy += 20;
        player.comfort += 5;
    } else {
        cout << "Unknown action. Type 'help' for a list of actions." << endl;
    }
}

void changeLocation(Player &player, const string &location) {
    if (location == "main_hall") {
        cout << "You move to the Main Hall. It's bustling with activity." << endl;
        player.location = "Main Hall";
        player.comfort -= 10;
    } else if (location == "quiet_corner") {
        cout << "You move to the Quiet Corner. It's peaceful and relaxing." << endl;
        player.location = "Quiet Corner";
        player.comfort += 10;
    } else if (location == "small_talk_room") {
        cout << "You move to the Small Talk Room. Conversations are happening." << endl;
        player.location = "Small Talk Room";
        player.comfort -= 5;
        player.energy -= 5;
    } else {
        cout << "Unknown location. Try 'main_hall', 'quiet_corner', or 'small_talk_room'." << endl;
    }
}

void randomEvent(Player &player) {
    int eventChance = rand() % 100;
    if (eventChance < 20) {
        cout << "\nRandom Event: A kind stranger smiles at you. Comfort +15!" << endl;
        player.comfort += 15;
    } else if (eventChance < 40) {
        cout << "\nRandom Event: Someone asks for directions. Energy -10!" << endl;
        player.energy -= 10;
    } else if (eventChance < 60) {
        cout << "\nRandom Event: You find a quiet place to sit. Energy +10!" << endl;
        player.energy += 10;
    }
}

void startSimulation() {
    Player player = {100, 100, "Entrance"};
    string command, argument;

    srand(time(0));

    while (true) {
        displayStats(player);

        cout << "\nEnter a command: ";
        cin >> command;

        if (command == "move") {
            cin >> argument;
            changeLocation(player, argument);
        } else if (command == "action") {
            cin >> argument;
            performAction(player, argument);
        } else if (command == "stats") {
            displayStats(player);
        } else if (command == "help") {
            displayHelp();
        } else if (command == "exit") {
            cout << "Thanks for playing! Goodbye!" << endl;
            break;
        } else {
            cout << "Unknown command. Type 'help' for a list of commands." << endl;
        }

        randomEvent(player);

        if (player.energy <= 0) {
            cout << "\nYou ran out of energy. The simulation ends here. Take care!" << endl;
            break;
        }

        if (player.comfort <= 0) {
            cout << "\nYour comfort level hit zero. The simulation ends here. Stay safe!" << endl;
            break;
        }
    }
}
