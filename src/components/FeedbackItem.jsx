import {FaTimes, FaEdit} from 'react-icons/fa';
import {useState, useContext} from 'react'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackItem({item}) {

  const {handleDelete, editFeedback} = useContext(FeedbackContext);

  return (
      <Card >
        <div className="num-display">{item.rating}</div>
        <button className="close">
            <FaTimes onClick={() => handleDelete(item.id)} color='purple'/>
        </button>
        <button className="edit">
          <FaEdit onClick={() => editFeedback(item)} color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
  )
}

export default FeedbackItem
