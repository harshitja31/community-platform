import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberDirectory = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('/api/members');
        setMembers(res.data);
      } catch (err) {
        console.error('Failed to fetch members:', err.response.data.error);
      }
    };

    fetchMembers();
  }, []);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/members/search?q=${searchQuery}`);
      setMembers(res.data);
    } catch (err) {
      console.error('Failed to search members:', err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Member Directory</h2>
      <input
        type="text"
        placeholder="Search members"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <strong>{member.name}</strong> - {member.role} ({member.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberDirectory;
