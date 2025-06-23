---
title: "Labubu Bot"
description: "Automated bot to buy products from a website."
date: "2025-06-19"
banner:
 src: "../../images/labubupic.jpg"
 alt: "Labubu Bot"
 caption: ''
categories:
 - "Python"
 - "Selenium"
keywords:
 - "Python"
 - "Selenium"


---

# 🧸 LabubuBot

An automated Selenium bot that monitors product availability and purchases **LABUBU** sets from the [Pop Mart US website](https://www.popmart.com/us). It detects when a product is in stock, clicks "Buy Multiple Boxes", selects all variants, adds them to the bag, and sends real-time alerts via email.

---

## ✅ Goal
The purpose of creating this bot was to automatically buy Labubu dolls when they are dropped. The dolls drop at random times (typically around 7-8:30pm), the bot runs and opens Google Chrome. Once open, the program will pause and allow the user to sign into their Google Account and into Popmart. A Popmart account is crucial for this bot to work. Once logged in, return back to the Terminal and hit enter to have the bot resume its processes. The bot will continually refresh the web page until the Labubu dolls become available to buy. Once available, the bot then selects all products in the set and then adds them to cart. Once in the cart, the bot will then send an email to the user alerting them that the Labubu dolls have been added to the cart. The user can then return back to the Popmart website and finish checking out.

---
## 🚀 Features

- Automatically monitors product availability
- Clicks "Buy Multiple Boxes" and selects all items
- Adds to bag/cart when available
- Sends:
  - 📧 Email notifications
- Designed to bypass basic bot detection (uses `undetected_chromedriver` + `selenium-stealth`)

---

## 🔧 Installation

1. **Clone the repo**

```bash
git clone https://github.com/moavern/LabubuBot.git
cd LabubuBot
```

2. **Set up a Python virtual environment (recommended)**

```bash
python3 -m venv venv
source venv/bin/activate   # macOS/Linux
venv\Scripts\activate.bat  # Windows
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Running the bot**

```bash
python labubu-bot.py
```

---

## ⚙️ Configuration

The environment variables in a `.env` file need to be updated. The following below are the variables that need to be replaced with your details. 

```env
EMAIL_SENDER=youremail@example.com
EMAIL_RECEIVER=targetemail@example.com
EMAIL_PASSWORD=your-app-password

```

---

## 📂 Project Structure

```bash
LabubuBot/
│
├── bot.py                  # Main bot logic
├── requirements.txt        # Python dependencies
├── .env                    # Your environment variables (not committed)
└── README.md               # This file
```

---

## 🧠 Tech Stack

- **Python 3**
- **Selenium + undetected_chromedriver**
- **selenium-stealth**
- **smtplib (Email)**

---

## 🛡️ Disclaimer

This bot is for **educational purposes only**. Use responsibly and in accordance with the website's terms of service. Abuse may result in your IP/device/account being blocked.

---

## 📫 Contact

Made by [@moavern](https://github.com/moavern) – feel free to reach out for questions or suggestions.
