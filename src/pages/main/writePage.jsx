import React from 'react';

import { useSelector } from 'react-redux';

import ContentItem from '../../components/contentItem';

import { MAX_LENGTH, WRITE_PAGE_PLACEHOLDER } from '../../helpers/constants';

export default function WritePage() {
    const lessonForEdit = useSelector(state => state.lesson);

    const [lessonId, setLessonId] = React.useState(null);
    const [title, setTitle] = React.useState('');

    const [contentString, setContentString] = React.useState([]);
    const [content, setContent] = React.useState([]);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    const handleSetEditorTextFromEditItem = (item) => {
        setLessonId(item.id);
        setTitle(item.title);
        setContent(item.content);
        setIsMenuOpen(false);
        
        let tempStr = '';
        for (let i = 0; i < item.content.length; i++) {
            const tempItem = item.content[i];
            tempStr += `>${tempItem.type}\n`;
            for (let j = 0; j < tempItem.data.length; j++) tempStr += `${tempItem.data[j]}\n`;
        }
        setContentString(tempStr);
    }


    React.useEffect(() => {
        console.log('lessonForEdit', lessonForEdit);
        handleSetEditorTextFromEditItem(lessonForEdit);
    }, []);


    const handleTitleChange = (e) => setTitle(e.target.value);

    const handleChangeContentStrings = (e) => {
        setContentString(e.target.value);
        if(e.target.value.charAt(e.target.value.length - 1) === '\n') handlTransformStringToContent();
    }
    const handlTransformStringToContent = () => {
        if(contentString === '') { setContent([]); return; }

        const array = contentString.split('\n');

        let currentId = 0, currentType = "text", currentData = [];
        const resultArray = [];

        for (let i = 0; i < array.length; i++) {
            const str = array[i];
            
            if (str.startsWith(">")) currentType = str.slice(1);
            else {
                currentData.push(str);
            
                if (i + 1 === array.length || array[i + 1].startsWith(">")) {
                    resultArray.push({  id: currentId , type: currentType, data: currentData });
                    
                    currentId++; currentType = "text"; currentData = [];
                }
            }
        }

        setContent(resultArray);
    }

    const handleClearContentString = () => { setTitle(''); setContent([]); setContentString(''); setIsMenuOpen(false); }

    const handleSaveContentString = () => {
        const lessons = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];

        if(lessonId === null) lessons.push({ id: lessons.length + 1, title: title, content: content });
        else {
            const index = lessons.findIndex((item) => item.id === lessonId);
            lessons[index] = { id: lessonId, title: title, content: content };
        }

        localStorage.setItem('lessons', JSON.stringify(lessons));
        history.back();
    }


    return (
        <div className='container-main h-screen flex-row'>
            <div className="w-1/2 h-screen">
                <input 
                    className="editor-title"
                    value={title}
                    onChange={handleTitleChange}
                    maxLength={MAX_LENGTH}
                    placeholder='Lesson Title'/>

                <textarea
                    className="editor"
                    placeholder={WRITE_PAGE_PLACEHOLDER}
                    value={contentString}
                    onChange={handleChangeContentStrings}/>
            </div>

            <div className='flex flex-col justify-center items-center absolute bottom-4 gap-4 transition-all'>
                <button 
                    className={`h-16 w-16 p-2 bg-neutral-600 opacity-90 rounded-full ${!isMenuOpen ? 'hidden' : ''}`}
                    onClick={handleSaveContentString}>
                    Save
                </button>

                <button 
                    className={`h-16 w-16 p-2 bg-neutral-600 opacity-90 rounded-full ${!isMenuOpen ? 'hidden' : ''}`}
                    onClick={handleClearContentString}>
                    Clear
                </button>

                <button 
                    className='h-20 w-20 p-2 bg-neutral-600 opacity-90 rounded-full'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    Menu
                </button>
            </div>

            <div className="w-1/2 h-full p-4 pb-20 content gap-4">
                {content.length !== 0 ?
                    <>
                        {content.map((item) => (
                            <ContentItem key={item.id} type={item.type} data={item.data}/>
                        ))}
                    </>
                    :
                    <p className="text-4xl">Place for visualizing your content</p>}
            </div>
        </div>
    );
}
