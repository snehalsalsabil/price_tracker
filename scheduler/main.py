from requests import post

URL = "http://localhost:3000/update-tracked-products"

if __name__ == "__main__":
    print("Sending request to", URL)
    response = post(URL, data={})  # Pass data if required by the endpoint
    print("Status code:", response.status_code)
