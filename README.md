<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/priyanshubh/Mediminder">
    <img src="assets/images/logo.png" alt="Mediminder Logo" width="100" height="100">
  </a>

  <h3 align="center">Mediminder</h3>

  <p align="center">
    Your Personal Medication Assistant. Never miss a dose again.
    <br />
    <br />
    <a href="https://github.com/priyanshubh/Mediminder">View Code</a>
    ·
    <a href="https://github.com/priyanshubh/Mediminder/issues">Report Bug</a>
    ·
    <a href="https://github.com/priyanshubh/Mediminder/issues">Request Feature</a>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#-about-the-project">About The Project</a></li>
    <li><a href="#-key-features">Key Features</a></li>
    <li><a href="#-tech-stack">Tech Stack</a></li>
    <li><a href="#-folder-structure">Folder Structure</a></li>
    <li><a href="#-getting-started">Getting Started</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-contact">Contact</a></li>
  </ol>
</details>

---

## 🤖 About The Project

**Mediminder** is a user-friendly React Native application built with Expo designed to simplify medication management. It helps users adhere to their medical prescriptions by allowing them to schedule reminders, track their medication history, and manage their health profile.

Whether you are managing a simple vitamin routine or a complex medication schedule, Mediminder ensures you stay on track with timely notifications and an easy-to-use interface.

<div align="center">
  <img src="assets/images/Screenshot_1738002178.png" alt="App Screenshot" width="250" />
</div>

---

## 🔥 Key Features

- **🔔 Smart Reminders**
  Set up precise notifications for your medication to ensure you never miss a dose.
  
- **➕ Easy Medication Entry**
  Intuitive forms (`AddMedicationForm`) to quickly add new medicines with dosage and timing details.

- **📜 Medication History**
  Keep a log of your taken medications and adherence history via the dedicated History tab.

- **🔐 Secure Authentication**
  Integrated **Firebase Auth** for secure Sign In and Sign Up functionality.

- **👤 User Profile**
  Manage personal details and app settings through a dedicated Profile section.

- **📱 Cross-Platform**
  Built with Expo to run smoothly on Android devices.

---

## ⚙️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | <img src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white"/> | Built using Expo SDK and Expo Router for navigation. |
| **Backend & Auth** | <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black"/> | Firebase used for Authentication and potentially real-time data. |
| **Styling** | <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"/> | Custom styling using React Native StyleSheet and constant color tokens. |
| **Language** | <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"/> | Logic written in JavaScript/JSX with TypeScript configuration. |

---

## 📂 Folder Structure

The project follows a modular Expo Router structure:

```text
Mediminder/
├── app/                  # Application Screens & Routes
│   ├── (tabs)/           # Bottom Tab Navigation (Home, History, Profile)
│   ├── login/            # Authentication Screens (SignIn, SignUp)
│   ├── add-new-medication/ # Screen for adding new reminders
│   └── _layout.jsx       # Root Layout configuration
├── components/           # Reusable UI Components
│   ├── AddMedicationForm # Form logic for new inputs
│   ├── MedicationCardItem# UI for individual medicine items
│   ├── EmptyState        # Fallback UI when no data exists
│   └── ...
├── service/              # Logic Layers
│   ├── Storage.jsx       # Local data handling
│   └── ConvertDateTime   # Date formatting utilities
├── config/
│   └── FirebaseConfig.jsx# Firebase initialization
├── assets/               # Images, Fonts, and Icons
└── constant/             # App-wide constants (Colors, Strings)

```
---

## 🧰 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* **Node.js** (v18+)
* **Expo Go** app installed on your physical device or an Android Emulator.

### Installation

1. **Clone the repository**
```bash
git clone [https://github.com/priyanshubh/Mediminder.git](https://github.com/priyanshubh/Mediminder.git)
cd Mediminder

```


2. **Install dependencies**
```bash
npm install
# or
yarn install

```


3. **Configure Firebase**
* Go to `config/FirebaseConfig.jsx`.
* Ensure your Firebase API keys and configuration are correctly set up.


4. **Start the application**
```bash
npx expo start

```


* Scan the QR code with the **Expo Go** app (Android) or use an emulator.



---

## 🔧 Contributing

Contributions are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## 🚀 Follow Me

<div align="center">
  <a href="https://github.com/priyanshubh">
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/priyanshu-bharti">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://priyanshubharti.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
</div>

<br />
<p align="center">Built with ❤️ by <a href="https://www.google.com/search?q=https://github.com/priyanshubh">Priyanshu Bharti</a></p>

