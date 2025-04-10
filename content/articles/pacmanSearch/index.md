---
title: "PacMan Search Problem"
description: "My take on the UC Berkeley AI problem, Pacman."
date: "2025-04-07"
banner:
  src: "../../images/Pac-man.png"
  alt: ""
  caption: ''
categories:
  - "Java"
keywords:
  - "Java"
---

# Pacman Search Project

## Overview

In this project, I had to implement several core search algorithms and apply them to maze-solving challenges in the Pacman game environment. The goal is to teach Pacman to find the most efficient paths using both uninformed and informed search strategies.


## File Descriptions

| File | Description |
|------|-------------|
| `search.py` | Implements DFS, BFS, UCS, and A* search algorithms. |
| `searchAgents.py` | Contains search-based agents and custom search problems (CornersProblem, FoodSearchProblem, etc.). |
| `pacman.py` | Main game loop and Pacman simulator. |
| `game.py` | Game logic, types like GameState and Grid. |
| `util.py` | Utility data structures like Stack, Queue, and PriorityQueue. |

> Only `search.py` and `searchAgents.py` are modified for this project.

This is my take on the UC Berkeley AI problem. Below I explain how to run each section of the problem, as well as explaining each component of the searches. 

---

## Implemented Algorithms

- **Depth-First Search (DFS)**
- **Breadth-First Search (BFS)**
- **Uniform-Cost Search (UCS)**
- **A\* Search**
  - Uses heuristics like:
    - Manhattan Distance
    - Custom Corner Heuristic
    - Custom Food Heuristic

---

## Search Problems Covered

| Problem | Description |
|---------|-------------|
| Basic Pathfinding | Navigate from a start state to a goal in a maze. |
| CornersProblem | Visit all four corners of the maze. |
| FoodSearchProblem | Eat all the food pellets. |
| ClosestDotSearch | Suboptimal greedy search to eat the nearest dot repeatedly. |

---

## Running the Project

Use the following command line examples to run various agents and test your implementations.

### DFS
-Implements Depth-First Search (DFS) using a stack to explore nodes.

-Explores as far as possible along a branch before backtracking.

-Not optimal and may get stuck in deep or infinite paths.

To run DFS:

python pacman.py -l tinyMaze -p SearchAgent -a fn=depthFirstSearch

### UCS
-Implements Uniform Cost Search (UCS) using a priority queue based on path cost.

-Expands the least-cost path node first.

-Optimal if all step costs are non-negative.

To run UCS:

python pacman.py -l mediumMaze -p SearchAgent -a fn=uniformCostSearch

### A* Search (Manhattan Heuristic)
-Implements A* Search, an informed search that uses:

    f(n) = g(n) + h(n) where:

        g(n) is the cost so far to reach node n

        h(n) is the estimated cost from n to the goal (heuristic)

-Uses a priority queue with f(n) as priority.

-Optimal if the heuristic is admissible and consistent.

To run A*:

python pacman.py -l bigMaze -z .5 -p SearchAgent -a fn=aStarSearch,heuristic=manhattanHeuristic

### Corners Problem (A*)
-Finds paths that visit all four corners of the maze.

-Uses cornersHeuristic to estimate cost from current state to completion.

To run A*:

python pacman.py -l mediumCorners -p AStarCornersAgent -z .5

### Food Search (A*)
-Finds paths that collect all food pellets.

-Uses foodHeuristic to estimate the remaining distance based on maze layout.

To run A*:

python pacman.py -l trickySearch -p AStarFoodSearchAgent

### Closest Dot Search (Greedy)
-At each step, define a new search problem using AnyFoodSearchProblem, which redefines the goal as the nearest food dot.

-This is a greedy algorithm—it chooses the closest dot at each step without considering global optimality.

To run Greedy:

python pacman.py -l bigSearch -p ClosestDotSearchAgent -z .5

## To run Autograder to grade this assignment
Run:
python3 autograder.py





