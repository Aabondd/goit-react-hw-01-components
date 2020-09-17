import React from 'react';
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar:
    'https://www.buschsystems.com/resource-center/images/uploads/bcProfile/14_black-ninja-circle.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
