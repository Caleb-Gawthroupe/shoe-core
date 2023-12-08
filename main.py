import pandas as pd

class Shoe:
    def __init__(self, url, name, price, image_url):
        self.url = url
        self.name = name
        self.price = price
        self.image_url = image_url

    
def add_shoe(shoe):
    data = {
        'Name': [shoe.name],
        'Image': [shoe.image_url],
        'Price': [shoe.price],
        'Website': [shoe.url]
    }
    
    df = pd.DataFrame(data)
    df.to_csv('shoes.csv', mode='a', index=False, header=False)
    
    print("Data appended successfully.")

def create_shoe():
    add_shoe(Shoe(url=input("Url: "), name=input("Name: "), price=int(input("Price: ")), image_url=input("Image Url: ")))
    
    
create_shoe()