import styles from '@/styles/item.module.css'
export default function Item(){
    return(
        <div className={styles.box}>
            <div className={styles.icon}>
                アイコン
            </div>
            <div className={styles.textbox}>
            <hh3 className={styles.title}>
                タイトル
            </hh3>
            <div>
            <hh4 className={styles.exp}>
                本文あああああああああああ
            </hh4>
            </div>
            </div>

        </ div>
    )
}