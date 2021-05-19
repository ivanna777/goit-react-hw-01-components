import React from 'react';
import defaultAvatar from "../default.jpg";
import PropTypes from 'prop-types';
import styles from "./FriendList.module.css";

const FriendListItem = ({avatar, name, isOnline}) => (
    <li className={styles.item}>
        <span className={isOnline ? styles['statusOnline'] : styles['statusOffline']}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="60" />
        <p className={styles.name}>{name}</p>
    </li>
)

FriendListItem.defaultProps = {
    avatar: defaultAvatar
}

FriendListItem.propTypes = {
    name: PropTypes.string,
    isOnline: PropTypes.string,
}

export default FriendListItem;