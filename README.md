# Clone Spotify

## Referências

- https://www.youtube.com/watch?v=dB4c92i4498
- https://drive.google.com/drive/folders/1_otlml4QSqqkbexREoL0-mwO-SH2kn90
- https://drive.google.com/drive/folders/1kIE7AK1PI2qcpr-kMNDK-vMuUQMSFdrz


## Setup local via docker

- Inicia container com node em modo loop
    $ make run

- Acessa o container para executar os comandos

    $ make sh

- Setup inicial da aplicação

    node@bef4d306ac6b:/$ cd /app/spotify

    node@bef4d306ac6b:/app/spotify$ npm create vite@latest

    Framework: React
    Language: Javascript

    node@bef4d306ac6b:/app/spotify$ npm install

- Ajuste no arquivo "package.json" para expor a porta 5173 para o host (fora do docker)

    "dev": "vite --host",