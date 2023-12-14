import React from 'react';

import {IoCaretUpOutline, IoCaretDownOutline, IoPencilSharp, IoTrashSharp} from 'react-icons/io5';
import {Link} from 'react-router-dom';

function CreateCourseItem({canGoUp, canGoDown, item, goUpHandler, goDownHandler, openEditHandler, deleteHandler}) {
	const handleGoUp = () => goUpHandler(item.id);
	const handleGoDown = () => goDownHandler(item.id);
	const handleOpenEdit = () => openEditHandler(item);
	const handleDelete = () => deleteHandler(item.id);

	return (
		<li className='box-create-course'>
			<div>
				{!canGoUp ? (
					<IoCaretUpOutline
						className='icon'
						onClick={handleGoUp}
					/>
				) : null}

				{!canGoDown ? (
					<IoCaretDownOutline
						className='icon'
						onClick={handleGoDown}
					/>
				) : null}
			</div>

			<p
				key={item.id}
				className={item?.content ? null : 'breaker'}
			>
				{item.title}
			</p>

			{!item?.content ? null : (
				<Link
					to={'/write'}
					onClick={handleOpenEdit}
				>
					<IoPencilSharp className='icon' />
				</Link>
			)}

			<IoTrashSharp
				className='icon'
				onClick={handleDelete}
			/>
		</li>
	);
}

export default CreateCourseItem;
