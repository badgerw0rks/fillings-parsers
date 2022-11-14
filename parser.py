import csv

class sub: 
    def __init__(self, cik, name, sic, ticker): 
        self.cik = cik 
        self.name = name
        self.sic = sic
        self.ticker = ticker
    
    def __str__(self):
        return f" {self.cik}  {self.name} {self.sic} {self.ticker}"




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



test = cik_from_sub()

#print(len(test))
for a in test:
    print(a)
    





