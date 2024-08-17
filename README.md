# ARTILLERY LOAD TEST

Para ejectutar los test utilizar el siguiente comando
```bash
export $(cat .env | xargs) && artillery run <RUTA_ARCHIVO_TEST>.yml
```
