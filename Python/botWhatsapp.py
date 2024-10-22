import pywhatkit as kit
import time

"""
id = "FugZdUdMqFsBosmDkmVnVI"
mensaje = "Mensaje automatizado enviado con python"

kit.sendwhatmsg_to_group(id, mensaje, 19, 53)
"""

personas = [
  {
    "nombre": "Luis Velasquez",
    "telefono": "+584248868058"
  },
  {
    "nombre": "Haylen Caraballo",
    "telefono": "+584262800835"
  }
]

for persona in personas:
  mensaje = "Hola " + persona["nombre"] + ", este es un mensaje automatizado"
  kit.sendwhatmsg_instantly(persona["telefono"], mensaje, 20, True)
  time.sleep(10)