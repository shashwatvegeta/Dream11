# Team Builder App

This project is a team-building application that allows users to create, compare, and understand team compositions using Generative AI. The app provides an intuitive UI to explore player stats, team-building strategies, and interactive comparisons.

## Features

- **Long Press on Player for Stats**: Long pressing on a player's name (e.g., "H Classen") will open a modal with their recent stats.
- **Player Comparison Table**: Clicking on "Why?" will show a comparison table between selected and non-selected players.
- **Generative AI Q&A**: Ask questions like "Why is this player in the team and not any other player?" to get AI-generated insights into team formation decisions.

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/team-builder-app.git
    cd team-builder-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

### Running the App

To start the development server, run:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.
Once the server is running, open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

1. **Long Press for Player Stats**
   Long press on "H Classen" to view recent stats in a modal. This includes recent performance, ratings, and key stats.

2. **"Why?" Button - Player Comparison Table**
   Click on the "Why?" button to open a comparison table between selected and non-selected players. This table shows metrics such as performance score, strengths, weaknesses, and fit with the current team.

3. **Generative AI Q&A**
   Use the Q&A feature to ask questions like, "Why is this player in the team and not another player?" to receive AI-generated insights based on player performance and team strategy.

## Project Structure

- `/src`: Contains all source code files.
- `/components`: Includes reusable components such as the player modal and comparison table.
- `/utils`: Utility functions for data handling and AI integrations.
- `/services`: API services for fetching player data and interacting with the Generative AI model.

## Dependencies

Key dependencies used in this project:

- `React` - Frontend framework
- `React Modal` - For displaying the player stats in a modal
- `react-table` - For displaying the comparison table
- `axios` - For making API calls to the Generative AI service
- `OpenAI API` - To generate answers for team-related questions

## Future Enhancements

- Real-time player data updates
- Enhanced visualizations for team stats and insights
- Voice-assisted Generative AI explanations

## Contributing

Contributions are welcome! Please follow the steps below:

1. Fork the project.
2. Create a new feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add some NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
