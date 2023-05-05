import { Button } from "../../components/Button";
import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

type UserProps = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

export const Search = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [userName, setUserName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!userName) {
        alert('Digite o usuário')
        return;
      }

    axios
      .get(`https://api.github.com/users/${userName}`)
      .then(response => {
        setUser(response.data);
        setUserName('');
    })
    .catch(error => console.log(error));
  };

  return (
    <>
        <div className={styles.container}>
        <h1>Encontre um perfil Github</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário Github"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <Button txt="Encontrar" type="submit" />
        </form>
    </div>
    {user && (
        <div className={`${styles.container} ${styles.profile}`}>
            <div className={styles.leftSide}>
                <img src={user.avatar_url} alt="avatar" />
            </div>
            <div className={styles.rightSide}>
                <p>Informações</p>
                <div className={styles.content}>
                    <div className={styles.contentbox}>
                        <span>Perfil:</span> {user.url}
                    </div>
                    <div className={styles.contentbox}>
                        <span>Seguidores:</span> {user.followers}
                    </div>
                    <div className={styles.contentbox}>
                        <span>Localidade:</span> {user.location}
                    </div>
                    <div className={styles.contentbox}>
                        <span>Nome:</span> {user.name}
                    </div>
                </div>
            </div>
        </div>
    )}
    </>
  )
};
