# FaceMint

FaceMint is a web application designed to let users upload a photo and mint it as an NFT directly to their wallet. The app provides a seamless experience for NFT photo uploads, minting, and management, with a modern UI built using React and Tailwind CSS. The project is structured for scalability and maintainability, featuring reusable components and hooks.

## Features
- Upload a photo and mint it as an NFT to your wallet
- Task board for workflow organization
- Pricing and testimonials sections
- Responsive design with Tailwind CSS
- Modular React components

## Project Structure
```
Frontend/
├── components.json
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Logo.jsx
│   │   ├── PhotoUpload.jsx
│   │   ├── Pricing.jsx
│   │   ├── ProblemStatement.jsx
│   │   ├── TaskBoard.jsx
│   │   ├── TaskColumn.jsx
│   │   ├── Testimonials.jsx
│   │   └── ui/
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── collapsible.jsx
│   │       ├── skeleton.jsx
│   │       ├── switch.jsx
│   │       ├── toggle-group.jsx
│   │       └── toggle.jsx
│   ├── hooks/
│   │   └── useTaskBoard.js
│   └── lib/
│       └── utils.js
```

## Getting Started
1. **Install dependencies**
   ```bash
   cd Frontend
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. **Open in browser**
   Visit `http://localhost:5173` (default Vite port)

## Use Case
FaceMint enables users to upload a photo, which is then minted as an NFT and sent to their connected wallet. This process allows users to easily create and own unique digital assets on the blockchain through a simple web interface.

## Technologies Used
- React
- Vite
- Tailwind CSS
- PostCSS

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
