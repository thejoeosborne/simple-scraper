import requests
from bs4 import BeautifulSoup

url = 'https://www.example.com'
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')