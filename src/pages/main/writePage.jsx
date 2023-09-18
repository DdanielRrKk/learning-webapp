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
        const resultArray = [];

        const array = contentString.split('\n');
        let type = '';
        let dataString = '';
        let dataArray = [];

        for (let i = 0; i < array.length; i++) {
            let temp = array[i];

            if(temp[0] === '>') {
                type = temp.substring(1);

                if(resultArray.length !== 0) {
                    resultArray.push({
                        id: resultArray[resultArray.length],
                        type: type,
                        data: dataArray
                    });

                    dataString = '';
                    dataArray = [];
                }
            }
            else {
                if(type === 'list' || type === 'code') {
                    dataArray.push(temp);
                }
                else {
                    dataString = temp;
                }
            }
        }

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
                onClick={() => {
                    let temp = contentString.split('\n');
                    setContent('temp', temp);
                }}>
                Transform
            </button>

            <div className="w-1/2 h-full p-4">
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