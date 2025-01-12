# Virtual Social Space for Introverts

A text-based simulation designed for introverts to explore social spaces, manage their comfort levels, and practice decision-making in a virtual environment.

## Features

- **Navigate Different Areas**:
  - Main Hall: Bustling with activity.
  - Quiet Corner: A peaceful retreat.
  - Small Talk Room: A place for light conversations.

- **Manage Stats**:
  - Comfort: Reflects your ease in social settings.
  - Energy: Represents your stamina for interactions.

- **Random Events**:
  - Experience surprising and realistic social situations that influence your stats.

- **Interactive Actions**:
  - Observe: Quietly observe the surroundings.
  - Speak: Start a conversation.
  - Recharge: Take a break and restore energy.

## How to Play

1. **Compile the Program**:
   ```bash
   g++ -o introvert_simulation main.cpp introvert_simulation.cpp
   ```

2. **Run the Program**:
   ```bash
   ./introvert_simulation
   ```

3. **Commands**:
   - `move <location>`: Move to a new area (e.g., `move quiet_corner`).
   - `action <type>`: Perform an action (e.g., `action observe`).
   - `stats`: View your current energy and comfort levels.
   - `help`: Display all available commands.
   - `exit`: End the simulation.

4. **Objective**:
   - Keep your stats (Comfort and Energy) above zero to continue the simulation.
   - Explore the environment and make thoughtful choices.

## Random Events

As you progress, random events occur that can positively or negatively impact your stats. For example:
- "A kind stranger smiles at you. Comfort +15!"
- "Someone asks for directions. Energy -10!"

---

Enjoy the challenge of navigating the Virtual Social Space for Introverts!
