import json

def get_data():
    f = open('tickers.json')
    ticker_arr = json.load(f) #stores data as python dict
    return ticker_arr
