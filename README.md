<div align="center">
<img src="https://piyobot.000webhostapp.com/deswita.jpeg" alt="deswita" width="230"/>

# DeswitaBot

<h3 align="center">Deswitabot Adalah Bot Whatsapp Pintar Dengan Fitur Yang Berguna Untuk Grup Maupun Pribadi Message ...</h3>
  </div>
# Info  
 *Bot Ini Dibuat Oleh Alvio Adji Januar || [Nomor Pembuat Bot](https://api.whatsapp.com/send/?phone=6281414046576&text=halo&app_absent=0)
 
<h3 align="center">Made with ❤️ by</h3>
<p align="center">
  <a href="https://github.com/AlvioAdjiJanuar"><img src="https://avatars2.githubusercontent.com/u/68207798?s=400&u=29439908cd661d11443391cb74f5b07267b71117&v=4" height="128" width="128" /></a>
</p>

<p align="center">
  <a href="https://github.com/DeswitaPutri/whatsapp-bot"><img title="Author" src="https://img.shields.io/badge/Author-AlvioAdjiJanuar-darkred.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/DeswitaPutri/whatsapp-bot#Requirements">Persyaratan</a> •
  <a href="https://github.com/DeswitaPutri/whatsapp-bot#installation">Cara Penginstalan</a> •
  <a href="https://github.com/DeswitaPutri/whatsapp-bot#features">Fiturnya</a> •
  <a href="https://github.com/DeswitaPutri/whatsapp-bot#thanks-to">Terimakasih Kepada</a> •
  <a href="https://github.com/DeswitaPutri/whatsapp-bot#license">lisensi</a>
</p>


# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z) (for sticker GIF command)
* Any text editor
* [Magisk](https://download.imagemagick.org/ImageMagick/download/binaries/ImageMagick-7.1.0-6-Q16-HDRI-x64-dll.exe) (Buat nuliskanan kiri folio kanan kiri)
* [Python](https://www.python.org/ftp/python/3.9.7/python-3.9.7-amd64.exe) (Buat canvas)

# installation
## 📝 Cloning this repo
```bash
> git clone https://github.com/DeswitaPutri/whatsapp-bot
> cd whatsapp-bot
```

## ✍️ Folder Case 
```
> Edit Case Bisa Disini
> Atau Mau Menambahkan
```

## 📁 Folder Lib
```
> Disitu Terdapat Function Function Bot
> Edit Terserah Kalian OKey
> Othey
```

## 🗂️ Edit value setting
Edit value yang diperlukan di `settings/setting.json`.
```json
{
  "ownerNumber": "Nomor Kamu@s.whatsapp.net", 
  "prefix": "/",
  "apikey": ""
}

```

`ownerBot`: your WhatsApp number.  

`prefix`: bot's prefix.  

`apikey`: your can get apikey in rest api lolhuman [link](https://lolhuman.herokuapp.com/)

Untuk Mendapatkan Apikey nya , daftar akun terlebih dahulu di website tersebut


## UNTUK PENGGUNA WINDOWS/VPS/RDP

```bash
git https://github.com/DeswitaPutri/whatsapp-bot
cd whatsapp-bot
npm i
npm update
node .
```

---------

## UNTUK PENGGUNA TERMUX
```bash
git clone https://github.com/DeswitaPutri/whatsapp-bot --branch termux
cd whatsapp-bot
npm i
npm update
node .
```

PM2:
```bash
> pm2 start index.js
> pm2 monit
```

PM2 with cron job (restart after 5 hours):
```bash
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

Setelah itu pindai kode QR menggunakan WhatsApp Anda di ponsel Anda!

# Features
```
  LIST MENU
[1]Menu System
[2]Menu Media
[3]Menu Tools
[4]Menu Anime
[5]Menu Eto
[6]Menu Sticker
[7]Menu Downloader
[8]Menu Logo
[9]Menu Game
[10]Menu Group
```

# Thanks to
* [`AlvioAdjiJanuar`](https://github.com/AlvioAdjiJanuar)
