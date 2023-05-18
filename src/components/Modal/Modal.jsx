import { useDispatch } from 'react-redux';
import { addNew } from '../../store/slice';
import s from './Modal.module.css';
import cross from '../../images/cross-svgrepo-com.svg';

function Modal({ onClick }) {
	const data = {
		title: null,
		type: null,
		link: null,
		number: null,
		id: Math.floor(performance.now())
	};

	const dispatch = useDispatch();

	return (
		<>
			<section className={s.popup}>
				<div className={s.container}>
					<button onClick={() => onClick()} className={s.close}>
						<img src={cross} alt='Закрыть' className={s.cross} />
					</button>
					<form
						action=''
						className={s.form}
						onSubmit={(e) => {
							e.preventDefault();
							dispatch(addNew(data));
							onClick();
						}}
					>
						<label className={s.label}>
							Введите название:
							<input
								type='text'
								className={s.input}
								onChange={(e) => {
									data.title = e.target.value;
								}}
							/>
						</label>
						<label className={s.label}>
							Введите тип:
							<input
								type='text'
								className={s.input}
								onChange={(e) => {
									data.type = e.target.value;
								}}
							/>
						</label>
						<label className={s.label}>
							Укажите ссылку:
							<input
								type='link'
								className={s.input}
								onChange={(e) => {
									data.link = e.target.value;
								}}
							/>
						</label>
						<label className={s.label}>
							Введите номер:
							<input
								type='number'
								className={s.input}
								onChange={(e) => {
									data.number = Number(e.target.value);
								}}
							/>
						</label>
						<button type='sumbit' className={s.save}>
							Добавить
						</button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Modal;
