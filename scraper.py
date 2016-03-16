from bs4 import BeautifulSoup
import os

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

        b_geodata = {
                    "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [data['center'][0],data['center'][1]]
                      },
                      "properties": {
                       "title" : name, 
                        "marker-symbol": "danger", 
                       "description" : "Health Inspection Rating: "
                      }
                    }
        
        dup = [m for m in markers if m['properties']['title'] == name]
        if not dup: 
            markers.append(b_geodata)

    return markers  