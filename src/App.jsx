import { useState } from "react";
import Header from './components/Header';
import feedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {

    const [feedback, setFeedback] = useState(feedbackData);

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

export default App;
