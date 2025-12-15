## db helper file 

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from tickerparser import get_data

cred = credentials.Certificate("key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# load ticker.json to firebase
def populate_sub():
    #test = cik_from_sub()
    test = get_data()
    for a in test:
        db.collection("ticker").document(str(test[a]['cik_str'])).set(test[a])

#populate_sub() 

    
    





