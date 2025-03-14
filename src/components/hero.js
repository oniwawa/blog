import Image from 'next/image'
import styles from '@/styles/hero.module.css'
import image from  '@/components/images/div.right.png'
export default function Hero(){
    return(
        <div className="itemsList">
            <div className={styles.titleTextbox}>
                <hh3>生成AI活用基盤構築 ~End-To-End Support~</hh3>
                <hh1 className={styles.titleBold}>生成AIベースの<br/>Azureインフラ構築</hh1>
                <button className={styles.button}><hh4>お問い合わせ</hh4></button>
            </div>
            <div className={styles.titleImage}>
                <Image
                src={image}
                alt="トップ画像"
                layout="responsive"
                />
            </div>

        </div>
    )
}