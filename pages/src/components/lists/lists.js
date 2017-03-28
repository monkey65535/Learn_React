import React from 'react';

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
];
class Item extends React.Component{
    componentWillMount(){
        console.log(this)
    }
    render() {
        console.log(this.props)
        const {user} = this.props;
        return(
            <div>
                <span>{user.username}</span>
                <span>{user.age}</span>
                <span>{user.gender}</span>
            </div>
        )
    }
}

class Lists extends React.Component{
    render() {
        let userList = users.map((val,key) =><Item key={key} user={val} />);
        return (
            <div>
                {userList}
            </div>
        );
    }
}
export default Lists;