# Retail Price Tracker

## Project Overview

This project provides a user interface built with React to interact with an automated price tracking web scraper. Currently, the scraper targets Amazon Canada, but it can be configured to scrape multiple sources.

## Technologies Used

- React (Frontend)
- Flask (Backend)
- Playwright (Web Scraping Automation)
- Bright Data (Web Scraping Browser)

##  Project Setup

1. ### Clone the repository:
    ```bash
      git clone https://github.com/snehalsalsabil/price_tracker.git
    ```
2. ### Install dependencies:
- Navigate to the project root directory.
- Install Python dependencies:
  ```shell
  cd backend
  pip install -r requirements.txt
  playwright install
  ```

- Install frontend dependencies:
  ```shell
  cd frontend
  npm install
  ```

3. ### Configure Bright Data Credentials:
   Create a file named `auth.json` in the `backend/scraper` directory and provide your [Bright Data Scraping Browser](https://brightdata.com/products/scraping-browser) credentials. Use the `auth_example.json` file as a reference.


## Running the Application:

1. ### Start the Flask backend:
    ```shell
    cd backend
    python app.py or python3 app.py
    ```

2. ### Start the React frontend:
    ```shell
    cd frontend
    npm run start
    ```

3. ### Interact with the UI:
   Open http://localhost:3000 (or your configured port) in your web browser to use the price tracking interface.

##  Automating Price Collection:
While the Python Flask backend is running, execute the `scheduler/main.py` file at your desired frequency to automate price collection.

##  Windows Automation (Optional):
- A `.bat` script named `run.bat` is provided to automate backend execution.
- Schedule `run.bat` using Windows Task Scheduler to run the script automatically. Refer to Windows documentation for detailed scheduling instructions.

## License

**NOT FOR COMMERCIAL USE**

_If you intend to use any of my code for commercial use please contact me and get my permission._

_If you intend to make money using any of my code please get my permission._

