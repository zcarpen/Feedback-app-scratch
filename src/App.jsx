import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import feedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {

    const [feedback, setFeedback] = useState(feedbackData);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(items => items.id !== id))
        }
    }

    const addFeedback = (item) => {
        console.log('here')
        setFeedback([...feedback, item])
    }

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path="/" exact element={
                        <>
                            <FeedbackForm addFeedback={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={handleDelete} />
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App;
