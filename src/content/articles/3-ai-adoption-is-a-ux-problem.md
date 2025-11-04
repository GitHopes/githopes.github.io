---
isDraft: false
title: ¿Qué es el proceso de negociación DORA?
snippet: El significado del nombre de cada proceso en la negociación de DHCP
slug: dora-dhcp
author: Franco Leon
category: AI
readingDuration: 2
pubDate: 2025 11 4
coverAlt: Tobi Lutke - Shopify CEO - I heard this internal memo of mine is being leaked right now, so here it is
originalLink: https://thenanyu.com/ux.html
cover: https://www.manageengine.com/products/oputils/images/dhcp-process.jpg
---

# ¿Qué es el proceso de negociación DORA?
> El protocolo DHCP es uno de los más utilizados por los routers, tanto domésticos como también profesionales.

El proceso de negociación DORA DHCP es un proceso de 4 pasos de red que permiten a los servidores DHCP asignar dinámicamente IP y otros párametros de configuración de la red a los dispositivos que lo soliciten sin intervención manual.


<img src="https://www.manageengine.com/products/oputils/images/dhcp-process.jpg" width="600" height="300"/>

# ¿Cuáles son los pasos, y que significado traen cada uno?

## Discover - Mensaje de detección de DHCP.
Los clientes DHCP después de haber activado el servicio de DHCP mandan un mensaje de difusión buscando un servidor de DHCP en toda la red. Como el cliente DHCP no tiene ip manda un mensaje con la ip 0.0.0.0 y como no conoce la ip del servidor busca la dirección 255.255.255.255, estas ip son conocidas como direcciones de difusión.
## Offer - Mensaje de oferta DHCP.
El servidor de DHCP recibe el mensaje de detección y envía una oferta de DHCP a la dirección ip 255.255.255.255 porque todavía el cliente no tiene asignado una dirección ip, en el contenido de la oferta de DHCP esta información como la dirección IP y el tiempo que tiene permitido usar el host.
## Request - Mensaje de solicitud DHCP.
El cliente manda una solicitud de mensaje al servidor DHCP que realizó la oferta, confirmando la aceptación de la IP ofrecida. Si recibió múltiples ofertas acepta al primer DHCP server en llegar.
## ACK - Mensaje de reconocimiento de DHCP.
El servidor envía un mensaje de confirmación al cliente para confirmar el mensaje de solicitud y le envía un mensaje de reconocimiento conteniendo la dirección ip asignada y la máscara de subred que le asigna. La dirección de origen será la dirección ip del servidor DHCP mientras que la de destino será 255.255.255.255 en la capa de red, sin embargo en la capa de enlace la dirección de destino será la ip del cliente.
