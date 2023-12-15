import ImageContent from '../content/ImageContent';
import TitleContent from '../content/TitleContent';
import TextContent from '../content/TextContent';
import CodeContent from '../content/CodeContent';
import ListContent from '../content/ListContent';
import ErrorContent from '../content/ErrorContent';

function ContentList({data}) {
	return (
		<>
			{data.map((item, index) => {
				switch (item.type) {
					case 'img':
						return (
							<ImageContent
								key={index}
								data={item}
							/>
						);
					case 'title':
						return (
							<TitleContent
								key={index}
								data={item}
							/>
						);
					case 'text':
						return (
							<TextContent
								key={index}
								data={item}
							/>
						);
					case 'code':
						return (
							<CodeContent
								key={index}
								data={item}
							/>
						);
					case 'list':
						return (
							<ListContent
								key={index}
								data={item}
							/>
						);
					default:
						return <ErrorContent key={index} />;
				}
			})}
		</>
	);
}

export default ContentList;
