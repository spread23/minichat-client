import React from 'react';
import { UseSelector, useSelector } from 'react-redux';
import Messages from './Messages';
import NewMessageInput from './NewMessageInput';
import { setSelectedConversationId } from '../Dashboard/dashboardSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const ChatLogo = () => {
    return (
        <div className='chat_gpt_logo_container'>
            <p className='chat_gpt_logo'>
                Chatbot for Bgps
            </p>
        </div>
    );
}

const Chat = () => {
	
	useEffect(() => {
        if(localStorage.getItem('sessionId')) localStorage.removeItem('sessionId');
    }, []);
	
    const selectedConversationId = useSelector((state) => state.dashboard.selectedConversationId);
	
	const dispatch = useDispatch();

    dispatch(setSelectedConversationId('hi'));

    return (
        <div className='chat_container'>
        {
            !selectedConversationId ? (<ChatLogo />) :
            (
                <div className='chat_selected_container'>
                    <Messages />
                    <NewMessageInput />
                </div>
            )
        }
            
        </div>
    )
}

export default Chat;