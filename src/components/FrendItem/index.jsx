import ProTypes from 'prop-types';
import css from './FrendItem.module.css'

const FrendItem = ({ id, avatar, name, isOnline }) => {
  
  const classStatus = isOnline ? css.status : css.statusRed;

  return ( 
    <li className={css.item}>
      <span className={classStatus}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FrendItem.prototype = {
  avatar: ProTypes.string.isRequired,
  name: ProTypes.string.isRequired,
  isOnline: ProTypes.bool.isRequired,
};

export default FrendItem;
