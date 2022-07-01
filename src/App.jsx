import { useState } from "react";
import Header from './components/Header';
import feedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {

    const [feedback, setFeedback] = useState(feedbackData);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(items => items.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
            </div>
        </>
    )
}

export default App;
