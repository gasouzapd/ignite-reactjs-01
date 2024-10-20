import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gasouzape.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Pereira</strong>
                            <time title="17 Outubro às 22:30" dateTime="2024-10-17 22:30:00">Cerca de 1h atrás</time>
                        </div>

                        <button tittle="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>Muito bom Gabriel parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
