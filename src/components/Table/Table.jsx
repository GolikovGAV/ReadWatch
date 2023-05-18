import Crumb from '../Crumb/Crumb';
import s from './Table.module.css';
import { useSelector } from 'react-redux';

function Table() {
	const myItemsList = useSelector((state) => state.list);

	return (
		<>
			<section className={s.table}>
				{myItemsList[0] &&
					myItemsList.map((item) => {
						return <Crumb data={item} key={item.id} />;
					})}
			</section>
		</>
	);
}

export default Table;
