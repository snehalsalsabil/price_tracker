import asyncio
import sys

from main import main

# Check if the script is being run directly (not imported as a module)
if __name__ == "__main__":
    # Extract command-line arguments
    if len(sys.argv) < 3:
        # Print usage instructions if not enough arguments are provided
        print("Usage: python -m package_name url search_text endpoint")
        # Exit the script with an error status
        sys.exit(1)

    # Assign the first command-line argument to 'url'
    url = sys.argv[1]
    # Assign the second command-line argument to 'search_text'
    search_text = sys.argv[2]
    # Assign the third command-line argument to 'endpoint'
    endpoint = sys.argv[3]

    # Run the 'main' function from the 'main' module asynchronously
    asyncio.run(main(url, search_text, endpoint))
