import React from 'react';

const UserContext = React.createContext({
  folders: [],
  notes: [],
  deleter: function(){}
})

export default UserContext