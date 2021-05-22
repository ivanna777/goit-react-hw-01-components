import React from 'react';
import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';
import styles from "./FriendList.module.css";

const FriendList = ({friends}) => (
        <ul className={styles.friendList}>
            {friends.map((friend) => (
             <li key={friend.id}>
                <FriendListItem 
                avatar = {friend.avatar}
                name = {friend.name}
                isOnline ={friend.isOnline}
            />
            </li>
            ))}
        </ul>  
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          isOnline:PropTypes.string,
        })
      ),
}

export default FriendList;