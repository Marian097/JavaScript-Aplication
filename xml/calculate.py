import os
import xml.etree.ElementTree as ET;

namespace = {
    "cbc": "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2",
    "cac": "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
}


folder = "C://Users//Marian-PC//OneDrive//Desktop//xmlFiles"
total_general = 0

for filename in os.listdir(folder):
    if filename.endswith(".xml"):
        filepath = os.path.join(folder, filename)
        tree = ET.parse(filepath)
        root = tree.getroot()
        
        
        payable = root.find(".//cbc:PayableAmount", namespace)
        if payable is not None:
            try:
                valoare = float(payable.text)
                total_general += valoare
                
            except ValueError:
                print(f"Valoare invalida in fisierul {filename} : {payable.text}")
                
        else:
            print(f"Tag <cbc:PayableAmount> lipsă în {filename}")
            
print(f"Total venituri din toate fișierele XML: {total_general:.2f} RON")
                