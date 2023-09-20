import React from 'react';

import ContentItem from '../../components/contentItem';

import { WRITE_PAGE_PLACEHOLDER } from '../../helpers/constants';

export default function WritePage() {
    const [contentString, setContentString] = React.useState([]);
    const [content, setContent] = React.useState([]);

    const handleChangeContentStrings = (e) => {
        setContentString(e.target.value);
        let temp = e.target.value.split('\n');
        console.log('temp', temp);
        // setContent(...content, {
        //     id: content[content.length - 1].id + 1,
        //     type: 'text',
        //     data: e.target.value
        // })
    }
    const handlTransformstringToContent = () => {
        if(contentString === '') {
            setContent([]);
            return;
        }

        const array = contentString.split('\n');
        console.log('array', array);

        let id = 0;
        let currentType = "text";
        let currentData = [];
        const resultArray = [];

        for (let i = 0; i < array.length; i++) {
            const str = array[i];
            
            if (str.startsWith(">")) currentType = str.slice(1);
            else {
                currentData.push(str);
            
                if (i + 1 === array.length || array[i + 1].startsWith(">")) {
                    resultArray.push({ 
                        id: id, 
                        type: currentType, 
                        data: currentData 
                    });
                    
                    id++;
                    currentType = "text";
                    currentData = [];
                }
            }
        }

        console.log('resultArray', resultArray);
        setContent(resultArray);
    }

    return (
        <div className='container-main flex-row'>
            <div className="w-1/2 h-full">
                <textarea
                    className="editor"
                    placeholder={WRITE_PAGE_PLACEHOLDER}
                    value={contentString}
                    onChange={handleChangeContentStrings}/>
            </div>

            <button 
                className='h-24 w-24 p-2 absolute bottom-4 bg-neutral-600 rounded-full'
                onClick={handlTransformstringToContent}>
                Transform
            </button>

            <div className="w-1/2 h-full p-4 pb-32 content gap-4">
                {content.length !== 0 ?
                    <>
                        {content.map((item) => (
                            <ContentItem key={item.id} type={item.type} data={item.data}/>
                        ))}
                    </>
                    :
                    <p className="text-4xl">Place to visualizing your content</p>}
            </div>
        </div>
    );
}