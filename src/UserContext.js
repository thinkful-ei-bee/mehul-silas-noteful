import React from 'react';

const UserContext = React.createContext({
  state: {},
  deleter: function(){}
})

export default UserContext