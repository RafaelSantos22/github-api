import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/search');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Desafio Github API</h1>
            <p className={styles.subtitle}>DevSuperior - Escola de programação</p>
            <Button txt='Começar' type='button' action={handleClick}/>
        </div>
    );
}