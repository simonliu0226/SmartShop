# SmartShop – AI-Powered E-Commerce Platform

SmartShop is a full-stack e-commerce web application that showcases machine learning-based product recommendations. Built as a solo project, it demonstrates end-to-end web development, serverless backend integration, and ML-driven personalization—all fully deployed on AWS.

## MVP Features

- Product catalog with images, prices, and descriptions
- User authentication (sign-up, sign-in, logout)
- Add-to-cart and simulated checkout workflow
- Personalized product recommendations on product and cart pages
- Admin product management via backend (basic interface)

## Recommendation System (Planned)

- Phase 1: Simple in-memory collaborative filtering (based on user clicks)
- Phase 2: Integration with Amazon Personalize for scalable ML-driven recommendations

## Tech Stack

### Frontend
- React.js + TypeScript (Vite)
- Tailwind CSS for UI styling
- Deployed on AWS S3 + CloudFront

### Backend
- Node.js + Express
- RESTful API deployed via AWS Lambda & API Gateway
- AWS Cognito for user authentication
- DynamoDB for storing users, carts, and products
- Amazon S3 for product images

### Machine Learning
- Initial recommendation logic with manual rules or collaborative filtering
- AWS Personalize for advanced, real-time personalization (planned)

## Architecture Diagram

![Architecture Diagram](./architecture.png)

## Deployment Goals

- Fully serverless backend using AWS Lambda, API Gateway, and DynamoDB
- Static frontend hosted via S3 with CloudFront CDN
- Image uploads to S3
- CI/CD with GitHub Actions and Amplify (stretch goal)

## Project Structure (planned)
smartshop/
├── backend/
│ ├── functions/ # AWS Lambda handlers
│ ├── routes/ # Express route handlers
│ └── utils/
├── frontend/
│ ├── src/
│ └── public/
├── architecture.png
├── FEATURES.md
└── README.md
## Status

> Currently in **planning & setup** phase. First milestone: static product catalog + login + cart UI.

## Timeline

- Week 1: Project scaffolding, product browsing UI, Cognito auth
- Week 2–3: Backend API (Lambda), cart + order logic
- Week 4: Basic recommender logic
- Week 5–6: AWS Personalize integration, full deployment

---

Stay tuned for updates and a live demo!
