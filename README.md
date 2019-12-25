# Bender Telegram bot

![bender](images/KmuQUbdhgUA.jpg)

# How to install ?

1. Clone repository

2. Install dependency 

```bash
npm install
```

3. Create config.json in ./config

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "your_db_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "your_db_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "your_db_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

4. Create database and run command

```bash
node_modules/.bin/sequelize db:migrate
```

6. Config bot like this

```json
{
  "development": {
      "token": "{you_bot_token}",
      "polling": true
  },
  "test": {
    "token": "{you_bot_token}",
    "polling": true
  },
  "production": {
    "token": "{you_bot_token}",
    "polling": true
  }
}
```

[How do I Create a bot?](https://core.telegram.org/bots)

5. For run bot 

```bash
node start.js
```