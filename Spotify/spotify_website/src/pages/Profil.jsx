import React, { useState, useEffect } from 'react';

export default function Profil() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {

    if (token) {
        fetch('http://localhost:5001/protected/user', {

          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données utilisateur');
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    } else {
        setError("Vous n'êtes pas connecté.");
    }
  }, []);

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  if (!userData) {
    return <div>Aucune donnée utilisateur trouvée.</div>;
  }

  return (
    <div>
      <h1>Profil</h1>
      <p>Bienvenue sur votre profil !</p>

      <div>
        <h2>Vos informations :</h2>
        <p><strong>ID:</strong> {userData.id}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
    </div>
  );
}
