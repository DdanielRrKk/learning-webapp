import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeLesson } from '../../redux/lessonSlice/lessonSlice';

import ContentItem from '../../components/ContentItem/contentItem';

import { HandleTransformContentStringToContentArray } from '../../helpers/helpers';
import { MAX_LENGTH, WRITE_PAGE_PLACEHOLDER } from '../../helpers/constants';

export default function WritePage() {
    const lessonForEdit = useSelector(state => state.lesson);
    const dispatch = useDispatch();

    const [lessonId, setLessonId] = React.useState(null);
    const [title, setTitle] = React.useState('');

    const [contentString, setContentString] = React.useState('');
    const [contentArray, setContentArray] = React.useState([]);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // console.log('content', content);

    React.useEffect(() => {
        if(lessonForEdit) {
            setLessonId(lessonForEdit.id);
            setTitle(lessonForEdit.title);
            setContentString(lessonForEdit.content);
            setIsMenuOpen(false);
            setContentArray(HandleTransformContentStringToContentArray(lessonForEdit.content));
            dispatch(removeLesson());
        }
    }, []);


    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentStringsChange = (e) => {
        setContentString(e.target.value);
        setContentArray(HandleTransformContentStringToContentArray(e.target.value));
    }

    const handleClearContentString = () => { 
        setTitle(''); 
        setContentArray([]); 
        setContentString(''); 
        setIsMenuOpen(false); 
    }

    const handleSaveContentString = () => {
        const lessons = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];

        if(lessonId === null) lessons.push({ id: lessons.length + 1, title: title, content: contentString });
        else {
            const index = lessons.findIndex((item) => item.id === lessonId);
            lessons[index] = { id: lessonId, title, content: contentString };
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
                    onChange={handleContentStringsChange}/>
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
                {contentArray.length > 0 ?
                    <>
                        {contentArray.map((item) => (
                            <ContentItem key={item.id} type={item.type} data={item.data}/>
                        ))}
                    </>
                    :
                    <p className="text-4xl">Place for visualizing your content</p>}
            </div>
        </div>
    );
}
