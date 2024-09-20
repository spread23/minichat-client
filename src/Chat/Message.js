import React, { useState, useRef, useEffect } from 'react';

import Markdown from 'react-markdown';

import {GrUser} from 'react-icons/gr';
import {FcMindMap} from 'react-icons/fc';

const SlowText = (props) => {

    const {speed, text} = props;
    const [placeholder, setPlaceholder] = useState(text[0]);

    const index = useRef(0);

    useEffect(() => {
        function tick () {
            index.current++;
            setPlaceholder((prev) => prev + text[index.current]);
        }
        if(index.current < text.length - 1){
            let addChar = setInterval(tick, speed);
            return () => clearInterval(addChar);
        }

    }, [speed, placeholder, text]);

    return <Markdown>{placeholder}</Markdown>
}

const Message = ({content,   aiMessage, animate}) => {
    return (
        <div className='message_container'
            style={{background: aiMessage ? 'rgb(247, 247, 248)' : 'white'}}
        >
        
            <div className='message_avatar_container'>
                {aiMessage ? <FcMindMap /> : <GrUser />}
            </div>
            <p className='message_text'>
               {animate ? <SlowText speed={30} text={content} /> : <Markdown>{content}</Markdown>}
            </p>
        </div>
    );
}

export default Message;