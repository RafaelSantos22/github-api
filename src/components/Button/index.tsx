import styles from './styles.module.css';

type Props = {
    txt: string;
    type: 'button' | 'submit';
    action?: () => void;
}

export const Button = ({ txt, type, action }: Props) => {
    return (
        <button className={styles.btn} type={type} onClick={action}>
            {txt}
        </button>
    );
}