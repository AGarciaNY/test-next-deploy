import styles from './nav.module.css'
function Nav(){

    return (
        <div className={styles.nav}>
            <div>
                <p>el egretado</p>
                <p>time opened</p>
            </div>
            <div>
                <p>location</p>
                <p>about</p>
            </div>
        </div>
    )
}

export default Nav