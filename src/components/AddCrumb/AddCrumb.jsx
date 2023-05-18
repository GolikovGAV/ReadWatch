import React from 'react';
import s from './AddCrumb.module.css';
import Modal from '../Modal/Modal';
import plus from '../../images/plus-small-svgrepo-com.svg';

function AddCrumb() {
	const [state, setState] = React.useState(false);

	const openModal = () => {
		state === false ? setState(true) : setState(false);
	};

	return (
		<>
			<button className={s.button} onClick={() => openModal()}>
				<img src={plus} alt='plus' className={s.icons} />
			</button>
			{state === true && <Modal onClick={openModal} />}
		</>
	);
}

export default AddCrumb;
