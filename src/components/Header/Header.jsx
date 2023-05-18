import s from './Header.module.css';
import contrast from '../../images/day-night-sun-moon-cycle-svgrepo-com.svg';
import AddCrumb from '../AddCrumb/AddCrumb';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../store/slice';

function Header() {
	const disptach = useDispatch();
	return (
		<>
			<header className={s.header}>
				<div className={s.add}>
					<AddCrumb />
				</div>
				<h1 className={s.title}>
					Read<span className={s.watch}>Watch</span>
				</h1>
				<img
					src={contrast}
					alt='theme switch'
					className={s.switch}
					onClick={() => {
						console.log(123);
						disptach(changeTheme());
					}}
				/>
			</header>
		</>
	);
}

export default Header;
