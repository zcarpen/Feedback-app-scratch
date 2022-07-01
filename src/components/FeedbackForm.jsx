import {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({addFeedback}) {

    const [text, setText] = useState('')
    const [rating, setRating] = useState('')
    const [message, setMessage] = useState(true)
    const [btnDisabled, setBtnDisabled] = useState(true)

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length >= 10) {
            addFeedback({
                id: uuidv4(),
                rating: rating,
                text: text
            })
            setText('');
            setRating('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={text} placeholder="Write a review" />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
      
    </Card>
  )
}

export default FeedbackForm
