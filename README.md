# Weather Finder

Weather Finder is a React.js web application that allows users to get current weather conditions based on the location they search for.

## Features

- Search weather by city name
- Display current temperature, humidity, and weather conditions
- User-friendly interface

## Technologies Used

- React.js for the frontend
- [Weather API](https://openweathermap.org/api) for fetching weather data

## Getting Started

### Prerequisites

To run this project, you will need:

- Node.js and npm (You can download them [here](https://nodejs.org/))
- API key from OpenWeatherMap (You can get one by signing up [here](https://home.openweathermap.org/users/sign_up))

### Installation

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/vijay-kumar-79/weather-finder-react.git
    ```
2. Navigate to the project directory:
    ```sh
    cd weather-finder-react
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add your OpenWeatherMap API key to the `.env` file:
    ```env
    REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
    ```

### Running the Application

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

### Usage

1. Enter the name of the city in the search bar.
2. Click on the "Search" button or press enter.
3. The weather information for the searched location will be displayed.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for their awesome API.
- All the open-source libraries and tools used in this project.
