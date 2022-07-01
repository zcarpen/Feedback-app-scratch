import {createContext, useState} from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
          id: 1,
          rating: 10,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
          id: 2,
          rating: 9,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
          id: 3,
          rating: 8,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
      ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(items => items.id !== id))
        }
    }

    const addFeedback = (item) => {
        console.log('here')
        setFeedback([...feedback, item])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const updateItem = (id, updItem) => {
        console.log(id, updItem);
        setFeedback(feedback.map(item => item.id === id ? {...item, ...updItem} : item))
    }



    return <FeedbackContext.Provider value={{feedback, feedbackEdit, editFeedback, handleDelete, addFeedback, updateItem}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;