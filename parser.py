import csv
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

class sub: 
    def __init__(self, cik, name, sic, ticker): 
        self.cik = cik 
        self.name = name
        self.sic = sic
        self.ticker = ticker
    
    def __str__(self):
        return f" {self.cik}  {self.name} {self.sic} {self.ticker}"
    
    def to_json(self):
        data = {
            u'cik': self.cik,
            u'name': self.name,
            u'sic': self.sic,
            u'ticker': self.ticker,
        }
        return data    




def cik_from_sub():
    reader = csv.reader(open("sub.txt"), delimiter="\t")

    subs = []

    for row in reader:
            cik = str(row[1]).zfill(10)
            name = row[2]
            sic = row[3]
            ticker = None
            for a in row:
                if(".xml" in a and "-2022" in a):
                    ticker = a.split("-")[0]
            subs.append(sub(cik,name,sic,ticker))
    
    return subs


def populate_sub():
    test = cik_from_sub()
    for a in test:
        db.collection(u'sub').document(a.cik).set(a.to_json())


populate_sub()

    
    





