import React from 'react';
import NewChatButton from './NewChatButton';
import ListItem from '../Sidebard/ListItem';
import DeleteConversationsButton from './DeleteConversations';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedConversationId } from '../Dashboard/dashboardSlice';

const Sidebar = () => {
    const dispatch = useDispatch();

    const conversations = useSelector((state) => state.dashboard.conversations);

    const handleSetSelectedChat = (id) => {
        dispatch(setSelectedConversationId(id));
    }   

    return (
        <div className='sidebar_container'>
            <NewChatButton handleSetSelectedChat={handleSetSelectedChat}/>
            {
                conversations.map((c) => (<ListItem 
                    key={c.id}
                    title={c.messages[0].content}
                    conversationId={c.id}
                    handleSetSelectedChat={handleSetSelectedChat}
                />))
            }
            <DeleteConversationsButton />
        </div>
    )
}

export default Sidebar;