import FrendItem from '../FrendItem/index';
import ProTypes from 'prop-types';
import css from './FriendList.module.css'

const FrendList = frends => {
  return (
    <ul className={css.statList}>
      {frends.frends.map(({ id, avatar, name, isOnline }) => (
        <FrendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FrendItem.prototype = {
  avatar: ProTypes.string.isRequired,
  name: ProTypes.string.isRequired,
  isOnline: ProTypes.bool.isRequired,
};

export default FrendList;
