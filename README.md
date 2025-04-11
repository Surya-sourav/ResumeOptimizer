# Smart Resume Rewriter

![Smart Resume Rewriter](https://resume-optimizer-one.vercel.app/)

A powerful tool that transforms ordinary resume bullet points into impactful achievement statements using AI. The Smart Resume Rewriter helps job seekers optimize their resumes with professionally rewritten content customized for different tones and contexts.

## ✨ Glimpses
![WhatsApp Image 2025-04-11 at 8 44 17 PM](https://github.com/user-attachments/assets/73d20bdf-6002-4495-97b5-6086e9962d70)
![WhatsApp Image 2025-0![WhatsApp Image 2025-04-11 at 8 44 17 PM](https://github.com/user-attachments/assets/b2956181-44fb-47d4-99c3-be4e60b12594)
4-11 at 8 45 39 PM](https://github.com/user-attachments/assets/caa5e4b6-68d9-4522-a2b3-b177c8699643)
![WhatsApp Image 2025-04-11 at 8 44 16 PM](https://github.com/user-attachments/assets/be4d2f9f-3687-4733-bf5d-73149ee9c668)
![WhatsApp Image 2025-04-11 at 8 45 47 PM](https://github.com/user-attachments/assets/e12af958-eb25-404d-834c-13087451cd28)


## 🌟 Features

- **AI-Powered Resume Enhancement**: Leverages Generative AI to rewrite resume bullet points in a personalized way
- **Multiple Tone Options**: Choose from action-oriented, recruiter-friendly, or technical writing styles
- **User-Friendly Interface**: Clean, responsive design with intuitive controls
- **Instant Results**: Get professionally rewritten content in seconds
- **One-Click Copy**: Easily copy your rewritten bullet points to clipboard

## 🚀 Live Demo

Check out the live application at: [Smart Resume Rewriter](https://resume-optimizer-one.vercel.app/)

## 🛠️ Tech Stack

### Frontend
- **React.js**: Core framework for building the user interface
- **CSS3**: Custom styling with responsive design
- **PropTypes**: Type checking for component props
- **Fetch API**: For making API requests to the backend

### Backend

- **Node.js**: Runtime environment for the server
- **Express.js**: Web application framework for handling routes and requests
- **Cerebras AI SDK**: Integration with Cerebras Cloud for AI-powered text generation
- **dotenv**: Environment variable management
- **CORS**: Cross-Origin Resource Sharing support

## 📐 Architecture

The application follows a client-server architecture:

- **Frontend**: React SPA (Single Page Application) that handles user interactions and displays results
- **Backend**: RESTful API built with Express that processes requests and communicates with the Cerebras AI service
- **AI Service**: Integration with Cerebras Cloud using their Node.js SDK to generate optimized resume content

## 🔌 API Endpoints

| Endpoint | Method | Request Body | Description |
|----------|--------|-------------|-------------|
| `/api/resume/rewrite` | POST | `{ bulletPoint: string, tone: string }` | Rewrites a resume bullet point based on the specified tone |

#### Request Format
```json
{
  "bulletPoint": "Managed a team of designers to create website mockups",
  "tone": "action-oriented"
}
```

#### Response Format
```json
{
  "success": true,
  "data": {
    "rewrittenBullet": "Led a design team that delivered high-quality website mockups, resulting in 30% faster project completion"
  }
}
```

## 🏗️ Project Structure

```
smart-resume-rewriter/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── ResumeForm.jsx
│       │   └── RewrittenBullet.jsx
│       ├── App.jsx         # Main application component
│       └── index.js        # Entry point
│
└── server/                 # Backend Express application
    ├── src/
    │   ├── controllers/    # Request handlers
    │   │   └── resumeController.js
    │   ├── routes/         # API routes
    │   │   └── resumeRoutes.js
    │   ├── services/       # Business logic
    │   │   └── aiservices.js
    │   └── app.js          # Express application setup
    └── .env                # Environment variables (not tracked in git)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Cerebras AI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/smart-resume-rewriter.git
cd smart-resume-rewriter
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Configure environment variables
Create a `.env` file in the server directory:
```
PORT=5000
CEREBRAS_API_KEY=your_cerebras_api_key_here
```

4. Install frontend dependencies
```bash
cd ../client
npm install
```

### Running the Application

1. Start the backend server
```bash
cd server
npm start
```

2. Start the frontend development server
```bash
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:5000`

## 📝 Usage

1. Enter your existing resume bullet point in the text area
2. Select your desired tone:
   - **Action-Oriented**: Emphasizes strong action verbs and dynamic achievements
   - **Recruiter-Friendly**: Uses industry terminology that appeals to recruiters and ATS systems
   - **Technical**: Highlights technical skills with specific terminology
3. Click "Rewrite Bullet Point" to generate your optimized content
4. Copy the result to your resume with the "Copy to Clipboard" button


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- [Cerebras AI](https://cerebras.ai) for providing the text generation API
- [React](https://reactjs.org/) for the frontend framework
- [Express](https://expressjs.com/) for the backend framework

---

Built with ❤️ by [Surya Parida](https://www.linkedin.com/in/suryaparida/) For [VettelTech](https://vetteltech.com/)
