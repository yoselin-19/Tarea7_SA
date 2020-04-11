#!/bin/bash
gulp zip_tarea
cd /
unzip -o /api/dist/Tarea.zip -d /copia/src/
chown -R $NODE_UID:$NODE_GID /copia/src/