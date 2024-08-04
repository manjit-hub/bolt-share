# ⚡ BOLT SHARE ⚡

[![Live Demo](https://img.shields.io/badge/BOLT%20SHARE-Live%20Demo-brightgreen)](https://bolt-share.vercel.app/)

## 🚀 Deployed Link

## Check out the live server [Bolt Share](https://bolt-share.vercel.app/)

## 📸 Screenshots
![Screenshot 2024-08-04 122200](https://github.com/user-attachments/assets/69a53f51-f07d-48c2-a027-fffccdb647bf) 
![Screenshot 2024-08-04 122511](https://github.com/user-attachments/assets/4f175131-0455-4faf-9775-c97d53f405fb)


## 🌟 Introduction

Welcome to **Bolt Share**, a file-sharing platform built using the MERN stack (MongoDB, Express, React, Node.js). With Bolt Share, you can effortlessly upload any file of size up to 10MB. Once uploaded, the platform generates a unique link for your file which you can share. Anyone with that link can download the content. 📂✨

## 🛠️ Features

- **File Uploading**: Upload files up to 10MB in size.
- **Link Generation**: Generate a unique link for each uploaded file.
- **Easy Sharing**: Share the generated link with anyone.
- **File Downloading**: Download files using the shared link.

## 💻 Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **File Uploading**: Multer
- **Hosting**: Vercel (Frontend), Render (Backend)

## 🏗️ Project Setup

### Prerequisites

- Node.js installed on your machine
- MongoDB setup locally or using a cloud service like MongoDB Atlas

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/manjit-hub/bolt-share.git
    cd bolt-share
    ```

2. **Backend Setup:**

    - Navigate to the `Backend` directory:
    
        ```bash
        cd Backend
        ```
    
    - Install backend dependencies:
    
        ```bash
        npm install
        ```
    
    - Create a `.env` file in the `Backend` directory and add the following environment variables:
    
        ```env
        PORT=your_port
        DB_URI=your_mongodb_uri
        BACKEND_URL=your_backend_url
        ```
    
    - Start the backend server:
    
        ```bash
        node backend.js
        ```

3. **Frontend Setup:**

    - Navigate to the `frontend` directory:
    
        ```bash
        cd ../frontend
        ```
    
    - Install frontend dependencies:
    
        ```bash
        npm install
        ```
    
    - Create a `.env` file in the `frontend` directory and add the following environment variables:
    
        ```env
        VITE_BACKEND_URL=your_backend_url
        ```
    
    - Start the frontend development server:
    
        ```bash
        npm run dev
        ```

## 🌟 Usage

1. **Upload a File**: Click on the `UPLOAD` button and select a file.
2. **Generate Link**: Click on the `Convert` button to generate a unique link.
3. **Share**: Copy the link and share it with anyone.
4. **Download**: Open the link in any browser to download the file.

## 🤝 Contributing

Contributions are welcome! Please fork this repository and create a pull request.

## 📧 Contact

For any inquiries, please reach out to us at [manjitmajhi156@gmail.com](mailto:manjitmajhi156@gmail.com).

---

Made with ❤️ by [Manjit Majhi](https://github.com/manjit-hub)
