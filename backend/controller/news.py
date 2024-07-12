import requests

def fetch_data(api_url, params=None, headers=None):
    try:
        response = requests.get(api_url)
        response.raise_for_status()  
        return response.json() 
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except requests.exceptions.ConnectionError as conn_err:
        print(f"Connection error occurred: {conn_err}")
    except requests.exceptions.Timeout as timeout_err:
        print(f"Timeout error occurred: {timeout_err}")
    except requests.exceptions.RequestException as req_err:
        print(f"An error occurred: {req_err}")

def fetch_news() -> list:
    api_key = "d5633cddb57d438f975ebfffba2a3d7c"
    link = f"https://newsapi.org/v2/top-headlines?country=us&apiKey={api_key}"
    
    data = fetch_data(link)
    # spread the data article
    articles = data["articles"]
    
    # take ["title", "description", "]

    return data["articles"]


print(fetch_news())
