import React from 'react'
import IconCreator from '../../icons/IconCreator'
import Character from '../Character/Character'
import HelpfulForm from '../HelpfulForm/HelpfulForm'

import styles from './ProductInfo.module.scss'

const ProductInfo = () => {
  return (
    <div className={styles.product}>
        <h2 className={styles.title}>Топас-С 4</h2>
        <div className={styles.content}>
            <div className={styles.top}>

                <div className={styles.pictures}>
                    <div className={styles.scroll}>
                        <div className={styles.greenEl}></div>
                    </div>
                    <div className={styles.left}>
                        <img src="img/item-1.png" alt="picture" />
                        <img src="img/item-2.png" alt="picture" />
                        <img src="img/item-3.png" alt="picture" />
                        <img src="img/item-4.png" alt="picture" />
                    </div>
                    <img src="img/item-show-2.png" alt="picture" className={styles.right}></img>
                    <div className={styles.plus}>
                        <IconCreator type='plus' />
                    </div>
                </div>
                <div className={styles.characterBlock}>
                    <div className={styles.characteristics}>
                        <Character name='Количество пользователей' value='4 человека' />
                        <Character name='Производительность' value='0.8 м3/сут' />
                        <Character name='Объем залпового сброса' value='175 л.' />
                        <Character name='Глубина подводящей трубы' value='40-80 см' />
                        <Character name='Потребляемая электроэнергия' value='1500 Вт/сут.' />
                    </div>
                    <button className={styles.price}>
                        <span className={styles.priceText}>Цена: </span>
                        <span className={styles.priceValue}>78 030 ₽</span>
                    </button>
                </div>
            </div>
            <div className={styles.bottom}>
                <HelpfulForm />
                <div className={styles.productDesc}>
                    <h3 className={styles.title}>Описание модели</h3>
                    <p className={styles.text}>
                        Индивидуальная система биологической очистки Топас-С 4, 
                        как и другие УОСВ из данного модельного ряда, очищают стоки 
                        до 98% без вреда для экологии. Все модификации септика ТОПАС-С 4 
                        очищают до 0.8 м3 сточных вод в сутки и имеют максимальный 
                        залповый сброс в районе 175 литров. Уже отработанную воду 
                        можно накапливать в отдельном резервуаре и в дальнейшем использовать 
                        для хозяйственных нужд или производить сброс очищенной воды в 
                        ливневую канаву (для моделей Пр со встороенным насосом).
                    </p>
                </div>
            </div>
        </div>
        <img src="img/water.png" alt="" className={styles.waterImg} />
        <img src="img/piper.png" alt="" className={styles.piperImg} />
    </div>
  )
}

export default ProductInfo