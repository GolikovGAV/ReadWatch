import React from 'react';
import s from './Crumb.module.css';
import { decCount, deleteElement, incCount } from '../../store/slice';
import { useDispatch } from 'react-redux';
import minus from '../../images/minus-small-svgrepo-com.svg';
import plus from '../../images/plus-small-svgrepo-com.svg';
import bin from '../../images/bin-svgrepo-com.svg';

function Crumb({ data }) {
	const dispatch = useDispatch();

	return (
		<>
			<div className={s.crumb}>
				<div className={s.container}>
					<h2 className={s.title}>{data.title}</h2>
					<p className={s.type}>Тип: {data.type}</p>
				</div>
				<a className={s.link} href={data.link} target='_blank'>
					click
				</a>
				<div className={s.container}>
					<div className={s.counter}>
						<button
							className={s.button}
							onClick={() => {
								dispatch(decCount(data.id));
							}}
						>
							<img src={minus} alt='minus' className={s.icons} />
						</button>
						<p className={s.count}>{data.number}</p>
						<button
							className={s.button}
							onClick={() => {
								dispatch(incCount(data.id));
							}}
						>
							<img src={plus} alt='plus' className={s.icons} />
						</button>
					</div>
				</div>
				<button
					className={`${s.button} ${s.bin}`}
					onClick={() => {
						dispatch(deleteElement(data.id));
					}}
				>
					<img src={bin} alt='plus' className={s.icons} />
				</button>
			</div>
		</>
	);
}

export default Crumb;
