from bs4 import BeautifulSoup
import os

ratings = {'BETHESDA BAGELS OF DUPONT CIRCLE': '2', 
'BREADBITE BAKERY': '2', 
'CATANIA BAKERY': '3', 
'CHEZ HAREG GOURMET BAKERY': '2', 
'COSTCO WHOLESALE': '2', 
'CROWN CARRIBEAN BAKERY': '2', 
'DIVINELY DECADENT DESSERTS': 'N/A', 
'DUNKIN DONUTS (n)': '3', 
'EL LATINO BAKERY': '1', 
'EL-EDEN BAKERY': '4', 
'ENAT ETHIOPIA': '2', 
'ESHET INJERA': '2', 
'FAIRMONT HOTEL (BAKERY PASTRY SHOP)': '3', 
'GEORGETOWN CUPCAKE': '1', 
'GRASSROOTS GOURMET': '2', 
'HARRIS TEETER': '1', 
'LE CAPRICE DC CAFE BAKERY': '3', 
'LYON BAKERY': '3', 
'LYON BAKERY FOR UNION MARKET': '1', 
'METROPOLITAN BAKING COMPANY': '2', 
'PAN LOURDES BAKERY': '2', 
'PIE SISTERS OF GEORGETOWN': '2', 
'RARE SWEETS': 'n/a', 
'RICO BAKERY (n)': '2', 
'RISE BAKERY': '2', 
'ROSEMARYS THYME BISTRO(n)': 'n/a', 
'SOUK BY THE SWEET LOBBY': '2', 
'SPRING MILL BREAD CO. BAKERY': '2', 
'SPRINKLES': '2', 
'STICKY FINGERS BAKERY': '2', 
"THE BAKER'S LOUNGE": '2', 
'THE SWEET LOBBY': '2', 
"UNCLE CHIP'S": '', 
'ZELALEM INJERA': '2'}

PROJECT_DIR = os.getcwd()

f = PROJECT_DIR + '/static/data/health_data.html'

def read_bakery_html_file(f):
    with open(f, 'rU') as f:
        html_doc = f.read()
        soup = BeautifulSoup(html_doc, 'html.parser')
        bakeries = soup.findAll("h3")
        bakery_data = []
        for b in bakeries: 
            addy = b.nextSibling
            addy_len = len(addy)- 1
            address = addy[5:][:addy_len]
            bakery_data.append({'name': b.getText(), 'address':address})
        return bakery_data

def retrieve_geolocation_data(bakeries): 
    markers = []

    for bakery in bakeries: 
        zipcode = bakery['address'][-5:]
        address = bakery['address'][:-20]
        name = bakery['name']

        params = {'access_token':'pk.eyJ1IjoibWlsbHpwYXVnaCIsImEiOiJjaWxzbWtzdHYwMDJndTlrcmZzZHNlMjBuIn0.Zw-IWCL1tBvlh5NKKKlTsg',
                 'country':'us', 'zipcode':zipcode}

        url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address + ".json"

        resp = requests.get(url=url, params=params)
        data = resp.json()['features'][0]

        if ratings[name] >= 4:
        	marker_symbol = "danger"
        elif ratings[name] == 3:
        	marker_symbol = "bakery" 
        else:
        	marker_symbol = "pitch"


        b_geodata = {
                    "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [data['center'][0],data['center'][1]]
                      },
                      "properties": {
                       "title" : name, 
                        "marker-symbol": marker_symbol, 
                       "description" : "Health Inspection Rating: " + ratings[name]
                      }
                    }
        
        dup = [m for m in markers if m['properties']['title'] == name]
        if not dup: 
            markers.append(b_geodata)

    return markers





